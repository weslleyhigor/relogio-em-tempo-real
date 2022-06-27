function relogio () {
  let text = document.querySelector('.container'); //Coletar conteudo do html

  const data = new Date(); // coleta infos do objeto Date

  const diaSemana = data.getDay(); // Dia começa com zero
  const dia = data.getDate();
  const mes = data.getMonth(); // Mes começa com zero
  const ano = data.getFullYear();
  const hora = zeroAEsquerda(data.getHours());
  const minutos = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());
  const fusoHorario =  data.toString();
  

  const diaText = verificaDiaSemana(diaSemana);
  const mesText = verificaMes(mes);
  const fusoLocal = manipulaFuso(fusoHorario);

  text.innerHTML = `<p>${diaText}, ${dia} de ${mesText} de ${ano}</p>`;
  text.innerHTML += `<h1>${hora}:${minutos}:${segundos}</h1>`;
  text.innerHTML += `<p>${fusoLocal[0]}</p>`
  text.innerHTML += `<p>${fusoLocal[1]}</p>`

  function zeroAEsquerda (valor) {
    return valor >= 10? valor : `0${valor}`;
  }

  // Funçao gambiarra pra mostrar o fuso horario do date
  function manipulaFuso (fusoHorario) {
    let manipula = fusoHorario.replace(/ /g, ""); // remove espaços entre o texto
    let indiceGmt = manipula.indexOf('G'); // Descobre a posiçao/indice do caractere G
    let tamManipula = manipula.length; // recebe o tamanho do texto dentro do manipula

    let fusoText = '';
    let localText ='';
    let contador = 0

    // Coleta o codigo do Fuso
    for ( i = indiceGmt; i <= (indiceGmt + 7); i++) {
      fusoText += manipula[i];
    }

    contador = i;

    //Coleta a Cidade do fuso
    for ( i = contador; i < tamManipula; i++ ) {
        localText += manipula[i];
    }
    
    const fusoLocal = [fusoText, localText];

    return fusoLocal;
  }

  function verificaDiaSemana (diaSemana) {
    const diaSemanaText = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    
    return diaSemanaText[diaSemana];
  };

  function verificaMes (mes) {
    const mesText = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

    return mesText[mes];
  };
}

setInterval(relogio, 1000)