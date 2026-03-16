function changeYearText(){
    let year = document.getElementById("year");
    if(year){
        year.innerText = new Date().getFullYear().toString();
    }
}


function changeHeaderViaScroll(){
    let header = document.getElementById("header")
    let list = document.getElementById("nav2") // set navlist

    if(header && list){
        let lastScrollY: number = window.scrollY; // set last-scroll

        window.addEventListener("scroll", ()=>{ // scroll event
            let scroll_pos = window.scrollY;
            // Change header styl
            if(scroll_pos>0){header.classList.add("scrl-header")}
            else(header.classList.remove("scrl-header"))
            // Hide header
            if(lastScrollY < scroll_pos && scroll_pos > 350){
                header.classList.add("header-hidden")
                list.classList.remove("vissible")
                list.classList.add("notvissible")
            }
            else{header.classList.remove("header-hidden")}

            lastScrollY = scroll_pos; // change last-scroll to new-scroll
        })
    }
}


function visibilityList(){
    let list = document.getElementById("nav2")
    let bnt = document.getElementById("btn-list")

    if(list && bnt){
        bnt.addEventListener("click", ()=>{
            // "toggle" changing between "add" and "remove"
            list.classList.toggle("vissible")
            list.classList.toggle("notvissible")

        })
    }
}


function backToTop(){
    let bnt = document.getElementById("backtotop")

    if(bnt){
        bnt.addEventListener("click", ()=>{
            window.scrollTo(0,0);
        })
    }
}



function zonerYears(){
    let text = document.getElementById("Zoner-years");
    let year = new Date().getFullYear()

    if(text){
        year -= 2023
        text.innerText = year.toString();
    }
}


document.addEventListener("DOMContentLoaded", zonerYears);
document.addEventListener("DOMContentLoaded", backToTop);
document.addEventListener("DOMContentLoaded", visibilityList);
document.addEventListener("DOMContentLoaded", changeYearText);
document.addEventListener("DOMContentLoaded", changeHeaderViaScroll);