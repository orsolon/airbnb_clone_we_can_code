
// const search = fetch('https://dry-cliffs-94979.herokuapp.com/');
// search.then(resolucao => {
//     resolucao.text().then((body) => {
//         console.log(body)
//     })
// })

const preco = document.getElementById("price");
const nome = document.getElementById("name");
const tipo = document.getElementById("type");
const img = document.getElementById("photo");


const search = fetch('https://dry-cliffs-94979.herokuapp.com/');
search.then(resolucao => {
    resolucao.text().then(result => {
        const dados = JSON.parse(result)
        dados.map(element => {
            const { photo, property_type, name, price } = element;
            img.src = photo;
            tipo.innerHTML = property_type;
            nome.innerHTML = name;
            preco.innerHTML = `Total de R$ ${price.toLocaleString("pt-br", {
            minimumFractionDigits:2,})}`;
       });
        
    })
})

// const row = document.querySelector("#row");
// const card = document.createElement("div");
// card.className = "card mb-3 box-shadow";
// card.style.maxWidth = "540px";

// const row = document.createElement("div");
//       row.className = "row g-0";
// const div = document.createElement("div");
//       div.className = "col-md-4";
// const image = document.createElement("img");
// image.className =  "card-img-top";
// image.src = photo;

// const search = fetch('https://dry-cliffs-94979.herokuapp.com/')
// .then(response => {
//     console.log(search)
// })

// function search() {
//     fetch('https://dry-cliffs-94979.herokuapp.com/')
//     .then(response => response.text())
//     .then(result => {
//     const dados = JSON.parse(result)

//     dados.map(element => {
//         const { photo, property_type, name, price } = element;
//         img.src = photo;
//         tipo.innerHTML = property_type;
//         nome.innerHTML = type;
//         preco.innerHTML = price;
//     });

