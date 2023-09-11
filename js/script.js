const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const searchInput = document.getElementById("search");
let ygoCards = [];
document.addEventListener("DOMContentLoaded", async () => {
  searchInput.addEventListener("input", handleUserInput);

  //fetching cards
  const response = await fetch("./data.json");
  ygoCards = await response.json();

  //showing cards
  showCards(ygoCards.data)
});

const handleUserInput = () => {
  const inputValue = searchInput.value.toLowerCase();
  const results = ygoCards.data.filter((card) => card.name.toLowerCase().includes(inputValue))
  showCards(results);
};

const showCards = (cards) => {
  let content = "";
  for (const card of cards) {
    content += `
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 col-xxl-2">
        <div class="card-container">
          <img src=${card.card_images[0].image_url} alt=${card.name}>
          <small>${card.name}</small>
        </div>
      </div>`;
  }

  document.getElementById("cards-container").innerHTML = content;
}