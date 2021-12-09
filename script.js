console.log("***"); //check of node loopt

let toggleNavStatus = false;
let toggleNav = function () {
    let getMenu = document.querySelector(".nav-menu");
    let getMenuUl = document.querySelector(".nav-menu ul");
    let getMenuLinks = document.querySelectorAll(".nav-menu a");

    if (toggleNavStatus === false) {
        getMenuUl.style.visibility = "visible";
        getMenu.style.width = "270px";

        let arrayLength = getMenuLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getMenuLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getMenu.style.width = "50px";

        let arrayLength = getMenuLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getMenuLinks[i].style.opacity = "0";
        }

        getMenuUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}
