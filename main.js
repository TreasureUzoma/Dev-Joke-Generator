const jokeContainer = document.getElementById("joke-container");
const jokeButton = document.getElementById("joke-button");
function showJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://v2.jokeapi.dev/joke/Any", true);
    xhr.onload = function () {
        if (this.status === 200) {
            const joke = JSON.parse(this.responseText);
            let jokeText = "";
            if (joke.type === "single") {
                jokeText = joke.joke;
            } else if (joke.type === "twopart") {
                jokeText = `${joke.setup} ${joke.delivery}`;
            }
            jokeContainer.innerText = jokeText;
        } else {
            jokeContainer.innerText = "Oops! Something went wrong.";
        }
    };
    xhr.onerror = function () {
        jokeContainer.innerText = "Oops! Something went wrong.";
    };
    xhr.send();
}
jokeButton.addEventListener("click", function () {
    showJoke();
});
//show joke when page loads too
showJoke();
