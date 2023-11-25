const cardWrapper = document.getElementById("card-wrapper");


const fetchItems = async () => {
    const result = await fetch ("https://655cfa8725b76d9884fe3c52.mockapi.io/gems");
    const items = await result.json();
    return items;
};


const buildCards = async () => {
 const items = await fetchItems();

 items.sort((a, b) => a.price - b.price);

 items.forEach((item) => {
    const card = document.createElement("a");
    card.href = `./gemstone-details.html`
    card.setAttribute("class", "card");
    card.addEventListener("click",() => {
         localStorage.setItem("itemId", item.id);
    });
    
    const name = document.createElement("h2");
    name.textContent = item.gemstone_name;

    const image = document.createElement("img");
    image.src = item.picture;

    const price = document.createElement("h4");
    price.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(item.price);
    
    card.append(name, image, price);
    cardWrapper.append(card);


 });



};
buildCards();


