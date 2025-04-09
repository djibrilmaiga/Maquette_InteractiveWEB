/* Télécharger en PDF
Ce code permet au bouton "télécharger en PDF" de cv.html de télécharger au format PDF la page 
avec le cv mais sans les boutons d'actions
*/
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("telecharger");

    btn.addEventListener("click", function () {
        // Sélectionne le contenu que tu veux exporter (ici tout le contenu de .cv)
        const element = document.querySelector(".cv");

        // Options de configuration pour html2pdf
        const opt = {
            margin:       0,
            filename:     'MyFile.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true, scrollX: 0, scrollY: 50 },
            jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' }
        };

        // Lance la conversion HTML → PDF
        html2pdf().set(opt).from(element).save();
        console.log("Cv téléchargé !")
    });
});
/* Changer couleur
Afficher un panel de couleurs quand on clique sur un bouton, et appliquer la couleur sélectionnée 
à certains éléments du CV */
document.addEventListener("DOMContentLoaded", function () {
    const triangle = document.querySelector(".triangle"); // Zone jaune triangulaire
    const infoLeft = document.querySelector(".info-left"); // Colonne de gauche du CV
    const colorPanel = document.getElementById("color-picker"); // Panneau contenant les pastilles de couleurs
    const changeColorBtn = document.getElementById("change-color"); // Bouton Changer Couleur

    // En cliquant sur le bouton "Changer Couleur", affiche ou masque le panel de couleur
    changeColorBtn.addEventListener("click", () => {
        colorPanel.classList.toggle("hidden");
    });

    document.querySelectorAll(".color-swatch").forEach(swatch => {
        swatch.addEventListener("click", () => {
            const bg = swatch.dataset.bg;
            const side = swatch.dataset.side;
            const text = swatch.dataset.text;

            // Appliquer la couleur de fond principale
            triangle.style.backgroundColor = bg;
            infoLeft.style.backgroundColor = side;

            // Texte dans .info-left
            const textElements = infoLeft.querySelectorAll("*");
            textElements.forEach(el => {
                if (el.tagName !== "IMG") {
                    el.style.color = text;
                }
            });

            // Changer tous les éléments à thème accentué (ex: jaune)
            const accentEls = document.querySelectorAll(".accent-color");
            accentEls.forEach(el => {
                el.style.backgroundColor = bg;
                el.style.color = bg; 
            });

            // Changer la couleur du Nom de famille
            document.querySelectorAll(".text-accent").forEach(el => {
                el.style.color = bg;
            });

            // Cacher le panneau après sélection
            colorPanel.classList.add("hidden");
        });
    });
});