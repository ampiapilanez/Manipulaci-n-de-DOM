document.body.style.backgroundColor= "black"
//enncabezado dinamico 
const arrayEncabezado = [
{
    src: '../materiales/banner/1.jpg',
    title: '1.jpg',
    alt: 'atardecer en el rio'
},{
    src: '../materiales/banner/2.jpg',
    title: '2.jpg',
    alt: 'globos aerostaticos en el cielo'
},{
    src: '../materiales/banner/3.jpg',
    title: '3.jpg',
    alt: 'atardecer solo cielo'
},{
    src: '../materiales/banner/4.jpg',
    title: '4.jpg',
    alt: 'globos aerostaticos con maizal'
},{
    src: '../materiales/banner/5.jpg',
    title: '5.jpg',
    alt: 'cielo con nuves y luna llena'
},{
    src: '../materiales/banner/6.jpg',
    title: '6.jpg',
    alt: 'paisaje de alta montaña nevada'
},{
    src: '../materiales/banner/7.jpg',
    title: '7.jpg',
    alt: 'atardecer con pájaros'
},{
    src: '../materiales/banner/8.jpg',
    title: '8.jpg',
    alt: 'rama de amentos de sauce'
}
];
//for(let datos of arrayEncabezado){};

const capturarBanner = document.querySelector(".contenedorBanner");
    function seleccionImagen(){
        const indiceAleatorio = Math.floor(Math.random()*arrayEncabezado.length);
        return arrayEncabezado[indiceAleatorio];
    };
    function darAtributos(){
        const datos = seleccionImagen();
        const imagen = document.createElement("img"); 
            imagen.setAttribute("src", datos.src);
            imagen.setAttribute("title", datos.title);
            imagen.setAttribute("alt", datos.alt);
    capturarBanner.appendChild(imagen);
    };
darAtributos();

//TITULO------------------------------------------------------
let titulo = document.querySelector(".tituloGaleria");
function estilosTitulo (){
    titulo.style.backgroundColor= "rgb(108, 160, 92)";
    titulo.style.fontFamily= "arial";
    titulo.style.textAlign= "center";
}
estilosTitulo ();
//NUEVo ARRAY ------------------------------------------------
/*INICIO 
    hacer un array de objetos 
        meter en el array las fotos como objetos con sus atributos
        delimitar bien los valeros (chequear rutas)
    capturar el elemento del html (en este caso = div class="galeria")
    generar una funcion bucle para vincular ese selector con el array 
        ->(for each)
    determinar atributos
        background color 
        centrar titulo y descriccion 
        margen por card 
    hacer responsive 
FIN*/

const arrayGaleria= [
{
    src: '../materiales/viajes/viajes-1.jpg',
    title: 'Viaje 1',
    description: '8 días / 6 noches',
    alt: 'Este es el alt de foto 1'
},{
    src: '../materiales/viajes/viajes-2.jpg',
    title: 'Viaje 2',
    description: '8 días / 6 noches',
    alt: 'Este es el alt de foto 2'
},{
    src: '../materiales/viajes/viajes-3.jpg',
    title: 'Viaje 3',
    description: '8 días / 6 noches',
    alt: 'Este es el alt de foto 3'
},{
    src: '../materiales/viajes/viajes-4.jpg',
    title: 'Viaje 4',
    description: '8 días / 6 noches',
    alt: 'Este es el alt de foto 4'
},{
    src: '../materiales/viajes/viajes-5.jpg',
    title: 'Viaje 5',
    description: '8 días / 6 noches',
    alt: 'Este es el alt de foto 5'
},{
    src: '../materiales/viajes/viajes-6.jpg',
    title: 'Viaje 6',
    description: 'OFERTA',
    alt: 'Este es el alt de foto 6'
},{
    src: '../materiales/viajes/viajes-7.jpg',
    title: 'Viaje 7',
    description: 'ULTIMAS PLAZAS',
    alt: 'Este es el alt de foto 7'
}, 
];

const galeria = document.querySelector(".galeria");
function generarGaleria (){
arrayGaleria.forEach(function(datos) {
    const contenedorCard = document.createElement("div");
    const seleccionGaleria = document.createElement("img"); 
            seleccionGaleria.setAttribute("src", datos.src);
            seleccionGaleria.setAttribute("alt", datos.alt);   
    const tituloGaleria = document.createElement("h2"); 
            tituloGaleria.textContent= datos.title;
    const descripcionGaleria = document.createElement("p"); 
            descripcionGaleria.textContent= datos.description;
    contenedorCard.appendChild(seleccionGaleria); 
    contenedorCard.appendChild(tituloGaleria);   
    contenedorCard.appendChild(descripcionGaleria);
    galeria.appendChild(contenedorCard); 
    
});
};
generarGaleria ()

//CARD---------------------------------------------
/*const card = document.querySelector("div.galeria");
function estiloCard (){
    card.style.backgroundColor= "white";
}
estiloCard();*/