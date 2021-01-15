

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


