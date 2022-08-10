// esta función utiliza un forEach() que muestra en el browser la lista completa de película
function mostrarListaCompleta() {
    tituloPagina.innerText = "Lista completa de películas"
    filmoteca.forEach((pelicula) => {
        let nuevaPelicula = document.createElement("div")
        nuevaPelicula.innerHTML = `<article class="card">
                                        <h2>${pelicula.titulo}</h2>
                                        <p>estrenada en ${pelicula.anio}</p>
                                        <p>dirigida por ${pelicula.director}</p>
                                        <img src="${pelicula.afiche}">
                                    </article>`
        divPeliculas.appendChild(nuevaPelicula)
    })
}


// la funcion busqueda() recibe dos parámetros, uno indicando el tipo de atributo que buscará entre los objetos del array y el valor en cuestión
function busqueda(termino, datoPeli) {
    if (datoPeli == "titulo") {
        const resultado = filmoteca.filter((el) => el.titulo.toUpperCase() == termino.toUpperCase())
        resultadoONo(resultado)
    }
    else if (datoPeli == "director") {
        const resultado = filmoteca.filter((el)=> el.director.toUpperCase() == termino.toUpperCase())
        resultadoONo(resultado)
    }
    else {
        const resultado = filmoteca.filter((el)=> el.anio == termino)
        resultadoONo(resultado)
    }
}

// la función resultadoONo() chequea si el array tiene length 0 o no. En caso positivo avisa que no hubo resultados, si no llama a la función mostrarResultados()
function resultadoONo(resultado) {
    if (resultado.length == 0) {
        tituloPagina.innerText = "Su búsqueda no arrojó resultados"
    }
    else {
        mostrarResultados(resultado)
    }
}

// la función mostrarResultados() muestra el array con los resultados utilizando un forEach
function mostrarResultados(resultadoBusqueda) {
    tituloPagina.innerText = "Su búsqueda arrojó los siguientes resultados:"
    resultadoBusqueda.forEach((pelicula) => {
        let nuevaPelicula = document.createElement("div")
        nuevaPelicula.innerHTML = `<article class="card">
                                        <h2>${pelicula.titulo}</h2>
                                        <p>estrenada en ${pelicula.anio}</p>
                                        <p>dirigida por ${pelicula.director}</p>
                                        <img src="${pelicula.afiche}">
                                    </article>`
        divPeliculas.appendChild(nuevaPelicula)
    })
}

// estas tres funcionoes son llamadas por eventos. Cuando el usuario cliquea llama a la función específica utilizando el valor introducido en el input
function guardarTitulo() {
    let titulo = document.getElementById("inputTitulo")
    busqueda(titulo.value, "titulo")
}

function guardarDirector() {
    let director = document.getElementById("inputDirector")
    busqueda(director.value, "director")
}

function guardarAnio() {
    let anio = document.getElementById("inputAnio")
    busqueda(anio.value, "anio")
}

// esta función está llamada desde un evento onmouseover para que muestre un mensaje
function muestraRefrescar() {
    mensajeRefrescar.innerText = "Por favor, recargar la página antes de cada búsqueda o de mostrar la lista completa"
}

// clase Peliculas, a partir de la cual armar los objetos
class Peliculas {
    constructor(titulo, anio, director, afiche) {
        this.titulo = titulo,
        this.anio = anio,
        this.director = director
        this.afiche = afiche
    }
}

// lista de objetos, instancias de la clase Peliculas
let pelicula01 = new Peliculas("La morada del diablo", 1896, "Melies", "./media/manoir-melies-1896.jpg")
let pelicula02 = new Peliculas("Las cuatrocientas farsas del diablo", 1906, "Melies", "./media/farces-diable-melies-1906.jpg")
let pelicula03 = new Peliculas("El estudiante de Praga", 1913, "Rye", "./media/rye-prag-1913.jpg")
let pelicula04 = new Peliculas("El Golem", 1914, "Wegener", "./media/der-golem-1914.jpg")
let pelicula05 = new Peliculas("Los vampiros", 1915, "Feuillade", "./media/les-vampires-1915.jpg")
let pelicula06 = new Peliculas("El gabinete del Dr. Caligari", 1920, "Wiene", "./media/cabinet-caligari-1920.jpg")
let pelicula07 = new Peliculas("La carreta fantasma", 1921, "Sjostrom", "./media/korkarlen-1921.jpg")
let pelicula08 = new Peliculas("Páginas del diario de Satán", 1921, "Dreyer", "./media/satans-dreyer-1921.jpg")
let pelicula09 = new Peliculas("Haxan", 1921, "Christensen", "./media/haxan-1921.jpg")
let pelicula10 = new Peliculas("Doctor Mabuse", 1922, "Lang", "./media/dr-mabuse-1922.jpg")

// array de objetos con el nombre filmoteca
const filmoteca = [pelicula01, pelicula02, pelicula03, pelicula04, pelicula05, pelicula06, pelicula07, pelicula08, pelicula09, pelicula10]

// este getElementById accede al elemento div con el id peliculas en el HTML
let divPeliculas = document.getElementById("peliculas")

// este setAttribute() llama a la clase .estiloPeliculas en el css
divPeliculas.setAttribute("class", "estiloPeliculas")

let tituloPagina = document.getElementById("tituloPagina")

// este getElementById accede al botón con la id "verTodas"
let botonMostrar = document.getElementById("verTodas")

// este evento hace que al cliquear el botón llame a la función mostrarListaCompleta
botonMostrar.addEventListener("click", mostrarListaCompleta)

// a continuación hay tres getElementById y tres addEventListener que acceden a botones en el HTML e inician eventos que llaman a funciones respectivamente
const guardarTituloBtn = document.getElementById("enviarTitulo")

guardarTituloBtn.addEventListener("click", guardarTitulo)

const guardarDirectorBtn = document.getElementById("enviarDirector")

guardarDirectorBtn.addEventListener("click", guardarDirector)

const guardarAnioBtn = document.getElementById("enviarAnio")

guardarAnioBtn.addEventListener("click", guardarAnio)

let mensajeRefrescar = document.getElementById("mensajeRefrescar")

// los eventos a continuación hacen que cada vez que el puntero del mouse pase por encima de un botón recuerde al usuario que refresque la página. De lo contrario los resultados irán acumulándose.
botonMostrar.onmouseover = () => {muestraRefrescar()}

botonMostrar.onmouseout = () => {mensajeRefrescar.innerText = ""}

guardarTituloBtn.onmouseover = () => {muestraRefrescar()}

guardarTituloBtn.onmouseout = () => {mensajeRefrescar.innerText = ""}

guardarDirectorBtn.onmouseover = () => {muestraRefrescar()}

guardarDirectorBtn.onmouseout = () => {mensajeRefrescar.innerText = ""}

guardarAnioBtn.onmouseover = () => {muestraRefrescar()}

guardarAnioBtn.onmouseout = () => {mensajeRefrescar.innerText = ""}

