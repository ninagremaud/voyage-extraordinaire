const cover = document.getElementById("cover");
const intro = document.getElementById("intro");
const content = document.getElementById("content");


// ======================================================
// LES 7 CHAPITRES DU LIVRE
// ======================================================

const chapitres = [

    // ==================================================
    // CHAPITRE I
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

        `,

        motSuivant: "ENFANCE"
    },


    // ==================================================
    // CHAPITRE II
    // ==================================================

    {
        titre: "Chapitre II — Les Sentiers de l'Enfance",

        texte: `
        <p class="histoire">
        Les chemins que l'on parcourt enfant semblent parfois
        les plus petits.

        Pourtant, ce sont souvent eux qui nous mènent le plus loin.

        Lorsque le Voyageur apprit enfin à marcher,
        le monde grandit avec lui.

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

        Et lorsque le corps réclame une pause,
        même les plus grands Voyageurs savent
        qu'il faut savoir s'arrêter.

        Cherche un endroit où l'on ne vient ni pour courir,

        ni pour combattre,

        mais pour se laisser entièrement prendre en charge.

        <br><br>

        <strong>
        Quelle est la prochaine étape ?
        </strong>
        `,

        reponse: "massage",

        revelation: `

        <div class="destination">

            <div class="heure">
                💆 PROCHAINE ÉTAPE — 16H45
            </div>

            <h3>
                Une halte pour le Voyageur
            </h3>

            <p>
                Après tant de routes parcourues,
                même les plus grands aventuriers doivent
                parfois s'accorder un moment de repos.
            </p>

            <p>
                💆 <strong>Au Cocooning Institut</strong>
                <br>
                Place des Alpes 26
                <br>
                1630 Bulle
            </p>

            <p>
                <strong>
                🕐 Rendez-vous : 16h45
                </strong>
            </p>

        </div>

        `,

        motSuivant: "COMPAGNONS"
    },


    // ==================================================
    // CHAPITRE III
    // ==================================================

    {
        titre: "Chapitre III — Les Grandes Routes",

        texte: `
        <p class="histoire">
        Il arrive un moment où les chemins tracés
        par les autres ne suffisent plus.

        Le Voyageur doit alors choisir lesquels emprunter.

        Certains détours deviennent des découvertes.

        Certaines erreurs deviennent des enseignements.

        Et certaines rencontres changent pour toujours
        la direction du voyage.
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

        Cette fois, il faudra retrouver un lieu où
        deux Voyageurs peuvent s'affronter,

        courir,

        viser,

        et surtout essayer de ne pas envoyer la balle
        dans les contrées lointaines.

        <br><br>

        <strong>
        Où dois-tu te rendre ?
        </strong>
        `,

        reponse: "padel",

        revelation: `

        <div class="destination">

            <div class="heure">
                🎾 PROCHAINE ÉTAPE — 18H00
            </div>

            <h3>
                L'épreuve des compagnons
            </h3>

            <p>
                Une nouvelle épreuve t'attend.
            </p>

            <p>
                🎾 <strong>Padel</strong>
            </p>

            <p>
                <strong>
                🕐 Rendez-vous : 18h00
                </strong>
                <br>
                Devant les terrains de tennis à Bulle.
            </p>

        </div>

        `,

        motSuivant: "COMPAGNIE"
    },


    // ==================================================
    // CHAPITRE IV
    // ==================================================

    {
        titre: "Chapitre IV — La Compagnie",

        texte: `
        <p class="histoire">
        Aucun Voyageur ne traverse le monde entièrement seul.

        Au fil des années, de nouveaux visages apparurent
        sur son chemin.

        Certains ne firent qu'un bout de route.

        D'autres choisirent d'y rester.

        Ils devinrent sa Compagnie.

        Et le Voyageur découvrit alors que les plus grandes
        richesses ne se trouvent pas dans les coffres,

        mais dans les personnes avec lesquelles
        on choisit de partager la route.
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

        et de profiter simplement de la compagnie
        de ceux qui nous entourent.

        <br><br>

        Le Livre parle d'un jardin caché.

        <br><br>

        <strong>
        Que t'annonce-t-il ?
        </strong>
        `,

        reponse: "verre",

        revelation: `

        <div class="destination">

            <div class="heure">
                🌿 PROCHAINE ÉTAPE — 19H30
            </div>

            <h3>
                Le jardin des compagnons
            </h3>

            <p>
                Après l'effort vient le temps
                de lever son verre.
            </p>

            <p>
                🌿 <strong>Côté Jardin</strong>
                <br>
                Rue de la Sionge 4
                <br>
                1630 Bulle
            </p>

            <p>
                <strong>
                🕐 Rendez-vous : 19h30
                </strong>
            </p>

        </div>

        `,

        motSuivant: "EPREUVE"
    },


    // ==================================================
    // CHAPITRE V
    // ==================================================

    {
        titre: "Chapitre V — Les Épreuves",

        texte: `
        <p class="histoire">
        Aucun voyage ne se déroule exactement comme prévu.

        Les cartes sont parfois incomplètes.

        Les détours plus nombreux que prévu.

        Les tempêtes arrivent sans prévenir.

        Mais ce sont souvent ces chemins-là qui révèlent
        ce que le Voyageur porte réellement en lui.
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
        Le Voyageur a traversé suffisamment d'épreuves
        pour mériter une dernière récompense.

        Une récompense simple.

        Ronde.

        Chaude.

        Et que l'on partage généralement autour d'une table.

        <br><br>

        <strong>
        Quelle sera la prochaine étape ?
        </strong>
        `,

        reponse: "pizza",

        revelation: `

        <div class="destination">

            <div class="heure">
                🍕 DERNIÈRE ÉTAPE — 20H30
            </div>

            <h3>
                Le dernier banquet
            </h3>

            <p>
                Le Voyageur a traversé les routes,
                les épreuves et les détours.
            </p>

            <p>
                Il est maintenant temps de partager
                un dernier repas.
            </p>

            <p>
                🍕 <strong>
                Un bon pour la pizzeria t'attend.
                </strong>
            </p>

            <p>
                <strong>
                🕐 À partir de 20h30
                </strong>
            </p>

        </div>

        `,

        motSuivant: "REGARD"
    },


    // ==================================================
    // CHAPITRE VI
    // ==================================================

    {
        titre: "Chapitre VI — Le Regard des Gardiens",

        texte: `
        <p class="histoire">
        Aucun Voyageur ne peut voir son propre chemin
        dans son ensemble.

        Pour cela, il lui faut parfois emprunter
        le regard de ceux qui l'aiment.

        Car nous avançons souvent sans mesurer
        ce que notre présence change dans la vie des autres.

        Un mot.

        Un rire.

        Une main tendue.

        Autant de petites choses qui peuvent devenir
        immenses pour celui qui les reçoit.
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

        Mais celle-ci ne peut être ouverte
        par un simple mot de passage.

        Le Livre sait qu'elle appartient à quelqu'un
        qui marche depuis maintenant un certain temps
        aux côtés du Voyageur.

        <br><br>

        <strong>
        Qui doit écrire la prochaine page ?
        </strong>
        `,

        reponse: "moi",

        revelation: `

        <div class="destination">

            <h3>
                Le Livre se tait.
            </h3>

            <p>
                Certaines pages ne peuvent être écrites
                par les anciens livres.
            </p>

            <p>
                Elles appartiennent à ceux qui connaissent
                le cœur du Voyageur mieux que personne.
            </p>

            <p>
                Les prochaines lignes ne sont plus les miennes.
            </p>

            <p>
                <strong>
                Je te les confie.
                </strong>
            </p>

        </div>

        `,

        motSuivant: "TRIENTIEME"
    },


    // ==================================================
    // CHAPITRE VII
    // ==================================================

    {
        titre: "Chapitre VII — Le Trentième Été",

        texte: `
        <p class="histoire">
        Il arrive parfois que deux Voyageurs empruntent
        des chemins différents sans savoir qu'ils avancent
        vers la même destination.

        Puis leurs routes se croisent.

        Et le voyage ne devient pas plus facile.

        Il devient simplement plus beau.

        Car certains compagnons finissent par devenir
        le foyer vers lequel on revient,

        quelle que soit la longueur du voyage.
        </p>
        `,

        temoignages: [],

        enigme: "",

        reponse: "",

        revelation: `

        <div class="destination">

            <h3>
                Les dernières pages
            </h3>

            <p>
                Le Livre a raconté le voyage jusqu'ici.
            </p>

            <p>
                Il est maintenant temps de laisser
                une autre voix parler.
            </p>

        </div>

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


    // ==================================================
    // TEMOIGNAGES
    // ==================================================

    if (chapitre.temoignages.length > 0) {

        html += `

        <hr>

        <h3>Les Chroniqueurs</h3>

        <p>
        Certains souvenirs ne peuvent être enfermés
        dans les pages d'un livre.

        Ils vivent encore dans la mémoire de ceux
        qui ont marché à tes côtés.
        </p>

        `;


        chapitre.temoignages.forEach(personne => {

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

                ${
                    personne.media

                    ?

                    `
                    <a
                        href="${personne.media}"
                        target="_blank"
                    >
                        <button>
                            Ouvrir le souvenir
                        </button>
                    </a>
                    `

                    :

                    `
                    <button disabled>
                        Souvenir à venir
                    </button>
                    `
                }

            </div>

            `;

        });

    }


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


    // ==================================================
    // BONNE REPONSE
    // ==================================================

    if (reponse === bonneReponse) {

        let boutonSuivant = "";


        // S'il existe un chapitre suivant,
        // on affiche le bouton.

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


        // Retour en haut de la page
        // particulièrement utile sur téléphone.

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

}
