const messageBox = document.querySelector("#message__box");
const keyInfo = document.querySelector("#key__info");
const infoDetails = document.querySelector("#info__details");

// Mobile search
const mobileSearch = document.querySelector("#mobile__search");
const input = document.querySelector("#input");
const overlay = document.querySelector(".overlay");

// Key codes
const winFunc = (e) => {
  messageBox.classList.add("hidden");
  keyInfo.innerHTML = `
      <span class="key__code">${e.keyCode}</span>
      <h4>Key Code Information</h4>
      <div class="cards">
        <div class="card box-shadow">
          <small> event.key </small> <span> ${e.key}</span>
        </div>
        <div class="card box-shadow">
          <small> event.location </small> <span> ${e.location}</span>
        </div>
        <div class="card box-shadow">
          <small> event.code </small> <span> ${e.code}</span>
        </div>
        <div class="card box-shadow">
          <small> event.which </small> <span> ${e.which}</span>
        </div>
    </div>
  `;
};

/*      Mobile search      */
input.addEventListener("keydown", (e) => {
  messageBox.classList.add("hidden");
  e.preventDefault()
  console.log(e);
  keyInfo.innerHTML = `
  <span class="key__code">${e.keyCode}</span>
  <h4>Key Code Information</h4>
  <div class="cards">
  <div class="card box-shadow">
  <small> event.key </small> <span> ${e.key}</span>
  </div>
  <div class="card box-shadow">
  <small> event.location </small> <span> ${e.location}</span>
  </div>
  <div class="card box-shadow">
  <small> event.code </small> <span> ${e.code}</span>
  </div>
  <div class="card box-shadow">
  <small> event.which </small> <span> ${e.which}</span>
  </div>
  </div>
  `;
  mobileSearch.reset();
});

window.addEventListener("keydown", (e) => {
  winFunc(e);
});
