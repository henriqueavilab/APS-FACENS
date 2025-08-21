let totalCliques = 0;
const numero = document.getElementById("numero");

document.getElementById("botaoClique").addEventListener("click", () => {
  totalCliques++;
  numero.textContent = totalCliques;

  // Reinicia a animação
  numero.classList.remove("animado");
  void numero.offsetWidth;
  numero.classList.add("animado");

  // Verifica múltiplos de 100
  if (totalCliques % 100 === 0) {
    alert("🎉 Parabéns, você conseguiu " + totalCliques + " cliques!");
  }
});
