/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


var access = "lZNH90FwOcHmONEfMzDtnMsmkTGX9FXgI9MHXNxPJpiIxJVJS5IMwIkW62vfiHhB"
//hace todas las palabras a mayusculas
var text1;

//es el espacio en el HTML donde ira la lista
var list = document.getElementById("list")
var content = document.getElementById("content")
var  topsongs = document.getElementById("topsongs")
var img = document.getElementById("img")
var div = document.getElementById("div")

//esto da el valor a cuantas li de la lista apareceran, pero lo tomara del value, si la barra esta vacia no aparecera nada.
//al presionar el boton, la pagina se refrezcara tomando el valor ya puesto en la barra. esto se soluciorana con node despues
// ntimes = document.getElementById("topn").value;

//La funcion que refresca la pagina para que ntimes pueda tomar el valor actualizado del input
//   function topn(){ 
//  var art = document.getElementById("artist").value;
// var artist = art.replace(" ","_");
// fetch( `//api.genius.com/search?q=${artist}&access_token=${access}`)
// .then(response => response.json())
// .then(data => data.response.hits)
// .then(data =>  data.forEach(i =>  fetch(`https://api.lyrics.ovh/v1/${art}/${i.result.title}`)
// .then(data => data.json())
// .then(data => text1 += (data.lyrics))));


//  var textSeparated = text1.toUpperCase().replace(/[^a-z0-9+']+/gi, ' ').replace('"', "").split(" ")

//  const counts = {};
//  textSeparated.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
//   var entries = Object.entries(counts)

//   entries.sort(function (a, b) {
//      return b[1] - a[1];
    
//     });
//     console.log(entries)
//     for(i = 0; i <10; i++){
     
//      list.innerHTML += ` <li> ${entries[i].join(": ")} </li> `}

  
      





  



// }


  //I want to trigger this function when user hit Enter key.

// Get the input field
var input = document.getElementById("search");
var artistTitle = document.getElementById("artistTitle");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
//not sure how to detect when user press Enter



async function topn(){ 

   


div.style.display = "block"
 async function clean(){ const clean = list.innerHTML = "";
                        const clean2 = topsongs.innerHTML = ""}



  
var fullLyric;
var titles = []
  var art = document.getElementById("artist").value;
  var artist = art.replace(" ","_");
var respuesta1 = await  fetch( `//api.genius.com/search?q=${artist}&access_token=${access}`)
var respuesta2 = await respuesta1.json()
var respuesta3 = await respuesta2.response.hits
artistTitle.innerHTML = artist.toUpperCase().replace("_", " ")

var text2
//imagen
var image_url = await respuesta2.response.hits[0].result.primary_artist.header_image_url
var response = await fetch(image_url)
var blob = await response.blob()
img.src = URL.createObjectURL(blob)
var canciones= [];
var text;
for(i in respuesta3){
  var apiResponse = await (await fetch(`https://api.lyrics.ovh/v1/${art}/${respuesta3[i].result.title}`)).json()
  titles.push(apiResponse.title)
  var titles = respuesta2.response.hits
  var title = respuesta2.response.hits[i].result.title
 
  //text +=  apiResponse.lyrics
  var lyricSong = title+" "+apiResponse.lyrics
  

//quita la primer linea

var lines = lyricSong.split('\n');

lines.splice(0,1);

var fullLyric = lines.join('\n');

 text += fullLyric
 

console.log(fullLyric + title)

  
}



var textSeparated =   text.toUpperCase().replace('"', "").replace(/,/g, '').split(" ")





const counts = {};
 textSeparated.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })
  var entries = Object.entries(counts)

  entries.sort(function (a, b) {
     return b[1] - a[1];
    
    });
    console.log(entries)
  
    clean()
    for(i = 0; i <20; i++){
    
      list.innerHTML += ` <b> <li class="d-flex justify-content-center mt-1" style="font-weigth:bolder"> ${i+1}.- ${entries[i].join(' : ' ) + " TIMES" } </li> `;
      
     
  
    }
    for(i = 0; i< 10; i++){
     
      topsongs.innerHTML += ` <li class="d-flex justify-content-center mt-1"> ${titles[i].result.title} </li> `
     
  
    }
  

  }


// var textSeparated = text.toUpperCase().replace(/[^a-z0-9+']+/gi, ' ').replace('"', "").split(" ")


  
//  xhr.send();


//SONG LYRIC RETRIEVER

// fetch("https://api.lyrics.ovh/v1/prince/")

// .then(response => 	response.json())
// .then(data => console.log(data))



//Esto es lo que toma la letra de la cancion, quita todos los valores alfanumericos y los divide por espacios, asi creando un array 
//con todas las palabras de la cancion.

//  var textSeparated  = text1.replace(/[^a-z0-9+']+/gi, ' ').replace('"', "").split(' ')




//Esto es el corazon del programa. Esta funcion es la que crea un objeto a partir de tu array de palabras dividas de la cancion. 
//Crea un objeto llamado counts, y agrega como key la palabra y como su value las veces que se repite.
//Pasa por cada palabra del array y va sumando las veces que la cuente. Por ejemplo si la palabra "love" se repite 2 veces, lo guardara como "love":2
// const counts = {};
// textSeparated.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// var entries = Object.entries(counts)



// //esto pone en orden de menor a mayor el numero value(o sea cuantas veces se repite) de los arrays, que siempre esta en el index 1
// entries.sort(function (a, b) {
//   return b[1] - a[1];
  
// });


//esto es lo que manda al HTML los <li> de la lista. Indicado por la variable ntimes que toma su valor del input value del HTML. tambien cambia el , por un :
// for(i = 0; i <10; i++){
//  console.log()
//    list.innerHTML += ` <li> ${entries[i].join(": ")} </li> `
  
// }
https://api.genius.com/search?q=Damon_Albarn&access_token=



//client id
var client_id = "8koY7ZVknm8_ZrQ_p6GuohCK18-IUiXdAolf0L_4BJOIFKcvGp-OxZjjI-q-kq0Y"
var secret = "qBwHxeZXZTqqqm1MqqOVT_2naTLmMqSaNqiquoIINXjbRY7jfTRz1mxA9XbD7ZybW9aWlp_HdmMVCHXcDj6I8g"

//aprender a usar envdot
//aprender a usar breakpoints
