const flipBook = (elBook) => {
    elBook.style.setProperty("--c", 0); // Set current page
    elBook.querySelectorAll(".page").forEach((page, idx) => {
        page.style.setProperty("--i", idx);
        page.addEventListener("click", (evt) => {
            if (evt.target.closest("a")) return;
            const curr = evt.target.closest(".back") ? idx : idx + 1;
            elBook.style.setProperty("--c", curr);
        });
    });
};

document.querySelectorAll(".book").forEach(flipBook);

// New code to handle hold-to-flip functionality
const flipBookWithHold = (elBook) => {
    elBook.style.setProperty("--c", 0); // Set current page

    let holdTimeout;

    elBook.querySelectorAll(".page").forEach((page, idx) => {
        page.style.setProperty("--i", idx);

        page.addEventListener("click", (evt) => {
            if (evt.target.closest("a")) return;
            const curr = evt.target.closest(".back") ? idx : idx + 1;
            elBook.style.setProperty("--c", curr);
        });

        // Mouse down event to start timer
        page.addEventListener("mousedown", () => {
            holdTimeout = setTimeout(() => {
                // Set the current page based on whether the index is even or odd
                if (idx % 2 === 0) {
                    elBook.style.setProperty("--c", elBook.querySelectorAll(".page").length); // Even index: close the book
                } else {
                    elBook.style.setProperty("--c", 0); // Odd index: set to total number of pages
                }
            }, 1000); // 2 seconds
        });

        // Clear the timeout on mouse up or leave
        page.addEventListener("mouseup", () => {
            clearTimeout(holdTimeout);
        });

        page.addEventListener("mouseleave", () => {
            clearTimeout(holdTimeout);
        });
    });
};

document.querySelectorAll(".book").forEach(flipBookWithHold);