const campoName = document.getElementById('name');
const divMensagem = document.getElementById('mensagem');



const validarCampo = ()=> {

    campoName.addEventListener('focusout', validarCampoNome)
}

const validarCampoNome = ()=>
{   
    if(campoName.value.length < 3)
    {   
       
        divMensagem.innerText = "Esta com pouco caractere";
        campoName.classList.add('erro');
        campoName.focus();
        return;
      
    }
    else{
        divMensagem.innerText = "";
        campoName.classList.remove('erro');
        return;
    }
}





document.addEventListener('DOMContentLoaded', validarCampo)