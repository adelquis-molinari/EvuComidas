let appId = '4d88b7c1';
let appKey = 'bf5e67f2fb92fb6444349d37fb613ce8';
$( "#buscar" ).keydown((e)=> {
    if (e.key === 'Enter') requiereApi();
});

$( "#search" ).click(()=> {
    requiereApi();
});

requiereApi =(e)=>{
    $('#grid').empty()
    let rep = $('#buscar').val()
    $.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${rep}&app_id=${appId}&app_key=${appKey}`, data =>{
        let respuesta = data.hits;
        respuesta.map((i)=>{
            let img = i.recipe.image;
            let imgAlt = i.recipe.label;
            let title = i.recipe.label;
            let link = i.recipe.url;
            $('#grid').append(`
            <div class="card col-12 col-md-6 col-lg-3 m-2">
            <div class="card-wrapper">
                <div class="card-box align-left mt-2">
                    <img class="card-img-top" src="${img}" alt="${imgAlt}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <a href="${link}" class="btn btn-outline-success" target=black>A cocinar!!!</a>
                </div>
            </div>
        </div>
            `)
        })
    })
}

