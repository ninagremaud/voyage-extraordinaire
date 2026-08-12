if (reponse === bonneReponse) {

    document.getElementById("resultat").innerHTML = `

    <div class="revelation">

        ${chapitre.revelation}

        <div class="transition-livre">

            <hr>

            <h3>📖 Le Livre se referme...</h3>

            <p>
            Une nouvelle page t'attend dans ton carnet.
            </p>

            <p>
            Prends le temps de découvrir la suite de ton histoire
            avant de poursuivre ton voyage.
            </p>

            <p>
            <strong>Retourne au Livre.</strong>
            </p>

            <button onclick="chapitreSuivant()">
                Accéder au chapitre suivant
            </button>

        </div>

    </div>

    `;

}
