//stores html code
var fullProducts = "";

//retireves local JSON file
res = "";
fetch("../json/products.json")
    //reads json file
    .then(res => res.json())
    .then(data => {
        //loops though entire array of products
        for (var i = 0; i < data.products.length; i++) {
            var productCard = `<div class="col-md-4 py-3">\n<div class="card h-100">\n` +
                `<img src="${data.products[i].image[0]}"alt="${data.products[i].name}"class="card-img-top">\n` +
                `<div class="card-body">\n` +
                `<h5 class="card-title">${data.products[i].name}</h5>\n` +
                `<p class="card-category d-none">${data.products[i].department}</p>\n` +
                `<p class="card-text">${data.products[i].description}</p>\n` +
                `<p class="card-text">Price: $${data.products[i].price}</p>\n` +
                `</div>\n` +
                `<div class="card-footer d-flex align-items-end">` +
                `<button class="btn btn-dark btn-small add-to-cart" data-product-id="${data.products[i].id}">Add to Cart</button>\n` +
                `</div>\n</div>\n</div>\n`;
            //logs for testing, can remove if wanted later
            console.log(productCard);
            //add single card to the  fullCode varaiable 
            fullProducts = fullProducts + productCard;
        }
        //writes to "productCards" id html selector 
        document.getElementById("productCards").innerHTML = fullProducts;
    }
    );