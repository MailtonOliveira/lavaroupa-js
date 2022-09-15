
const lavaRoupas = "Lava Roupas ThinQ";
//Definir minhas variáveis

let tambor = 10;
let maquinaDeLavar = {
  sabao:true,
  amaciante: false,
  ligada: false,
  roupa_lavada: false,
  roupa_seca: true,
};
let secar = tambor <= 10;
let clima = {
  chovendo: true,
  nublado: true,
  ensolarado: false,
};
let varal = 15;

// lavar roupa
if (tambor > 9) {
  //lavar a roupa
  if (!maquinaDeLavar.ligada) {
    console.log("Ligando ", lavaRoupas);
    maquinaDeLavar.ligada = true;
  }
  if (maquinaDeLavar.sabao == false) {
    console.log("Colocado sabão");
    maquinaDeLavar.sabao = true;
  }
  if (maquinaDeLavar.amaciante == false) {
    console.log("Colocado amaciante");
    maquinaDeLavar.amaciante = true;
  }
    console.log("Lavando");

  if (secar && clima.chovendo && clima.nublado) {
    console.log("Secando");
  }
  if (maquinaDeLavar.roupa_seca == true) {
    console.log("Pode quardar a roupa");
  } else {
    console.log("Pendurar no varal");
  }

  // if (tambor <= 10) {
  //   console.log("Secando");
  // }

  maquinaDeLavar.roupa_lavada = true;
} else if (tambor <= 9) {
  console.log("Aguardando mais roupas");
} else {
}

// guardar
