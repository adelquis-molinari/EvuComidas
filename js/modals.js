const alertOk =()=>{
    Swal.fire({
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
const saludar =(nombre, apellido)=>{
    Swal.fire({
        title: `Hola ${nombre} ${apellido}`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}
const oops =()=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Uno de los campos esta vacio!',
    })
}

$('#success').click(()=> alertOk())