(ns pontiff.cljs.app.narratorVideo)

(def FPS 15); here for reference
(def frameInterval .06); here mostly for reference, literal value used for speed, below.

(defn init []

    (def groundState (clj->js (into [] (repeat (.-length (.-state elements.narratorVideo)) 0))))
  
    (set! (. elements.narratorVideo -onplay)
       (fn []
          (this-as this
                   (set! (. this -timeStamp) (- (. this -currentTime) .07))
                   (set! (. this -requestId) (.. this -doFrame fire)))))
    
    (set! (. elements.narratorVideo -onpause)
        (fn []
          (this-as this
            (if (. this -requestId)
              (do
                (js.cancelAnimationFrame (. this -requestId))
                (set! (. this -requestedId) nil))))))
    
    (set! (. elements.narratorVideo -onended)
        (fn []
          (this-as this
            (if (. this -requestId)
              (do
                (js.cancelAnimationFrame (. this -requestId))
                (set! (. this -requestedId) nil))))))

    (set! (. elements.narratorVideo -cleanState)
          (fn []
              (.forEach elements.narratorVideo.state
                                           (fn [ el idx arr ]
                                             (if-not ( = 0 el)
                                               (do
                                                 ((aget (aget elements.narratorVideo.stateMap idx) 0))
                                                 (aset arr idx 0)))))))

    (let [ doFrame
               (fn [ ctxt ]
                 (this-as this
                   (set! (. this -fire)
                     (fn []
                           (if (> (- (. ctxt -currentTime) (. ctxt -timeStamp)) .06)
                             (let [ time (. ctxt -currentTime)
                                    frame (js.Math.round (* 15 time))
                                    frameSet (aget (. elements.narratorVideo -timeline) frame) ]
                               (set! (. ctxt -timeStamp) time)
                               (if frameSet
                                 (frameSet)
                                 (do
                                   (.forEach elements.narratorVideo.state
                                        (fn [ el idx arr ]
                                          (if-not ( = 0 el)
                                             (do
                                               ((aget (aget elements.narratorVideo.stateMap idx) 0))
                                               (aset arr idx 0)))))
                                   (set! elements.mainVideo.state groundState))))) 
                           
                        (set! (. ctxt -requestId) (js.requestAnimationFrame (. this -fire)))))
                   this)) ]
         
     (set! (. elements.narratorVideo -doFrame) (doFrame. elements.narratorVideo)))

 )

