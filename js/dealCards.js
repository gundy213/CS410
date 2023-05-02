//stores html code
var fullCode = "";

//retireves local JSON file
fetch("../json/deals.json")
    //reads json file
    .then(res => res.json())
    .then(data => {
        //loops though entire array of products
        for (var i = 0; i < data.products.length; i++) {
            var productCard = `<div class="col-md-4">\n<div class="card">\n` +
                `<img src="${data.products[i].image[0]}"alt="${data.products[i].name}"class="card-img-top">\n` +
                `<div class="card-body">\n` +
                `<h5 class="card-title">${data.products[i].name}</h5>\n` +
                `<p class="card-text">${data.products[i].description}</p>\n` +
                `<p class="card-text">Old Price: <del>$${data.products[i].price}</del></p>\n` +
                `<button class="btn btn-primary add-to-cart" data-product-id="${data.products[i].id}">Add to Cart</button>\n` +
                `</div>\n</div>\n</div>\n`;
            //logs for testing, can remove if wanted later
            console.log(dealCard);
            //add single card to the  fullCode varaiable 
            fullCode = fullCode + productCard;
        }
        //writes to "dealCards" id html selector 
        document.getElementById("dealCards").innerHTML = fullCode;
    }
    );