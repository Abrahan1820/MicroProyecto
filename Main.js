//hero container

let imagenes = ['Sistems.png','Mecanic.png','Spaceship.png'];
let contador = 0;

function carrousel(direccion){
let direccion1 = direccion;

if(direccion1=='back'){
  if(contador==0){
    document.getElementById('imagen').src= imagenes[imagenes.length-1];
    contador++;
  }else if (contador<imagenes.length-1) {
    document.getElementById('imagen').src= imagenes[imagenes.length-1-contador];
    contador++;

  }else {
    document.getElementById('imagen').src= imagenes[0];
    contador=0;
  }
}

if(direccion1=='next'){
  if(contador==0){
    document.getElementById('imagen').src= imagenes[0];
    contador++;
  }else if (contador<imagenes.length-1) {
    document.getElementById('imagen').src= imagenes[contador];
    contador++;

  }else {
    document.getElementById('imagen').src= imagenes[imagenes.length-1];
    contador=0;
  }
}
}

//skills container

fetch("statistics.json")
.then(function(response){
  return response.json();
})
.then(function(statistics){
  let placeholder = document.querySelector("#output");
  let out = "";
  for(let statistic of statistics){
    out += `
      <tr>
        <td>${statistic.language}</td>
        <td>${statistic.Knowledge}</td>
        <td>${statistic.Interest}</td>
      </tr>
    `;
  }
  placeholder.innerHTML = out;
})