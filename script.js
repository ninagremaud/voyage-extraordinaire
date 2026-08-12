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

        temoignages: [

            {
                nom: "Compagnon 1",
                role: "Compagnon de route",
                type: "audio",
                media: "Souvenirs/Fx.mp3",
                format: "audio/mpeg"
            },

            {
                nom: "Compagnon 2",
                role: "Compagnon de route",
                type: "audio",
                media: "Souvenirs/CharlesAmi.mp3",
                format: "audio/mpeg"
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

        galerie: [
            "enfant1.jpeg",
            "enfant10.jpeg",
            "enfant4.jpeg",
            "enfant5.jpeg",
            "enfant6.jpeg",
            "enfant7.jpeg"
        ],

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
    },


    // ==================================================
    // CHAPITRE III — NOUVEAUX CHEMINS
    // ==================================================

    {
        titre: "Chapitre III — Nouveaux Chemins",

        texte: `
        <p class="histoire">
        Chaque voyage réserve des haltes inattendues.

        Certaines sont faites pour avancer.

        D'autres simplement pour reprendre son souffle,
        laisser le monde ralentir quelques instants,
        et profiter du chemin parcouru.

        Car même les Voyageurs les plus déterminés
        doivent parfois prendre le temps de se reposer.
        </p>
        `,

        temoignages: [

            {
                nom: "Compagnon 1",
                role: "Compagnon de route",
                type: "video",
                media: "Souvenirs/Christophe.mp4"
            },

            {
                nom: "Compagnon 2",
                role: "Compagnon de route",
                type: "video",
                media: "Souvenirs/Arnaud.mp4"
            },

            {
                nom: "Compagnon 3",
                role: "Compagnon de route",
                type: "video",
                media: "Souvenirs/Benhur.mp4"
            },

            {
                nom: "Compagnon 4",
                role: "Compagnon de route",
                type: "videos",
                media: [
                    "Souvenirs/Fabio1.mp4",
                    "Souvenirs/Fabio2.mp4"
                ]
            },

            {
                nom: "Compagnon 5",
                role: "Compagnon de route",
                type: "video",
                media: "Souvenirs/Raph.mp4"
            }

        ],

        galerie: [
            "Enfant.jpeg",
            "Enfant11.jpeg",
            "Enfant2.jpeg",
            "Enfant8.jpeg",
            "Enfant9.jpeg"
        ],

        enigme: `
        Après avoir partagé un repas avec tes Compagnons
        de route, le voyage t'invite maintenant à ralentir.

        Les Elfes connaissent depuis longtemps
        les vertus d'une halte où l'on prend soin
        du corps et où l'on oublie, pendant un instant,
        le tumulte du monde.

        <br><br>

        Tu as rendez-vous à <strong>16h45</strong>.

        <br><br>

        Cherche le lieu où le Voyageur pourra
        enfin déposer son sac, fermer les yeux
        et se laisser porter.

        <br><br>

        <strong>
        Où dois-tu te rendre ?
        </strong>
        `,

        reponse: "cocooning",

        revelation: `

        <div class="destination">

            <div class="heure">
                💆 PROCHAINE ÉTAPE — 16H45
            </div>

            <h3>
                Une halte pour reprendre des forces
            </h3>

            <p>
                Le prochain lieu de ton aventure
                est un endroit où le Voyageur
                peut enfin ralentir.
            </p>

            <p>
                🌿 <strong>Au Cocooning</strong>
                <br>
                Bulle
            </p>

            <p>
                <strong>
                🕐 Rendez-vous : 16h45
                </strong>
            </p>

            <p>
                Le moment est venu de prendre soin
                de toi et de profiter de cette pause.
            </p>

        </div>
        `
    },


    // ==================================================
    // CHAPITRE IV — LES GARDIENNES DU CHEMIN
    // ==================================================

    {
        titre: "Chapitre IV — Les Gardiennes du Chemin",

        texte: `
        <p class="histoire">
        Il existe des Voyageurs que l'on ne rencontre pas
        en chemin.

        Ils étaient là bien avant le départ.

        Ils connaissent les premières versions de nous,
        celles que le temps a parfois recouvertes,
        mais qui ne disparaissent jamais vraiment.

        Certaines personnes connaissent le chemin
        depuis presque aussi longtemps que nous-mêmes.

        Et parmi elles, il y a celles que l'on appelle
        simplement nos sœurs.
        </p>
        `,

        temoignages: [

            {
                nom: "Gardienne 1",
                role: "Gardienne du chemin",
                type: "audio",
                media: "Souvenirs/Manu.mp3",
                format: "audio/mpeg"
            },

            {
                nom: "Gardienne 2",
                role: "Gardienne du chemin",
                type: "videos",
                media: [
                    "Souvenirs/Vero1.mp4",
                    "Souvenirs/Vero2.mp4",
                    "Souvenirs/Vero3.mp4",
                    "Souvenirs/Vero4.mp4"
                ]
            },

            {
                nom: "Gardienne 3",
                role: "Gardienne du chemin",
                type: "audio",
                media: "Souvenirs/Marisa.mp3",
                format: "audio/mpeg"
            },

            {
                nom: "Gardienne 4",
                role: "Gardienne du chemin",
                type: "video",
                media: "Souvenirs/Steph.mp4"
            }

        ],

        galerie: [
            "Ado.jpeg"
        ],

        enigme: `
        Le Voyageur a maintenant repris des forces.

        Il est temps de poursuivre son chemin.

        Mais cette fois, la prochaine étape demandera
        un peu plus d'énergie, un peu plus de mouvement,
        et peut-être quelques réflexes.

        <br><br>

        Le prochain rendez-vous est à <strong>18h00</strong>.

        <br><br>

        Les Voyageurs qui connaissent bien les terrains
        savent qu'une balle, une raquette et un filet
        peuvent suffire à transformer quelques heures
        en véritable aventure.

        <br><br>

        <strong>
        Où dois-tu te rendre ?
        </strong>
        `,

        reponse: "tennis",

        revelation: `

        <div class="destination">

            <div class="heure">
                🎾 PROCHAINE ÉTAPE — 18H00
            </div>

            <h3>
                Le prochain défi
            </h3>

            <p>
                Le Voyageur reprend maintenant
                le chemin du terrain.
            </p>

            <p>
                🎾 <strong>Le tennis à Bulle</strong>
            </p>

            <p>
                <strong>
                🕐 Rendez-vous : 18h00
                </strong>
            </p>

            <p>
                Retrouve-moi devant le tennis.
            </p>

        </div>
        `
    },


    // ==================================================
    // CHAPITRE V — LES GARDIENNES DU COEUR
    // ==================================================

    {
        titre: "Chapitre V — Les Gardiennes du Cœur",

        texte: `
        <p class="histoire">

        Certaines personnes connaissent le Voyageur
        sous toutes ses formes.

        Elles ont vu les premiers pas,
        les détours, les réussites,
        les doutes et les renaissances.

        Elles connaissent une partie de son histoire
        que peu de personnes peuvent raconter.

        Et parfois, au milieu de toutes les routes
        que l'on emprunte, il existe un foyer
        vers lequel on peut toujours revenir.

        </p>
        `,

        temoignages: [

            {
                nom: "La Gardienne du cœur",
                role: "Gardienne du cœur",
                type: "photosTexte",

                photos: [
                    "Souvenirs/EloiMarion.jpeg",
                    "Souvenirs/EloiMarion2.jpeg"
                ],

                texte: `
                <p>
                <strong>Joyeux 30 ans à mon cher petit frère !</strong>
                </p>

                <p>
                30 ans… seulement !
                </p>

                <p>
                On a vécu ensemble une belle tranche de vie,
                et j’en garde de très beaux souvenirs !
                Je suis très reconnaissante d’avoir eu la chance
                de garder ce lien avec toi !
                La vie m’a fait ce cadeau !
                </p>

                <p>
                Aujourd’hui, tu entres dans un nouveau chapitre,
                et pas des moindres : de nouvelles études de médecine
                à Lausanne, une nouvelle ville, une nouvelle vie,
                de nouveaux défis… bref, un vrai tournant.
                </p>

                <p>
                Mais si quelqu’un peut relever ce défi avec courage,
                intelligence et détermination, c’est bien toi,
                tu l’as déjà montré cette dernière année avec brio !
                </p>

                <p>
                Je suis très fière de toi.
                N’oublie pas cette force que tu as en toi qui te permet,
                si tu le souhaites, de réaliser de grandes choses !
                </p>

                <p>
                Commencer la médecine à 30 ans, ce n’est pas
                “trop tard”, c’est au contraire une preuve magnifique
                que rien n’est impossible quand on a la volonté d’y croire.
                </p>

                <p>
                Tu resteras toujours mon petit frère,
                et tu peux compter sur moi.
                </p>

                <p>
                Je te souhaite un anniversaire merveilleux,
                une nouvelle vie à Lausanne pleine de bonheur,
                de réussite et de belles surprises.
                </p>

                <p>
                Bon anniversaire mon frère, et bonne route
                pour cette magnifique nouvelle aventure ! ❤️❤️
                </p>
                `
            },


            {
                nom: "La Gardienne du foyer",
                role: "Gardienne du foyer",
                type: "photoTexte",

                photo: "Souvenirs/EloiMarion.jpeg",

                texte: `
                <p>
                <strong>Quelques souvenirs d’Eloi,</strong>
                </p>

                <p>
                Je me souviens d’abord d’une petite Tête Blonde
                toute frisée, de grands yeux marrons et d’un regard
                capable de vous faire croire qu’il avait déjà tout
                compris à la vie… alors qu’il avait à peine quitté les couches !
                </p>

                <p>
                C’était un enfant calme, doux et facile à vivre.
                (Marion toujours bienveillante vous le confirmera).
                Partageant son temps entre sa maman, sa sœur,
                et notre Famille, où il est très vite devenu
                notre cinquième enfant.
                </p>

                <p>
                Il pouvait passer des heures à construire des legos…
                (sûrement que c’est pour cette raison que son père
                lui disait bien quelques années plus tard :
                Tu feras un excellent ouvrier chez Piantino !)
                et autant de temps à écouter mes histoires de chevaliers !
                Bon, je ne sais toujours pas lequel de nous deux
                y prenait le plus de plaisir.
                </p>

                <p>
                A 12 ans, il est venu vivre avec nous à Farvagny.
                Une grande étape pour lui et un petit bouleversement
                pour toute la maison.
                </p>

                <p>
                Mais on s’est vite habitué les uns aux autres
                tout en sachant qu’il entrait dans une colonie
                exclusivement féminine.
                </p>

                <p>
                Au CO de Farvagny, il s’est fait des copains
                à une vitesse impressionnante.
                Il faut dire qu’Eloi a toujours eu ce talent
                de créer des amitiés solides.
                La plupart sont encore présents dans sa vie.
                </p>

                <p>
                Côté sport, il s’est découvert une passion pour le basket
                et abandonna le tennis.
                Il excellait sur les terrains de basket…
                beaucoup plus que lors de nos randonnées familiales,
                qu’il semblait considérer comme une forme particulièrement
                cruelle de punition.
                </p>

                <p>
                Comme tout adolescent qui se respecte,
                il a aussi voulu tester quelques limites.
                Il y a eu la période des Fleurs du Mal !.
                Disons qu’il a préféré faire ses expériences lui-même
                plutôt que de croire les adultes sur paroles.
                </p>

                <p>
                Et puis il y a le chapitre que je vais soigneusement éviter…
                celui des filles.
                Disons simplement qu’avec sa bouille de beau gosse,
                il a laissé quelques cœurs en vrac sur son passage.
                </p>

                <p>
                Le CO s’est déroulé sans trop de soucis.
                Grâce à sa vive intelligence, il arrivait souvent
                à s’en sortir avec un minimum d’efforts.
                Une stratégie qui en faisait rêver certains
                et désespérer parfois ses professeurs.
                </p>

                <p>
                Puis sont venues les années de collège,
                entrecoupées d’une année incroyable aux Etats-Unis.
                Il y a vécu une aventure extraordinaire,
                accueilli par une famille formidable
                qui l’a adopté et dorloté.
                </p>

                <p>
                A son retour, il poursuit son chemin de collégien.
                Bac en poche, il s’est lancé dans les sciences biomédicales.
                Personnellement, je le voyais en médecine…
                Mais comme souvent avec Eloi, il avait déjà décidé
                de tracer son propre chemin.
                </p>

                <p>
                Devenu adulte, il a poursuivi son parcours avec sérieux,
                intelligence et une belle détermination.
                Derrière son calme et son humour discret mais piquant,
                il a toujours eu une grande sensibilité et une force
                tranquille qui forcent le respect.
                </p>

                <p>
                Aujourd’hui, en repensant à tout ce chemin parcouru,
                je ne peux qu’être fière de l’homme qu’il est devenu.
                Fière de son parcours, de ses choix, de ses réussites…
                mais surtout reconnaissante d’avoir eu la chance
                partager un bout de chemin de sa vie.
                </p>

                <p>
                Et si je devais résumer Eloi en quelques mots,
                je dirais simplement : un garçon attachant, drôle,
                intelligent et profondément humain.
                Un de ceux qu’on n’oublie jamais même quand ils deviennent grands.
                </p>

                <p>
                Et j’ajouterai un grand merci à Nina pour sa force de vie,
                son entregent et son soutien durant toute cette dernière année.
                </p>

                <p>
                <strong>Famille. ❤️</strong>
                </p>
                `
            },


            {
                nom: "La Gardienne de toujours",
                role: "Gardienne de toujours",
                type: "photoAudio",

                photo: "Souvenirs/EloiNadja.jpeg",
                media: "Souvenirs/Nadja.mp3",
                format: "audio/mpeg"
            }

        ],


        enigme: `
        Le soleil commence doucement à descendre.

        Le Voyageur a déjà parcouru une bonne partie
        de son chemin aujourd'hui.

        Il est maintenant temps de faire une halte
        pour partager un verre et profiter encore
        un peu de cette journée.

        <br><br>

        Le prochain rendez-vous est à <strong>19h30</strong>.

        <br><br>

        Cherche un endroit où l'on pourrait croire
        que le jardin s'est installé au cœur de la ville.

        <br><br>

        <strong>
        Quel sera le prochain lieu de notre aventure ?
        </strong>
        `,

        reponse: "cote jardin",

        revelation: `

        <div class="destination">

            <div class="heure">
                🍹 PROCHAINE ÉTAPE — 19H30
            </div>

            <h3>
                Une dernière halte avant la nuit
            </h3>

            <p>
                Le Voyageur est attendu pour partager
                un verre dans un endroit un peu particulier.
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

        <h3>
            ${
                numero === 0
                ? "Les Gardiens"
                : numero === 3
                    ? "Les Gardiennes du chemin"
                    : numero === 4
                        ? "Les Gardiennes"
                        : "Les Compagnons de route"
            }
        </h3>

        <p>
        ${
            numero === 0
            ? "Certains souvenirs ne peuvent être enfermés dans les pages d'un livre. Ils vivent encore dans la mémoire de ceux qui ont marché à tes côtés."

            : numero === 3
                ? "Certaines personnes connaissent le chemin depuis presque toujours. Elles ont vu grandir le Voyageur et continuent de marcher à ses côtés."

                : numero === 4
                    ? "Certaines personnes connaissent le Voyageur depuis longtemps. Elles ont vu grandir son histoire, accompagné ses chemins et gardé précieusement une place pour lui dans leur cœur."

                    : "Au fil du chemin, certains Voyageurs deviennent des Compagnons de route. Voici quelques voix et quelques souvenirs de ceux qui ont partagé une partie de ton aventure."
        }
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
                    onclick="window.ouvrirSouvenir(${index})"
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

        <button onclick="window.verifier()">
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

    if (!zone) return;


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
    // PLUSIEURS PHOTOS + TEXTE
    // ==================================================

    else if (souvenir.type === "photosTexte") {

        let photosHTML = "";

        souvenir.photos.forEach(photo => {

            photosHTML += `

            <img
                src="${photo}"
                alt="Souvenir"
                class="souvenirImage"
            >

            `;

        });


        zone.innerHTML = `

        <div class="page souvenirPage">

            <h3>
                ${souvenir.nom}
            </h3>

            <p>
                <em>${souvenir.role}</em>
            </p>

            <div class="souvenirPhotos">

                ${photosHTML}

            </div>

            <div class="souvenirText">

                ${souvenir.texte}

            </div>

        </div>

        `;

    }


    // ==================================================
    // PHOTO + AUDIO
    // ==================================================

    else if (souvenir.type === "photoAudio") {

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
    // PLUSIEURS VIDEOS
    // ==================================================

    else if (souvenir.type === "videos") {

        let videosHTML = "";

        souvenir.media.forEach(video => {

            videosHTML += `

            <video
                class="souvenirVideo"
                controls
                playsinline
            >

                <source
                    src="${video}"
                    type="video/mp4"
                >

                Ton navigateur ne peut pas lire cette vidéo.

            </video>

            `;

        });


        zone.innerHTML = `

        <div class="page souvenirPage">

            <h3>
                ${souvenir.nom}
            </h3>

            <p>
                <em>${souvenir.role}</em>
            </p>

            ${videosHTML}

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


    if (reponse === bonneReponse) {

        let boutonSuivant = "";


        if (chapitreActuel + 1 < chapitres.length) {

            boutonSuivant = `

            <button onclick="window.chapitreSuivant()">

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

    const prochainChapitre = chapitreActuel + 1;


    if (prochainChapitre < chapitres.length) {

        chapitreActuel = prochainChapitre;

        afficherChapitre(prochainChapitre);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


// ======================================================
// REND LES FONCTIONS ACCESSIBLES AUX BOUTONS
// ======================================================

window.ouvrirSouvenir = ouvrirSouvenir;
window.verifier = verifier;
window.chapitreSuivant = chapitreSuivant;
