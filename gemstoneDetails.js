const gemstoneName = document.getElementById("gemstone-name");
const gemstonePicture = document.getElementById("gemstone-image");
const gemstonePrice = document.getElementById("price");
const gemstoneLocation = document.getElementById("gemstone-location");
const gemstoneDescription = document.getElementById("description");
const gemstoneId = localStorage.getItem("itemId");
const deleteButton = document.getElementById("delete-btn")
const announce = document.getElementById("message")

const loadGemstone = async () => {
    const response = await fetch (`https://655cfa8725b76d9884fe3c52.mockapi.io/gems/${gemstoneId}`);
    const gemstone = await response.json();
    //console.log(gemstone);

    gemstoneName.textContent = gemstone.gemstone_name;
    gemstonePicture.src = gemstone.picture;
    gemstonePrice.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(gemstone.price);;
    gemstoneLocation.textContent = gemstone.location;
    gemstoneDescription.textContent = gemstone.description;


    
};

loadGemstone();

deleteButton.addEventListener("click", async () => {
    const response = await fetch (
        `https://655cfa8725b76d9884fe3c52.mockapi.io/gems/${gemstoneId}`,
        {method: "DELETE"}
    );
    const result = await response.json();
    announce.textContent = "Gemstone Deleted!"
    if (result) {
        setTimeout(() => {
          window.location.replace("./home.html");
        }, 3000);
      }





});




