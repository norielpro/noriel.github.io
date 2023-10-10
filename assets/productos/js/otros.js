let http = new XMLHttpRequest();
http.open("get", "otros.json", "true");
http.send();
http.onload = function () {
 // if (this.readyState == 4 && this.status == 200) {
    let jsond = JSON.parse(this.responseText);
    let output = "";
    for (let item of jsond) {
      output += `
      <div class="card  shadow p-3 mb-5 bg-body rounded animate__animated animate__bounceIn animate__delay-1s" style="width: 20rem;">
      <img src="${item.referencia}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.nombre}</h5>
        <p class="card-text">${item.precio}</p>
        <a id="wa" href="https://api.whatsapp.com/send?phone=+5353044022&text=*Deseo comprar el paquete*%0A + ${item.descripcion}%0A+*Con Valor de*%0A+ ${item.precio}" class="btn btn-primary">Comprar</a>
        </div>
    </div>

           `;
   // }

    document.querySelector(".principal").innerHTML = output;
  }
};






