const carrito = JSON.parse(localStorage.getItem("carrito")) || []

const carritoVacio = document.querySelector(".carrito-vacio");

function cargadorCarrito() {
    if (carrito.length != 0) {
        carritoVacio.innerHTML = ``
        carrito.forEach(producto => {
        const elemento = document.createElement(`article`)
        elemento.className = "producto-card"
        elemento.innerHTML = `
        <div class="producto-imagen">
            <img src="${producto.img}" alt="${producto.nombre}">
        </div>

        <div class="producto-info">
            <h3>${producto.nombre}</h3>
            <div class="producto-precio">
                <span class="precio">$${producto.precio}</span>
                <button data-id="${producto.id}" class="boton-agregar">Eliminar</button>
            </div>
        </div>`
        carritoVacio.appendChild(elemento);
    });
    }else {
        carritoVacio.innerHTML = `<p class="carrito-empty">Si aún no agregaste productos, buscá en la <a href="tienda.html" class="link-primary">tienda</a> y los verás aquí.</p>`
    };
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

carritoVacio.addEventListener("click", (elemento) => {
    const botonEliminar = elemento.target
    if (botonEliminar.className == "boton-agregar") {
        const id = botonEliminar.getAttribute("data-id")
        const objetoEncontrado = carrito.find((p) => p.id == id)
        carrito.splice(carrito.indexOf(objetoEncontrado),1)
        cargadorCarrito()
        console.log(carrito)
        console.log(objetoEncontrado)
    }
})


cargadorCarrito();
