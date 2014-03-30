elements.mainVideo.state = [0, 0, 0, 0];
elements.mainVideo.stateMap = [
[
function() {
elements.narratorVideo.pause();
elements.narratorVideo.className = "quickAnim";
elements.narratorVideo.style.width = "0%";
elements.narratorVideo.style.height = "0%";
elements.narratorVideo.style.margin = "50%";
elements.narratorDiv.style.zIndex = 10;
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels();
elements.narratorVideo.cleanState();},
function() {
if (!elements.mainVideo.paused) 
{
elements.mainVideo.pause();
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels(); 
elements.narratorVideo.currentTime=0;
elements.narratorDiv.style.zIndex = 30;
elements.narratorVideo.play();
}}
],
[
function() {
elements.narratorVideo.pause();
elements.narratorVideo.className = "quickAnim";
elements.narratorVideo.cleanState();
elements.narratorVideo.style.width = "0%";
elements.narratorVideo.style.height = "0%";
elements.narratorVideo.style.margin = "50%";
elements.narratorDiv.style.zIndex = 10;
elements.narratorVideo.skip = false;
elements.narratorVideo.cleanState();
pontiff.cljs.app.handlers.narratorVideo.closeTempPanels();},
function() {
if (!elements.mainVideo.paused) 
{
elements.mainVideo.pause();
elements.narratorVideo.currentTime=40.3333;
elements.narratorVideo.play();
}}
],
[
function() {
elements.officer1.style.display = "none";},
function() {
elements.officer1.style.display = "inline";}
],
[
function() {
elements.linePath.style.display = "none";},
function() {
elements.linePath.style.display = "inline";}
],
];