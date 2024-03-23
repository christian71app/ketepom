const sectionSeleccionarAtaque=document.getElementById('seleccion_ataque')
const sectionReiniciar=document.getElementById('reiniciar')
const botonMascotaJugador=document.getElementById("boton_mascota")

const botonReiniciar=document.getElementById('boton_reiniciar')

const sectionSeleccionarMascota=document.getElementById('seleccion_mascota')

const spanMascotaJugador=document.getElementById('mascota_jugador')

const spanMascotaEnemigo=document.getElementById('mascota_enemigo')

const spanVidasJugador=document.getElementById('victorias_jugador')
const spanVidasEnemigo=document.getElementById('victorias_enemigo')

const sectionMensajes=document.getElementById('resultado_general')
const divAttackJugador=document.getElementById('ataques_jugador')
const divAttackEnemigo=document.getElementById('ataques_enemigo')

const contenedorDeTarjetas=document.getElementById('contenedorTarjetas')

const contenedorDeAtaques=document.getElementById('contenedorAtaques')

const sectionVerMapa=document.getElementById('ver_mapa')
const mapa=document.getElementById('mapa')

let ketepomes=[]     
let ataque_jugador=[]
let ataque_enemigo=[]
let opcionKetepomes
let inputHipodog
let inputCapipepe
let inputRattigueya
let inputLangostina
let inputTukapalma
let inputPydols
let mascota_elegida_jugador
let ataques_ketepom
let ataquesKetepomEnemigo
let botonFuego
let botonAgua
let botonTierra
let vidasJugador=3
let vidasEnemigo=3

let botones=[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0

let lienzo=mapa.getContext("2d")
let intervalo
let mapaBackground=new Image()
mapaBackground.src='img/ketepomap.jpeg'
let alturaQueBuscamos
let anchoMapa=window.innerWidth-20
const anchoMaximoMapa=500

if(anchoMapa>anchoMaximoMapa) {
    anchoMapa=anchoMaximoMapa-20
}

let altoQueBuscamos=anchoMapa*600/800
mapa.width=anchoMapa
mapa.height=altoQueBuscamos

let mascotaJugadorObjeto

class Ketepom {
    constructor(nombre, foto, vida, tipo, fotoMapa) {
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
        this.tipo=tipo
        this.ancho=65
        this.alto=50
        this.x=aleatorio(0,mapa.width-this.ancho)
        this.y=aleatorio(0,mapa.height-this.alto)
        this.mapaFoto=new Image()
        this.mapaFoto.src=fotoMapa
        this.velocidadX=0
        this.velocidadY=0
    }

    pintarKetepom() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodog=new Ketepom('Hipodog', 'img/Hipodog water.png', 5, 'img/water.png', 'img/Hipodog water_icon.png')

let capipepe=new Ketepom('Capipepe', 'img/Capipepe land.png', 5, 'img/earth.png', 'img/Capipepe land_icon.png')

let rattigueya=new Ketepom('Rattigueya', 'img/Rattigueya fire.png', 5, 'img/fire.png', 'img/Rattigueya fire_icon.png')

let langostina=new Ketepom('Langostina', 'img/Langostina water and fire.png', 5, 'img/waterandfire.png', 'img/Langostina water and fire_icon.png')

let tukapalma=new Ketepom('Tukapalma', 'img/Tukapalma water and land.png', 5, 'img/earthandwater.png', 'img/Tukapalma water and land_icon.png')

let pydolsEnemigo=new Ketepom('Pydols', 'img/Pydols land and fire.png', 5, 'img/fireandearth.png', 'img/Pydols land and fire_icon.png')

let hipodogEnemigo=new Ketepom('Hipodog', 'img/Hipodog water.png', 5, 'img/water.png', 'img/Hipodog water_icon.png')

let capipepeEnemigo=new Ketepom('Capipepe', 'img/Capipepe land.png', 5, 'img/earth.png', 'img/Capipepe land_icon.png')

let rattigueyaEnemigo=new Ketepom('Rattigueya', 'img/Rattigueya fire.png', 5, 'img/fire.png', 'img/Rattigueya fire_icon.png')

let langostinaEnemigo=new Ketepom('Langostina', 'img/Langostina water and fire.png', 5, 'img/waterandfire.png', 'img/Langostina water and fire_icon.png')

let tukapalmaEnemigo=new Ketepom('Tukapalma', 'img/Tukapalma water and land.png', 5, 'img/earthandwater.png', 'img/Tukapalma water and land_icon.png')

let pydols=new Ketepom('Pydols', 'img/Pydols land and fire.png', 5, 'img/fireandearth.png', 'img/Pydols land and fire_icon.png')

hipodog.ataques.push(
    {nombre:'💧', id:'boton_agua'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🌱', id:'boton_tierra'},
)

hipodogEnemigo.ataques.push(
    {nombre:'💧', id:'boton_agua'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🌱', id:'boton_tierra'},
)

capipepe.ataques.push(
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'🔥', id:'boton_fuego'},
)

capipepeEnemigo.ataques.push(
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'🔥', id:'boton_fuego'},
)

rattigueya.ataques.push(
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'💧', id:'boton_agua'},
)

rattigueyaEnemigo.ataques.push(
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'💧', id:'boton_agua'},
)

