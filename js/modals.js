const alertOk =()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cambios guardados con exito',
        showConfirmButton: false,
        timer: 1500
    })
}
const resetaOk =()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu receta fue enviada exitosamente',
        showConfirmButton: false,
        timer: 1500
    })
}

$('#success').click(()=> alertOk())