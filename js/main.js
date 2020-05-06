const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// dey1
const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#logInForm");
const loginInput = document.querySelector("#login");
const userName = document.querySelector(".user-name");
const buttonOut = document.querySelector(".button-out");
const cardsRestaurants = document.querySelector(".cards-restaurants");

let login = localStorage.getItem("deliveryFood");

function toggleModalAuth() {
  modalAuth.classList.toggle("is-open");
}

function authorized() {
  function logOut() {
    login = null;
    localStorage.removeItem("deliveryFood");
    buttonAuth.style.display = "";
    userName.style.display = "";
    buttonOut.style.display = "";
    buttonOut.removeEventListener("click", logOut);
    checkAuth();
  }
  console.log("Авторизован");

  userName.textContent = login;

  buttonAuth.style.display = "none";
  userName.style.display = "inline";
  buttonOut.style.display = "block";

  buttonOut.addEventListener("click", logOut);
}

function maskInput(string) {
  return !!string.trim();
}

function noAuthorized() {
  console.log("Не авторизован");

  function logIn(event) {
    event.preventDefault();

    if (maskInput(loginInput.value)) {
      login = loginInput.value;
      localStorage.setItem("deliveryFood", login);
      toggleModalAuth();
      buttonAuth.removeEventListener("click", toggleModalAuth);
      closeAuth.removeEventListener("click", toggleModalAuth);
      logInForm.removeEventListener("submit", logIn);
      logInForm.reset();
      checkAuth();
    } else {
      loginInput.style.borderColor = "red";
    }
  }

  buttonAuth.addEventListener("click", toggleModalAuth);
  closeAuth.addEventListener("click", toggleModalAuth);
  logInForm.addEventListener("submit", logIn);
}

function checkAuth() {
  if (login) {
    authorized();
  } else {
    noAuthorized();
  }
}

checkAuth();

function createCardRestaurant() {
  const card = `
  <a class="card card-restaurant">
              <img
                src="img/pizza-plus/preview.jpg"
                alt="image"
                class="card-image"
              />
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">Пицца плюс</h3>
                  <span class="card-tag tag">50 мин</span>
                </div>                
                <div class="card-info">
                  <div class="rating">
                    4.5
                  </div>
                  <div class="price">От 900 ₽</div>
                  <div class="category">Пицца</div>
                </div>          
              </div>              
            </a>
  `;

  cardsRestaurants.insertAdjacentHTML("beforeend", card);
}

createCardRestaurant();

function openGoods(event) {
  const target = event.target;

  const restaurant = target.closest(".cards-restaurants");
  console.log("restaurant", restaurant);

  if (restaurant) {
  }
}

cardsRestaurants.addEventListener("click", openGoods);
