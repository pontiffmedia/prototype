(ns sbx)


(def description (goog.dom.getElement "description"))
(def home (goog.dom.getElement "home"))



(defn exposeDescription []
  (goog.events.listenOnce home "transitionend" (fn [] (set! (.. home -style -display) "none")))
  (set! (. description -className) "enabled")
  (set! (. home -className) "disabled"))


(set! (. description -className) "enabled")
