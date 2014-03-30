// Compiled by ClojureScript .
goog.provide('pontiff.cljs.app.narratorVideo');
goog.require('cljs.core');
pontiff.cljs.app.narratorVideo.FPS = 15;
pontiff.cljs.app.narratorVideo.frameInterval = .06;
pontiff.cljs.app.narratorVideo.init = (function init(){pontiff.cljs.app.narratorVideo.groundState = cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,elements.narratorVideo.state.length,0)));
elements.narratorVideo.onplay = (function (){var this$ = this;this$.timeStamp = (this$.currentTime - .07);
return this$.requestId = this$.doFrame.fire();
});
elements.narratorVideo.onpause = (function (){var this$ = this;if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
elements.narratorVideo.onended = (function (){var this$ = this;if(cljs.core.truth_(this$.requestId))
{cancelAnimationFrame(this$.requestId);
return this$.requestedId = null;
} else
{return null;
}
});
elements.narratorVideo.cleanState = (function (){return elements.narratorVideo.state.forEach((function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.narratorVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
}));
});
var doFrame = (function (ctxt){var this$ = this;this$.fire = ((function (this$){
return (function (){if(((ctxt.currentTime - ctxt.timeStamp) > .06))
{var time_4991 = ctxt.currentTime;var frame_4992 = Math.round((15 * time_4991));var frameSet_4993 = (elements.narratorVideo.timeline[frame_4992]);ctxt.timeStamp = time_4991;
if(cljs.core.truth_(frameSet_4993))
{frameSet_4993.call(null);
} else
{elements.narratorVideo.state.forEach(((function (time_4991,frame_4992,frameSet_4993,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.narratorVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(time_4991,frame_4992,frameSet_4993,this$))
);
elements.mainVideo.state = pontiff.cljs.app.narratorVideo.groundState;
}
} else
{}
return ctxt.requestId = requestAnimationFrame(this$.fire);
});})(this$))
;
return this$;
});return elements.narratorVideo.doFrame = (new doFrame(elements.narratorVideo));
});
