window.addEventListener('load', function() {
    window.scrollTo(0, 0)
})
let items = document.querySelectorAll(".menu li")
items.forEach((item) =>{
    item.addEventListener("click", () => {
        items.forEach((otherItem) => {
            otherItem.classList.remove("active")
        })
        item.classList.add("active")
    }
    )
})

function makeChoice(choice) {
    localStorage.setItem('userChoice', choice);
    window.location.href = 'training.html';
}