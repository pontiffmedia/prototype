(ns pontiff.cljs.app.handlers.narratorVideo
  (:require [pontiff.cljs.util :as util]))

(defn init []
  (def mainTempPanels pontiff.cljs.app.handlers.mainVideo.tempPanels)
  (def rTocList
     (sort-by first >
         (for [v  (util/nodelist->coll (goog.dom.getElementsByClass "ntoc" (goog.dom.getElement "rtocs")))]
           (list  (int (.getAttribute v "frame")) v (int (.getAttribute (.-parentNode v) "frame"))))))

  (def lTocList
     (sort-by first >
         (for [v  (util/nodelist->coll (goog.dom.getElementsByClass "ntoc" (goog.dom.getElement "ltocs")))]
           (list  (int (.getAttribute v "frame")) v (int (.getAttribute (.-parentNode v) "frame"))))))
  
   
  (doseq [[x y z] (concat lTocList rTocList)]
     (goog.events.listen y "click" tocNodeHandler))

  (goog.events.listen (goog.dom.getElement "narratorTOCsL") "click"
                      (fn [] (pontiff.cljs.app.handlers.mainVideo.closeTempPanels)))

  (goog.events.listen (goog.dom.getElement "narratorTOCsR") "click"
                      (fn [] (pontiff.cljs.app.handlers.mainVideo.closeTempPanels)))

  (goog.events.listen (goog.dom.getElement "narratorController") "click"
                      (fn [] (pontiff.cljs.app.handlers.mainVideo.closeTempPanels)))

  (goog.events.listen elements.narratorVideo "click"
    (fn []                      
         (.pause elements.narratorVideo)
         (let [ frame (js.Math.round (* 15 (. elements.narratorVideo -currentTime)))
                toc (if (< 45 (+ (/ (js.parseFloat (.. elements.narratorDiv -style -width)) 2)
                                 (js.parseFloat (.. elements.narratorDiv -style -left))))
                      (.-parentNode (second (some #(if (>= frame (nth % 2)) %) lTocList)))
                      (.-parentNode (second (some #(if (>= frame (nth % 2)) %) rTocList)))) ]
           (set! (.. elements.narratorController -style -display) "inline")
           (set! (.. elements.mainVideoSvg -style -opacity) 0)
           (set! (.. toc -style -display) "inline")
           (reset! tempPanels (list* toc elements.narratorController @tempPanels)))))
 
  (goog.events.listen elements.narratorDisableButton "click"
     (fn [evt]
       (.stopPropagation evt)
       (closeTempPanels)
       (set! (.-className elements.narratorVideo) "quickAnim")
       (set! (.. elements.narratorVideo -style -width) "0%")
       (set! (.. elements.narratorVideo -style -height) "0%")
       (set! (.. elements.narratorVideo -style -margin) "50%")
       (.cleanState elements.narratorVideo)
       (set! (.. elements.narratorVideo -skip) true)
       (set! (.. elements.narratorDiv -style -zIndex) 10)
       (set! (.. elements.mainVideoSvg -style -opacity) 1)
 ;      (set! (.. elements.mainPlayButton -style -display) "inline")
 ;      (if-not (some #(if (= elements.mainPlayButton %) true) @mainTempPanels)
 ;                 (reset! mainTempPanels (conj @mainTempPanels elements.mainPlayButton)))))
 ))                   
  (goog.events.listen elements.narratorPlayButton "click"
     (fn [evt]
       (.stopPropagation evt)                  
       (closeTempPanels)
       (set! (.. elements.mainVideoSvg -style -opacity) 1)
       (.play elements.narratorVideo)))
  
)

(defn tocNodeHandler [ evt ]
  (.stopPropagation evt)
  (let [frame (.getAttribute (. evt -target) "frame")]
    (set! (. elements.narratorVideo -currentTime) (/ frame 15))
    (set! (.. elements.mainVideoSvg -style -opacity) 1)
    (closeTempPanels)
    ((aget (. elements.narratorVideo -timeline) frame))
    (.play elements.narratorVideo)))

(def tempPanels (atom ()))

(defn closeTempPanels []
  (doseq [v @tempPanels] (set! (.. v -style -display) "none"))
  (reset! tempPanels '()))

(defn showPanels []
   (.pause elements.narratorVideo)
   (let [ frame (js.Math.round (* 15 (. elements.narratorVideo -currentTime)))
          toc (if (< 45 (+ (/ (js.parseFloat (.. elements.narratorDiv -style -width)) 2)
                                 (js.parseFloat (.. elements.narratorDiv -style -left))))
                  (.-parentNode (second (some #(if (>= frame (nth % 2)) %) lTocList)))
                  (.-parentNode (second (some #(if (>= frame (nth % 2)) %) rTocList)))) ]
     (set! (.. toc -style -display) "inline")
     (set! (.. elements.narratorController -style -display) "inline")
     (reset! tempPanels (list* toc elements.narratorController @tempPanels))))