langostina.ataques.push(
    {nombre:'💧', id:'boton_agua'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🌱', id:'boton_tierra'},
)

langostinaEnemigo.ataques.push(
    {nombre:'💧', id:'boton_agua'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🌱', id:'boton_tierra'},
)

tukapalma.ataques.push(
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'🔥', id:'boton_fuego'},
)

tukapalmaEnemigo.ataques.push(
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'🔥', id:'boton_fuego'},
)

pydols.ataques.push(
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'💧', id:'boton_agua'},
)

pydolsEnemigo.ataques.push(
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'🌱', id:'boton_tierra'},
    {nombre:'💧', id:'boton_agua'},
)

ketepomes.push(hipodog,langostina,capipepe,tukapalma,rattigueya,pydols)

//FUNCION DE INICIO DEL JUEGO PARA SELECCIONAR MASCOTA DEL JUGADOR
function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display='none'
    sectionVerMapa.style.display='none'

    ketepomes.forEach((ketepom) => {         
        opcionKetepomes=`
        <input type="radio" name="mascota" id="${ketepom.nombre}" />
        <label class="tarjeta_ketepom" for="${ketepom.nombre}">
            <div class='nombre_tipo'>
                <p id='nombre' >${ketepom.nombre}</p>
                <img id="tipofoto" src="${ketepom.tipo}" alt="${ketepom.nombre}">
            </div>
                <img src="${ketepom.foto}" alt="${ketepom.nombre}">
            
        </label>
        `  
    contenedorDeTarjetas.innerHTML+=opcionKetepomes  

    inputHipodog=document.getElementById('Hipodog')
    inputCapipepe=document.getElementById('Capipepe')
    inputRattigueya=document.getElementById('Rattigueya')
    inputLangostina=document.getElementById('Langostina')
    inputTukapalma=document.getElementById('Tukapalma')
    inputPydols=document.getElementById('Pydols')
    
    })

    sectionReiniciar.style.display='none'
    botonMascotaJugador.addEventListener('click',selecMascotaJugador)
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

//FUNCION DE SELECCION DE MASCOTA DEL JUGADOR
function selecMascotaJugador() {
    sectionSeleccionarMascota.style.display='none'
    let jugar=1
    //Comprueba la seleccion y cambia el DOM con la mascota seleccionada
    if (inputHipodog.checked) {
        spanMascotaJugador.innerHTML=inputHipodog.id
        mascota_elegida_jugador=inputHipodog.id
    } else if (inputCapipepe.checked) {
        spanMascotaJugador.innerHTML=inputCapipepe.id
        mascota_elegida_jugador=inputCapipepe.id
    } else if (inputRattigueya.checked) {
        spanMascotaJugador.innerHTML=inputRattigueya.id
        mascota_elegida_jugador=inputRattigueya.id
    } else if (inputLangostina.checked) {
        spanMascotaJugador.innerHTML=inputLangostina.id
        mascota_elegida_jugador=inputLangostina.id
    } else if (inputTukapalma.checked) {
        spanMascotaJugador.innerHTML=inputTukapalma.id
        mascota_elegida_jugador=inputTukapalma.id
    } else if (inputPydols.checked) {
        spanMascotaJugador.innerHTML=inputPydols.id
        mascota_elegida_jugador=inputPydols.id
    } else {
        alert('Selecciona a una mascota.')
        sectionSeleccionarMascota.style.display='flex'
        sectionSeleccionarAtaque.style.display='none'
        sectionVerMapa.style.display='none'
        jugar=0
    }

    if (jugar==1) {
        extraerAtaques(mascota_elegida_jugador)
        sectionVerMapa.style.display='flex'
        iniciarMapa()
        let botonMascotaJugador=document.getElementById("boton_mascota")
        botonMascotaJugador.disabled=true
    }
    
}

