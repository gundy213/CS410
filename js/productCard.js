//DO NOT USE IN CURRENT STATE, WILL FIX LATER

const listDiv = document.querySelector('ul');
fetch("../json/products.json")
    .then(res => res.json())
    .then(data => { console.log(data) })
    .then(data => {
        data.forEach(post => {
            var productCard = `<div class="col-md-4"><div class="card">` +
                `<img src="${post.image[0]}"alt="${post.name}"class="card-img-top">` +
                `<div class="card-body">` +
                `<h5 class="card-title">${post.name}</h5>` +
                `<p class="card-text">${post.description}</p>` +
                `<p class="card-text">Price: $${post.price}</p>` +
                `<button class="btn btn-primary add-to-cart" data-product-id="${post.id}">Add to Cart</button>` +
                `</div></div></div>`;
            console.log(productCard);
            listDiv.insertAdjacentHTML('beforeend', productCard);
            //listDiv.insertAdjacentHTML('beforeend', `<div>${product.name}</div>`);
        })
    }
    );