function setPic(pic_path)
{
    document.getElementById('imagebox').src = pic_path;
}


function heart_clicked(objname) 
{
    const card_fav = document.getElementById(objname);

    if(card_fav.style.color != 'red')
    {
        card_fav.style.color = 'red';
    }
    else if(card_fav.style.color == 'red')
        card_fav.style.color = 'black';
}





// Fav_Page
document.addEventListener("DOMContentLoaded", function () {
    let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];

    function saveFavorites() {
        localStorage.setItem("favorites", JSON.stringify(favoriteProducts));
    }

    function addToFavorites(productId) {
        let productElement = document.getElementById(productId);
        let product = {
            id: productId,
            image: productElement.querySelector(".image img").src,
            title: productElement.querySelector(".products_text h2").innerText,
            description: productElement.querySelector(".products_text p").innerText,
            price: productElement.querySelector(".products_text h3").innerText
        };

        if (!favoriteProducts.some(p => p.id === productId)) {
            favoriteProducts.push(product);
            saveFavorites();
            alert("Added to Favorites! ❤️");
        } else {
            alert("Already in Favorites!");
        }
    }

    // إضافة حدث للقلوب
    document.querySelectorAll(".fa-heart").forEach(icon => {
        icon.addEventListener("click", function () {
            let productId = this.closest(".card").id;
            addToFavorites(productId);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];
    let container = document.getElementById("favorites-container");

    if (favoriteProducts.length === 0) {
        container.innerHTML = "<p>No favorite products yet!</p>";
    } else {
        favoriteProducts.forEach(product => {
            let productCard = document.createElement("div");
            productCard.classList.add("card");
            productCard.innerHTML = `
                <div class="image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="products_text">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <h3>${product.price}</h3>
                </div>
            `;
            container.appendChild(productCard);
        });
    }
});
