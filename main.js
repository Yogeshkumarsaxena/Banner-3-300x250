


//document.getElementById("ad").addEventListener("click",function(){window.open(link,"_blank")})


document.getElementById("mainExit").addEventListener('mouseover', rollover);
document.getElementById("mainExit").addEventListener('mouseout', rollout);
ad.addEventListener('click', exitHandler);


window.onload = function (){
	TweenLite.set("#default-bg", { alpha:1});
	TweenLite.set("#hero", { x: -50, y: -45, alpha:1});
	TweenLite.set("#branding", { y: -64, alpha:1 });
	TweenLite.set(["#champians","#underline"], { x: 120, alpha:0});
	TweenLite.set( "#stroke-top", { alpha:1});
	TweenLite.set( "#stroke-btm", { alpha:1});
	TweenLite.set("#rating", { alpha:0} );
	TweenLite.set("#order-now", { alpha:1, x:120});
	TweenLite.set("#conditions", { alpha:1, y:50});
	TweenLite.set("#details", { alpha:1, y:50});
	TweenLite.set("#avail", { alpha: 1});
    
	TweenLite.to("#default-bg", 0, { alpha:0, delay:1});
	TweenLite.to("#hero", 3.5, { x: 0, ease:Power0.easeNone, alpha:1, delay:1});
	TweenLite.to(["#champians","#underline"], .5, { x:0, easeNone:Power0.easeNone, alpha:1, delay:1});
	TweenLite.to("#stroke-top", 0.5, { width: 70, ease:Power0.easeNone, delay:1});
	TweenLite.to("#stroke-btm", 0.5, { width: 150, ease:Power0.easeNone, delay:1});
	TweenLite.to("#champians", 0.5, { clip:"rect(0px 85px 0px 0px)",ease:Power0.easeNone, delay:3.4});
	TweenLite.to("#underline", 0.5, { y:-45, ease:Power0.easeNone, delay:3.4});
	TweenLite.to("#underline", 0.2, { alpha:0, ease:Power0.easeNone, delay:4});
	TweenLite.delayedCall(4.5, frame2Animation);	
}

function frame2Animation() {
	TweenLite.to("#hero", 0.5, { y: 0, ease:Quad.easeIn, alpha:1 });
	TweenLite.to("#rating", 1, { alpha: 1});
	TweenLite.to("#branding", 0.5, { y: 0, ease:Quad.easeIn, alpha:1});
	TweenLite.to("#logo", 0.5, { y:11, ease:Quad.easeIn});
	TweenLite.to("#order-now", 0.5, { x:0, ease:Power0.easeNone});
	TweenLite.to("#conditions", 0.5, { y:0, ease:Power0.easeNone});
	TweenLite.to("#details", 0.5, { y:0, ease:Power0.easeNone});
	TweenLite.to("#avail", 0.5, { clip:"rect(0px 100px 40px 0px)",ease:Power0.easeNone});
	TweenLite.set("#mainExit",{display:"block",delay:1});
}

	


function rollover() {
	TweenLite.to("#avail", 0.3, { clip:"rect(0px 100px 40px 100px)",ease:Power0.easeNone});
    TweenLite.to("#conditions", 0.3, { y:50, ease:Power0.easeNone});
	TweenLite.to("#details", 0.3, { y:50, ease:Power0.easeNone});
	TweenLite.to("#hero", 0.3, { x:-175, ease:Power0.easeNone});
	TweenLite.to("#branding", 0.3, { y: -64, ease:Power0.easeNone});
	TweenLite.to("#rating", 0, { alpha: 0, delay:0.1});
	TweenLite.to("#bar", 0.3,{ right: 300, opacity:0, ease:Power0.easeNone});
	TweenLite.to("#dark-blue", 0.3, { width:"300px", ease:Power0.easeNone});
	TweenLite.to("#stroke",0.3, { x: 160, y:-106} );
	TweenLite.set("#strokeLeft", {x: -100, y:50, opacity:1 });
    TweenLite.to("#strokeLeft", 0.3, {x:0, y:0 });
	TweenLite.to("#champiansCenter",0.3, { x: 230, opacity:1});
	TweenLite.set("#champiansCenter", { x: 0});
	TweenLite.to("#logo", 0.3, { scale: 1.4, x:-75, y:10});
	TweenLite.to("#order-now", 0.3, { scale:1.2, x: -85, y:10});
}
    
function rollout() {
    TweenLite.to("#avail", 0.3, { clip:"rect(0px 100px 40px 0px)",ease:Power0.easeNone});
    TweenLite.to("#conditions", 0.3, { y:0, ease:Power0.easeNone});
	TweenLite.to("#details", 0.3, { y:0, ease:Power0.easeNone});
	TweenLite.to("#hero", 0.3, { x:0, ease:Power0.easeNone});
	TweenLite.to("#branding", 0.3, { y: 0, ease:Power0.easeNone});
	TweenLite.to("#rating", 0.3, { alpha: 1});
	TweenLite.to("#bar", 0.3, { right:144,opacity: 1, ease:Power0.easeNone});
	TweenLite.to("#dark-blue", 0.3, { width:"144px", ease:Power0.easeNone});
	TweenLite.set("#stroke", { x: -100, y: 50});
	TweenLite.to("#stroke",0.3, { x: 0, y: 0} );
	TweenLite.to("#strokeLeft", 0.3, {x: 100, y: -50 });
	TweenLite.to("#champiansCenter",0.3, { x: 460});
	TweenLite.to("#logo", 0.3, { scale: 1, x: 0, y:10});
	TweenLite.to("#order-now", 0.3, { scale:1, x: 0, y:0});
}

function exitHandler() {
	//console.log("clicked")
	window.open(window.clickTag);

}