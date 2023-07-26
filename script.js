// always revise it 1st way

var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTag)
for(var i=0;i<navMenuAnchorTag.length;i++){
	console.log(navMenuAnchorTag[i])
	navMenuAnchorTag[i].addEventListener('click',function(e) {
		e.preventDefault();
 		
 		var targetSectionId = this.textContent.trim().toLowerCase();
 		var targetSection = document.getElementById(targetSectionId);
 		console.log('innerText',targetSectionId) 
 		var Interval = setInterval(function(){
 			var targetSectionCoordinates = targetSection.getBoundingClientRect();
 			if(targetSectionCoordinates.top<=0){
 				clearInterval(Interval);
 				return;
 			}
 			window.scrollBy(0,50);
 		},20)
	})
}

/***************2nd way*/
/*
var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
var Interval
for(var i=0;i<navMenuAnchorTag.length;i++){
	console.log(navMenuAnchorTag[i])
	navMenuAnchorTag[i].addEventListener('click',function(e) {
		e.preventDefault();
 		
 		var targetSectionId = this.textContent.trim().toLowerCase();
 		var targetSection = document.getElementById(targetSectionId);
 		console.log('innerText',targetSectionId) 
 		var Interval = setInterval(scrollVertically,20,targetSection)
		// var Interval = setInterval(function(){
		// 	scrollVertically(targetSection)		
		// },20,targetSection)
	


	})
}

function scrollVertically(targetSection){
 		var targetSectionCoordinates = targetSection.getBoundingClientRect();
 		if(targetSectionCoordinates.top<=0){
 		clearInterval(Interval);
 		return;
 		}
 	window.scrollBy(0,50);
 }
 */


 // skills bar animation

// here we are doing by finging each and every class mannually which is not a corrent

/*
var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTag)
for(var i=0;i<navMenuAnchorTag.length;i++){
	console.log(navMenuAnchorTag[i])
	navMenuAnchorTag[i].addEventListener('click',function(e) {
		e.preventDefault();
 		
 		var targetSectionId = this.textContent.trim().toLowerCase();
 		var targetSection = document.getElementById(targetSectionId);
 		console.log('innerText',targetSectionId) 
 		var Interval = setInterval(function(){
 			var targetSectionCoordinates = targetSection.getBoundingClientRect();
 			aaabb(targetSectionCoordinates);
 			if(targetSectionCoordinates.top<=0){
  				clearInterval(Interval);
 				return;
 			}
 			window.scrollBy(0,50);
 		},20)
	})
}

function aaabb (targetSectionCoordinates){
	if(targetSectionCoordinates.top == -25.0625){
 				var cskill = document.querySelectorAll('.fifty-percent')
 				var dataskills = document.querySelector('.fifty-percent').getAttribute('data-skill-level')
 				console.log('s',dataskills)
 				//console.log(cskill.style.width)
 				for(var i=0;i<cskill.length;i++){
 					console.log(cskill[i].style.width)
 					cskill[i].style.width= dataskills
		}
	}
}

*/

/*
var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTag)
for(var i=0;i<navMenuAnchorTag.length;i++){
	console.log(navMenuAnchorTag[i])
	navMenuAnchorTag[i].addEventListener('click',function(e) {
		e.preventDefault();
 		
 		var targetSectionId = this.textContent.trim().toLowerCase();
 		var targetSection = document.getElementById(targetSectionId);
 		console.log('innerText',targetSectionId) 
 		var Interval = setInterval(function(){
 			var targetSectionCoordinates = targetSection.getBoundingClientRect();
 			if(targetSectionCoordinates.top == -25.0625){
 				var skill_progress = document.querySelectorAll('.skill-progress ')
 				forfor(var i=0;i<skill_progress.length;i++){

 				}

 			// 	console.log(skill_progress)
 			// 	var cskill = document.querySelector('.fifty-percent')
 			// 	var dataskills = document.querySelector('.fifty-percent').getAttribute('data-skill-level')
 			// 	console.log('s',dataskills)
 			// 	console.log(cskill.style.width)
 			//	cskill.style.width = dataskills
 			}
 			if(targetSectionCoordinates.top<=0){
  				clearInterval(Interval);
 				return;
 			}
 			window.scrollBy(0,50);
 		},20)
	})
}
*/
/*&&&&&&&&&&&&&&&&&&*/

/*** code for progress bar
***/
/*
var progressBars = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skills-container')
window.addEventListener('scroll',checkScroll);
var animation = false;

function initilizeBArs() {
	for(let bar of progressBars){
		bar.style.width = 0 + '%';
	}
}

initilizeBArs();
function fillBars() {
	for(let bar of progressBars){
		// here we are using let instead of var as for every bar we should have one target
		let targetWidth = bar.getAttribute('data-bar-width');
		let currentWidth = 0; 	
		let interval = setInterval(function() {
			if(currentWidth>targetWidth){
			clearInterval(interval);
			return;
			}
			currentWidth++;
			bar.style.width = currentWidth+ '%';
		},3)

	}
}

function checkScroll(){

	//console.log('we aare scrolling')
	var skillcoordinates = skillContainer.getBoundingClientRect(); // for getting th coordinates of skill
	if(!animation && skillcoordinates.top<window.innerHeight){ // to get inner height i.e your screen section is visible on the screen
		animation=true;
		console.log('skill section visible')
		fillBars();	
	}else if(skillcoordinates.top>window.innerHeight){
		animation=false;
		initilizeBArs();
	}
}
*/

/***END code for progress bar finished
***/

/*** code for individual progress bar
***/

	
/*** code for individual progress bar
***/
var progressBar = document.querySelectorAll('.skill-progress > div')
var animation = false;
window.addEventListener('scroll',checkScroll);

	function initilzeBArs(bar){
		let classNames = document.querySelector('.'+bar);
		console.log(classNames.style.width)
		classNames.style.width = 0+'%';

}
// fill bars
function fillBars(coords,classNames){
//console.log('claseeName',classNames) // ?

var newEle = document.querySelector('.'+classNames)
//console.log(newEle.style)
let targetWidth = newEle.getAttribute('data-bar-width');
//console.log(targetWidth)
let currentWidth = 0; 	
let Interval = setInterval(function(){
	if(currentWidth>targetWidth){
		clearInterval(Interval);
		return;
	}else{
		currentWidth++;
		newEle.style.width = currentWidth + '%';
	}
})
		
}

function checkScroll() {
for(let i of progressBar){
	//console.log('i',i);
	var coord = i.getBoundingClientRect();
//	console.log(coord)
	let InnerClassValue = '';
	InnerClassValue=i.getAttribute("class")
	let classValue =InnerClassValue.split(' ') 
//	console.log(classValue)
	let ccname= classValue[0];
	console.log('ccname@top',ccname)
	if(coord.top<window.innerHeight){
		//animation = true;
		//console.log(window.innerHeight)
		fillBars(coord.top,ccname);
	}
	else if(coord.top>window.innerHeight){
		//console.log('logss',coord.top)
		//animation = false;
		initilzeBArs(ccname)
	}
}	
}

