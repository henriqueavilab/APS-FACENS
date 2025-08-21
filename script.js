        let totalCliques = 0;
        const numero = document.getElementById("numero");
        const popup = document.getElementById("popup");
        const popupMensagem = document.getElementById("popupMensagem");

        document.getElementById("botaoClique").addEventListener("click", () => {
            totalCliques++;
            numero.textContent = totalCliques;

            // Reinicia a animação
            numero.classList.remove("animado");
            void numero.offsetWidth;
            numero.classList.add("animado");
        });