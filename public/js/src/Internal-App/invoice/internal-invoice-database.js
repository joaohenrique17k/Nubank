const infoCardsInternal = [
    {title:'Meus Dados', image:'public/img/internal-invoice-info/menu.png'},
    {title:'Me Ajuda', image:'public/img/internal-invoice-info/help-me.png'},
    {title:'Indicar', image:'public/img/internal-invoice-info/invite.png'},
    {title:'Bloqueio Temporário', image:'public/img/internal-invoice-info/lock.png'},
    {title:'Catão Virutal', image:'public/img/internal-invoice-info/virtual-card.png'},

];


let card = "";
const createCardsInternalInfo = () => {
    const containerCardsInfo = document.querySelector('[data="invoice__menu"]')
    let escrever = "";
    infoCardsInternal.forEach((item) =>{
        escrever +=  `   <div class="invoice__menu-item">
                         <img src="${item.image}" alt=""/>
                          <p>${item.title}</p>
                      </div>`
                    
    })
    containerCardsInfo.innerHTML = escrever
}
createCardsInternalInfo();