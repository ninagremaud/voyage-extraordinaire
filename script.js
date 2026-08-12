const cover = document.getElementById("cover");
const intro = document.getElementById("intro");
const content = document.getElementById("content");


// ======================================================
// LES 7 CHAPITRES DU LIVRE
// ======================================================

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

    temoignages: [
        {
            nom: "Grand-papa",
            role: "Gardien des premiers jours",
            media: ""
        },
        {
            nom: "Lucienne",
            role: "Gardienne des premiers souvenirs",
            media: ""
        },
        {
            nom: "Charles",
            role: "Gardien des premières aventures",
            media: ""
        }
    ],

    enigme: `
    Même les plus courageux des Voyageurs savent qu'aucune quête ne commence le ventre vide.

    Le Livre parle d'une première halte.

    Une halte simple.

    Dorée.

    Croustillante.

    Et qui se déguste généralement encore chaude.

    <br><br>

    <strong>Quelle sera la première étape de ton voyage ?</strong>
    `,

    reponse: "croissant",

    revelation: `
    <h3>La première étape est révélée</h3>

    <p>
    Le Livre ne pouvait commencer ton trentième été autrement.
    </p>

    <p class="destination">
    🥐 <strong>Une halte pour un croissant.</strong>
    </p>

    <p>
    Le lieu sera choisi sur le chemin.
    </p>

    <p class="retour-livre">
    Le Livre ne te révélera rien de plus pour l'instant.<br>
    <strong>Retourne à ses pages.</strong>
    </p>
    `,

    motSuivant: "ENFANCE"
},

{
    titre: "Chapitre II — Les Sentiers de l'Enfance",

    texte: `
    <p class="histoire">
    Les chemins que l'on parcourt enfant semblent parfois les plus petits.

    Pourtant, ce sont souvent eux qui nous mènent le plus loin.

    Lorsque le Voyageur apprit enfin à marcher, le monde grandit avec lui.

    Chaque sentier devenait une aventure.

    Chaque forêt cachait un royaume.

    Chaque journée semblait pouvoir durer éternellement.
    </p>
    `,

    temoignages: [
        {
            nom: "Ami 1",
            role: "Compagnon des premières grandes aventures",
            media: ""
        }
    ],

    enigme: `
    Les routes deviennent parfois longues.

    Et lorsque le corps réclame une pause, même les plus grands Voyageurs savent qu'il faut savoir s'arrêter.

    Cherche un endroit où l'on ne vient ni pour courir,

    ni pour combattre,

    mais pour se laisser entièrement prendre en charge.

    <br><br>

    <strong>Quelle est la prochaine étape ?</strong>
    `,

    reponse: "massage",

    revelation: `
    <h3>Une halte de repos t'attend</h3>

    <p>
    Le Voyageur a rendez-vous à :
    </p>

    <p class="destination">
    💆 <strong>Au Cocooning Institut</strong><br>
    Place des Alpes 26<br>
    1630 Bulle<br><br>
    <strong>16h45</strong>
    </p>

    <p>
    Il est temps de laisser les routes derrière toi quelques instants.
    </p>

    <p class="retour-livre">
    Le Livre s'arrête ici pour le moment.<br>
    <strong>Retourne à ses pages pour poursuivre ton aventure.</strong>
    </p>
    `,

    motSuivant: "COMPAGNONS"
},

{
    titre: "Chapitre III — Les Grandes Routes",

    texte: `
    <p class="histoire">
    Il arrive un moment où les chemins tracés par les autres ne suffisent plus.

    Le Voyageur doit alors choisir lesquels emprunter.

    Certains détours deviennent des découvertes.

    Certaines erreurs deviennent des enseignements.

    Et certaines rencontres changent pour toujours la direction du voyage.
    </p>
    `,

    temoignages: [
        {
            nom: "Ami 2",
            role: "Compagnon de route",
            media: ""
        }
    ],

    enigme: `
    Une nouvelle épreuve t'attend.

    Cette fois, il faudra retrouver un lieu où deux Voyageurs peuvent s'affronter,

    courir,

    viser,

    et surtout essayer de ne pas envoyer la balle dans les contrées lointaines.

    <br><br>

    <strong>Où dois-tu te rendre ?</strong>
    `,

    reponse: "padel",

    revelation: `
    <h3>Une nouvelle épreuve t'attend</h3>

    <p class="destination">
    🎾 <strong>Padel</strong><br><br>
    Rendez-vous à <strong>18h00</strong> devant les terrains de tennis à Bulle.
    </p>

    <p>
    Prépare-toi à montrer que les années de voyage ont fait de toi un redoutable aventurier.
    </p>

    <p class="retour-livre">
    Le prochain chemin ne se trouve pas ici.<br>
    <strong>Retourne au Livre.</strong>
    </p>
    `,

    motSuivant: "COMPAGNIE"
},

