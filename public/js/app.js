// Search Form
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

// Search Results
const messageOne = document.querySelector("#message-one");
const messageTwo = document.querySelector("#message-two");
messageOne.textContent = "";
messageOne.textContent = "";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  messageOne.textContent = "Loading...";

  const location = search.value;
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
