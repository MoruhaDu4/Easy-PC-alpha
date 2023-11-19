
function cpcFunction() {
    const сpcPage = "page-mb-cpc.html";
    
    window.location.href = сpcPage;
}

function pcFunction() {
    const pcPage = "index-pc.html";
    
    window.location.href = pcPage;
}

function backbtnFunction() {
    const mainPage = "index.html";
    
    window.location.href = mainPage;
}

function rotateArrow() {
    const arrow = document.querySelector('.category-arrow__button');
    arrow.classList.toggle('rotate');

    const menu = document.querySelector('.header3');
    

    if (menu.style.opacity === '1') {
        menu.style.opacity = '0';
    } else {
        menu.style.opacity = '1';
    }

}