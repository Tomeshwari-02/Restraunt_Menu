function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

function filterMenu(category) {

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } 
        else {
            card.style.display = "none";
        }

    });
}

/* Add small click animation */
document.querySelectorAll(".card button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.innerText = "Added ✔";
        setTimeout(() => {
            btn.innerText = "Add to Cart";
        }, 1500);
    });
});
