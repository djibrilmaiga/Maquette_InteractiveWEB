// Code Javascript pour télécharger en PDF
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
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Lance la conversion HTML → PDF
        html2pdf().set(opt).from(element).save();
        console.log("Cv téléchargé !")
    });
});
