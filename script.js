const cover=document.getElementById("cover");
const intro=document.getElementById("intro");

document.getElementById("begin").onclick=function(){

cover.style.display="none";

intro.classList.remove("hidden");

};

document.getElementById("next").onclick=function(){

alert("Le chapitre I arrivera ensuite 🙂");

};
