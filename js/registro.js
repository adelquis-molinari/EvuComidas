// pedirImg('people dinner',5)


$('#login').click(()=>{
    let nombre = document.querySelector('#name')
    let apellido = document.querySelector('#lastname')
    let registro = document.querySelector('#registroLigin')
    if(nombre.value === '' || apellido.value == ''){
        oops()
    }else{
        registro.className = "oculto"
        saludar(nombre.value, apellido.value)
        $('#imgUser').empty()
        $('#imgUser').append(`
        <img src="../img/Usuario.png" alt="usuario por defecto" class='border border-warning rounded-circle tamañoPerfil'>
        <h6>${nombre.value} ${apellido.value}</h6>
        `);
    }
})