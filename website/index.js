const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://2nfo3hb4svry26aqbg4ysd7t5i0mqwdf.lambda-url.ap-south-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();