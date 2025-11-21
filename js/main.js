const carrito = JSON.parse(localStorage.getItem("carrito")) || []

let productos = []
//     {id: 1, nombre: "Creatina Monohidratada", precio: 24.999, img: "../img/creatina.jpg"},
//     {id: 2, nombre: "Proteína Star Nutrition", precio: 34.399, img: "../img/proteina.png"},
//     {id: 3, nombre: "Pre-War Lemonade", precio: 29.999, img: "../img/Prewar_Lemonade.webp"},
//     {id: 4, nombre: "Ultra Mass Ganador", precio: 32.999, img: "../img/ultramass.webp"},
//     {id: 5, nombre: "Glutamina Micronizada", precio: 19.999, img: "../img/glutamina.webp"},
//     {id: 6, nombre: "Multivitamínico Plus", precio: 14.399, img: "../img/multivitaminico.webp"},
//     {id: 7, nombre: "Barritas Proteicas Pack x6", precio: 12.999, img: "../img/barras.jpg"},
//     {id: 8, nombre: "Mix para Pancakes Proteicos", precio: 16.999, img: "../img/pancakes.png"}
// ];

async function obtenerProductos(){
   try {
      const r = await fetch("../productos/productos.json")

   productos = await r.json()
   }
   catch(error){
      console.log(error)
   }
}

obtenerProductos();

const boton = document.querySelectorAll(".boton-agregar");
boton.forEach(boton => {
   boton.addEventListener("click", () => {
   const idProductos = parseInt(boton.getAttribute("data-id"));
   const prod = productos.pd.find(p => p.id === idProductos);
   carrito.push(prod)
   localStorage.setItem("carrito", JSON.stringify(carrito));

   Toastify({
   text: "Producto agregado con exito!",
   duration: 3000
}).showToast();
});
});



