let container = document.querySelector(".content");
let button = document.querySelector("button");

// ----adding button functionallity----
button.addEventListener("click", async () => {
    button.disabled = true;
    await fetch(
        "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=religious,racist"
    )
        .then((res) => res.json())
        .then((data) => {
            if (!(container.childElementCount === 0)) {
                container.innerHTML = "";
            }
            if (data.type == "single") {
                let joke = document.createElement("p");
                joke.classList.add("fade");
                joke.appendChild(document.createTextNode(data.joke));
                container.appendChild(joke);
            } else {
                let q = document.createElement("p");
                let a = document.createElement("p");
                q.classList.add("fade");
                a.classList.add("fade");
                q.appendChild(document.createTextNode(data.setup));
                a.appendChild(document.createTextNode(data.delivery));
                container.appendChild(q);
                container.appendChild(a);
            }
            button.disabled = false;
        })
        .catch((err) => {
            alert("Error occured " + err.message);
        });
});