{
    titre: "Chapitre IV — La Compagnie",

    texte: `
    <p class="histoire">
    Aucun Voyageur ne traverse le monde entièrement seul.

    Au fil des années, de nouveaux visages apparurent sur son chemin.

    Certains ne firent qu'un bout de route.

    D'autres choisirent d'y rester.

    Ils devinrent sa Compagnie.

    Et le Voyageur découvrit alors que les plus grandes richesses ne se trouvent pas dans les coffres,

    mais dans les personnes avec lesquelles on choisit de partager la route.
    </p>
    `,

    temoignages: [
        {
            nom: "Les sœurs",
            role: "Compagnes de route depuis toujours",
            media: ""
        }
    ],

    enigme: `
    Les Voyageurs savent qu'après les grandes épreuves,

    vient parfois le moment de s'asseoir,

    de lever son verre,

    et de profiter simplement de la compagnie de ceux qui nous entourent.

    <br><br>

    Le Livre parle d'un jardin caché.

    <br><br>

    <strong>Que t'annonce-t-il ?</strong>
    `,

    reponse: "verre",

    revelation: `
    <h3>Une halte parmi les compagnons</h3>

    <p>
    Ce soir, les Voyageurs se retrouvent autour d'un verre.
    </p>

    <p class="destination">
    🌿 <strong>Côté Jardin</strong><br>
    Rue de la Sionge 4<br>
    1630 Bulle<br><br>
    <strong>19h30</strong>
    </p>

    <p>
    Coordonnées du lieu :
    </p>

    <p>
    <strong>Rue de la Sionge 4, 1630 Bulle</strong>
    </p>

    <p class="retour-livre">
    Une dernière partie de l'histoire t'attend.<br>
    <strong>Retourne au Livre.</strong>
    </p>
    `,

    motSuivant: "EPREUVE"
},

{
    titre: "Chapitre V — Les Épreuves",

    texte: `
    <p class="histoire">
    Aucun voyage ne se déroule exactement comme prévu.

    Les cartes sont parfois incomplètes.

    Les détours plus nombreux que prévu.

    Les tempêtes arrivent sans prévenir.

    Mais ce sont souvent ces chemins-là qui révèlent ce que le Voyageur porte réellement en lui.
    </p>
    `,

    temoignages: [
        {
            nom: "Marion",
            role: "Gardienne du cœur",
            media: ""
        },
        {
            nom: "Maman",
            role: "Gardienne des premiers chapitres",
            media: ""
        },
        {
            nom: "Cathi",
            role: "Gardienne de la route",
            media: ""
        }
    ],

    enigme: `
    Le Voyageur a traversé suffisamment d'épreuves pour mériter une dernière récompense.

    Une récompense simple.

    Ronde.

    Chaude.

    Et que l'on partage généralement autour d'une table.

    <br><br>

    <strong>Quelle sera la prochaine étape ?</strong>
    `,

    reponse: "pizza",

    revelation: `
    <h3>Le dernier banquet</h3>

    <p>
    Le Livre t'accorde enfin une récompense digne d'un grand Voyageur.
    </p>

    <p class="destination">
    🍕 <strong>Une pizza.</strong>
    </p>

    <p>
    Ton bon t'attend pour la suite de la soirée.
    </p>

    <p class="retour-livre">
    Mais avant cela...<br>
    <strong>Retourne au Livre.</strong>
    </p>
    `,

    motSuivant: "REGARD"
},

