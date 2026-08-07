const cover = document.getElementById("cover");
const intro = document.getElementById("intro");
const content = document.getElementById("content");

const chapitres = [

{
titre:"Chapitre I — Les Premiers Pas",

texte:`

<p>

Toute aventure commence bien avant que le voyageur ne prenne la route.

Avant les montagnes.

Avant les grands choix.

Avant même qu'il ne comprenne que sa vie deviendrait une aventure.

Il y eut un enfant.

Curieux.

Rieur.

Toujours prêt à explorer le monde.

</p>

`,

videos:[
"Maman",
"Papa",
"Sœur"
],

enigme:`

Même les Hobbits savent qu'aucune aventure ne commence le ventre vide.

Où le Voyageur doit-il se rendre ?

`,

reponse:"boulangerie",

indice:"🥐 Direction la boulangerie !"
},

{
titre:"Chapitre II",

texte:`

<p>

Les routes ne sont pas toujours faciles.

Chaque voyageur découvre un jour qu'il doit apprendre à reprendre des forces avant de poursuivre.

</p>

`,

videos:[
"Ami 1",
"Ami 2"
],

enigme:`

Les Elfes connaissent un lieu où les voyageurs retrouvent leur énergie.

Quel est-il ?

`,

reponse:"massage",

indice:"💆 Direction le massage."
}

];

let chapitreActuel = 0;

document.getElementById("begin").onclick = function(){

cover.style.display="none";
intro.classList.remove("hidden");

};

document.getElementById("next").onclick=function(){

intro.style.display="none";

afficherChapitre(0);

};

function afficherChapitre(numero){

chapitreActuel=numero;

let chapitre=chapitres[numero];

let html=`

<div class="page">

<h2>${chapitre.titre}</h2>

${chapitre.texte}

<hr>

<h3>🎥 Témoignages</h3>

`;

chapitre.videos.forEach(video=>{

html+=`

<div class="videoCard">

🎥 ${video}

<br><br>

<button>Voir la vidéo</button>

</div>

`;

});

html+=`

<hr>

<h3>🧩 Énigme</h3>

<p>

${chapitre.enigme}

</p>

<input id="reponse">

<button onclick="verifier()">

Valider

</button>

<p id="resultat"></p>

</div>

`;

content.innerHTML=html;

}

function verifier(){

let reponse=document.getElementById("reponse").value.toLowerCase();

let chapitre=chapitres[chapitreActuel];

if(reponse===chapitre.reponse){

document.getElementById("resultat").innerHTML=

`

<br>

✅ ${chapitre.indice}

<br><br>

<button onclick="suivant()">

Continuer

</button>

`;

}

else{

document.getElementById("resultat").innerHTML=

"❌ Ce n'est pas la bonne réponse.";

}

}

function suivant(){

if(chapitreActuel+1<chapitres.length){

afficherChapitre(chapitreActuel+1);

}

else{

content.innerHTML=`

<div class="page">

<h2>Fin de la démo</h2>

<p>

Le reste du voyage sera ajouté prochainement.

</p>

</div>

`;

}

}
