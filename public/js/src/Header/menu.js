const controllerMenu = () =>{
    const btnMenu = document.querySelector('[constroller]');
    const containerSlide = document.querySelector('[app-slide]')
    const containerMenu = document.querySelector('.menuHeader')
    const qrcode = document.querySelector('.app-qrcode')
    qrcode.style.opacity = '0%'
    if(btnMenu && containerSlide){
        containerMenu.addEventListener('click', ()=>{
            if(btnMenu.classList.contains('closed')){
                qrcode.style.opacity = '100%'
                containerSlide.style.top = "220rem";
                btnMenu.classList.remove('closed')
                btnMenu.classList.add('Open', 'app-title-arrow-rotate')
            }else if(btnMenu.classList.contains('Open')){
                containerSlide.style.top = "0rem";
                btnMenu.classList.remove('Open','app-title-arrow-rotate')
                setTimeout(()=>{
                    qrcode.style.opacity = '0%'
                },100)
                btnMenu.classList.add('closed')
            }        
        })
    }
}
controllerMenu();


const closedApp = document.querySelector('.app-last-item__get-out');
closedApp.addEventListener('click', ()=>{
    let containerApp =  document.querySelector('.animation');
    containerApp.style.display = "none"
})