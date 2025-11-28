
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button"); 

// Problem 1. List of pitches on page load [3}

let product_data=[];

//fetch and display data
function fetchData(){
    fetch('http://localhost:3000/pitches')
    .then((res)=>res.json())
    .then((data)=>{
        displayData(data),
        product_data= data
    })
    .catch((err)=>console.log(err))
}
fetchData();
function displayData(data)
{
    let wholeData = data.map((el)=>card(el.id,el.image, el.founder, el.description,el.title,el.price,el.category))
    mainSection.innerHTML = wholeData.join(" ");
}
function card(id,image,founder,description,title,price,category){
   let store=`<div style="border: 1px solid #000; padding: 10px; margin: 10px;">
    <h3 data-id=${id}> id : ${id} </h3> 
    <img src="${image}" height="200px" width="200px"> 
    <h2>Founder : ${founder}</h2> 
    <p>Description : ${description} </p> 
    <p>Title : ${title} </p> 
    <p>Price : ${price} </p> 
    <p>Category : ${category} </p> 
    <a href="#" class="card-link" data-id=${id}> Edit </a> &nbsp;&nbsp;&nbsp; 
    <button class="card-button" data-id=${id}> Delete </button> 
</div>` 
return store;
}

//Post method
pitchCreateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let Data={
        title: pitchTitleInput.value,
        image: pitchImageInput.value,
        category : pitchCategoryInput.value,
        founder : pitchfounderInput.value,
        price : pitchPriceInput.value,
    }
    fetch('http://localhost:3000/pitches',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body : JSON.stringify(Data),
    })
    .then((res)=>res.json())
    .then(data=>console.log('Pitch added Sucessfully:',data)
    .catch((err)=>console.log(err))
)
})

//Delete method
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('card-button'))
    {
        deletePitch(e.target.dataset.id)
    }
})
function deletePitch(id){
    fetch(`http://localhost:3000/pitches/${id}`,{
        method:'DELETE'
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}


//Put method
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('card-link'))
    {
        updatePitch(e.target.dataset.id)
    }
})
function updatePitch(id){
    fetch(`http://localhost:3000/pitches/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        updatePitchTitleInput.value = data.title,
        updatePitchIdInput.value = data.id,
        updatePitchImageInput.value = data.image,
        updatePitchfounderInput.value = data.founder,
        updatePitchCategoryInput.value = data.category,
        updatePitchPriceInput.value = data.price
    })
    .catch((err)=>console.log(err))
}
updatePitchBtn.addEventListener('click',()=>{
   let updatePitchObj = {
        id :updatePitchIdInput.value,
        title : updatePitchTitleInput.value,
        image : updatePitchImageInput.value,
        category :updatePitchCategoryInput.value,
        founder : updatePitchfounderInput.value,                                        
        price : updatePitchPriceInput.value,
    }
    fetch(`http://localhost:3000/pitches/${updatePitchObj.id}`,{
        method:'PUT',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatePitchObj)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
})

//Sort method
sortAtoZBtn.addEventListener('click',()=>{
    let lowtohigh = product_data.sort((a,b)=>{
        return a.price - b.price
    })
    displayData(lowtohigh)
})

sortZtoABtn.addEventListener('click',()=>{
    let hightolow = product_data.sort((a,b)=>{
        return b.price - a.price
    })
    displayData(hightolow)
})

//Filter method
filterFood.addEventListener('click',()=>{
    let filterFood = product_data.filter((el)=>el.category=="Food")
    console.log(filterFood)
    displayData(filterFood)
});
filterElectronics.addEventListener('click',()=>{
    let filterElectronics = product_data.filter((el)=>el.category=="Electronics")
    console.log(filterElectronics)
    displayData(filterElectronics)
});
filterPersonalCare.addEventListener('click', () => {
    let filterPersonalCare = product_data.filter((el) => el.category == "Personal Care");
    console.log(filterPersonalCare);
    displayData(filterPersonalCare);
});