
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

    var myDiv = document.getElementById("category-items");

    if (myDiv.querySelector('.category-menu')) {
        
        myDiv.innerHTML = '';
    } else {
        
        var HTML = `
            <div class="category-menu">
                <ul class="сategory-menu-list-group">
                    <li class="category-item"><a href="page-mb-cpc.html">Материнська плата</a></li>
                    <li class="category-item"><a href="page-gpu-cpc.html">Відеокарти</a></li>
                    <li class="category-item"><a href="page-ram-cpc.html">Оперативна пам’ять</a></li>
                    <li class="category-item"><a href="page-mmr-cpc.html">Накопичувачі</a></li>
                </ul>
                <ul class="сategory-menu-list-group2">
                    <li class="category-item"><a href="page-cpu-cpc.html">Процесори</a></li>
                    <li class="category-item"><a href="page-ps-cpc.html">Блоки живлення</a></li>
                    <li class="category-item"><a href="page-cool-cpc.html">Кулери</a></li>
                    <li class="category-item"><a href="page-case-cpc.html">Корпуси</a></li>
                </ul>
            </div>
        `;
        myDiv.innerHTML = HTML;
    }
}

function bckbtn() {
    const сatalogPage = "page-mb-cpc.html";
    
    window.location.href = сatalogPage;
}

function shopbtn() {
    const shopPage = "https://denika.ua/ua";
    
    window.open(shopPage, "_blank");
}
