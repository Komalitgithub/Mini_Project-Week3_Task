document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".timeline-item");

    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.background = "#bbdefb";
        });

        item.addEventListener("mouseout", () => {
            item.style.background = "white";
        });
    });
});
