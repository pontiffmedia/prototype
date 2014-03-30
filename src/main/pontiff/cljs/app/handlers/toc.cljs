(ns pontiff.cljs.app.handlers.toc
  (:require [pontiff.cljs.util :as util]
            [clojure.string :as string]))

(def duration 1040.47)

(defn init []
  (def controlBar (goog.dom.getElement "controlBar"))
  (doseq [ v (util/nodelist->coll (goog.dom.getElementsByClass "toc")) ]
  (let [ actions (partition 2 (string/split
                               (goog.string.collapseWhitespace (.getAttribute v "index")) #" "))
         actionList (for [[k v] actions] (list (goog.dom.getElement k) (int v))) ]
    (goog.events.listen v "click" #(processActionList actionList)))))

(defn processActionList [ actionList ]
  (set! (.. elements.mainPlayButton -style -display) "none")
  (goog.events.listenOnce (first (last actionList)) "seeked" (fn [] (.play (first (last actionList)))))
  (set! (.. controlBar -style -left)
            (str (* 100 (/ (second  (first actionList)) 15 duration)) "%"))

  (doseq [[k v] actionList]
    (js.console.log k v)
      (. k pause)
      (set! (. k -currentTime)  (/ v 15))
      ((aget (. k -timeline)  v))))
