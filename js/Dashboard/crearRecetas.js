let toDoItems = []

function ToDo (rt,dc,rd) {
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
    displayToDos()
}

function displayToDos() {
    let toDoContainer = document.querySelector('#toDoContainer');
    let array2 = buildToDos(toDoItems);
    array2.forEach(function(e){
        toDoContainer.appendChild(e)
    })
}


function buildToDos(toDos) {
    let array = toDos.map((x,i)=>{
        return buildToDo(x,i)
    })
    return array
}
function buildToDo(todo, index) {
    let toDoShell = document.createElement('div');
    toDoShell.appendChild(`
    <tr>
        <th scope="row">${index}</th>
        <td>${todo.titulo}</td>
        <td>${todo.descriptionCorta}</td>
        <td>${todo.estado}</td>
        <th class="text-break align-content-center"><button type="button" class="btn btn-outline-danger" id='eliminarIten'>X</button></th>
    </tr>
    `);
    // toDoShell.classList.add('toDoShell');
    // let toDoText = document.createElement('span');
    // toDoText.innerHTML = todo.description;
    // toDoText.id = index;
    // toDoText.onclick = completeToDo
    // if (todo.complete === true) {
    //     toDoText.className = 'completeText';
    // };
    
    return toDoShell
}



$('#recetaSuccess').click(()=>addToDo())

