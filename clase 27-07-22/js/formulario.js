const formulario = document.getElementById('formulario');
const input = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{9,16}$/,
    nombre:  /^[a-zA-Z0-9]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
    Telefono: /^(7,14)$/, //de 7 a 14 numeros
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false,
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        case "usuario":
            validarcampo(expresiones.usuario, e.target,'usuario');
        break
        case "nombre":
            validarcampo(expresiones.nombre, e.target,'nombre');
        break
        case "password":
            validarcampo(expresiones.password, e.target,'password');
            validarPassword2();
        break
        case "password2":
            validarPassword2();
        break
        case "correo":
            validarcampo(expresiones.correo, e.target,'correo');
        break
        case "telefono":
            validarcampo(expresiones.telefono, e.target,'telefono');
        break
    }

}
const validarcampo = (expresion, input, campos) => {
    if(expresion.test(input.vale)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto'); 
    }

}