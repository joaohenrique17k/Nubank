 const openInputSearch = () =>{
    const containerInputSearch = document.querySelector('[data="search-internal"]')
    const input = document.querySelector('.input-balance')
    input.focus();
    containerInputSearch.classList.add('Open')
    containerInputSearch.style.marginTop = "0rem";


 }   
const closedInputSearch = () =>{
    const containerInputSearch = document.querySelector('[data="search-internal"]')
    if(containerInputSearch.classList.contains('Open')){
        containerInputSearch.classList.remove('Open')
        containerInputSearch.style.marginTop = "-33rem";
        
    }
}      
const editingTheTopIcon = () =>{
        const selectButtonSlide = document.querySelectorAll('.swiper-pagination5 .swiper-pagination-bullet');
        const iconQuestion = document.querySelector('[btnSearch="Balance"]')
        const time = setInterval(() => {
        selectButtonSlide.forEach((item,index) =>{
            if(item.classList.contains('swiper-pagination-bullet-active') && index === 1){
                iconQuestion.setAttribute('src','public/img/search.png')
                iconQuestion.classList.add('balance-search-internal')
                const imageQuestionbalance = document.querySelector('.balance-search-internal')
                imageQuestionbalance.addEventListener('click', openInputSearch)
                const imageQuestionClosed = document.querySelector('[data="search-internal-closed"]')
                imageQuestionClosed.addEventListener('click', closedInputSearch)
             
                
            }else if(item.classList.contains('swiper-pagination-bullet-active') && index === 0){
                iconQuestion.setAttribute('src','public/img/question.png')
                iconQuestion.classList.remove('balance-search-internal')
            }
        })
        }, 100);    
    }
    editingTheTopIcon();

