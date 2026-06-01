const overlay = document.getElementById("modal-overlay");
const openSpans = document.querySelectorAll(".open-message");
const modals = document.querySelectorAll(".modal");

openSpans.forEach(span => {
    span.addEventListener("click", () => {

        const modalId = span.dataset.modal;
        const modal = document.getElementById(modalId);

        modal.classList.add("active");
        overlay.classList.add("active");
    });
});

overlay.addEventListener("click", () => {

    modals.forEach(modal => {
        modal.classList.remove("active");
    });

    overlay.classList.remove("active");
});

