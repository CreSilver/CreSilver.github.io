function changeYearText() {
    let year = document.getElementById("year");
    if (year) {
        year.innerText = new Date().getFullYear().toString();
    }
}
function changeHeaderViaScroll() {
    let header = document.getElementById("header");
    if (header) {
        let lastScrollY = window.scrollY;
        window.addEventListener("scroll", () => {
            let scroll_pos = window.scrollY;
            if (scroll_pos > 0) {
                header.classList.add("scrl-header");
            }
            else
                (header.classList.remove("scrl-header"));
            if (lastScrollY < scroll_pos && scroll_pos > 350) {
                header.classList.add("header-hidden");
            }
            else {
                header.classList.remove("header-hidden");
            }
            lastScrollY = scroll_pos;
        });
    }
}
document.addEventListener("DOMContentLoaded", changeYearText);
document.addEventListener("DOMContentLoaded", changeHeaderViaScroll);
