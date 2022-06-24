function relogio () {
  let text = document.querySelector('.container'); //Coletar conteudo do html

  const data = new Date(); // coleta infos do objeto Date

  const diaSemana = data.getDay()+1; // Dia começa com zero
  const dia = data.getDate();
  const mes = data.getMonth()+1; // Mes começa com zero
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
    let diaSemanaText;

    switch ( diaSemana ) {
      case 1:
        return diaSemanaText = 'Domingo';
      case 2:
        return diaSemanaText = 'Segunda-feira';
      case 3:
        return diaSemanaText = 'Terça-feira';
      case 4:
        return diaSemanaText = 'Quarta-feira';
      case 5:
        return diaSemanaText = 'Quinta-feira';
      case 6:
        return diaSemanaText = 'Sexta-feira';
      case 7:
        return diaSemanaText = 'Sábado';
      default:
        return diaSemanaText = '';
    }
  };

  function verificaMes (mes) {
    let mesText;

    switch ( mes ) {
      case 1:
        return mesText = 'Janeiro';
      case 2:
        return mesText = 'Fevereiro';
      case 3:
        return mesText = 'Março';
      case 4:
        return mesText = 'Abril';
      case 5:
        return mesText = 'Maio';
      case 6:
        return mesText = 'Junho';
      case 7:
        return mesText = 'Julho';
      case 8:
        return mesText = 'Agosto';
      case 9:
        return mesText = 'Setembro';
      case 10:
        return mesText = 'Outubro';
      case 11:
        return mesText = 'Novembro';
      case 12:
        return mesText = 'Dezembro';
      default:
        return mesText = '';
    }
  };
}

setInterval(relogio, 1000)