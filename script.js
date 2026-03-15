function changeYearText() {
    let year = document.getElementById("year");
    if (year) {
        year.innerText = new Date().getFullYear().toString();
    }
}
function changeHeaderViaScroll() {
    let header = document.getElementById("header");
    if (header) {
        let lastScrollY = window.scrollY; // set last-scroll
        window.addEventListener("scroll", () => {
            let scroll_pos = window.scrollY;
            // Vhange header styl
            if (scroll_pos > 0) {
                header.classList.add("scrl-header");
            }
            else
                (header.classList.remove("scrl-header"));
            // Hide header
            if (lastScrollY < scroll_pos && scroll_pos > 350) {
                header.classList.add("header-hidden");
            }
            else {
                header.classList.remove("header-hidden");
            }
            lastScrollY = scroll_pos; // change last-scroll to new-scroll
        });
    }
}
function visibilityList() {
    let list = document.getElementById("nav2");
    let bnt = document.getElementById("btn-list");
    if (list && bnt) {
        bnt.addEventListener("click", () => {
            list.classList.toggle("vissible");
            list.classList.toggle("notvissible");
        });
    }
}
document.addEventListener("DOMContentLoaded", visibilityList);
document.addEventListener("DOMContentLoaded", changeYearText);
document.addEventListener("DOMContentLoaded", changeHeaderViaScroll);
