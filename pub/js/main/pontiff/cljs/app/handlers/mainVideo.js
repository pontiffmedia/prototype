// Compiled by ClojureScript .
goog.provide('pontiff.cljs.app.handlers.mainVideo');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('pontiff.cljs.util');
goog.require('pontiff.cljs.util');
pontiff.cljs.app.handlers.mainVideo.init = (function init(){pontiff.cljs.app.handlers.mainVideo.duration = 1040.47;
pontiff.cljs.app.handlers.mainVideo.mainControls = goog.dom.getElement("mainControls");
pontiff.cljs.app.handlers.mainVideo.controlBar = goog.dom.getElement("controlBar");
pontiff.cljs.app.handlers.mainVideo.mainVideo = elements.mainVideo;
pontiff.cljs.app.handlers.mainVideo.videoTrack = goog.dom.getElement("videoTrack");
pontiff.cljs.app.handlers.mainVideo.tempPanels = cljs.core.atom.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,pontiff.cljs.app.handlers.mainVideo.videoTrack));
pontiff.cljs.app.handlers.mainVideo.rTocPanels = pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("timelineToc"));
pontiff.cljs.app.handlers.mainVideo.rTocElements = pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("rtoc",goog.dom.getElement("timelineTocs")));
pontiff.cljs.app.handlers.mainVideo.rTocIndices = cljs.core.atom.call(null,cljs.core.List.EMPTY);
pontiff.cljs.app.handlers.mainVideo.narratorActive = false;
pontiff.cljs.app.handlers.mainVideo.mainControls.selected = true;
var seq__41337_41361 = cljs.core.seq.call(null,pontiff.cljs.app.handlers.mainVideo.rTocPanels);var chunk__41338_41362 = null;var count__41339_41363 = 0;var i__41340_41364 = 0;while(true){
if((i__41340_41364 < count__41339_41363))
{var v_41365 = cljs.core._nth.call(null,chunk__41338_41362,i__41340_41364);var node_41366 = goog.dom.createElement("div");var frame_41367 = (v_41365.getAttribute("frame") | 0);var position_41368 = ((100 * (frame_41367 / (pontiff.cljs.app.handlers.mainVideo.duration * 15))) + (frame_41367 / (pontiff.cljs.app.handlers.mainVideo.duration * 15)));node_41366.style.cssText = [cljs.core.str("width:1%; position:absolute; z-index:0; height:20%; top:40%; border-radius:50%;\n            background-color:#6176c0; left:"),cljs.core.str(position_41368),cljs.core.str("%;")].join('');
cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,frame_41367),v_41365),position_41368))));
goog.dom.appendChild(pontiff.cljs.app.handlers.mainVideo.videoTrack,node_41366);
goog.events.listen(node_41366,"click",((function (seq__41337_41361,chunk__41338_41362,count__41339_41363,i__41340_41364,node_41366,frame_41367,position_41368,v_41365){
return (function (evt){evt.stopPropagation();
v_41365.style.display = "inline";
return setTimeout(((function (seq__41337_41361,chunk__41338_41362,count__41339_41363,i__41340_41364,node_41366,frame_41367,position_41368,v_41365){
return (function (){return v_41365.style.display = "none";
});})(seq__41337_41361,chunk__41338_41362,count__41339_41363,i__41340_41364,node_41366,frame_41367,position_41368,v_41365))
,2000);
});})(seq__41337_41361,chunk__41338_41362,count__41339_41363,i__41340_41364,node_41366,frame_41367,position_41368,v_41365))
);
{
var G__41369 = seq__41337_41361;
var G__41370 = chunk__41338_41362;
var G__41371 = count__41339_41363;
var G__41372 = (i__41340_41364 + 1);
seq__41337_41361 = G__41369;
chunk__41338_41362 = G__41370;
count__41339_41363 = G__41371;
i__41340_41364 = G__41372;
continue;
}
} else
{var temp__4092__auto___41373 = cljs.core.seq.call(null,seq__41337_41361);if(temp__4092__auto___41373)
{var seq__41337_41374__$1 = temp__4092__auto___41373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41337_41374__$1))
{var c__3908__auto___41375 = cljs.core.chunk_first.call(null,seq__41337_41374__$1);{
var G__41376 = cljs.core.chunk_rest.call(null,seq__41337_41374__$1);
var G__41377 = c__3908__auto___41375;
var G__41378 = cljs.core.count.call(null,c__3908__auto___41375);
var G__41379 = 0;
seq__41337_41361 = G__41376;
chunk__41338_41362 = G__41377;
count__41339_41363 = G__41378;
i__41340_41364 = G__41379;
continue;
}
} else
{var v_41380 = cljs.core.first.call(null,seq__41337_41374__$1);var node_41381 = goog.dom.createElement("div");var frame_41382 = (v_41380.getAttribute("frame") | 0);var position_41383 = ((100 * (frame_41382 / (pontiff.cljs.app.handlers.mainVideo.duration * 15))) + (frame_41382 / (pontiff.cljs.app.handlers.mainVideo.duration * 15)));node_41381.style.cssText = [cljs.core.str("width:1%; position:absolute; z-index:0; height:20%; top:40%; border-radius:50%;\n            background-color:#6176c0; left:"),cljs.core.str(position_41383),cljs.core.str("%;")].join('');
cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices,cljs.core.concat.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,frame_41382),v_41380),position_41383))));
goog.dom.appendChild(pontiff.cljs.app.handlers.mainVideo.videoTrack,node_41381);
goog.events.listen(node_41381,"click",((function (seq__41337_41361,chunk__41338_41362,count__41339_41363,i__41340_41364,node_41381,frame_41382,position_41383,v_41380,seq__41337_41374__$1,temp__4092__auto___41373){
return (function (evt){evt.stopPropagation();
v_41380.style.display = "inline";
return setTimeout(((function (seq__41337_41361,chunk__41338_41362,count__41339_41363,i__41340_41364,node_41381,frame_41382,position_41383,v_41380,seq__41337_41374__$1,temp__4092__auto___41373){
return (function (){return v_41380.style.display = "none";
});})(seq__41337_41361,chunk__41338_41362,count__41339_41363,i__41340_41364,node_41381,frame_41382,position_41383,v_41380,seq__41337_41374__$1,temp__4092__auto___41373))
,2000);
});})(seq__41337_41361,chunk__41338_41362,count__41339_41363,i__41340_41364,node_41381,frame_41382,position_41383,v_41380,seq__41337_41374__$1,temp__4092__auto___41373))
);
{
var G__41384 = cljs.core.next.call(null,seq__41337_41374__$1);
var G__41385 = null;
var G__41386 = 0;
var G__41387 = 0;
seq__41337_41361 = G__41384;
chunk__41338_41362 = G__41385;
count__41339_41363 = G__41386;
i__41340_41364 = G__41387;
continue;
}
}
} else
{}
}
break;
}
var seq__41341_41388 = cljs.core.seq.call(null,pontiff.cljs.app.handlers.mainVideo.rTocElements);var chunk__41342_41389 = null;var count__41343_41390 = 0;var i__41344_41391 = 0;while(true){
if((i__41344_41391 < count__41343_41390))
{var v_41392 = cljs.core._nth.call(null,chunk__41342_41389,i__41344_41391);var actions_41393 = cljs.core.partition.call(null,2,clojure.string.split.call(null,goog.string.collapseWhitespace(v_41392.getAttribute("index")),/ /));var actionList_41394 = (function (){var iter__3877__auto__ = ((function (seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41393,v_41392){
return (function iter__41345(s__41346){return (new cljs.core.LazySeq(null,((function (seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41393,v_41392){
return (function (){var s__41346__$1 = s__41346;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__41346__$1);if(temp__4092__auto__)
{var s__41346__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__41346__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__41346__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__41348 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__41347 = 0;while(true){
if((i__41347 < size__3876__auto__))
{var vec__41351 = cljs.core._nth.call(null,c__3875__auto__,i__41347);var k = cljs.core.nth.call(null,vec__41351,0,null);var v__$1 = cljs.core.nth.call(null,vec__41351,1,null);cljs.core.chunk_append.call(null,b__41348,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)));
{
var G__41395 = (i__41347 + 1);
i__41347 = G__41395;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41348),iter__41345.call(null,cljs.core.chunk_rest.call(null,s__41346__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41348),null);
}
} else
{var vec__41352 = cljs.core.first.call(null,s__41346__$2);var k = cljs.core.nth.call(null,vec__41352,0,null);var v__$1 = cljs.core.nth.call(null,vec__41352,1,null);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)),iter__41345.call(null,cljs.core.rest.call(null,s__41346__$2)));
}
} else
{return null;
}
break;
}
});})(seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41393,v_41392))
,null,null));
});})(seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41393,v_41392))
;return iter__3877__auto__.call(null,actions_41393);
})();goog.events.listen(v_41392,"click",((function (seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41393,actionList_41394,v_41392){
return (function (evt){evt.stopPropagation();
return pontiff.cljs.app.handlers.mainVideo.processActionList.call(null,actionList_41394);
});})(seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41393,actionList_41394,v_41392))
);
{
var G__41396 = seq__41341_41388;
var G__41397 = chunk__41342_41389;
var G__41398 = count__41343_41390;
var G__41399 = (i__41344_41391 + 1);
seq__41341_41388 = G__41396;
chunk__41342_41389 = G__41397;
count__41343_41390 = G__41398;
i__41344_41391 = G__41399;
continue;
}
} else
{var temp__4092__auto___41400 = cljs.core.seq.call(null,seq__41341_41388);if(temp__4092__auto___41400)
{var seq__41341_41401__$1 = temp__4092__auto___41400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41341_41401__$1))
{var c__3908__auto___41402 = cljs.core.chunk_first.call(null,seq__41341_41401__$1);{
var G__41403 = cljs.core.chunk_rest.call(null,seq__41341_41401__$1);
var G__41404 = c__3908__auto___41402;
var G__41405 = cljs.core.count.call(null,c__3908__auto___41402);
var G__41406 = 0;
seq__41341_41388 = G__41403;
chunk__41342_41389 = G__41404;
count__41343_41390 = G__41405;
i__41344_41391 = G__41406;
continue;
}
} else
{var v_41407 = cljs.core.first.call(null,seq__41341_41401__$1);var actions_41408 = cljs.core.partition.call(null,2,clojure.string.split.call(null,goog.string.collapseWhitespace(v_41407.getAttribute("index")),/ /));var actionList_41409 = (function (){var iter__3877__auto__ = ((function (seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41408,v_41407,seq__41341_41401__$1,temp__4092__auto___41400){
return (function iter__41353(s__41354){return (new cljs.core.LazySeq(null,((function (seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41408,v_41407,seq__41341_41401__$1,temp__4092__auto___41400){
return (function (){var s__41354__$1 = s__41354;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__41354__$1);if(temp__4092__auto____$1)
{var s__41354__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__41354__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__41354__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__41356 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__41355 = 0;while(true){
if((i__41355 < size__3876__auto__))
{var vec__41359 = cljs.core._nth.call(null,c__3875__auto__,i__41355);var k = cljs.core.nth.call(null,vec__41359,0,null);var v__$1 = cljs.core.nth.call(null,vec__41359,1,null);cljs.core.chunk_append.call(null,b__41356,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)));
{
var G__41410 = (i__41355 + 1);
i__41355 = G__41410;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41356),iter__41353.call(null,cljs.core.chunk_rest.call(null,s__41354__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41356),null);
}
} else
{var vec__41360 = cljs.core.first.call(null,s__41354__$2);var k = cljs.core.nth.call(null,vec__41360,0,null);var v__$1 = cljs.core.nth.call(null,vec__41360,1,null);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)),iter__41353.call(null,cljs.core.rest.call(null,s__41354__$2)));
}
} else
{return null;
}
break;
}
});})(seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41408,v_41407,seq__41341_41401__$1,temp__4092__auto___41400))
,null,null));
});})(seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41408,v_41407,seq__41341_41401__$1,temp__4092__auto___41400))
;return iter__3877__auto__.call(null,actions_41408);
})();goog.events.listen(v_41407,"click",((function (seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41408,actionList_41409,v_41407,seq__41341_41401__$1,temp__4092__auto___41400){
return (function (evt){evt.stopPropagation();
return pontiff.cljs.app.handlers.mainVideo.processActionList.call(null,actionList_41409);
});})(seq__41341_41388,chunk__41342_41389,count__41343_41390,i__41344_41391,actions_41408,actionList_41409,v_41407,seq__41341_41401__$1,temp__4092__auto___41400))
);
{
var G__41411 = cljs.core.next.call(null,seq__41341_41401__$1);
var G__41412 = null;
var G__41413 = 0;
var G__41414 = 0;
seq__41341_41388 = G__41411;
chunk__41342_41389 = G__41412;
count__41343_41390 = G__41413;
i__41344_41391 = G__41414;
continue;
}
}
} else
{}
}
break;
}
goog.events.listen(pontiff.cljs.app.handlers.mainVideo.mainControls,"click",(new pontiff.cljs.app.handlers.mainVideo.videoTimelineHandler(pontiff.cljs.app.handlers.mainVideo.mainVideo,pontiff.cljs.app.handlers.mainVideo.duration,pontiff.cljs.app.handlers.mainVideo.controlBar)).fire);
goog.events.listen(pontiff.cljs.app.handlers.mainVideo.mainVideo,"timeupdate",(function (){if(cljs.core.not.call(null,pontiff.cljs.app.handlers.mainVideo.mainVideo.paused))
{return pontiff.cljs.app.handlers.mainVideo.controlBar.style.left = [cljs.core.str((100 * (pontiff.cljs.app.handlers.mainVideo.mainVideo.currentTime / pontiff.cljs.app.handlers.mainVideo.duration))),cljs.core.str("%")].join('');
} else
{return null;
}
}));
goog.events.listen(pontiff.cljs.app.handlers.mainVideo.controlBar,["mousedown","mouseup","mouseout","mousemove","click"],(new pontiff.cljs.app.handlers.mainVideo.controlButtonHandler(pontiff.cljs.app.handlers.mainVideo.mainVideo,pontiff.cljs.app.handlers.mainVideo.duration)).fire);
goog.events.listen(elements.mainVideoSvg,"click",pontiff.cljs.app.handlers.mainVideo.mainPlayAreaHandler);
return goog.events.listen(elements.screenChanger,"click",(function (evt){evt.stopPropagation();
if(cljs.core._EQ_.call(null,elements.videoContainer.className,"contracted"))
{return elements.videoContainer.className = "expanded";
} else
{return elements.videoContainer.className = "contracted";
}
}));
});
pontiff.cljs.app.handlers.mainVideo.closeTempPanels = (function closeTempPanels(){var seq__41419_41423 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels));var chunk__41420_41424 = null;var count__41421_41425 = 0;var i__41422_41426 = 0;while(true){
if((i__41422_41426 < count__41421_41425))
{var v_41427 = cljs.core._nth.call(null,chunk__41420_41424,i__41422_41426);v_41427.style.display = "none";
{
var G__41428 = seq__41419_41423;
var G__41429 = chunk__41420_41424;
var G__41430 = count__41421_41425;
var G__41431 = (i__41422_41426 + 1);
seq__41419_41423 = G__41428;
chunk__41420_41424 = G__41429;
count__41421_41425 = G__41430;
i__41422_41426 = G__41431;
continue;
}
} else
{var temp__4092__auto___41432 = cljs.core.seq.call(null,seq__41419_41423);if(temp__4092__auto___41432)
{var seq__41419_41433__$1 = temp__4092__auto___41432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41419_41433__$1))
{var c__3908__auto___41434 = cljs.core.chunk_first.call(null,seq__41419_41433__$1);{
var G__41435 = cljs.core.chunk_rest.call(null,seq__41419_41433__$1);
var G__41436 = c__3908__auto___41434;
var G__41437 = cljs.core.count.call(null,c__3908__auto___41434);
var G__41438 = 0;
seq__41419_41423 = G__41435;
chunk__41420_41424 = G__41436;
count__41421_41425 = G__41437;
i__41422_41426 = G__41438;
continue;
}
} else
{var v_41439 = cljs.core.first.call(null,seq__41419_41433__$1);v_41439.style.display = "none";
{
var G__41440 = cljs.core.next.call(null,seq__41419_41433__$1);
var G__41441 = null;
var G__41442 = 0;
var G__41443 = 0;
seq__41419_41423 = G__41440;
chunk__41420_41424 = G__41441;
count__41421_41425 = G__41442;
i__41422_41426 = G__41443;
continue;
}
}
} else
{}
}
break;
}
pontiff.cljs.app.handlers.mainVideo.mainControls.selected = false;
return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.List.EMPTY);
});
pontiff.cljs.app.handlers.mainVideo.controlButtonHandler = (function controlButtonHandler(video,duration){var this$ = this;this$.fire = ((function (this$){
return (function (evt){evt.preventDefault();
evt.stopPropagation();
if(cljs.core._EQ_.call(null,evt.type,"mousedown"))
{video.pause();
var seq__41472_41496 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices));var chunk__41473_41497 = null;var count__41474_41498 = 0;var i__41475_41499 = 0;while(true){
if((i__41475_41499 < count__41474_41498))
{var vec__41476_41500 = cljs.core._nth.call(null,chunk__41473_41497,i__41475_41499);var x_41501 = cljs.core.nth.call(null,vec__41476_41500,0,null);var y_41502 = cljs.core.nth.call(null,vec__41476_41500,1,null);var z_41503 = cljs.core.nth.call(null,vec__41476_41500,2,null);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + x_41501))) > .6))
{y_41502.style.display = "none";
} else
{y_41502.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.narratorActive = true;
(elements.mainVideo.timeline[z_41503]).call(null);
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (seq__41472_41496,chunk__41473_41497,count__41474_41498,i__41475_41499,vec__41476_41500,x_41501,y_41502,z_41503,this$){
return (function (p1__41444_SHARP_){if(cljs.core._EQ_.call(null,y_41502,p1__41444_SHARP_))
{return true;
} else
{return null;
}
});})(seq__41472_41496,chunk__41473_41497,count__41474_41498,i__41475_41499,vec__41476_41500,x_41501,y_41502,z_41503,this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),y_41502));
} else
{}
}
{
var G__41504 = seq__41472_41496;
var G__41505 = chunk__41473_41497;
var G__41506 = count__41474_41498;
var G__41507 = (i__41475_41499 + 1);
seq__41472_41496 = G__41504;
chunk__41473_41497 = G__41505;
count__41474_41498 = G__41506;
i__41475_41499 = G__41507;
continue;
}
} else
{var temp__4092__auto___41508 = cljs.core.seq.call(null,seq__41472_41496);if(temp__4092__auto___41508)
{var seq__41472_41509__$1 = temp__4092__auto___41508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41472_41509__$1))
{var c__3908__auto___41510 = cljs.core.chunk_first.call(null,seq__41472_41509__$1);{
var G__41511 = cljs.core.chunk_rest.call(null,seq__41472_41509__$1);
var G__41512 = c__3908__auto___41510;
var G__41513 = cljs.core.count.call(null,c__3908__auto___41510);
var G__41514 = 0;
seq__41472_41496 = G__41511;
chunk__41473_41497 = G__41512;
count__41474_41498 = G__41513;
i__41475_41499 = G__41514;
continue;
}
} else
{var vec__41477_41515 = cljs.core.first.call(null,seq__41472_41509__$1);var x_41516 = cljs.core.nth.call(null,vec__41477_41515,0,null);var y_41517 = cljs.core.nth.call(null,vec__41477_41515,1,null);var z_41518 = cljs.core.nth.call(null,vec__41477_41515,2,null);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + x_41516))) > .6))
{y_41517.style.display = "none";
} else
{y_41517.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.narratorActive = true;
(elements.mainVideo.timeline[z_41518]).call(null);
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (seq__41472_41496,chunk__41473_41497,count__41474_41498,i__41475_41499,vec__41477_41515,x_41516,y_41517,z_41518,seq__41472_41509__$1,temp__4092__auto___41508,this$){
return (function (p1__41444_SHARP_){if(cljs.core._EQ_.call(null,y_41517,p1__41444_SHARP_))
{return true;
} else
{return null;
}
});})(seq__41472_41496,chunk__41473_41497,count__41474_41498,i__41475_41499,vec__41477_41515,x_41516,y_41517,z_41518,seq__41472_41509__$1,temp__4092__auto___41508,this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),y_41517));
} else
{}
}
{
var G__41519 = cljs.core.next.call(null,seq__41472_41509__$1);
var G__41520 = null;
var G__41521 = 0;
var G__41522 = 0;
seq__41472_41496 = G__41519;
chunk__41473_41497 = G__41520;
count__41474_41498 = G__41521;
i__41475_41499 = G__41522;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pontiff.cljs.app.handlers.mainVideo.narratorActive))
{pontiff.cljs.app.handlers.mainVideo.narratorActive = false;
pontiff.cljs.app.handlers.narratorVideo.showPanels.call(null);
} else
{}
this$.selected = true;
this$.width = evt.target.parentNode.clientWidth;
return this$.startX = evt.clientX;
} else
{if(cljs.core._EQ_.call(null,evt.type,"mousemove"))
{if(cljs.core.truth_(this$.selected))
{var distance = (evt.clientX - this$.startX);if(((distance + evt.target.offsetLeft) < 0))
{var seq__41478_41523 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices));var chunk__41479_41524 = null;var count__41480_41525 = 0;var i__41481_41526 = 0;while(true){
if((i__41481_41526 < count__41480_41525))
{var vec__41482_41527 = cljs.core._nth.call(null,chunk__41479_41524,i__41481_41526);var x_41528 = cljs.core.nth.call(null,vec__41482_41527,0,null);var y_41529 = cljs.core.nth.call(null,vec__41482_41527,1,null);var z_41530 = cljs.core.nth.call(null,vec__41482_41527,2,null);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + x_41528))) > .6))
{y_41529.style.display = "none";
} else
{y_41529.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.narratorActive = true;
(elements.mainVideo.timeline[z_41530]).call(null);
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (seq__41478_41523,chunk__41479_41524,count__41480_41525,i__41481_41526,vec__41482_41527,x_41528,y_41529,z_41530,distance,this$){
return (function (p1__41445_SHARP_){if(cljs.core._EQ_.call(null,y_41529,p1__41445_SHARP_))
{return true;
} else
{return null;
}
});})(seq__41478_41523,chunk__41479_41524,count__41480_41525,i__41481_41526,vec__41482_41527,x_41528,y_41529,z_41530,distance,this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),y_41529));
} else
{}
}
{
var G__41531 = seq__41478_41523;
var G__41532 = chunk__41479_41524;
var G__41533 = count__41480_41525;
var G__41534 = (i__41481_41526 + 1);
seq__41478_41523 = G__41531;
chunk__41479_41524 = G__41532;
count__41480_41525 = G__41533;
i__41481_41526 = G__41534;
continue;
}
} else
{var temp__4092__auto___41535 = cljs.core.seq.call(null,seq__41478_41523);if(temp__4092__auto___41535)
{var seq__41478_41536__$1 = temp__4092__auto___41535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41478_41536__$1))
{var c__3908__auto___41537 = cljs.core.chunk_first.call(null,seq__41478_41536__$1);{
var G__41538 = cljs.core.chunk_rest.call(null,seq__41478_41536__$1);
var G__41539 = c__3908__auto___41537;
var G__41540 = cljs.core.count.call(null,c__3908__auto___41537);
var G__41541 = 0;
seq__41478_41523 = G__41538;
chunk__41479_41524 = G__41539;
count__41480_41525 = G__41540;
i__41481_41526 = G__41541;
continue;
}
} else
{var vec__41483_41542 = cljs.core.first.call(null,seq__41478_41536__$1);var x_41543 = cljs.core.nth.call(null,vec__41483_41542,0,null);var y_41544 = cljs.core.nth.call(null,vec__41483_41542,1,null);var z_41545 = cljs.core.nth.call(null,vec__41483_41542,2,null);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + x_41543))) > .6))
{y_41544.style.display = "none";
} else
{y_41544.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.narratorActive = true;
(elements.mainVideo.timeline[z_41545]).call(null);
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (seq__41478_41523,chunk__41479_41524,count__41480_41525,i__41481_41526,vec__41483_41542,x_41543,y_41544,z_41545,seq__41478_41536__$1,temp__4092__auto___41535,distance,this$){
return (function (p1__41445_SHARP_){if(cljs.core._EQ_.call(null,y_41544,p1__41445_SHARP_))
{return true;
} else
{return null;
}
});})(seq__41478_41523,chunk__41479_41524,count__41480_41525,i__41481_41526,vec__41483_41542,x_41543,y_41544,z_41545,seq__41478_41536__$1,temp__4092__auto___41535,distance,this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),y_41544));
} else
{}
}
{
var G__41546 = cljs.core.next.call(null,seq__41478_41536__$1);
var G__41547 = null;
var G__41548 = 0;
var G__41549 = 0;
seq__41478_41523 = G__41546;
chunk__41479_41524 = G__41547;
count__41480_41525 = G__41548;
i__41481_41526 = G__41549;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pontiff.cljs.app.handlers.mainVideo.narratorActive))
{pontiff.cljs.app.handlers.mainVideo.narratorActive = false;
pontiff.cljs.app.handlers.narratorVideo.showPanels.call(null);
} else
{var frameSet_41550 = (elements.mainVideo.timeline[0]);if(cljs.core.truth_(frameSet_41550))
{frameSet_41550.call(null);
} else
{elements.mainVideo.state.forEach(((function (frameSet_41550,distance,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.mainVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(frameSet_41550,distance,this$))
);
}
}
evt.target.left = "0%";
video.currentTime = 0;
return this$.startX = evt.clientX;
} else
{if(((distance + evt.target.offsetLeft) > this$.width))
{var seq__41484_41551 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices));var chunk__41485_41552 = null;var count__41486_41553 = 0;var i__41487_41554 = 0;while(true){
if((i__41487_41554 < count__41486_41553))
{var vec__41488_41555 = cljs.core._nth.call(null,chunk__41485_41552,i__41487_41554);var x_41556 = cljs.core.nth.call(null,vec__41488_41555,0,null);var y_41557 = cljs.core.nth.call(null,vec__41488_41555,1,null);var z_41558 = cljs.core.nth.call(null,vec__41488_41555,2,null);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + x_41556))) > .6))
{y_41557.style.display = "none";
} else
{y_41557.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.narratorActive = true;
(elements.mainVideo.timeline[z_41558]).call(null);
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (seq__41484_41551,chunk__41485_41552,count__41486_41553,i__41487_41554,vec__41488_41555,x_41556,y_41557,z_41558,distance,this$){
return (function (p1__41446_SHARP_){if(cljs.core._EQ_.call(null,y_41557,p1__41446_SHARP_))
{return true;
} else
{return null;
}
});})(seq__41484_41551,chunk__41485_41552,count__41486_41553,i__41487_41554,vec__41488_41555,x_41556,y_41557,z_41558,distance,this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),y_41557));
} else
{}
}
{
var G__41559 = seq__41484_41551;
var G__41560 = chunk__41485_41552;
var G__41561 = count__41486_41553;
var G__41562 = (i__41487_41554 + 1);
seq__41484_41551 = G__41559;
chunk__41485_41552 = G__41560;
count__41486_41553 = G__41561;
i__41487_41554 = G__41562;
continue;
}
} else
{var temp__4092__auto___41563 = cljs.core.seq.call(null,seq__41484_41551);if(temp__4092__auto___41563)
{var seq__41484_41564__$1 = temp__4092__auto___41563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41484_41564__$1))
{var c__3908__auto___41565 = cljs.core.chunk_first.call(null,seq__41484_41564__$1);{
var G__41566 = cljs.core.chunk_rest.call(null,seq__41484_41564__$1);
var G__41567 = c__3908__auto___41565;
var G__41568 = cljs.core.count.call(null,c__3908__auto___41565);
var G__41569 = 0;
seq__41484_41551 = G__41566;
chunk__41485_41552 = G__41567;
count__41486_41553 = G__41568;
i__41487_41554 = G__41569;
continue;
}
} else
{var vec__41489_41570 = cljs.core.first.call(null,seq__41484_41564__$1);var x_41571 = cljs.core.nth.call(null,vec__41489_41570,0,null);var y_41572 = cljs.core.nth.call(null,vec__41489_41570,1,null);var z_41573 = cljs.core.nth.call(null,vec__41489_41570,2,null);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + x_41571))) > .6))
{y_41572.style.display = "none";
} else
{y_41572.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.narratorActive = true;
(elements.mainVideo.timeline[z_41573]).call(null);
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (seq__41484_41551,chunk__41485_41552,count__41486_41553,i__41487_41554,vec__41489_41570,x_41571,y_41572,z_41573,seq__41484_41564__$1,temp__4092__auto___41563,distance,this$){
return (function (p1__41446_SHARP_){if(cljs.core._EQ_.call(null,y_41572,p1__41446_SHARP_))
{return true;
} else
{return null;
}
});})(seq__41484_41551,chunk__41485_41552,count__41486_41553,i__41487_41554,vec__41489_41570,x_41571,y_41572,z_41573,seq__41484_41564__$1,temp__4092__auto___41563,distance,this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),y_41572));
} else
{}
}
{
var G__41574 = cljs.core.next.call(null,seq__41484_41564__$1);
var G__41575 = null;
var G__41576 = 0;
var G__41577 = 0;
seq__41484_41551 = G__41574;
chunk__41485_41552 = G__41575;
count__41486_41553 = G__41576;
i__41487_41554 = G__41577;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pontiff.cljs.app.handlers.mainVideo.narratorActive))
{pontiff.cljs.app.handlers.mainVideo.narratorActive = false;
pontiff.cljs.app.handlers.narratorVideo.showPanels.call(null);
} else
{var frameSet_41578 = (elements.mainVideo.timeline[0]);if(cljs.core.truth_(frameSet_41578))
{frameSet_41578.call(null);
} else
{elements.mainVideo.state.forEach(((function (frameSet_41578,distance,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.mainVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(frameSet_41578,distance,this$))
);
}
}
evt.target.left = "100%";
video.currentTime = duration;
return this$.startX = evt.clientX;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var leftPos = (((evt.target.offsetLeft + distance) / this$.width) * 100);var time = ((leftPos / 100) * duration);var frameSet = (elements.mainVideo.timeline[Math.round((time * 15))]);var seq__41490_41579 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices));var chunk__41491_41580 = null;var count__41492_41581 = 0;var i__41493_41582 = 0;while(true){
if((i__41493_41582 < count__41492_41581))
{var vec__41494_41583 = cljs.core._nth.call(null,chunk__41491_41580,i__41493_41582);var x_41584 = cljs.core.nth.call(null,vec__41494_41583,0,null);var y_41585 = cljs.core.nth.call(null,vec__41494_41583,1,null);var z_41586 = cljs.core.nth.call(null,vec__41494_41583,2,null);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + x_41584))) > .7))
{y_41585.style.display = "none";
} else
{y_41585.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.narratorActive = true;
(elements.mainVideo.timeline[z_41586]).call(null);
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (seq__41490_41579,chunk__41491_41580,count__41492_41581,i__41493_41582,vec__41494_41583,x_41584,y_41585,z_41586,leftPos,time,frameSet,distance,this$){
return (function (p1__41447_SHARP_){if(cljs.core._EQ_.call(null,y_41585,p1__41447_SHARP_))
{return true;
} else
{return null;
}
});})(seq__41490_41579,chunk__41491_41580,count__41492_41581,i__41493_41582,vec__41494_41583,x_41584,y_41585,z_41586,leftPos,time,frameSet,distance,this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),y_41585));
} else
{}
}
{
var G__41587 = seq__41490_41579;
var G__41588 = chunk__41491_41580;
var G__41589 = count__41492_41581;
var G__41590 = (i__41493_41582 + 1);
seq__41490_41579 = G__41587;
chunk__41491_41580 = G__41588;
count__41492_41581 = G__41589;
i__41493_41582 = G__41590;
continue;
}
} else
{var temp__4092__auto___41591 = cljs.core.seq.call(null,seq__41490_41579);if(temp__4092__auto___41591)
{var seq__41490_41592__$1 = temp__4092__auto___41591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41490_41592__$1))
{var c__3908__auto___41593 = cljs.core.chunk_first.call(null,seq__41490_41592__$1);{
var G__41594 = cljs.core.chunk_rest.call(null,seq__41490_41592__$1);
var G__41595 = c__3908__auto___41593;
var G__41596 = cljs.core.count.call(null,c__3908__auto___41593);
var G__41597 = 0;
seq__41490_41579 = G__41594;
chunk__41491_41580 = G__41595;
count__41492_41581 = G__41596;
i__41493_41582 = G__41597;
continue;
}
} else
{var vec__41495_41598 = cljs.core.first.call(null,seq__41490_41592__$1);var x_41599 = cljs.core.nth.call(null,vec__41495_41598,0,null);var y_41600 = cljs.core.nth.call(null,vec__41495_41598,1,null);var z_41601 = cljs.core.nth.call(null,vec__41495_41598,2,null);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + x_41599))) > .7))
{y_41600.style.display = "none";
} else
{y_41600.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.narratorActive = true;
(elements.mainVideo.timeline[z_41601]).call(null);
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (seq__41490_41579,chunk__41491_41580,count__41492_41581,i__41493_41582,vec__41495_41598,x_41599,y_41600,z_41601,seq__41490_41592__$1,temp__4092__auto___41591,leftPos,time,frameSet,distance,this$){
return (function (p1__41447_SHARP_){if(cljs.core._EQ_.call(null,y_41600,p1__41447_SHARP_))
{return true;
} else
{return null;
}
});})(seq__41490_41579,chunk__41491_41580,count__41492_41581,i__41493_41582,vec__41495_41598,x_41599,y_41600,z_41601,seq__41490_41592__$1,temp__4092__auto___41591,leftPos,time,frameSet,distance,this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),y_41600));
} else
{}
}
{
var G__41602 = cljs.core.next.call(null,seq__41490_41592__$1);
var G__41603 = null;
var G__41604 = 0;
var G__41605 = 0;
seq__41490_41579 = G__41602;
chunk__41491_41580 = G__41603;
count__41492_41581 = G__41604;
i__41493_41582 = G__41605;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pontiff.cljs.app.handlers.mainVideo.narratorActive))
{pontiff.cljs.app.handlers.mainVideo.narratorActive = false;
pontiff.cljs.app.handlers.narratorVideo.showPanels.call(null);
} else
{if(cljs.core.truth_(frameSet))
{frameSet.call(null);
} else
{elements.mainVideo.state.forEach(((function (leftPos,time,frameSet,distance,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.mainVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(leftPos,time,frameSet,distance,this$))
);
}
}
evt.target.style.left = [cljs.core.str(leftPos),cljs.core.str("%")].join('');
video.currentTime = time;
return this$.startX = evt.clientX;
} else
{return null;
}
}
}
} else
{return null;
}
} else
{if((cljs.core._EQ_.call(null,evt.type,"mouseup")) || (cljs.core._EQ_.call(null,evt.type,"mouseout")))
{if(cljs.core.truth_(this$.selected))
{return this$.selected = false;
} else
{return null;
}
} else
{return null;
}
}
}
});})(this$))
;
return this$;
});
pontiff.cljs.app.handlers.mainVideo.processActionList = (function processActionList(actionList){pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
goog.events.listenOnce(cljs.core.first.call(null,cljs.core.last.call(null,actionList)),"seeked",(function (){return cljs.core.first.call(null,cljs.core.last.call(null,actionList)).play();
}));
pontiff.cljs.app.handlers.mainVideo.controlBar.style.left = [cljs.core.str((100 * ((cljs.core.second.call(null,cljs.core.first.call(null,actionList)) / 15) / pontiff.cljs.app.handlers.mainVideo.duration))),cljs.core.str("%")].join('');
pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
elements.narratorVideo.cleanState();
var seq__41612 = cljs.core.seq.call(null,actionList);var chunk__41613 = null;var count__41614 = 0;var i__41615 = 0;while(true){
if((i__41615 < count__41614))
{var vec__41616 = cljs.core._nth.call(null,chunk__41613,i__41615);var k = cljs.core.nth.call(null,vec__41616,0,null);var v = cljs.core.nth.call(null,vec__41616,1,null);k.pause();
(k.timeline[v]).call(null);
k.currentTime = (v / 15);
{
var G__41618 = seq__41612;
var G__41619 = chunk__41613;
var G__41620 = count__41614;
var G__41621 = (i__41615 + 1);
seq__41612 = G__41618;
chunk__41613 = G__41619;
count__41614 = G__41620;
i__41615 = G__41621;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__41612);if(temp__4092__auto__)
{var seq__41612__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41612__$1))
{var c__3908__auto__ = cljs.core.chunk_first.call(null,seq__41612__$1);{
var G__41622 = cljs.core.chunk_rest.call(null,seq__41612__$1);
var G__41623 = c__3908__auto__;
var G__41624 = cljs.core.count.call(null,c__3908__auto__);
var G__41625 = 0;
seq__41612 = G__41622;
chunk__41613 = G__41623;
count__41614 = G__41624;
i__41615 = G__41625;
continue;
}
} else
{var vec__41617 = cljs.core.first.call(null,seq__41612__$1);var k = cljs.core.nth.call(null,vec__41617,0,null);var v = cljs.core.nth.call(null,vec__41617,1,null);k.pause();
(k.timeline[v]).call(null);
k.currentTime = (v / 15);
{
var G__41626 = cljs.core.next.call(null,seq__41612__$1);
var G__41627 = null;
var G__41628 = 0;
var G__41629 = 0;
seq__41612 = G__41626;
chunk__41613 = G__41627;
count__41614 = G__41628;
i__41615 = G__41629;
continue;
}
}
} else
{return null;
}
}
break;
}
});
pontiff.cljs.app.handlers.mainVideo.videoTimelineHandler = (function videoTimelineHandler(video,length,bar){var this$ = this;this$.fire = ((function (this$){
return (function (evt){evt.preventDefault();
evt.stopPropagation();
if(cljs.core.truth_(pontiff.cljs.app.handlers.mainVideo.mainControls.selected))
{pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
video.pause();
var xLoc = (evt.clientX - (bar.parentNode.parentNode.parentNode.offsetLeft + bar.parentNode.parentNode.parentNode.parentNode.offsetLeft));var width = evt.target.offsetWidth;var timeSet = ((xLoc / width) * length);var newLoc = [cljs.core.str((100 * (xLoc / width))),cljs.core.str("%")].join('');var frame = Math.floor((15 * timeSet));var frameSet = (video.timeline[frame]);bar.style.left = newLoc;
video.currentTime = timeSet;
elements.narratorVideo.cleanState();
var seq__41638_41644 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.rTocIndices));var chunk__41639_41645 = null;var count__41640_41646 = 0;var i__41641_41647 = 0;while(true){
if((i__41641_41647 < count__41640_41646))
{var vec__41642_41648 = cljs.core._nth.call(null,chunk__41639_41645,i__41641_41647);var x_41649 = cljs.core.nth.call(null,vec__41642_41648,0,null);var y_41650 = cljs.core.nth.call(null,vec__41642_41648,1,null);var z_41651 = cljs.core.nth.call(null,vec__41642_41648,2,null);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + x_41649))) > .6))
{y_41650.style.display = "none";
} else
{y_41650.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.narratorActive = true;
(elements.mainVideo.timeline[z_41651]).call(null);
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (seq__41638_41644,chunk__41639_41645,count__41640_41646,i__41641_41647,vec__41642_41648,x_41649,y_41650,z_41651,xLoc,width,timeSet,newLoc,frame,frameSet,this$){
return (function (p1__41630_SHARP_){if(cljs.core._EQ_.call(null,y_41650,p1__41630_SHARP_))
{return true;
} else
{return null;
}
});})(seq__41638_41644,chunk__41639_41645,count__41640_41646,i__41641_41647,vec__41642_41648,x_41649,y_41650,z_41651,xLoc,width,timeSet,newLoc,frame,frameSet,this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),y_41650));
} else
{}
}
{
var G__41652 = seq__41638_41644;
var G__41653 = chunk__41639_41645;
var G__41654 = count__41640_41646;
var G__41655 = (i__41641_41647 + 1);
seq__41638_41644 = G__41652;
chunk__41639_41645 = G__41653;
count__41640_41646 = G__41654;
i__41641_41647 = G__41655;
continue;
}
} else
{var temp__4092__auto___41656 = cljs.core.seq.call(null,seq__41638_41644);if(temp__4092__auto___41656)
{var seq__41638_41657__$1 = temp__4092__auto___41656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41638_41657__$1))
{var c__3908__auto___41658 = cljs.core.chunk_first.call(null,seq__41638_41657__$1);{
var G__41659 = cljs.core.chunk_rest.call(null,seq__41638_41657__$1);
var G__41660 = c__3908__auto___41658;
var G__41661 = cljs.core.count.call(null,c__3908__auto___41658);
var G__41662 = 0;
seq__41638_41644 = G__41659;
chunk__41639_41645 = G__41660;
count__41640_41646 = G__41661;
i__41641_41647 = G__41662;
continue;
}
} else
{var vec__41643_41663 = cljs.core.first.call(null,seq__41638_41657__$1);var x_41664 = cljs.core.nth.call(null,vec__41643_41663,0,null);var y_41665 = cljs.core.nth.call(null,vec__41643_41663,1,null);var z_41666 = cljs.core.nth.call(null,vec__41643_41663,2,null);if((Math.abs(((1 + parseFloat(pontiff.cljs.app.handlers.mainVideo.controlBar.style.left)) - (.5 + x_41664))) > .6))
{y_41665.style.display = "none";
} else
{y_41665.style.display = "inline";
pontiff.cljs.app.handlers.mainVideo.narratorActive = true;
(elements.mainVideo.timeline[z_41666]).call(null);
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (seq__41638_41644,chunk__41639_41645,count__41640_41646,i__41641_41647,vec__41643_41663,x_41664,y_41665,z_41666,seq__41638_41657__$1,temp__4092__auto___41656,xLoc,width,timeSet,newLoc,frame,frameSet,this$){
return (function (p1__41630_SHARP_){if(cljs.core._EQ_.call(null,y_41665,p1__41630_SHARP_))
{return true;
} else
{return null;
}
});})(seq__41638_41644,chunk__41639_41645,count__41640_41646,i__41641_41647,vec__41643_41663,x_41664,y_41665,z_41666,seq__41638_41657__$1,temp__4092__auto___41656,xLoc,width,timeSet,newLoc,frame,frameSet,this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),y_41665));
} else
{}
}
{
var G__41667 = cljs.core.next.call(null,seq__41638_41657__$1);
var G__41668 = null;
var G__41669 = 0;
var G__41670 = 0;
seq__41638_41644 = G__41667;
chunk__41639_41645 = G__41668;
count__41640_41646 = G__41669;
i__41641_41647 = G__41670;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(pontiff.cljs.app.handlers.mainVideo.narratorActive))
{pontiff.cljs.app.handlers.mainVideo.narratorActive = false;
return pontiff.cljs.app.handlers.narratorVideo.showPanels.call(null);
} else
{if(cljs.core.truth_(frameSet))
{return frameSet.call(null);
} else
{return elements.mainVideo.state.forEach(((function (xLoc,width,timeSet,newLoc,frame,frameSet,this$){
return (function (el,idx,arr){if(!(cljs.core._EQ_.call(null,0,el)))
{((elements.mainVideo.stateMap[idx])[0]).call(null);
return (arr[idx] = 0);
} else
{return null;
}
});})(xLoc,width,timeSet,newLoc,frame,frameSet,this$))
);
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{pontiff.cljs.app.handlers.mainVideo.mainControls.selected = true;
pontiff.cljs.app.handlers.mainVideo.videoTrack.style.display = "inline";
if(cljs.core.not.call(null,cljs.core.some.call(null,((function (this$){
return (function (p1__41631_SHARP_){if(cljs.core._EQ_.call(null,pontiff.cljs.app.handlers.mainVideo.videoTrack,p1__41631_SHARP_))
{return true;
} else
{return null;
}
});})(this$))
,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),pontiff.cljs.app.handlers.mainVideo.videoTrack));
} else
{return null;
}
} else
{return null;
}
}
});})(this$))
;
return this$;
});
pontiff.cljs.app.handlers.mainVideo.mainPlayAreaHandler = (function mainPlayAreaHandler(evt){evt.stopPropagation();
if((parseInt(elements.narratorDiv.style.zIndex) > 10))
{return pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
} else
{if(cljs.core._EQ_.call(null,pontiff.cljs.app.handlers.mainVideo.videoTrack.style.display,"inline"))
{pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
pontiff.cljs.app.handlers.mainVideo.mainControls.selected = false;
return pontiff.cljs.app.handlers.mainVideo.mainVideo.play();
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.truth_(elements.mainVideo.paused))
{return pontiff.cljs.app.handlers.mainVideo.mainVideo.play();
} else
{pontiff.cljs.app.handlers.mainVideo.mainVideo.pause();
pontiff.cljs.app.handlers.mainVideo.mainControls.selected = true;
pontiff.cljs.app.handlers.mainVideo.videoTrack.style.display = "inline";
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__41671_SHARP_){if(cljs.core._EQ_.call(null,pontiff.cljs.app.handlers.mainVideo.videoTrack,p1__41671_SHARP_))
{return true;
} else
{return null;
}
}),cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels))))
{return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels,cljs.core.conj.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.mainVideo.tempPanels),pontiff.cljs.app.handlers.mainVideo.videoTrack));
} else
{return null;
}
}
} else
{return null;
}
}
}
});
