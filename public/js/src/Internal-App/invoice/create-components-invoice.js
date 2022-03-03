const openContainer = document.querySelector('.container-item-invoice-integra')
const invoiceData = [
    {name:'Supermercado',category: 'Supermercado',money:'R$ 199,40',data:'Hoje',image:'public/img/cart.png',imageIntegra:'public/img/white/cart.png'},
    {name:'Design Móveis',category: 'Casa',money:'R$ 159,00',sub:'Em 3x',data:'Ontem',image:'public/img/service.png',imageIntegra:'public/img/white/service.png'},
    {name:'Movies Online',category: 'Lazer',money:'R$ 17,89',sub:'US$ 5.00',data:'Domingo',image:'public/img/extra.png',imageIntegra:'public/img/white/extra.png'},
    {name:'Cantina Nero',category: 'Restaurante',money:'R$ 199,40',data:'Sexta',image:'public/img/food.png',imageIntegra:'public/img/white/food.png'},
    {name:'Supermercado',category: 'Supermercado',money:'R$ 199,40',data:'Quinta',image:'public/img/cart.png',imageIntegra:'public/img/white/cart.png'},
    {name:'Burguer king',category: 'Restaurante',money:'R$ 19,40',data:'Terça',image:'public/img/food.png',imageIntegra:'public/img/white/food.png'},
    {name:'Extra',category: 'Supermercado',money:'R$ 199,40',data:'Segunda',image:'public/img/cart.png',imageIntegra:'public/img/white/cart.png'}
];


function get_items_from_localStorage(index, button){
  let date = []
     if(localStorage.getItem(`item-${index}`) != null){
         date = JSON.parse(localStorage.getItem(`item-${index}`));

        let modelButton = ''
            date.forEach((item) =>{
                modelButton += `<${button}>${item}</${button}>`;
         })
             return modelButton
      }
         
 }

const invoiceConstructorItens = () =>{
    const area = document.querySelector('.App-Internal__area')
    let modelInvoiceItem = ""
 
    invoiceData.forEach((item, index) =>{
        let date = JSON.parse(localStorage.getItem(`item-${index}`));
        modelInvoiceItem +=  `<div class="App-Internal-App-item">
        <div class="description">
            <div>
                <img class="image"src="${item.image}" alt="">
            </div>
            <div>
                <h6 class="category">${item.category}</h6>
                <p class="name">${item.name}</p>
                <p class="money">${item.money}</p>
                <p class="sub-money">${item.sub ? item.sub : ''}</p>
                <div class="tags">${date ? get_items_from_localStorage(index, 'p') :  ''}</div>
            </div>
        </div>
        <span class="data">${item.data}</span>
     </div>`
    })
    area.innerHTML = modelInvoiceItem

 const search = document.querySelector('[data="search"]');
    function handleClick(){
        modelInvoiceItem = this.value
        r = new RegExp(modelInvoiceItem, 'gi')
        for(i in invoiceData){
            if(invoiceData[i].name.match(r) || invoiceData[i].category.match(r)){
                area.children[i].removeAttribute('style')
                console.log(area.children[i])
            }
            else{
                area.children[i].style.display = "none";
            }
        }
    }

    search.addEventListener('keyup',handleClick)
}
invoiceConstructorItens();

function constructor_integra_invoice(item, index){
    let date = JSON.parse(localStorage.getItem(`item-${index}`));
    const container = document.querySelector('.area-container');
    
    const model = `<div class="Iternal__item add aqui">
                        <div class="content-image"></div>
                        <div class="container-image">
                            <img class="image" src="${item.imageIntegra}"/>
                         </div>
                        <span class="data">${item.data}</span>
                        <p class="name">${item.name}</p>
                        <p class="money">${item.money}</p>
                    <div class="container-tag">
                        <div class="tag">
                            <button class="tag-button none"> + Tag</button>
                            ${date ? get_items_from_localStorage(index,  'button') : ''}
                            
                        </div>
                    <div class="container-input-tag">
                        <input data="search1" type="text" name="" id=""/>
                        <button class="btn-create-tag"><img src="public/img/add.png"/></button>
                    </div>
                    </div>
                </div>`;

    container.innerHTML = model;
    openContainer.style.height = '100%'
   
}
function creating_item_in_localstorage(item, index){
    const inputAddTag =  document.querySelector('[data="search1"]');
    const inputAddTagContainer = document.querySelector('.container-input-tag')
    const buttonAddTag = document.querySelector('.btn-create-tag')
    const OpeninClosedInputAddTag = document.querySelector('.tag-button');
    inputAddTagContainer.style.display = "none"
    
    OpeninClosedInputAddTag.addEventListener('click', ()=>{
        if(OpeninClosedInputAddTag.classList.contains('none')){
            OpeninClosedInputAddTag.classList.toggle('none')
            OpeninClosedInputAddTag.classList.add('block')
            inputAddTagContainer.style.display = "block"
            inputAddTag.focus()
        }else if(OpeninClosedInputAddTag.classList.contains('block')){
            OpeninClosedInputAddTag.classList.toggle('block')
            OpeninClosedInputAddTag.classList.toggle('none')
            inputAddTagContainer.style.display = "none";

        }
    })
    buttonAddTag.addEventListener('click', ()=>{
                localStorage.getItem(`item-${index}`) === null ? localStorage.setItem(`item-${index}`, `[]`) : '';

                let save = JSON.parse(localStorage.getItem(`item-${index}`))
                inputAddTag.value != '' ? save.push(inputAddTag.value) : ''

                localStorage.setItem(`item-${index}`, JSON.stringify(save))
        
                constructor_integra_invoice(item, index);
            })
            
        }


function createCardIntegraInvoice(){  
    //Cria os cards da Itegra e também adiciona itens no localstorage.
    const  cards = document.querySelectorAll('.App-Internal-App-item');
    cards.forEach((itemCars, indexCards) =>{
        invoiceData.forEach((item,index) =>{
            if(indexCards === index){
                itemCars.addEventListener('click', ()=>{
                    constructor_integra_invoice(item, index)
                    creating_item_in_localstorage(item, index)
                })
            }
        })
    })
}
createCardIntegraInvoice()

function close_the_cards_and_update_the_values(){
    //Responsável por fechar o card selecionado e atualizar o valor dos itens(adicionados pelo localStorage) do invoice.
    const btnSlc =  document.querySelector('.closed-integra-invoice');
    btnSlc.addEventListener('click', ()=>{
        invoiceConstructorItens()
        createCardIntegraInvoice()
        openContainer.style.height = '0vh'
        
    })
}
close_the_cards_and_update_the_values();