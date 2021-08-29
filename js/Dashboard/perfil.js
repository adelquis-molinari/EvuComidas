

function Data(nombre, apellido, correo, direccion, ciudad, postal, img) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.correo = correo,
    this.dirección = direccion,
    this.ciudad = ciudad,
    this.postal = postal,
    this.img = img
}


$('#cambiosPerfil').click(()=>{
    let array =[]
    let nombre = document.querySelector('#nombrePerfil');
    let apellido = document.querySelector('#apellidoPerfil');
    let correo = document.querySelector('#correoPerfil');
    let direccion = document.querySelector('#direccionPerfil');
    let ciudad = document.querySelector('#ciudadPerfil');
    let postal = document.querySelector('#postalPerfil');
    let img = document.querySelector('#imgPerfil');
    let persona = new Data(nombre.value, apellido.value, correo.value, direccion.value,ciudad.value, postal.value, img.value)
    array.push(persona)
    cambiosPerfil(array)
})

const cambiosPerfil =(data)=>{
    $('#perfilFijo').empty()
    $('#perfilFijo').append(`
    <h5>Nombre</h5>
    <p class="text-secondary">${data[0].nombre}</p>
    <h5>Apellido</h5>
    <p class="text-secondary">${data[0].apellido}</p>
    <h5>Correo</h5>
    <p class="text-secondary">${data[0].correo}</p>
    <h5>Dirección</h5>
    <p class="text-secondary">${data[0].dirección}</p>
    <h5>Ciudad</h5>
    <p class="text-secondary">${data[0].ciudad}</p>
    <h5>Código postal</h5>
    <p class="text-secondary">${data[0].postal}</p>

    <button type="submit" class="col-1 btn btn-success text-center" id="editarPerfil">Editar</button>
    `)
}

$('#imgPerfil').change((e)=>{
    let img = URL.createObjectURL(e.target.files[0]);

    $('#fotoPerfil').append(`
    <img src="${img}" class="face" alt="usuario por defecto">
    `)
})