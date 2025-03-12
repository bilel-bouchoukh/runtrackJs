const Footer = document.getElementById ("Footer");

function onWindowsScroll(){
    let page = window.pageYOffset;
    let bgcolor = "blue";
    
    switch (true){
        case (page >= 3000):
            bgcolor = "yellow";
            break;
        case (page >= 2000):
            bgcolor = "green";
            break;
        case (page >= 1000):
            bgcolor = "red";
            break;
    }

    Footer.style.backgroundColor = bgcolor;

}

window.addEventListener("scroll",onWindowsScroll);