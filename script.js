let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();




function showModalA(){
  var element = document.getElementById("modalA");
  element.classList.add("show-modal");
}
function hideModalA(){
  var element = document.getElementById("modalA");
  element.classList.remove("show-modal");
}


function showModalB(){
  var element = document.getElementById("modalB");
  element.classList.add("show-modal");
}
function hideModalB(){
  var element = document.getElementById("modalB");
  element.classList.remove("show-modal");
}


function showModalC(){
  var element = document.getElementById("modalC");
  element.classList.add("show-modal");
}
function hideModalC(){
  var element = document.getElementById("modalC");
  element.classList.remove("show-modal");
}


function showModalD(){
  var element = document.getElementById("modalD");
  element.classList.add("show-modal");
}
function hideModalD(){
  var element = document.getElementById("modalD");
  element.classList.remove("show-modal");
}


function showModalE(){
  var element = document.getElementById("modalE");
  element.classList.add("show-modal");
}
function hideModalE(){
  var element = document.getElementById("modalE");
  element.classList.remove("show-modal");
}


function showModalF(){
  var element = document.getElementById("modalF");
  element.classList.add("show-modal");
}
function hideModalF(){
  var element = document.getElementById("modalF");
  element.classList.remove("show-modal");
}


function showModalG(){
  var element = document.getElementById("modalG");
  element.classList.add("show-modal");
}
function hideModalG(){
  var element = document.getElementById("modalG");
  element.classList.remove("show-modal");
}


function showModalH(){
  var element = document.getElementById("modalH");
  element.classList.add("show-modal");
}
function hideModalH(){
  var element = document.getElementById("modalH");
  element.classList.remove("show-modal");
}


function showModalI(){
  var element = document.getElementById("modalI");
  element.classList.add("show-modal");
}
function hideModalI(){
  var element = document.getElementById("modalI");
  element.classList.remove("show-modal");
}


function showModalJ(){
  var element = document.getElementById("modalJ");
  element.classList.add("show-modal");
}
function hideModalJ(){
  var element = document.getElementById("modalJ");
  element.classList.remove("show-modal");
}


function showModalK(){
  var element = document.getElementById("modalK");
  element.classList.add("show-modal");
}
function hideModalK(){
  var element = document.getElementById("modalK");
  element.classList.remove("show-modal");
}

function showModalL(){
  var element = document.getElementById("modalL");
  element.classList.add("show-modal");
}
function hideModalL(){
  var element = document.getElementById("modalL");
  element.classList.remove("show-modal");
}

function showModalM(){
  var element = document.getElementById("modalM");
  element.classList.add("show-modal");
}
function hideModalM(){
  var element = document.getElementById("modalM");
  element.classList.remove("show-modal");
}

function showModalN(){
  var element = document.getElementById("modalN");
  element.classList.add("show-modal");
}
function hideModalN(){
  var element = document.getElementById("modalN");
  element.classList.remove("show-modal");
}

function showModalO(){
  var element = document.getElementById("modalO");
  element.classList.add("show-modal");
}
function hideModalO(){
  var element = document.getElementById("modalO");
  element.classList.remove("show-modal");
}
