export const incrementVotes = (estado, id) => {
  const totalVotesElement = document.getElementById("button-" + id);
  let contadorVotos = parseInt(totalVotesElement.textContent);
  totalVotesElement.textContent = contadorVotos;
  if (estado == true) {
    contadorVotos++;
  } else {
    contadorVotos--;
  }
  if (contadorVotos < 0) {
    contadorVotos = 0;
  }
  totalVotesElement.textContent = contadorVotos;
};
