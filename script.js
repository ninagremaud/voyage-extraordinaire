const cover = document.getElementById("cover");
const intro = document.getElementById("intro");
const content = document.getElementById("content");

let chapitreActuel = 0;


// ======================================================
// LES CHAPITRES
// ======================================================

const chapitres = [

    // ==================================================
    // CHAPITRE I — LES PREMIERS PAS
    // ==================================================

    {
        titre: "Chapitre I — Les Premiers Pas",

        texte: `
        <p class="histoire">
        Toute aventure commence bien avant que le Voyageur ne prenne la route.

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
                nom: "Lucienne",
                role: "Gardien des premiers pas",

                type: "photoTexte",

                photo: "Souvenirs/Lucienne.jpeg",

                texte: `
                <p>
                <strong>Cher Eloi,</strong>
                </p>

                <p>
                Juste un petit mot de Tata …
                </p>

                <p>
                30 ans, c’est comme une page blanche… sauf qu’elle commence avec plein de belles couleurs déjà passées :
                </p>

                <ul>
                    <li>le vert pour les années passées à la ferme</li>
                    <li>le rose pour les fleurs de maman et les câlins de ta sœur</li>
                    <li>le rouge pour la période de l’adolescence</li>
                    <li>le bleu pour toutes tes envies de rêve</li>
                </ul>

                <p>
                et j’en passe.
                </p>

                <p>
                On oubliera les couleurs sombres.
                </p>

                <p>
                30 ans, on n’a plus besoin de plaire à tout le monde.
                On cherche surtout à être en accord avec soi.
                Et toi tu y arrives si bien.
                </p>

                <p>
                Je te souhaite une décennie de choix assumés,
                de projets magiques peut-être à deux.
                Tu vas briller. Bravo !
                </p>

                <p>
                Tout petit déjà ton caractère de grand-papa Elie
                et surtout ton sourire faisaient tomber tout le monde.
                </p>

                <p>
                Reste comme tu es et continue à propager
                cette bonne humeur autour de toi.
                </p>

                <p>
                Gros bisous je t’aime très fort.
                </p>

                <p>
                <strong>Tata</strong>
                </p>

                <p>
                <em>
                PS : une bouteille de champagne t’attend avec Nina
                quand tu seras libre
                </em>
                </p>
                `
            },

            {
                nom: "Charles",
                role: "Gardien des premiers pas",

                type: "video",

                media: "Souvenirs/Charles.mp4"
            }

        ],


        // GALERIE

        galerie: [
            "bebe.jpeg",
            "bebe1.jpeg",
            "bebe2.jpeg",
            "bebe3.jpeg",
            "bebe4.jpeg",
            "bebe5.jpeg",
            "bebe6.jpeg",
            "bebe7.jpeg",
            "bebe8.jpeg",
            "bebe9.jpeg"
        ],


        enigme: `
        Même les plus courageux des Voyageurs savent
        qu'aucune quête ne commence le ventre vide.

        Le Livre parle d'une première halte.

        Une halte simple.

        Dorée.

        Croustillante.

        Et qui se déguste généralement encore chaude.

        <br><br>

        <strong>
        Quelle sera la première étape de ton voyage ?
        </strong>
        `,

        reponse: "croissant",

        revelation: `

        <div class="destination">

            <div class="heure">
                ☀️ PREMIÈRE ÉTAPE
            </div>

            <h3>
                Le petit-déjeuner du Voyageur
            </h3>

            <p>
                Le Livre ne pouvait commencer ton
                trentième été autrement.
            </p>

            <p>
                🥐 <strong>Un croissant.</strong>
            </p>

            <p>
                Le lieu sera choisi sur le chemin.
            </p>

            <p>
                <strong>
                🕐 Heure : quand tu le souhaiteras ce matin.
                </strong>
            </p>

        </div>

        `
    },


    // ==================================================
    // CHAPITRE II — LES COMPAGNONS DE ROUTE
    // ==================================================

    {
        titre: "Chapitre II — Les Compagnons de Route",

        texte: `
        <p class="histoire">
        Les routes deviennent différentes lorsque l'on
        cesse de les parcourir seul.

        Au fil du voyage apparaissent de nouveaux visages.

        Certains restent quelques kilomètres.

        D'autres partagent une saison entière.

        Et parfois, sans même que l'on s'en rende compte,
        certains deviennent de véritables compagnons de route.
        </p>
        `,


        // ==================================================
        // COMPAGNONS
        // ==================================================

        temoignages: [

            {
                nom: "Compagnon 1",
                role: "Compagnon de route",

                type: "audio",

                media: "Souvenirs/Fx.ogg",

                format: "audio/ogg"
            },

            {
                nom: "Compagnon 2",
                role: "Compagnon de route",

                type: "audio",

                media: "Souvenirs/CharlesAmi.ogg",

                format: "audio/ogg"
            },

            {
                nom: "Compagnon 3",
                role: "Compagnon de route",

                type: "video",

                media: "Souvenirs/Lucas.mp4"
            },

            {
                nom: "Compagnon 4",
                role: "Compagnon de route",

                type: "video",

                media: "Souvenirs/Robin.mp4"
            },

            {
                nom: "Compagnon 5",
                role: "Compagnon de route",

                type: "video",

                media: "Souvenirs/Guillaume.mp4"
            }

        ],


        // ==================================================
        // GALERIE
        // ==================================================

        galerie: [
            "enfant1.jpeg",
            "enfant10.jpeg",
            "enfant4.jpeg",
            "enfant5.jpeg",
            "enfant6.jpeg",
            "enfant7.jpeg"
        ],


        // ==================================================
        // ENIGME
        // ==================================================

        enigme: `
        Le Voyageur vient de reprendre la route.

        Mais il ne restera pas longtemps seul.

        Le prochain rendez-vous se trouve dans une ville
        où l'on peut entendre l'eau accompagner les pas
        de ceux qui traversent ses rues.

        <br><br>

        Cherche un lieu dont le nom évoque naturellement
        les voyages, les départs et les arrivées.

        <br><br>

        <strong>
        Où dois-tu te rendre ?
        </strong>
        `,

        reponse: "port",


        // ==================================================
        // REVELATION
        // ==================================================

        revelation: `

        <div class="destination">

            <div class="heure">
                🍽️ PROCHAINE ÉTAPE — 12H00
            </div>

            <h3>
                Le repas des Voyageurs
            </h3>

            <p>
                Le Livre t'indique maintenant
                la prochaine destination.
            </p>

            <p>
                ⚓ <strong>Le Port</strong>
                <br>
                Fribourg
            </p>

            <p>
                <strong>
                🕐 Rendez-vous : 12h00
                </strong>
            </p>

        </div>

        `
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


    // ==================================================
    // TEMOIGNAGES
    // ==================================================

    if (chapitre.temoignages.length > 0) {

        html += `

        <hr>

        <h3>Les Gardiens</h3>

        <p>
        Certains souvenirs ne peuvent être enfermés
        dans les pages d'un livre.
        Ils vivent encore dans la mémoire de ceux
        qui ont marché à tes côtés.
        </p>

        `;


        chapitre.temoignages.forEach((personne, index) => {

            html += `

            <div class="videoCard">

                <strong>
                    ${personne.nom}
                </strong>

                <br>

                <small>
                    ${personne.role}
                </small>

                <br><br>

                <button
                    onclick="ouvrirSouvenir(${index})"
                >
                    Accéder au souvenir
                </button>

            </div>

            `;

        });

    }


    // ==================================================
    // GALERIE
    // ==================================================

    if (chapitre.galerie && chapitre.galerie.length > 0) {

        html += `

        <hr>

        <h3>
            ${
                numero === 0
                ? "Les premiers souvenirs"
                : "Quelques souvenirs"
            }
        </h3>

        <p>
            Certaines images racontent des histoires
            qu'aucun mot ne saurait remplacer.
        </p>

        <div class="galerie-souvenirs">
        `;


        chapitre.galerie.forEach(photo => {

            html += `

            <img
                src="Souvenirs/${photo}"
                alt="Souvenir"
            >

            `;

        });


        html += `

        </div>

        `;

    }


    // ==================================================
    // ZONE DES SOUVENIRS
    // ==================================================

    html += `

    <div id="souvenir"></div>

    `;


    // ==================================================
    // ENIGME
    // ==================================================

    if (chapitre.enigme) {

        html += `

        <hr>

        <h3>
            L'Épreuve
        </h3>

        <p>
            ${chapitre.enigme}
        </p>

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
// OUVRIR UN SOUVENIR
// ======================================================

function ouvrirSouvenir(index) {

    const chapitre = chapitres[chapitreActuel];

    const souvenir = chapitre.temoignages[index];

    const zone = document.getElementById("souvenir");


    // ==================================================
    // PHOTO + TEXTE
    // ==================================================

    if (souvenir.type === "photoTexte") {

        zone.innerHTML = `

        <div class="page souvenirPage">

            <h3>
                ${souvenir.nom}
            </h3>

            <p>
                <em>${souvenir.role}</em>
            </p>

            <img
                src="${souvenir.photo}"
                alt="Souvenir"
                class="souvenirImage"
            >

            <div class="souvenirText">

                ${souvenir.texte}

            </div>

        </div>

        `;

    }


    // ==================================================
    // VIDEO
    // ==================================================

    else if (souvenir.type === "video") {

        zone.innerHTML = `

        <div class="page souvenirPage">

            <h3>
                ${souvenir.nom}
            </h3>

            <p>
                <em>${souvenir.role}</em>
            </p>

            <video
                class="souvenirVideo"
                controls
                playsinline
            >

                <source
                    src="${souvenir.media}"
                    type="video/mp4"
                >

                Ton navigateur ne peut pas lire cette vidéo.

            </video>

        </div>

        `;

    }


    // ==================================================
    // AUDIO
    // ==================================================

    else if (souvenir.type === "audio") {

        zone.innerHTML = `

        <div class="page souvenirPage">

            <h3>
                ${souvenir.nom}
            </h3>

            <p>
                <em>${souvenir.role}</em>
            </p>

            <p>
                Prends le temps d'écouter ce souvenir.
            </p>

            <audio
                class="souvenirAudio"
                controls
            >

                <source
                    src="${souvenir.media}"
                    type="${souvenir.format}"
                >

                Ton navigateur ne peut pas lire cet audio.

            </audio>

        </div>

        `;

    }


    zone.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ======================================================
// VERIFIER L'ENIGME
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


    // ==================================================
    // BONNE REPONSE
    // ==================================================

    if (reponse === bonneReponse) {

        let boutonSuivant = "";


        if (chapitreActuel + 1 < chapitres.length) {

            boutonSuivant = `

            <button onclick="chapitreSuivant()">

                Accéder au chapitre suivant

            </button>

            `;

        }


        document.getElementById("resultat").innerHTML = `

        <div class="revelation">

            ${chapitre.revelation}


            <div class="transition-livre">

                <hr>

                <h3>
                    📖 Le Livre se referme...
                </h3>

                <p>
                    Une nouvelle page t'attend
                    dans ton carnet.
                </p>

                <p>
                    Prends le temps de découvrir
                    la suite de ton histoire avant
                    de poursuivre ton voyage.
                </p>

                <p>
                    <strong>
                        Retourne au Livre.
                    </strong>
                </p>

                ${boutonSuivant}

            </div>

        </div>

        `;

    }


    // ==================================================
    // MAUVAISE REPONSE
    // ==================================================

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


// ======================================================
// CHAPITRE SUIVANT
// ======================================================

function chapitreSuivant() {

    if (chapitreActuel + 1 < chapitres.length) {

        afficherChapitre(chapitreActuel + 1);

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

}
