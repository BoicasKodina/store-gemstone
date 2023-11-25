const button = document.getElementById("add-gem-btn");
const gemstoneName = document.getElementById("name");
const price = document.getElementById("price");
const description = document.getElementById("description");
const image = document.getElementById("image_url");
const locationInput = document.getElementById("location");
const announc = document.getElementById("message")


const addGemstone = async () => {
    const gemstone = {
        gemstone_name: gemstoneName.value,
        price: price.value,
        description: description.value,
        picture: image.value,
        locationInput: location.value,
    };

    if (!gemstone.gemstone_name || !gemstone.price || !gemstone.description || !gemstone.picture || !gemstone.locationInput) {
      
      alert("Please fill in all fields");
      return;
  }
    try {
        await fetch("https://655cfa8725b76d9884fe3c52.mockapi.io/gems", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(gemstone),
        });

        announc.textContent = "Gemstone Added";

        setTimeout(() => {
            window.location.replace("./home.html");
          }, 2000);
        } catch (err) {
          console.log(err);
        }


    };

    


button.addEventListener("click", addGemstone);