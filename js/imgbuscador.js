
const pedirImg=(q,i)=>{
    $.get(`https://api.unsplash.com/search/photos?query='${q}'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`,data=>{
            imgBusqueda(data,i)
    })
}
const imgBusqueda =(data,i)=>{
    console.log(data);
    $('#banner').append(`
        <img src="${data.results[i].urls.full}" alt="${data.results[i].alt_description}" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
    `)
}
