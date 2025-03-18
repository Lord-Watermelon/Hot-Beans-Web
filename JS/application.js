document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const position = urlParams.get("position");

    if (position) {
        const selectElement = document.querySelector(".sol");
        for (let option of selectElement.options) {
            if (option.value === position) {
                option.selected = true;
                break;
            }
        }
    }

    // Form submission listener
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const modal = document.getElementById("thankYouModal");
        modal.style.display = "flex";
        form.reset();
    });
});

// Close modal function
function closeModal() {
    document.getElementById("thankYouModal").style.display = "none";
}