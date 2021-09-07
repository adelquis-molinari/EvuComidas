const pedirImg=(q)=>{
    $.get(`https://api.unsplash.com/search/photos?query='${q}'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`,data=>{
            imgBusqueda(data)
            console.log(data);
    })
}
const imgBusqueda =(data,i)=>{
    $('#carousel').append(`
    <div class="carousel-item  active">
        <img src="${data.results[1].urls.full}" class="d-block w-100" height="auto" alt="${data.results[1].alt_description}">
    </div>
    <div class="carousel-item">
        <img src="${data.results[2].urls.full}" class="d-block w-100" height="auto" alt="${data.results[2].alt_description}">
    </div>
    <div class="carousel-item">
        <img src="${data.results[0].urls.full}" class="d-block w-100" height="auto" alt="${data.results[0].alt_description}">
    </div>
    `)
}
pedirImg('restaurante')