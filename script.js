let menus = document.getElementById("menu")
let toGGle = document.getElementById('toggle')

menus.style.maxHeight = "0px";

toGGle.addEventListener('click', () => {

    if (menus.style.maxHeight == "0px") {

        menus.style.maxHeight = "200px";
    }
    else {
        menus.style.maxHeight = "0px";
    }
})


