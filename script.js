const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get("q");

      fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
          const results = data.product.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );
          const resultsList = document.getElementById("results");
          results.forEach((result) => {
            const li = document.createElement("li");
            li.innerHTML = `
              <h2>${result.name}</h2>
              <p>${result.description}</p>
              <p>$${result.price.toFixed(2)}</p>
              <img src="${result.image[0]}" alt="${result.name}" />
            `;
            resultsList.appendChild(li);
          });
        })
        .catch((error) => console.error(error));