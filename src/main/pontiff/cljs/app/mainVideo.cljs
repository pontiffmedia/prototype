(ns pontiff.cljs.app.mainVideo)

(def FPS 15); here for reference **this is the animation rate, not the framerade of the underlying video
(def frameInterval .06); here for reference, literal value used for speed, below.

(defn init []

    (set! (. elements.mainVideo -onplay)
        (fn []
          (this-as this
                   (set! (. this -timeStamp) (- (. this -currentTime) .07))
                   (set! (. this -requestId) (.. this -doFrame fire)))))
    
    (set! (. elements.mainVideo -onpause)
        (fn []
          (this-as this
            (if (. this -requestId)
              (do
                (js.cancelAnimationFrame (. this -requestId))
                (set! (. this -requestedId) nil))))))
    
    (set! (. elements.mainVideo -onended)
        (fn []
          (this-as this
            (if (. this -requestId)
              (do
                (js.cancelAnimationFrame (. this -requestId))
                (set! (. this -requestedId) nil))))))

    (let [ doFrame
               (fn [ ctxt ]
                 (this-as this
                   (set! (. this -fire)
                     (fn []
                           (if (> (- (. ctxt -currentTime) (. ctxt -timeStamp)) .06 )
                             (let [ time (. ctxt -currentTime)
                                    frame (js.Math.round (* 15 time))
                                    frameSet (aget (. elements.mainVideo -timeline) frame) ]
                               (set! (. ctxt -timeStamp) time)
                               (if frameSet
                                 (frameSet)
                                 (do
                                    (.forEach elements.mainVideo.state
                                           (fn [ el idx arr ]
                                             (if-not ( = 0 el)
                                               (do
                                                 ((aget (aget elements.mainVideo.stateMap idx) 0))
                                                 (aset arr idx 0)))))))))
                            (set! (. ctxt -requestId) (js.requestAnimationFrame (. this -fire)))))
                   this)) ]
         
     (set! (. elements.mainVideo -doFrame) (doFrame. elements.mainVideo)))

 )


