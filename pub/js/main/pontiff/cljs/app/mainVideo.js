// Compiled by ClojureScript .
goog.provide('pontiff.cljs.app.mainVideo');
goog.require('cljs.core');
pontiff.cljs.app.mainVideo.FPS = 15;
pontiff.cljs.app.mainVideo.frameInterval = .06;
pontiff.cljs.app.mainVideo.init = (function init(){elements.mainVideo.onplay = (function (){var this$ = this;this$.timeStamp = (this$.currentTime - .07);
return this$.requestId = this$.doFrame.fire();
});
elements.mainVideo.onpause = (function (){var this$ = this;if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
elements.mainVideo.onended = (function (){var this$ = this;if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
var doFrame = (function (ctxt){var this$ = this;this$.fire = ((function (this$){
return (function (){if(((ctxt.currentTime - ctxt.timeStamp) > .06))
{var time_4988 = ctxt.currentTime;var frame_4989 = Math.round((15 * time_4988));var frameSet_4990 = (elements.mainVideo.timeline[frame_4989]);ctxt.timeStamp = time_4988;
if(cljs.core.truth_(frameSet_4990))
{frameSet_4990.call(null);
} else
{elements.mainVideo.state.forEach(((function (time_4988,frame_4989,frameSet_4990,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.mainVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(time_4988,frame_4989,frameSet_4990,this$))
);
}
} else
{}
return ctxt.requestId = requestAnimationFrame(this$.fire);
});})(this$))
;
return this$;
});return elements.mainVideo.doFrame = (new doFrame(elements.mainVideo));
});
