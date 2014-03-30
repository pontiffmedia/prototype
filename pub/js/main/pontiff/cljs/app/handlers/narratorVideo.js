// Compiled by ClojureScript .
goog.provide('pontiff.cljs.app.handlers.narratorVideo');
goog.require('cljs.core');
goog.require('pontiff.cljs.util');
goog.require('pontiff.cljs.util');
pontiff.cljs.app.handlers.narratorVideo.init = (function init(){pontiff.cljs.app.handlers.narratorVideo.mainTempPanels = pontiff.cljs.app.handlers.mainVideo.tempPanels;
pontiff.cljs.app.handlers.narratorVideo.rTocList = cljs.core.sort_by.call(null,cljs.core.first,cljs.core._GT_,(function (){var iter__3877__auto__ = (function iter__39759(s__39760){return (new cljs.core.LazySeq(null,(function (){var s__39760__$1 = s__39760;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39760__$1);if(temp__4092__auto__)
{var s__39760__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39760__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__39760__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__39762 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__39761 = 0;while(true){
if((i__39761 < size__3876__auto__))
{var v = cljs.core._nth.call(null,c__3875__auto__,i__39761);cljs.core.chunk_append.call(null,b__39762,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v.parentNode.getAttribute("frame") | 0)),v),(v.getAttribute("frame") | 0)));
{
var G__39773 = (i__39761 + 1);
i__39761 = G__39773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39762),iter__39759.call(null,cljs.core.chunk_rest.call(null,s__39760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39762),null);
}
} else
{var v = cljs.core.first.call(null,s__39760__$2);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v.parentNode.getAttribute("frame") | 0)),v),(v.getAttribute("frame") | 0)),iter__39759.call(null,cljs.core.rest.call(null,s__39760__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3877__auto__.call(null,pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("ntoc",goog.dom.getElement("rtocs"))));
})());
pontiff.cljs.app.handlers.narratorVideo.lTocList = cljs.core.sort_by.call(null,cljs.core.first,cljs.core._GT_,(function (){var iter__3877__auto__ = (function iter__39763(s__39764){return (new cljs.core.LazySeq(null,(function (){var s__39764__$1 = s__39764;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39764__$1);if(temp__4092__auto__)
{var s__39764__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39764__$2))
{var c__3875__auto__ = cljs.core.chunk_first.call(null,s__39764__$2);var size__3876__auto__ = cljs.core.count.call(null,c__3875__auto__);var b__39766 = cljs.core.chunk_buffer.call(null,size__3876__auto__);if((function (){var i__39765 = 0;while(true){
if((i__39765 < size__3876__auto__))
{var v = cljs.core._nth.call(null,c__3875__auto__,i__39765);cljs.core.chunk_append.call(null,b__39766,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v.parentNode.getAttribute("frame") | 0)),v),(v.getAttribute("frame") | 0)));
{
var G__39774 = (i__39765 + 1);
i__39765 = G__39774;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39766),iter__39763.call(null,cljs.core.chunk_rest.call(null,s__39764__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39766),null);
}
} else
{var v = cljs.core.first.call(null,s__39764__$2);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(v.parentNode.getAttribute("frame") | 0)),v),(v.getAttribute("frame") | 0)),iter__39763.call(null,cljs.core.rest.call(null,s__39764__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3877__auto__.call(null,pontiff.cljs.util.nodelist__GT_coll.call(null,goog.dom.getElementsByClass("ntoc",goog.dom.getElement("ltocs"))));
})());
var seq__39767_39775 = cljs.core.seq.call(null,cljs.core.concat.call(null,pontiff.cljs.app.handlers.narratorVideo.lTocList,pontiff.cljs.app.handlers.narratorVideo.rTocList));var chunk__39768_39776 = null;var count__39769_39777 = 0;var i__39770_39778 = 0;while(true){
if((i__39770_39778 < count__39769_39777))
{var vec__39771_39779 = cljs.core._nth.call(null,chunk__39768_39776,i__39770_39778);var x_39780 = cljs.core.nth.call(null,vec__39771_39779,0,null);var y_39781 = cljs.core.nth.call(null,vec__39771_39779,1,null);var z_39782 = cljs.core.nth.call(null,vec__39771_39779,2,null);goog.events.listen(y_39781,"click",pontiff.cljs.app.handlers.narratorVideo.tocNodeHandler);
{
var G__39783 = seq__39767_39775;
var G__39784 = chunk__39768_39776;
var G__39785 = count__39769_39777;
var G__39786 = (i__39770_39778 + 1);
seq__39767_39775 = G__39783;
chunk__39768_39776 = G__39784;
count__39769_39777 = G__39785;
i__39770_39778 = G__39786;
continue;
}
} else
{var temp__4092__auto___39787 = cljs.core.seq.call(null,seq__39767_39775);if(temp__4092__auto___39787)
{var seq__39767_39788__$1 = temp__4092__auto___39787;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39767_39788__$1))
{var c__3908__auto___39789 = cljs.core.chunk_first.call(null,seq__39767_39788__$1);{
var G__39790 = cljs.core.chunk_rest.call(null,seq__39767_39788__$1);
var G__39791 = c__3908__auto___39789;
var G__39792 = cljs.core.count.call(null,c__3908__auto___39789);
var G__39793 = 0;
seq__39767_39775 = G__39790;
chunk__39768_39776 = G__39791;
count__39769_39777 = G__39792;
i__39770_39778 = G__39793;
continue;
}
} else
{var vec__39772_39794 = cljs.core.first.call(null,seq__39767_39788__$1);var x_39795 = cljs.core.nth.call(null,vec__39772_39794,0,null);var y_39796 = cljs.core.nth.call(null,vec__39772_39794,1,null);var z_39797 = cljs.core.nth.call(null,vec__39772_39794,2,null);goog.events.listen(y_39796,"click",pontiff.cljs.app.handlers.narratorVideo.tocNodeHandler);
{
var G__39798 = cljs.core.next.call(null,seq__39767_39788__$1);
var G__39799 = null;
var G__39800 = 0;
var G__39801 = 0;
seq__39767_39775 = G__39798;
chunk__39768_39776 = G__39799;
count__39769_39777 = G__39800;
i__39770_39778 = G__39801;
continue;
}
}
} else
{}
}
break;
}
goog.events.listen(goog.dom.getElement("narratorTOCsL"),"click",(function (){return pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
}));
goog.events.listen(goog.dom.getElement("narratorTOCsR"),"click",(function (){return pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
}));
goog.events.listen(goog.dom.getElement("narratorController"),"click",(function (){return pontiff.cljs.app.handlers.mainVideo.closeTempPanels.call(null);
}));
goog.events.listen(elements.narratorVideo,"click",(function (){elements.narratorVideo.pause();
var frame = Math.round((15 * elements.narratorVideo.currentTime));var toc = (((45 < ((parseFloat(elements.narratorDiv.style.width) / 2) + parseFloat(elements.narratorDiv.style.left))))?cljs.core.second.call(null,cljs.core.some.call(null,((function (frame){
return (function (p1__39743_SHARP_){if((frame >= cljs.core.nth.call(null,p1__39743_SHARP_,2)))
{return p1__39743_SHARP_;
} else
{return null;
}
});})(frame))
,pontiff.cljs.app.handlers.narratorVideo.lTocList)).parentNode:cljs.core.second.call(null,cljs.core.some.call(null,((function (frame){
return (function (p1__39744_SHARP_){if((frame >= cljs.core.nth.call(null,p1__39744_SHARP_,2)))
{return p1__39744_SHARP_;
} else
{return null;
}
});})(frame))
,pontiff.cljs.app.handlers.narratorVideo.rTocList)).parentNode);elements.narratorController.style.display = "inline";
elements.mainVideoSvg.style.opacity = 0;
toc.style.display = "inline";
return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.narratorVideo.tempPanels,cljs.core.list_STAR_.call(null,toc,elements.narratorController,cljs.core.deref.call(null,pontiff.cljs.app.handlers.narratorVideo.tempPanels)));
}));
goog.events.listen(elements.narratorDisableButton,"click",(function (evt){evt.stopPropagation();
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
elements.narratorVideo.className = "quickAnim";
elements.narratorVideo.style.width = "0%";
elements.narratorVideo.style.height = "0%";
elements.narratorVideo.style.margin = "50%";
elements.narratorVideo.cleanState();
elements.narratorVideo.skip = true;
elements.narratorDiv.style.zIndex = 10;
return elements.mainVideoSvg.style.opacity = 1;
}));
return goog.events.listen(elements.narratorPlayButton,"click",(function (evt){evt.stopPropagation();
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
elements.mainVideoSvg.style.opacity = 1;
return elements.narratorVideo.play();
}));
});
pontiff.cljs.app.handlers.narratorVideo.tocNodeHandler = (function tocNodeHandler(evt){evt.stopPropagation();
var frame = evt.target.getAttribute("frame");elements.narratorVideo.currentTime = (frame / 15);
elements.mainVideoSvg.style.opacity = 1;
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels.call(null);
(elements.narratorVideo.timeline[frame]).call(null);
return elements.narratorVideo.play();
});
pontiff.cljs.app.handlers.narratorVideo.tempPanels = cljs.core.atom.call(null,cljs.core.List.EMPTY);
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels = (function closeTempPanels(){var seq__39806_39810 = cljs.core.seq.call(null,cljs.core.deref.call(null,pontiff.cljs.app.handlers.narratorVideo.tempPanels));var chunk__39807_39811 = null;var count__39808_39812 = 0;var i__39809_39813 = 0;while(true){
if((i__39809_39813 < count__39808_39812))
{var v_39814 = cljs.core._nth.call(null,chunk__39807_39811,i__39809_39813);v_39814.style.display = "none";
{
var G__39815 = seq__39806_39810;
var G__39816 = chunk__39807_39811;
var G__39817 = count__39808_39812;
var G__39818 = (i__39809_39813 + 1);
seq__39806_39810 = G__39815;
chunk__39807_39811 = G__39816;
count__39808_39812 = G__39817;
i__39809_39813 = G__39818;
continue;
}
} else
{var temp__4092__auto___39819 = cljs.core.seq.call(null,seq__39806_39810);if(temp__4092__auto___39819)
{var seq__39806_39820__$1 = temp__4092__auto___39819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39806_39820__$1))
{var c__3908__auto___39821 = cljs.core.chunk_first.call(null,seq__39806_39820__$1);{
var G__39822 = cljs.core.chunk_rest.call(null,seq__39806_39820__$1);
var G__39823 = c__3908__auto___39821;
var G__39824 = cljs.core.count.call(null,c__3908__auto___39821);
var G__39825 = 0;
seq__39806_39810 = G__39822;
chunk__39807_39811 = G__39823;
count__39808_39812 = G__39824;
i__39809_39813 = G__39825;
continue;
}
} else
{var v_39826 = cljs.core.first.call(null,seq__39806_39820__$1);v_39826.style.display = "none";
{
var G__39827 = cljs.core.next.call(null,seq__39806_39820__$1);
var G__39828 = null;
var G__39829 = 0;
var G__39830 = 0;
seq__39806_39810 = G__39827;
chunk__39807_39811 = G__39828;
count__39808_39812 = G__39829;
i__39809_39813 = G__39830;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.narratorVideo.tempPanels,cljs.core.List.EMPTY);
});
pontiff.cljs.app.handlers.narratorVideo.showPanels = (function showPanels(){elements.narratorVideo.pause();
var frame = Math.round((15 * elements.narratorVideo.currentTime));var toc = (((45 < ((parseFloat(elements.narratorDiv.style.width) / 2) + parseFloat(elements.narratorDiv.style.left))))?cljs.core.second.call(null,cljs.core.some.call(null,((function (frame){
return (function (p1__39831_SHARP_){if((frame >= cljs.core.nth.call(null,p1__39831_SHARP_,2)))
{return p1__39831_SHARP_;
} else
{return null;
}
});})(frame))
,pontiff.cljs.app.handlers.narratorVideo.lTocList)).parentNode:cljs.core.second.call(null,cljs.core.some.call(null,((function (frame){
return (function (p1__39832_SHARP_){if((frame >= cljs.core.nth.call(null,p1__39832_SHARP_,2)))
{return p1__39832_SHARP_;
} else
{return null;
}
});})(frame))
,pontiff.cljs.app.handlers.narratorVideo.rTocList)).parentNode);toc.style.display = "inline";
elements.narratorController.style.display = "inline";
return cljs.core.reset_BANG_.call(null,pontiff.cljs.app.handlers.narratorVideo.tempPanels,cljs.core.list_STAR_.call(null,toc,elements.narratorController,cljs.core.deref.call(null,pontiff.cljs.app.handlers.narratorVideo.tempPanels)));
});
