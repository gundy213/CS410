const searchInput = document.getElementById('search-input');
const cardRow = document.getElementById('card-row');

searchInput.addEventListener('input', (e) => {
  
  const searchText = e.target.value.toLowerCase().trim();
  console.log(e.target.value.toLowerCase().trim());
  // Loop through all the cards
  const cards = cardRow.getElementsByClassName('card');
  Array.from(cards).forEach((card) => {
    const title = card.getElementsByClassName('card-title')[0].textContent.toLowerCase();
    
    // Check if the title includes the search text
    if (title.includes(searchText)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});