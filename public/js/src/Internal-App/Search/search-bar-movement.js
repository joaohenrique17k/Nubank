function initSearch(){
    const searchBtnOpen = document.querySelector('.btnSearch');
    const searchBtnClosed = document.querySelector('.App-Internal__search .closed');
    const containerSearch = document.querySelector('.App-Internal__search')
    const inputSearch = document.querySelector('[data="search"]');
    const slides = document.querySelector('[data="internal-slide"]')
    const area = document.querySelector('.App-Internal__area')
    searchBtnOpen.addEventListener('click', ()=>{
        containerSearch.style.marginTop = "0px";
        inputSearch.focus()
        slides.style.marginTop = "-210px"
        area.classList.add('active')
    })
    searchBtnClosed.addEventListener('click', ()=>{
        containerSearch.style.marginTop = "-33px"
         slides.style.marginTop = "0px"
        area.style.heigth = "400px"
        area.classList.remove('active')
    })
}
initSearch();