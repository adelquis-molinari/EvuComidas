let comidas = ['tomatoes','cabbage','lettuce','spinach','carrots','onions','potato','shellfish','beef','tuna','hake'];
const randomIten=(min,max)=> Math.floor((Math.random()*(max - min + 1)) + min);
let comida = comidas[randomIten(0,11)];


const randomLoad =()=>{
    for (let i = 1; i <= 9; i++) {
        gridApi(comida)
    }
}

const gridApi =(q)=>{
    $('#grid').empty()
    $.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=${appId}&app_key=${appKey}`, data =>{
        busqueda(data)
    })
}
const busqueda =(data)=>{
    let rd = randomIten(0,20);
    let img = data.hits[rd].recipe.image;
    let imgAlt = data.hits[rd].recipe.label;
    let title = data.hits[rd].recipe.label;
    let link = data.hits[rd].recipe.url;
    $('#grid').append(`
    <div class="card col-12 col-md-6 col-lg-3 m-2">
    <div class="card-wrapper">
        <div class="card-box align-left mt-2">
            <img class="card-img-top" src="${img}" alt="${imgAlt}">
        </div>
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <a href="${link}" class="btn btn-primary" target=black>Acocinar!!!</a>
            </div>
        </div>
    </div>
        `)
}
window.onload = randomLoad