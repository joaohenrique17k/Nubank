const controllerMenu = () =>{
    const btnMenu = document.querySelector('[constroller]');
    const containerSlide = document.querySelector('.app-slide')
    const containerMenu = document.querySelector('.menuHeader')
    const qrcode = document.querySelector('.app-qrcode')
    qrcode.style.opacity = '0%'
    if(btnMenu && containerSlide){
        containerMenu.classList.toggle('closed')
        containerMenu.addEventListener('click', ()=>{
           if(containerMenu.classList.contains('closed')){
            containerMenu.classList.toggle('closed')
            containerMenu.classList.toggle('open')
            qrcode.style.opacity = '100%'
            btnMenu.classList.add('Open', 'app-title-arrow-rotate')
            containerSlide.style.top = "100rem";
            console.log('abriu')
           }else if(containerMenu.classList.contains('open')){
            containerMenu.classList.toggle('closed')
            containerMenu.classList.toggle('open')
            btnMenu.classList.remove('Open','app-title-arrow-rotate')
            containerSlide.style.top = "4rem";
            setTimeout(()=>{
                        qrcode.style.opacity = '0%'
                    },100)
            console.log('Fechou')
           }
            })        
        
    }
}
controllerMenu();


function click(){
const closedApp = document.querySelector('.app-last-item__get-out');
let containerApp =  document.querySelector('.app');
let headerAnimation = document.querySelector('.menuHeader');
closedApp.addEventListener('click', ()=>{
    containerApp.style.display = "none"
})


const logoTelaApp =  document.querySelector('.logoinicial');
logoTelaApp.addEventListener('click', ()=>{
    containerApp.style.display = "block"

})
}
click()