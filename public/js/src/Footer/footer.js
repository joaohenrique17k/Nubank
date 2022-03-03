const itemsFooter = [
    {name:'Indicar amigos',image:'public/img/white/invite-home.png'},
    {name:'Depositar',image:'public/img/white/deposit.png'},
    {name:'Transferir',image:'public/img/white/transfer.png'},
    {name:'Pagar',image:'public/img/white/bar-code.png'},
    {name:'Bloquear Cartão',image:'public/img/white/lock.png'},
    {name:'Cartão Virtual',image:'public/img/white/virtual-card.png'},
    {name:'Organizador atalhos',image:'public/img/white/filter.png'}
]
function OpenMenuServicesFooter(){
    const containerApp = document.querySelector('.app-container')
    const btnClosedServices = document.querySelector('.closed-Sevices')
    const btnServices = document.querySelector('[data="services"]')
    const containerServices = document.querySelector('.container')
 
    btnServices.addEventListener('click', ()=>{
        if(btnServices.classList.contains('Closed')){
            btnServices.classList.remove('Closed')
            btnServices.classList.add('Open')
            containerApp.classList.add('OpenMenuService')
            containerServices.style.marginTop = "5.5em"
             setTimeout(()=>{
                containerServices.style.height = "100%"
             },100)
        }
    })
    btnClosedServices.addEventListener('click', ()=>{
        if(btnServices.classList.contains('Open')){
            btnServices.classList.add('Closed')
            btnServices.classList.remove('Open')
            containerApp.classList.remove('OpenMenuService')
            containerServices.style.height = "0vh"
            setTimeout(()=>{
                containerServices.style.marginTop = "0"
            },200)
        }
    })
}
const menu = (arr) =>{
    let newArray = [];
   if(arr){
    arr.forEach(item =>{
        itemsFooter.forEach(x=>{
            if(item.name === x.name){
                newArray.push({name:x.name, image:x.image})
            }
        })
    })
    newArray.push({name:'Organizador atalhos',image:'public/img/white/filter.png'})
}
       let arrays = arr ? newArray : itemsFooter
            const containerFooter  =  document.querySelector('.app-slide__footer__area');
 
        let modelFooter = '';
        arrays.forEach((i, index) =>{
        modelFooter += `<div class="swiper-slide app-slide__footer ${index === 6 ? 'Closed': ''}" ${index === 6 ? 'data="services"': ''}>
                        <img class="slide__footer__image__item"src=${i.image} alt=${i.name}>
                        <p class="slide__footer__name__item">${i.name}</p>
                    </div>`;
        })
     containerFooter.innerHTML = modelFooter
     OpenMenuServicesFooter()
  
}
menu()
