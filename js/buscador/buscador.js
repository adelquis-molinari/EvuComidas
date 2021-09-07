const appId = 'a2d86308';
const appKey = '134ab648dabadaef10b630c9c4d31451';
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
        crearTarjetas(data.hits);
    })
}

const crearTarjetas=(data)=>{
    data.map((i)=>{
        let img = i.recipe.image;
        let imgAlt = i.recipe.label;
        let title = i.recipe.label;
        let link = i.recipe.url;
        $('#grid').append(`
        <div class="card col-12 col-md-6 col-lg-3 m-2 cd-img">
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
}
