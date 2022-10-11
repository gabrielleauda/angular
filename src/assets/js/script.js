function mostrarMenu () {
    let menu = document.getElementById("menu")
    if(getComputedStyle(menu).display == 'none') {
       menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
   
}

function Login() {
    var done=0;
    var usuario = document.getElementsByName('email')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha')[0].value;
    senha=senha.toLowerCase();
    if (usuario=="email" && senha=="senha") {
      window.location="gamemania.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }
 