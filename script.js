const startButton=document.getElementById("startButton");

const cover=document.getElementById("cover");

const chapter=document.getElementById("chapter");

const unlockButton=document.getElementById("unlockButton");

const password=document.getElementById("password");

const message=document.getElementById("message");

startButton.onclick=()=>{

cover.style.display="none";

chapter.classList.remove("hidden");

}

unlockButton.onclick=()=>{

if(password.value.toLowerCase()=="shire"){

message.innerHTML="✨ Le premier chapitre sera bientôt révélé.";

message.style.color="green";

}else{

message.innerHTML="Le Livre Rouge demeure silencieux...";

message.style.color="darkred";

}

}
