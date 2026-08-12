const cover = document.getElementById("cover");
const intro = document.getElementById("intro");
const content = document.getElementById("content");


// ======================================================
// CHAPITRE I — PREMIERS PAS
// ======================================================

const chapitres = [

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

                type: "lucienne",

                photo: "https://drive.google.com/uc?export=view&id=15pWYK2EV4XlHrDPsEVUULRl8coGI_z8u",

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

                type: "lien",

                media: "https://drive.google.com/file/d/1TRV-BZ1WVWQVEfG3kVGJ2L6nYxUMt-Cz/view?usp=sharing",

                texte: ""
            }

        ],


        // ==================================================
        // ENIGME
        // ==================================================

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


        // ==================================================
        // REVELATION
        // ==================================================

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


        html += `

        <div id="souvenir"></div>

        `;

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
// OUVRIR UN SOUVENIR
// ======================================================

function ouvrirSouvenir(index) {

    const chapitre = chapitres[chapitreActuel];

    const souvenir = chapitre.temoignages[index];

    const zone = document.getElementById("souvenir");


    // --------------------------------------------------
    // SOUVENIR DE LUCIENNE
    // --------------------------------------------------

    if (souvenir.type === "lucienne") {

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
                alt="Souvenir de Lucienne"
                style="
                    width:100%;
                    max-width:500px;
                    display:block;
                    margin:25px auto;
                    border-radius:3px;
                    box-shadow:0 8px 25px rgba(0,0,0,.25);
                "
            >

            <div class="souvenirText">

                ${souvenir.texte}

            </div>

        </div>

        `;

        zone.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    // --------------------------------------------------
    // SOUVENIR AVEC LIEN
    // --------------------------------------------------

    else if (souvenir.type === "lien") {

        window.open(
            souvenir.media,
            "_blank"
        );

    }

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

                <button onclick="chapitreSuivant()">

                    Accéder au chapitre suivant

                </button>

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

    /*
    Pour le moment, nous n'avons volontairement
    qu'un seul chapitre dans ce test.

    Les autres chapitres seront réintégrés
    lorsque leurs souvenirs seront prêts.
    */

    alert(
        "Le prochain chapitre sera ajouté lorsque les souvenirs seront prêts."
    );

}
