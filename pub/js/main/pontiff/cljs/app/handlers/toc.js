// Compiled by ClojureScript .
goog.provide('pontiff.cljs.app.handlers.toc');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('pontiff.cljs.util');
goog.require('pontiff.cljs.util');
pontiff.cljs.app.handlers.toc.duration = 1040.47;
pontiff.cljs.app.handlers.toc.init = (function init(){pontiff.cljs.app.handlers.toc.controlBar = goog.dom.getElement("controlBar");
var seq__36946 = cljs.core.seq.call(null,pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("toc")));var chunk__36947 = null;var count__36948 = 0;var i__36949 = 0;while(true){
if((i__36949 < count__36948))
{var v = cljs.core._nth.call(null,chunk__36947,i__36949);var actions_36966 = cljs.core.partition.call(null,2,clojure.string.split.call(null,goog.string.collapseWhitespace(v.getAttribute("index")),/ /));var actionList_36967 = (function (){var iter__3877__auto__ = ((function (seq__36946,chunk__36947,count__36948,i__36949,actions_36966,v){
return (function iter__36950(s__36951){return (new cljs.core.LazySeq(null,((function (seq__36946,chunk__36947,count__36948,i__36949,actions_36966,v){
return (function (){var s__36951__$1 = s__36951;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36951__$1);if(temp__4092__auto__)
{var s__36951__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36951__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__36951__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__36953 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__36952 = 0;while(true){
if((i__36952 < size__3876__auto__))
{var vec__36956 = cljs.core._nth.call(null,c__3875__auto__,i__36952);var k = cljs.core.nth.call(null,vec__36956,0,null);var v__$1 = cljs.core.nth.call(null,vec__36956,1,null);cljs.core.chunk_append.call(null,b__36953,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)));
{
var G__36968 = (i__36952 + 1);
i__36952 = G__36968;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36953),iter__36950.call(null,cljs.core.chunk_rest.call(null,s__36951__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36953),null);
}
} else
{var vec__36957 = cljs.core.first.call(null,s__36951__$2);var k = cljs.core.nth.call(null,vec__36957,0,null);var v__$1 = cljs.core.nth.call(null,vec__36957,1,null);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)),iter__36950.call(null,cljs.core.rest.call(null,s__36951__$2)));
}
} else
{return null;
}
break;
}
});})(seq__36946,chunk__36947,count__36948,i__36949,actions_36966,v))
,null,null));
});})(seq__36946,chunk__36947,count__36948,i__36949,actions_36966,v))
;return iter__3877__auto__.call(null,actions_36966);
})();goog.events.listen(v,"click",((function (seq__36946,chunk__36947,count__36948,i__36949,actions_36966,actionList_36967,v){
return (function (){return pontiff.cljs.app.handlers.toc.processActionList.call(null,actionList_36967);
});})(seq__36946,chunk__36947,count__36948,i__36949,actions_36966,actionList_36967,v))
);
{
var G__36969 = seq__36946;
var G__36970 = chunk__36947;
var G__36971 = count__36948;
var G__36972 = (i__36949 + 1);
seq__36946 = G__36969;
chunk__36947 = G__36970;
count__36948 = G__36971;
i__36949 = G__36972;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36946);if(temp__4092__auto__)
{var seq__36946__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36946__$1))
{var c__3908__auto__ = cljs.core.chunk_first.call(null,seq__36946__$1);{
var G__36973 = cljs.core.chunk_rest.call(null,seq__36946__$1);
var G__36974 = c__3908__auto__;
var G__36975 = cljs.core.count.call(null,c__3908__auto__);
var G__36976 = 0;
seq__36946 = G__36973;
chunk__36947 = G__36974;
count__36948 = G__36975;
i__36949 = G__36976;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__36946__$1);var actions_36977 = cljs.core.partition.call(null,2,clojure.string.split.call(null,goog.string.collapseWhitespace(v.getAttribute("index")),/ /));var actionList_36978 = (function (){var iter__3877__auto__ = ((function (seq__36946,chunk__36947,count__36948,i__36949,actions_36977,v,seq__36946__$1,temp__4092__auto__){
return (function iter__36958(s__36959){return (new cljs.core.LazySeq(null,((function (seq__36946,chunk__36947,count__36948,i__36949,actions_36977,v,seq__36946__$1,temp__4092__auto__){
return (function (){var s__36959__$1 = s__36959;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__36959__$1);if(temp__4092__auto____$1)
{var s__36959__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36959__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__36959__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__36961 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__36960 = 0;while(true){
if((i__36960 < size__3876__auto__))
{var vec__36964 = cljs.core._nth.call(null,c__3875__auto__,i__36960);var k = cljs.core.nth.call(null,vec__36964,0,null);var v__$1 = cljs.core.nth.call(null,vec__36964,1,null);cljs.core.chunk_append.call(null,b__36961,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)));
{
var G__36979 = (i__36960 + 1);
i__36960 = G__36979;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36961),iter__36958.call(null,cljs.core.chunk_rest.call(null,s__36959__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36961),null);
}
} else
{var vec__36965 = cljs.core.first.call(null,s__36959__$2);var k = cljs.core.nth.call(null,vec__36965,0,null);var v__$1 = cljs.core.nth.call(null,vec__36965,1,null);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v__$1 | 0)),goog.dom.getElement(k)),iter__36958.call(null,cljs.core.rest.call(null,s__36959__$2)));
}
} else
{return null;
}
break;
}
});})(seq__36946,chunk__36947,count__36948,i__36949,actions_36977,v,seq__36946__$1,temp__4092__auto__))
,null,null));
});})(seq__36946,chunk__36947,count__36948,i__36949,actions_36977,v,seq__36946__$1,temp__4092__auto__))
;return iter__3877__auto__.call(null,actions_36977);
})();goog.events.listen(v,"click",((function (seq__36946,chunk__36947,count__36948,i__36949,actions_36977,actionList_36978,v,seq__36946__$1,temp__4092__auto__){
return (function (){return pontiff.cljs.app.handlers.toc.processActionList.call(null,actionList_36978);
});})(seq__36946,chunk__36947,count__36948,i__36949,actions_36977,actionList_36978,v,seq__36946__$1,temp__4092__auto__))
);
{
var G__36980 = cljs.core.next.call(null,seq__36946__$1);
var G__36981 = null;
var G__36982 = 0;
var G__36983 = 0;
seq__36946 = G__36980;
chunk__36947 = G__36981;
count__36948 = G__36982;
i__36949 = G__36983;
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
pontiff.cljs.app.handlers.toc.processActionList = (function processActionList(actionList){elements.mainPlayButton.style.display = "none";
goog.events.listenOnce(cljs.core.first.call(null,cljs.core.last.call(null,actionList)),"seeked",(function (){return cljs.core.first.call(null,cljs.core.last.call(null,actionList)).play();
}));
pontiff.cljs.app.handlers.toc.controlBar.style.left = [cljs.core.str((100 * ((cljs.core.second.call(null,cljs.core.first.call(null,actionList)) / 15) / pontiff.cljs.app.handlers.toc.duration))),cljs.core.str("%")].join('');
var seq__36990 = cljs.core.seq.call(null,actionList);var chunk__36991 = null;var count__36992 = 0;var i__36993 = 0;while(true){
if((i__36993 < count__36992))
{var vec__36994 = cljs.core._nth.call(null,chunk__36991,i__36993);var k = cljs.core.nth.call(null,vec__36994,0,null);var v = cljs.core.nth.call(null,vec__36994,1,null);console.log(k,v);
k.pause();
k.currentTime = (v / 15);
(k.timeline[v]).call(null);
{
var G__36996 = seq__36990;
var G__36997 = chunk__36991;
var G__36998 = count__36992;
var G__36999 = (i__36993 + 1);
seq__36990 = G__36996;
chunk__36991 = G__36997;
count__36992 = G__36998;
i__36993 = G__36999;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36990);if(temp__4092__auto__)
{var seq__36990__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36990__$1))
{var c__3908__auto__ = cljs.core.chunk_first.call(null,seq__36990__$1);{
var G__37000 = cljs.core.chunk_rest.call(null,seq__36990__$1);
var G__37001 = c__3908__auto__;
var G__37002 = cljs.core.count.call(null,c__3908__auto__);
var G__37003 = 0;
seq__36990 = G__37000;
chunk__36991 = G__37001;
count__36992 = G__37002;
i__36993 = G__37003;
continue;
}
} else
{var vec__36995 = cljs.core.first.call(null,seq__36990__$1);var k = cljs.core.nth.call(null,vec__36995,0,null);var v = cljs.core.nth.call(null,vec__36995,1,null);console.log(k,v);
k.pause();
k.currentTime = (v / 15);
(k.timeline[v]).call(null);
{
var G__37004 = cljs.core.next.call(null,seq__36990__$1);
var G__37005 = null;
var G__37006 = 0;
var G__37007 = 0;
seq__36990 = G__37004;
chunk__36991 = G__37005;
count__36992 = G__37006;
i__36993 = G__37007;
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
