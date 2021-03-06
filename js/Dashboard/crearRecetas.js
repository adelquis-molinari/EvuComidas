let toDoItems = []
let index = 1
function ToDo (rt,dc,rd) {
    this.id = index
    this.titulo = rt;
    this.discripcionCorta = dc;
    this.description = rd;
    this.estado = 'pendiente';
}

function addToDo() {
    let resTitulo = document.querySelector('#tituloReceta')
    let descCorta = document.querySelector('#descCorta')
    let resDesc = document.querySelector('#restDesc')
    let todo = new ToDo(resTitulo.value, descCorta.value, resDesc.value)
    toDoItems.push(todo)
    resTitulo.value = ''
    descCorta.value = ''
    resDesc.value = ''
    buildToDo(todo)
}


function buildToDo(todo) {
    const eToDo = $(`
    <tr>
        <th scope="row">
            <i class="far fa-eye"></i>
        </th>
        <td>${todo.titulo}</td>
        <td>${todo.discripcionCorta}</td>
        <td>${todo.estado}</td>
        <th class="text-break align-content-center"><button type="button" class="btn btn-outline-danger">X</button></th>
    </tr>
    `)
    eToDo.on('click',(e)=>{
        e.target.parentNode.parentNode.remove()
    })
    $('#toDoContainer').append(eToDo)
    index++
    resetaOk()
}

$('#recetaSuccess').click(()=>addToDo())
