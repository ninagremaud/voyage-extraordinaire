const cover = document.getElementById("cover");
const intro = document.getElementById("intro");
const content = document.getElementById("content");

const chapitres = [

{
    titre: "Chapitre I — Les Premiers Pas",

    texte: `
    <p class="histoire">
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

    videos: [
        "Maman",
        "Papa",
        "Sœur"
    ],

    enigme: `
    Même les Hobbits savent qu'aucune aventure ne commence le ventre vide.

    Où le Voyageur doit-il se rendre ?
    `,

    reponse: "boulangerie",

    indice: `
    Rends-toi au village où l'odeur des meilleurs croissants guide les pas des voyageurs.
    `
},

{
    titre: "Chapitre II — Reprendre des Forces",

    texte: `
    <p class="histoire">
    Les routes ne sont pas toujours faciles.

    Chaque voyageur découvre un jour qu'il doit reprendre des forces avant de poursuivre.
    </p>
    `,

    videos: [
        "Ami 1",
        "Ami 2"
    ],

    enigme: `
    Les Elfes connaissent un lieu où les voyageurs retrouvent leur énergie.

    Quel est-il ?
    `,

    reponse: "massage",

    indice: `
    Il est temps de t'offrir un moment de repos.
    `
}

];

let chapitreActuel = 0;

document.getElementById("begin").onclick = function () {

    cover.style.display = "none";
    intro.classList.remove("hidden");

};

document.getElementById("next").onclick = function () {

    intro.style.display = "none";

    afficherChapitre(0);

};

function afficherChapitre(numero) {

    chapitreActuel = numero;

    const chapitre = chapitres[numero];

    let html = `

    <div class="page">

        <h2>${chapitre.titre}</h2>

        ${chapitre.texte}

        <hr>

        <h3>Les Gardiens de ce Chapitre</h3>

    `;

    chapitre.videos.forEach(video => {

        html += `

        <div class="videoCard">

            <strong>${video}</strong>

            <br><br>

            <button>

                Voir le témoignage

            </button>

        </div>

        `;

    });

    html += `

        <hr>

        <h3>L'Épreuve</h3>

        <p>${chapitre.enigme}</p>

        <input id="reponse" placeholder="Ta réponse">

        <br><br>

        <button onclick="verifier()">

            Valider

        </button>

        <div id="resultat"></div>

    </div>

    `;

    content.innerHTML = html;

}

function verifier() {

    const reponse = document.getElementById("reponse").value.toLowerCase().trim();

    const chapitre = chapitres[chapitreActuel];

    if (reponse === chapitre.reponse) {

        document.getElementById("resultat").innerHTML = `

        <hr>

        <h3>Le chemin se dévoile...</h3>

        <p>${chapitre.indice}</p>

        <button onclick="suivant()">

            Continuer le voyage

        </button>

        `;

    }

    else {

        document.getElementById("resultat").innerHTML =

        "<p>❌ Ce n'est pas la bonne réponse.</p>";

    }

}

function suivant() {

    if (chapitreActuel + 1 < chapitres.length) {

        afficherChapitre(chapitreActuel + 1);

    }

    else {

        content.innerHTML = `

        <div class="page">

            <h2>Épilogue</h2>

            <p>

            Cette aventure n'est pas terminée.

            Les prochaines pages s'écriront tout au long de cette journée.

            </p>

        </div>

        `;

    }

}
