//VARIABLES
/* Parallax */
const star = document.querySelector('#star')
const moon = document.querySelector('#moon')
const city = document.querySelector('#city')
const name = document.querySelector('#name')
const front = document.querySelector('#front')
const cv = document.querySelector('#cv')

//OcularMostrar Menu
const hamburger = document.querySelector('.hamburger');
let oculto = true;

const nav = document.querySelector('.nav')
const body = document.querySelector('body')
const header = document.querySelector('header')

const links = document.querySelectorAll('.nav-link');

//EVENTOS
links.forEach(link => {
    link.addEventListener('click', () => {
        header.style.top = '0'
        body.style.overflow = 'initial';
        nav.style.top = '-2000%'
        hamburger.classList.remove('fa-times')
    })
})

window.addEventListener('DOMContendLoaded',animacionesScroll)
hamburger.addEventListener('click', mostrarOcultarMenu)

window.addEventListener('scroll', () => {
    efectoParallax();
    mostrarOcultarHeader()
})

//FUNCIONES

//Parallax
function efectoParallax(){
    let scroll = window.scrollY;
    
    moon.style.top = `${scroll * 2}px`
    star.style.top = `${scroll}px`
    name.style.marginTop= `-${scroll}px`
    front.style.marginTop = `${scroll}px`
    cv.style.marginTop = `${scroll * 3}px`
}

let scrollActual = window.pageYOffset;
//MostrarOcultar header
function mostrarOcultarHeader(){
    const scroll =  window.pageYOffset;
    if(scroll >= scrollActual){
        header.style.top = '-100%'
    }else{
        header.style.top = '0'
    }
    scrollActual = scroll
}

//Animacion proyectos
function animacionesScroll(){
    AOS.init({
        offset: 80
    });
}

//Mostrar o Ucultar el mneu
function mostrarOcultarMenu(){
    if(oculto){
        nav.style.top = '0'
        hamburger.classList.add('fa-times')
        body.style.overflow = 'hidden'
        nav.classList.add('animacion')

        oculto = false;
    }else {
        nav.classList.remove('animacion')
        hamburger.classList.remove('fa-times')
        body.style.overflow = 'initial'
        header.style.top = '0'
        oculto = true
        
    }
}

//Efecto Typed
const type = new Typed('.typed', {
    strings: [
        '<b class="lenguaje">HTML</b>', 
        '<b class="lenguaje">CSS</b>', 
        '<b class="lenguaje">BOOTSTRAP</b>', 
        '<b class="lenguaje">RESPONSIVE</b>', 
        '<b class="lenguaje">JAVASCRIPT</b>', 
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1250, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

