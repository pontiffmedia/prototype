(ns pontiff.cljs.app.handlers.mainVideo
  (:require [pontiff.cljs.util :as util]
            [clojure.string :as string]))

(defn init []
  
  ; video duration, must be hard-coded b.c. duration not necessarily available when first initialized
  (def duration 1040.47) 
  (def mainControls (goog.dom.getElement "mainControls"))
  (def controlBar (goog.dom.getElement "controlBar"))
  (def mainVideo elements.mainVideo)
  (def videoTrack (goog.dom.getElement "videoTrack"))
  (def tempPanels (atom (list videoTrack)))
  (def rTocPanels (util/nodelist->coll (goog.dom.getElementsByClass "timelineToc")))
  (def rTocElements (util/nodelist->coll (goog.dom.getElementsByClass "rtoc" (goog.dom.getElement "timelineTocs"))))
  (def rTocIndices  (atom ()))
  (def narratorActive false)
  (set! (. mainControls -selected) true)
  
(doseq [ v rTocPanels ]
  (let [ node (goog.dom.createElement "div")
         frame (int (.getAttribute v "frame"))
         position (+ (* 100 (+ (/ frame (* duration 15)))) (/ frame (* duration 15)))
       ] 
    (set! (.. node -style -cssText)
          (str "width:1%; position:absolute; z-index:0; height:20%; top:40%; border-radius:50%;
            background-color:#6176c0; left:"position"%;"))
    (reset! rTocIndices (concat @rTocIndices (list (list position v frame))))
    (goog.dom.appendChild videoTrack node)
    (goog.events.listen node "click"
                        (fn [ evt ]
                          (. evt stopPropagation)
                          (set!  (.. v -style -display) "inline")
                          (js.setTimeout #(set! (.. v -style -display) "none") 2000)))))

(doseq [ v rTocElements ]
     (let [  actions (partition 2 (string/split
                                  (goog.string.collapseWhitespace (.getAttribute v "index")) #" "))
             actionList (for [[k v] actions] (list (goog.dom.getElement k) (int v))) ]
       (goog.events.listen v "click" (fn [evt]
                                       (.stopPropagation evt)
                                       (processActionList actionList)))))

  (goog.events.listen mainControls "click" (.-fire (videoTimelineHandler. mainVideo duration controlBar)))

  (goog.events.listen mainVideo "timeupdate"
                    (fn [] 
                      (if-not (. mainVideo -paused)
                        (set! (.. controlBar -style -left)
                            (str (* 100 (/ (. mainVideo -currentTime) duration)) "%")))))  

  (goog.events.listen controlBar
                    (array "mousedown" "mouseup" "mouseout" "mousemove" "click")
                    (.-fire (controlButtonHandler. mainVideo duration )))
  (goog.events.listen elements.mainVideoSvg "click" mainPlayAreaHandler)
  (goog.events.listen elements.screenChanger "click"
                      (fn [evt]
                        (.stopPropagation evt)
                        (if (= (. elements.videoContainer -className ) "contracted")
                          (set! (. elements.videoContainer -className) "expanded")
                          (set! (. elements.videoContainer -className) "contracted"))))
  )  

(defn closeTempPanels []
  (doseq [v @tempPanels ] (set! (.. v -style -display) "none"))
  (set! (.-selected mainControls) false)
  (reset! tempPanels '()))

(defn controlButtonHandler [ video duration ]
  (this-as this
    (set! (. this -fire)
       (fn [evt]
         (.preventDefault evt)
         (.stopPropagation evt)
         (cond
          (= (. evt -type) "mousedown")
          (do
            (.pause video)
            (doseq [[ x y z] @rTocIndices ]
                    (if (> (js.Math.abs (- (+ 1 (js.parseFloat (.. controlBar -style -left))) (+ .5 x))) .6)
                      (set! (.. y -style -display) "none")
                      (do
                        (set! (.. y -style -display) "inline")
                        (set! narratorActive true)
                        ((aget elements.mainVideo.timeline z))
                        (if-not (some #(if (= y %) true) @tempPanels)
                           (reset! tempPanels (conj @tempPanels y))))))
            (if narratorActive 
              (do
;                (set! (.. elements.mainPlayButton -style -display) "none")
                (set! narratorActive false)
                (pontiff.cljs.app.handlers.narratorVideo.showPanels))
;              (do
;                (set! (.. elements.mainPlayButton -style -display) "inline")
;                (if-not (some #(if (= elements.mainPlayButton %) true) @tempPanels)
                                        ;                  (reset! tempPanels (conj @tempPanels elements.mainPlayButton)))))
              )
            (set! (. this -selected) true)
            (set! (. this -width) (.. evt -target -parentNode -clientWidth))
            (set! (. this -startX) (. evt -clientX))) 

          (= (. evt -type) "mousemove")
          (if (. this -selected)
            (let [ distance (- (. evt -clientX) (. this -startX)) ]
              
              (cond
               (< (+ distance (.. evt -target -offsetLeft)) 0)
               (do
                  (doseq [[ x y z] @rTocIndices ]
                    (if (> (js.Math.abs (- (+ 1 (js.parseFloat (.. controlBar -style -left))) (+ .5 x))) .6)
                      (set! (.. y -style -display) "none")
                      (do
                        (set! (.. y -style -display) "inline")
                        (set! narratorActive true)
                        ((aget elements.mainVideo.timeline z))
                        (if-not (some #(if (= y %) true) @tempPanels)
                           (reset! tempPanels (conj @tempPanels y))))))
                  (if narratorActive
                    (do
;                      (set! (.. elements.mainPlayButton -style -display) "none")
                      (set! narratorActive false)
                      (pontiff.cljs.app.handlers.narratorVideo.showPanels))
                    (let [ frameSet (aget (. elements.mainVideo -timeline) 0) ]
                      (if frameSet
                         (frameSet)
                         (.forEach elements.mainVideo.state
                            (fn [ el idx arr ]
                               (if-not ( = 0 el)
                                   (do
                                      ((aget (aget elements.mainVideo.stateMap idx) 0))
                                      (aset arr idx 0))))))
;                      (set! (.. elements.mainPlayButton -style -display) "inline")
;                      (if-not (some #(if (= elements.mainPlayButton %) true) @tempPanels)
;                      (reset! tempPanels (conj @tempPanels elements.mainPlayButton))
                    ))
                  (set! (.. evt -target -left) "0%")
                  (set! (. video -currentTime) 0)
                  (set! (. this -startX) (. evt -clientX)))

                (> (+ distance (.. evt -target -offsetLeft)) (. this -width))
                (do
                  (doseq [[ x y z] @rTocIndices ]
                    (if (> (js.Math.abs (- (+ 1 (js.parseFloat (.. controlBar -style -left))) (+ .5 x))) .6)
                      (set! (.. y -style -display) "none")
                      (do
                        (set! (.. y -style -display) "inline")
                        (set! narratorActive true)
                        ((aget elements.mainVideo.timeline  z))
                        (if-not (some #(if (= y %) true) @tempPanels)
                           (reset! tempPanels (conj @tempPanels y))))))
                   (if narratorActive
                     (do
                       (set! narratorActive false)
;                       (set! (.. elements.mainPlayButton -style -display) "none")
                       (pontiff.cljs.app.handlers.narratorVideo.showPanels))
                     (let [ frameSet (aget (. elements.mainVideo -timeline) 0) ]
                      (if frameSet
                         (frameSet)
                         (.forEach elements.mainVideo.state
                            (fn [ el idx arr ]
                               (if-not ( = 0 el)
                                   (do
                                      ((aget (aget elements.mainVideo.stateMap idx) 0))
                                      (aset arr idx 0))))))
;                      (set! (.. elements.mainPlayButton -style -display) "inline")
;                      (if-not (some #(if (= elements.mainPlayButton %) true) @tempPanels)
                                        ;                        (reset! tempPanels (conj @tempPanels elements.mainPlayButton)))))
                      ))
                   (set! (.. evt -target -left) "100%")
                   (set! (. video -currentTime) duration)
                   (set! (. this -startX) (. evt -clientX)))

              :else
               (let [ leftPos (* (/ (+ (.. evt -target -offsetLeft) distance)(. this -width)) 100)
                      time (* (/ leftPos 100) duration)
                      frameSet (aget (. elements.mainVideo -timeline) (js.Math.round (* time 15))) ]
                 (doseq [[ x y z] @rTocIndices ]
                    (if (> (js.Math.abs (- (+ 1 (js.parseFloat (.. controlBar -style -left)))  (+ .5 x))) .7)
                      (set! (.. y -style -display) "none")
                      (do                                       
                        (set! (.. y -style -display) "inline")
                        (set! narratorActive true)
                        ((aget elements.mainVideo.timeline  z))
                        (if-not (some #(if (= y %) true) @tempPanels)
                           (reset! tempPanels (conj @tempPanels y))))))
                   (if narratorActive
                     (do
                       (set! narratorActive false)
;                       (set! (.. elements.mainPlayButton -style -display) "none")
                       (pontiff.cljs.app.handlers.narratorVideo.showPanels))
                     (do
                      (if frameSet
                         (frameSet)
                         (.forEach elements.mainVideo.state
                            (fn [ el idx arr ]
                               (if-not ( = 0 el)
                                   (do
                                      ((aget (aget elements.mainVideo.stateMap idx) 0))
                                      (aset arr idx 0))))))
;                      (set! (.. elements.mainPlayButton -style -display) "inline")
;                      (if-not (some #(if (= elements.mainPlayButton %) true) @tempPanels)
                                        ;                        (reset! tempPanels (conj @tempPanels elements.mainPlayButton)))))
                      ))
                 (set! (.. evt -target -style -left) (str leftPos "%"))
                 (set! (. video -currentTime) time)
                 (set! (. this -startX) (. evt -clientX))))))
          
          (or (= (. evt -type) "mouseup")
              (= (. evt -type) "mouseout"))
          (do
            (if (. this -selected) (set! (. this -selected) false))
;            (if (. video -paused)
;                (if-not (some #(if (= elements.mainPlayButton %) true) @tempPanels)
                                        ;                  (reset! tempPanels (conj @tempPanels elements.mainPlayButton))))))))
            ))))

    this))

(defn processActionList [ actionList ]
  (pontiff.cljs.app.handlers.narratorVideo.closeTempPanels)
  (goog.events.listenOnce (first (last actionList)) "seeked"
                          #(.play (first (last actionList))))
  (set! (.. controlBar -style -left) (str (* 100 (/ (second (first actionList)) 15 duration)) "%")) 
  (closeTempPanels)
  (. elements.narratorVideo cleanState)
  (doseq [[k v] actionList]
    (do
      (. k pause)
      ((aget (. k -timeline)  v))
      (set! (. k -currentTime) (/ v 15)))))

(defn videoTimelineHandler [ video length bar ]
  (this-as this
    (set! (. this -fire)
       (fn [evt]
         (.preventDefault evt)
         (.stopPropagation evt)
         (cond
          
          (.-selected mainControls)
          (do
            (pontiff.cljs.app.handlers.narratorVideo.closeTempPanels)
            (.pause video)
            (let [ xLoc  (- (. evt -clientX)
                         (+ (.. bar -parentNode -parentNode -parentNode -offsetLeft)
                         (.. bar -parentNode -parentNode -parentNode -parentNode -offsetLeft)))
                width (.. evt -target -offsetWidth)
                timeSet (* (/ xLoc width) length)
                newLoc  (str (* 100 (/ xLoc width))"%")
                frame (js.Math.floor (* 15 timeSet))
                frameSet (aget (. video -timeline) frame)  ]
           (set! (.. bar  -style -left) newLoc)
           (set! (. video -currentTime) timeSet)
           (. elements.narratorVideo cleanState)
           (doseq [[ x y z] @rTocIndices ]
                    (if (> (js.Math.abs (- (+ 1 (js.parseFloat (.. controlBar -style -left))) (+ .5 x))) .6)
                      (set! (.. y -style -display) "none")
                      (do
                        (set! (.. y -style -display) "inline")
                        (set! narratorActive true)
                        ((aget elements.mainVideo.timeline  z))
                        (if-not (some #(if (= y %) true) @tempPanels)
                           (reset! tempPanels (conj @tempPanels y))))))
           (if narratorActive
             (do
                 (set! narratorActive false)
                 (pontiff.cljs.app.handlers.narratorVideo.showPanels))
             (do
                 (if frameSet
                    (frameSet)
                    (.forEach elements.mainVideo.state
                            (fn [ el idx arr ]
                               (if-not ( = 0 el)
                                   (do
                                      ((aget (aget elements.mainVideo.stateMap idx) 0))
                                      (aset arr idx 0))))))))))
          :else
          (do
            (set! (.-selected mainControls) true)
            (set! (.. videoTrack -style -display) "inline")
            (if-not (some #(if (= videoTrack %) true) @tempPanels)
                           (reset! tempPanels (conj @tempPanels videoTrack)))))))
    this))

(defn mainPlayAreaHandler [evt]
  (.stopPropagation evt)
  (cond
   (> (js.parseInt (.. elements.narratorDiv -style -zIndex)) 10)
    (closeTempPanels)
   
   (= (.. videoTrack -style -display) "inline")
   (do
     (closeTempPanels)
     (set! (.-selected mainControls) false)
     (.play mainVideo))

   :else
   (if (.-paused elements.mainVideo)
     (.play mainVideo)
     (do
       (.pause mainVideo)
       (set! (.-selected mainControls) true)
       (set! (.. videoTrack -style -display) "inline")
       (if-not (some #(if (= videoTrack %) true) @tempPanels)
               (reset! tempPanels (conj @tempPanels videoTrack)))))))
   

;(defn mainPlayButtonHandler [evt]
;  (.stopPropagation evt)
;   (if-not (> (js.parseInt (.. elements.narratorDiv -style -zIndex))10)
;    (do
;    (closeTempPanels)
;    (set! (.-selected mainControls) false)
;    (.play mainVideo))))
