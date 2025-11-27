function fetchData(){
    fetch('http://localhost:3000/prodcuts')
    .then((res)=>res.json())
    .then((data)=>{getData(data)})
    .catch((err)=>console.log(err))
}
fetchData();

function getData(data) {
    let output = data.map(el =>
        card(el.id, el.image, el.category, el.title, el.description, el.rating, el.price)
    ).join("");

    document.getElementById("products").innerHTML = output;
}


function card(id, image, category, title, description, rating, price) {
    return `
        <div class="card">
            <img src="${image}" alt="${title}">
            <h3>${title}</h3>
            <p class="category">${category}</p>
            <p class="price">$${price}</p>
            <p class="rating">⭐ ${rating.rate} (${rating.count})</p>
            <p class="description">${description.substring(0, 80)}...</p>
        </div>
    `;
}