{
    titre: "Chapitre VI — Le Regard des Gardiens",

    texte: `
    <p class="histoire">
    Aucun Voyageur ne peut voir son propre chemin dans son ensemble.

    Pour cela, il lui faut parfois emprunter le regard de ceux qui l'aiment.

    Car nous avançons souvent sans mesurer ce que notre présence change dans la vie des autres.

    Un mot.

    Un rire.

    Une main tendue.

    Autant de petites choses qui peuvent devenir immenses pour celui qui les reçoit.
    </p>
    `,

    temoignages: [
        {
            nom: "Les Gardiens",
            role: "Pour la suite de ton aventure...",
            media: ""
        }
    ],

    enigme: `
    Il reste une dernière page.

    Mais celle-ci ne peut être ouverte par un simple mot de passage.

    Le Livre sait qu'elle appartient à quelqu'un qui marche depuis maintenant un certain temps aux côtés du Voyageur.

    <br><br>

    <strong>Qui doit écrire la prochaine page ?</strong>
    `,

    reponse: "moi",

    revelation: `
    <h3>Le Livre se tait.</h3>

    <p>
    Certaines pages ne peuvent être écrites par les anciens livres.
    </p>

    <p>
    Elles appartiennent à ceux qui connaissent le cœur du Voyageur mieux que personne.
    </p>

    <p>
    Les prochaines lignes ne sont plus les miennes.
    </p>

    <p>
    <strong>Je te les confie.</strong>
    </p>

    <p class="retour-livre">
    Retourne au carnet.
    </p>
    `,

    motSuivant: "TRIENTIEME"
},

{
    titre: "Chapitre VII — Le Trentième Été",

    texte: `
    <p class="histoire">
    Il arrive parfois que deux Voyageurs empruntent des chemins différents sans savoir qu'ils avancent vers la même destination.

    Puis leurs routes se croisent.

    Et le voyage ne devient pas plus facile.

    Il devient simplement plus beau.

    Car certains compagnons finissent par devenir le foyer vers lequel on revient,

    quelle que soit la longueur du voyage.
    </p>
    `,

    temoignages: [],

    enigme: "",

    reponse: "",

    revelation: `
    <h3>Les dernières pages appartiennent à quelqu'un d'autre.</h3>

    <p>
    Le Livre a raconté le voyage jusqu'ici.
    </p>

    <p>
    Il est maintenant temps de laisser une autre voix parler.
    </p>
    `,

    motSuivant: ""
}

];


// ======================================================
// OUVERTURE DU LIVRE
// ======================================================

document.getElementById("begin").onclick = function () {

    cover.style.display = "none";
    intro.classList.remove("hidden");

};


// ======================================================
// PREMIER CHAPITRE
// ======================================================

document.getElementById("next").onclick = function () {

    intro.style.display = "none";

    afficherChapitre(0);

};


// ======================================================
// AFFICHER UN CHAPITRE
// ======================================================

function afficherChapitre(numero) {

    chapitreActuel = numero;

    const chapitre = chapitres[numero];

    let html = `

    <div class="page">

        <h2>${chapitre.titre}</h2>

        ${chapitre.texte}

    `;


    // Témoignages

    if (chapitre.temoignages.length > 0) {

        html += `

        <hr>

        <h3>Les Chroniqueurs</h3>

        <p>
        Certains souvenirs ne peuvent être enfermés dans les pages d'un livre.
        Ils vivent encore dans la mémoire de ceux qui ont marché à tes côtés.
        </p>

        `;

        chapitre.temoignages.forEach(personne => {

            html += `

            <div class="videoCard">

                <strong>${personne.nom}</strong>

                <br>

                <small>${personne.role}</small>

                <br><br>

                ${
                    personne.media
                    ?
                    `<a href="${personne.media}" target="_blank">
                        <button>Ouvrir le souvenir</button>
                    </a>`
                    :
                    `<button disabled>
                        Souvenir à venir
                    </button>`
                }

            </div>

            `;

        });

    }


    // Chapitre VII : pas d'énigme

    if (chapitre.enigme) {

        html += `

        <hr>

        <h3>L'Épreuve</h3>

        <p>${chapitre.enigme}</p>

        <input
            id="reponse"
            type="text"
            placeholder="Ta réponse"
            autocomplete="off"
        >

        <br><br>

        <button onclick="verifier()">
            Valider
        </button>

        <div id="resultat"></div>

        `;

    }


    html += `

    </div>

    `;

    content.innerHTML = html;

}


// ======================================================
// VERIFIER UNE ENIGME
// ======================================================

function verifier() {

    const champ = document.getElementById("reponse");

    if (!champ) return;

    const reponse = champ.value
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const chapitre = chapitres[chapitreActuel];

    const bonneReponse = chapitre.reponse
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");


    if (reponse === bonneReponse) {

        document.getElementById("resultat").innerHTML = `

        <div class="revelation">

            ${chapitre.revelation}

        </div>

        `;

    }

    else {

        document.getElementById("resultat").innerHTML = `

        <p>
        ❌ Le Livre ne reconnaît pas cette réponse.
        </p>

        <p>
        Relis attentivement les indices...
        </p>

        `;

    }

}