function extraerAtaques(mascota_elegida_jugador) {
    let ataques
    for (let i = 0; i < ketepomes.length; i++) {
        if(mascota_elegida_jugador==ketepomes[i].nombre) {
            ataques=ketepomes[i].ataques
        }
    }
    mostrarAtaques(ataques)

}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataques_ketepom= `
        <button id="${ataque.id}" class="ataque_boton BAtaque">${ataque.nombre}</button>
        `
        contenedorDeAtaques.innerHTML+=ataques_ketepom
    })
    
    botonFuego=document.getElementById('boton_fuego')
    botonAgua=document.getElementById('boton_agua')
    botonTierra=document.getElementById('boton_tierra')
    botones=document.querySelectorAll('.BAtaque')     
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click',(e) => {   
            if (e.target.textContent=='🔥') {     
                ataque_jugador.push('FUEGO')    
                console.log(ataque_jugador)    
                boton.style.background= '#112f58' 
                boton.disabled=true
            } else if (e.target.textContent=='💧') {
                ataque_jugador.push('AGUA')   
                console.log(ataque_jugador)    
                boton.style.background= '#112f58'
                boton.disabled=true
            } else {
                ataque_jugador.push('TIERRA')   
                console.log(ataque_jugador)    
                boton.style.background= '#112f58'
                boton.disabled=true
            }
            ataqueale_enemigo()
        })
    })
}

//FUNCION DE NUMERO ALEATORIO
function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

//FUNCION DE SELECCION DE MASCOTA DEL ENEMIGO
function selecMascotaEnemigo(enemigo) {
        spanMascotaEnemigo.innerHTML=enemigo.nombre
        ataquesKetepomEnemigo=enemigo.ataques
        console.log(enemigo)
        secuenciaAtaque()
}

//Funcion de ataque aleatorio del enemigo
function ataqueale_enemigo() {
    console.log('ataque',ataquesKetepomEnemigo)
    let ataque_aleatorio=aleatorio(0,ataquesKetepomEnemigo.length-1)
    let ataqueImprimir=ataquesKetepomEnemigo[ataque_aleatorio].nombre
    if(ataqueImprimir=='🔥') {
        ataque_enemigo.push('FUEGO')
    } else if (ataqueImprimir=='💧') {
        ataque_enemigo.push('AGUA')
    } else if (ataqueImprimir=='🌱') {
        ataque_enemigo.push('TIERRA')
    }
    ataquesKetepomEnemigo.splice(ataque_aleatorio,1)

    console.log(ataque_enemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataque_jugador.length==5) {
        combate(ataque_jugador,ataque_enemigo)
    }
}

function indexOponentes(jugador,enemigo) {
    indexAtaqueJugador=ataque_jugador[jugador]
    indexAtaqueEnemigo=ataque_enemigo[enemigo]
}

