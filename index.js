window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const mensaje = document.getElementById('mensaje')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const mensajeValor = mensaje.value.trim()

        if(!usuarioValor){
            validaFalla(usuario, 'Ingrese su nombre')
        }else{
            validaOk(usuario)
        }

        if(!emailValor){
            validaFalla(email, 'Ingrese su dirección de mail')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }

        if(!mensajeValor){
            validaFalla(mensaje, 'Ingrese su mensaje')
        }else{
            validaOk(mensaje)
        }
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        alert('Su mensaje se ha enviado')
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})
