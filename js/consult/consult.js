const [balanceBtn, cbuBtn] = document.querySelectorAll(".btn");
const hero = document.querySelector("#hero");
const btnBack = document.querySelector(".btn-back");
btnBack.addEventListener("click", () => {
  goToPage(home);
});

balanceBtn.addEventListener("click", () => {
  createCard(popUpBalanceInner());
  const activeUser = getLocal("activeUser");
  const spanBalance = document.getElementById("balanceSpan");
  spanBalance.innerHTML = activeUser.balance;
  const closePopUp = document.querySelector(".close__popup");
  closePopUp.addEventListener("click", () => {
    document.querySelector(".popUp").remove();
  });
});

cbuBtn.addEventListener("click", () => {
  createCard(popUpCbuInner());
  const activeUser = getLocal("activeUser");
  const spanCbu = document.getElementById("cbuSpan");
  spanCbu.innerHTML = activeUser.cbu;
  const closePopUp = document.querySelector(".close__popup");
  closePopUp.addEventListener("click", () => {
    document.querySelector(".popUp").remove();
  });
});
const createCard = (inner) => {
  const article = document.createElement("article");
  article.innerHTML = inner;
  article.classList.add("popUp");
  hero.appendChild(article);
  hero.appendChild(article);
};