function combate(user1,user2) {

    for (let index = 0; index < ataque_jugador.length; index++) {
        if (ataque_jugador[index]==ataque_enemigo[index]) {
            indexOponentes(index,index)
            crearMensaje("¡EMPATE!")
        } else if (ataque_jugador[index]=='FUEGO' && ataque_enemigo[index]=='TIERRA') {
            indexOponentes(index,index)
            crearMensaje("¡GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        } else if (ataque_jugador[index]=='AGUA' && ataque_enemigo[index]=='FUEGO') {
            indexOponentes(index,index)
            crearMensaje("¡GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        } else if (ataque_jugador[index]=='TIERRA' && ataque_enemigo[index]=='AGUA') {
            indexOponentes(index,index)
            crearMensaje("¡GANASTE!")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        } else {
            indexOponentes(index,index)
            crearMensaje("¡PERDISTE!")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML=victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador==victoriasEnemigo) {
        //EMPATE
        FinJuegomensaje("🏳😐 Esto fue un EMPATE 😐🏳")
    } else if (victoriasJugador>victoriasEnemigo) {
        //GANASTE
        FinJuegomensaje("FELICIDADES, HAS GANADO 🎉🎇")
    } else {
        //PERDISTE
        FinJuegomensaje("Lo siento, has perdido 😔")
    }
}

//Funcion crear mensaje de ataques
function crearMensaje(resultado) {
    let newAttackJugador=document.createElement('p')
    let newAttackEnemigo=document.createElement('p')

    sectionMensajes.innerHTML=resultado
    newAttackJugador.innerHTML=indexAtaqueJugador
    newAttackEnemigo.innerHTML=indexAtaqueEnemigo

    divAttackJugador.appendChild(newAttackJugador)
    divAttackEnemigo.appendChild(newAttackEnemigo)

}

//Funcion crear mensaje de victoria o derrota
function FinJuegomensaje(resultadoFINAL) {

    sectionMensajes.innerHTML=resultadoFINAL
    sectionReiniciar.style.display='block'
}

//FUNCION DE REINICIAR JUEGO
function reiniciarJuego() {
    location.reload()
}

function pintarCanvas() {
    mascotaJugadorObjeto.x=mascotaJugadorObjeto.x+mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y=mascotaJugadorObjeto.y+mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarKetepom()
    hipodogEnemigo.pintarKetepom()
    capipepeEnemigo.pintarKetepom()
    rattigueyaEnemigo.pintarKetepom()
    langostinaEnemigo.pintarKetepom()
    tukapalmaEnemigo.pintarKetepom()
    pydolsEnemigo.pintarKetepom()
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY!== 0) {
        revisarColision(hipodogEnemigo)
        revisarColision(capipepeEnemigo)
        revisarColision(rattigueyaEnemigo)
        revisarColision(langostinaEnemigo)
        revisarColision(tukapalmaEnemigo)
        revisarColision(pydolsEnemigo)
    }
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX=5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX=-5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY=5
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY=-5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX=0
    mascotaJugadorObjeto.velocidadY=0
}

function PresionarTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
            moverArriba()
            break
        case 'ArrowDown':
            case 's':
            moverAbajo()
            break
        case 'ArrowLeft':
            case 'a':
            moverIzquierda()
            break
        case 'ArrowRight':
            case 'd':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {
    mascotaJugadorObjeto=obtenerObjetoMascota(mascota_elegida_jugador)
    console.log(mascotaJugadorObjeto,mascota_elegida_jugador);
    intervalo=setInterval(pintarCanvas,50)

    window.addEventListener('keydown', PresionarTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < ketepomes.length; i++) {
        if(mascota_elegida_jugador==ketepomes[i].nombre) {
            return ketepomes[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo=enemigo.y
    const abajoEnemigo=enemigo.y+enemigo.alto
    const derechaEnemigo=enemigo.x+enemigo.ancho
    const izquierdaEnemigo=enemigo.x

    const arribaMascota=mascotaJugadorObjeto.y+25
    const abajoMascota=mascotaJugadorObjeto.y+mascotaJugadorObjeto.alto-25
    const derechaMascota=mascotaJugadorObjeto.x+mascotaJugadorObjeto.ancho-25
    const izquierdaMascota=mascotaJugadorObjeto.x+25

    if(
        abajoMascota<arribaEnemigo ||
        arribaMascota>abajoEnemigo ||
        derechaMascota<izquierdaEnemigo ||
        izquierdaMascota>derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display='flex'
    sectionVerMapa.style.display='none'
    selecMascotaEnemigo(enemigo)
}

//ESCUCHA DEL EVENTO LOAD DEL DOCUMENTO Y EVENTO CLICK DEL BOTON
window.addEventListener('load', iniciarJuego)