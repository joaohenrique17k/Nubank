// const invoiceData = [
//     {name:'Supermercado',category: 'Supermercado',money:'R$ 199,40',data:'Hoje',image:'public/img/cart.png', imageIntegra:'public/img/white/cart.png'},
//     {name:'Design Móveis',category: 'Casa',money:'R$ 159,00',sub:'Em 3x',data:'Ontem',image:'public/img/service.png', imageIntegra:'public/img/white/service.png'},
//     {name:'Movies Online',category: 'Lazer',money:'R$ 17,89',sub:'US$ 5.00',data:'Domingo',image:'public/img/extra.png', imageIntegra:'public/img/white/extra.png'},
//     {name:'Cantina Nero',category: 'Restaurante',money:'R$ 199,40',data:'Sexta',image:'public/img/food.png', imageIntegra:'public/img/white/food.png'},
//     {name:'Supermercado',category: 'Supermercado',money:'R$ 199,40',data:'Quinta',image:'public/img/cart.png', imageIntegra:'public/img/white/cart.png'},
//     {name:'Burguer king',category: 'Restaurante',money:'R$ 19,40',data:'Terça',image:'public/img/food.png', imageIntegra:'public/img/white/food.png'},
//     {name:'Extra',category: 'Supermercado',money:'R$ 199,40',data:'Segunda',image:'public/img/cart.png', imageIntegra:'public/img/white/cart.png'}
// ];
// const invoiceConstructorItens = () =>{
//     const area = document.querySelector('.App-Internal__area')
//     let escrever = ""
   
//     function bildHtml(item,index){
//         let date = []
//     if(localStorage.getItem(`item-${index}`) != null){
//         date = JSON.parse(localStorage.getItem(`item-${index}`)); 
//     }

//     function createTag(date){
//         let modelButton = ''
//         date.forEach(item =>{
//             modelButton += `<p class="invoice-tag">${item}</p>`;
//         })
//         return modelButton
//     }
//     console.log(date)
//         escrever +=  `<div class="App-Internal-App-item">
//                             <div class="description">
//                                 <div>
//                                     <img class="image"src="${item.image}" alt="">
//                                 </div>
//                                 <div>
//                                     <h6 class="category">${item.category}</h6>
//                                     <p class="name">${item.name}</p>
//                                     <p class="money">${item.money}</p>
//                                     <p class="sub-money">${item.sub ? item.sub : ''}</p>
//                                     <div class="tags">${date ? createTag(date) : ''}</div>
//                                 </div>
//                             </div>
//                             <span class="data">${item.data}</span>
//                          </div>`
//                     }
                    
    
//     invoiceData.forEach((item,index) =>{
//         bildHtml(item,index);
//     })
//     area.innerHTML = escrever

//  const search = document.querySelector('[data="search"]');
//     function handleClick(){
//         escrever = this.value
//         r = new RegExp(escrever, 'gi')
//         for(i in invoiceData){
//             if(invoiceData[i].name.match(r) || invoiceData[i].category.match(r)){
//                 area.children[i].removeAttribute('style')
//                 console.log(area.children[i])
//             }
//             else{
//                 area.children[i].style.display = "none";
    
//             }
//         }
//     }

//     search.addEventListener('keyup',handleClick)
// }
// invoiceConstructorItens();

// const invoiceConstructorItemSelected = () =>{
// const container = document.querySelector('.container-item-invoice');
// const casinhabtn = document.querySelector('.casinhabtn');


// function constructor_integra_invoice(item, index){
//     let date = []
//     if(localStorage.getItem(`item-${index}`) != null){
//         date = JSON.parse(localStorage.getItem(`item-${index}`));
       
        
//     }

// const createTagIntefra = (date) =>{
//     let modelButton = ''
//      setTimeout(() =>{
//     date.forEach(item =>{
//         modelButton += `<button>${item}</button>`;
//     })
   
// }, 100)
//         return modelButton
// }
    
//     const model = `<div class="Iternal__item">
//                         <div class="content-image"></div>
//                         <div class="container-image">
//                             <img class="image" src="${item.imageIntegra}"/>
//                          </div>
//                         <span class="data">${item.data}</span>
//                         <p class="name">${item.name}</p>
//                         <p class="money">${item.money}</p>
//                     <div class="container-tag">
//                         <div class="tag">
//                             <button class="btn-create-tag"> + Tag</button>
//                             ${date ? createTagIntefra(date) : ''}
//                             <button class="btn-create-tag"> + Tag</button>
//                         </div>
//                     <div class="container-input-tag">
//                         <input class="input-tag" type="text" />
//                         <button><img src="public/img/add.png"/></button>
//                     </div>
//                     </div>
//                 </div>`;

//     container.innerHTML = model;

//     console.log(index)

//     const buttonAddTag = document.querySelector('.btn-create-tag')
//     const inputAddTag =  document.querySelector('.input-tag');

//     buttonAddTag.addEventListener('click', ()=>{
//         if(localStorage.getItem(`item-${index}`) === null){
//             localStorage.setItem(`item-${index}`, `[]`)
//         }

//         let save = JSON.parse(localStorage.getItem(`item-${index}`))
//         save.push(inputAddTag.value);


//         localStorage.setItem(`item-${index}`, JSON.stringify(save))

//     })

// }




// const  cards = document.querySelectorAll('.App-Internal-App-item');
// cards.forEach((itemCars, indexCards) =>{
//     invoiceData.forEach((item,index) =>{
//         if(indexCards === index){
//             itemCars.addEventListener('click', ()=>{
//                 constructor_integra_invoice(item, index)
//             })
//         }
//     })
// })



// }
// invoiceConstructorItemSelected();



//New 

// const invoiceData = [
//     {name:'Supermercado',category: 'Supermercado',money:'R$ 199,40',data:'Hoje',image:'public/img/cart.png'},
//     {name:'Design Móveis',category: 'Casa',money:'R$ 159,00',sub:'Em 3x',data:'Ontem',image:'public/img/service.png'},
//     {name:'Movies Online',category: 'Lazer',money:'R$ 17,89',sub:'US$ 5.00',data:'Domingo',image:'public/img/extra.png'},
//     {name:'Cantina Nero',category: 'Restaurante',money:'R$ 199,40',data:'Sexta',image:'public/img/food.png'},
//     {name:'Supermercado',category: 'Supermercado',money:'R$ 199,40',data:'Quinta',image:'public/img/cart.png'},
//     {name:'Burguer king',category: 'Restaurante',money:'R$ 19,40',data:'Terça',image:'public/img/food.png'},
//     {name:'Extra',category: 'Supermercado',money:'R$ 199,40',data:'Segunda',image:'public/img/cart.png'}
//     ];
//     const area1 = document.querySelector('.App-Internal__area')
//     let escrever = ""
//     function bildHtml(item){
//         escrever +=  `<div class="App-Internal-App-item">
//                             <div class="description">
//                                 <div>
//                                     <img class="image"src="${item.image}" alt="">
//                                 </div>
//                                 <div>
//                                     <h6 class="category">${item.category}</h6>
//                                     <p class="name">${item.name}</p>
//                                     <p class="money">${item.money}</p>
//                                     <p class="sub-money">${item.sub ? item.sub : ''}</p>
//                                 </div>
//                             </div>
//                             <span class="data">${item.data}</span>
//                          </div>`
//                     }
    
//     invoiceData.forEach(item =>{
//         bildHtml(item);
//     })
//     area1.innerHTML = escrever
// const  cards = document.querySelectorAll('.App-Internal-App-item');

//  const search = document.querySelector('[data="search"]');
//     function handleClick(){
//         escrever = this.value
//         r = new RegExp(escrever, 'gi')
//         for(i in invoiceData){
//             if(invoiceData[i].name.match(r) || invoiceData[i].category.match(r)){
//                 area1.children[i].removeAttribute('style')
//                 console.log(area1.children[i])
//             }
//             else{
//                 area1.children[i].style.display = "none";
    
//             }
//         }
//     }
// search.addEventListener('keyup',handleClick)


//     const container = document.querySelector('.container-item-invoice');

//     function constructor_integra_invoice(item, index){
//         let date = []
//         if(localStorage.getItem(`item-${index}`) != null){
//             date = JSON.parse(localStorage.getItem(`item-${index}`));
           
            
//         }
    
//     const createTagIntefra = (date) =>{
//         let modelButton = ''
//         date.forEach(item =>{
//             modelButton += `<button>${item}</button>`;
//         })
//             return modelButton
//     }
        
//         const model = `<div class="Iternal__item">
//                             <div class="content-image"></div>
//                             <div class="container-image">
//                                 <img class="image" src="${item.imageIntegra}"/>
//                              </div>
//                             <span class="data">${item.data}</span>
//                             <p class="name">${item.name}</p>
//                             <p class="money">${item.money}</p>
//                         <div class="container-tag">
//                             <div class="tag">
//                                 <button class="btn-create-tag ${index}" id=${index}> + Tag</button>
                                
                                
//                                 ${date ? createTagIntefra(date) : ''}
//                                 <button class="btn-create-tag"> + Tag</button>
//                             </div>
//                         <div class="container-input-tag">
//                             <input class="input-tag" type="text" />
//                             <button><img src="public/img/add.png"/></button>
//                         </div>
//                         </div>
//                     </div>`;
              
//                         container.innerHTML = model;


//         const inputAddTag =  document.querySelector('.input-tag');
//         const buttonAddTag = document.querySelector('.btn-create-tag')

        
//         if(buttonAddTag){
//             buttonAddTag.addEventListener('click', ()=>{
//                 if(localStorage.getItem(`item-${index}`) === null){
//                     localStorage.setItem(`item-${index}`, `[]`)
//                 }
        
//                 let save = JSON.parse(localStorage.getItem(`item-${index}`))
//                 save.push(inputAddTag.value);
        
//                 console.log('btnAdd')
        
//                 localStorage.setItem(`item-${index}`, JSON.stringify(save))
    
//                setInterval(()=>{
//                     createTagIntefra(date)
//                },10)
        
//             })
//         }
    
//     }
    
    
    
    
 
//  const buttonAddTag = document.querySelector('.btn')
//  console.log(buttonAddTag)
//     cards.forEach((itemCars, indexCards) =>{
//         invoiceData.forEach((item,index) =>{
//             if(indexCards === index){
//                 itemCars.addEventListener('click', ()=>{
//                     constructor_integra_invoice(item, index)
//                     console.log(index)
//                 })
                
//             }else if(index === 0 ){
//                 buttonAddTag.addEventListener('click',()=>{
//                     constructor_integra_invoice(item, index)
//                 })
//             }
//         })
//     })
    





//BALANCE SLIDE ORIGINAL 

// const hideAndShowMoneyPanel = () =>{
//     const line = document.querySelector('[line-eye]');
//     const eye = document.querySelector('[eye]');
//     const money = document.querySelector('[balance-money]')
//     const money1 =  document.querySelector('[balance-money] .descripton-money')
//     console.log(money1)
//     line.style.display = "none"
//         if(line && eye && money){
//             eye.classList.add('Open')
//             eye.addEventListener('click', (event)=>{
//                 event.preventDefault()
//                 if(eye.classList.contains('Open')){
//                     eye.classList.remove('Open')
//                     eye.classList.add('Closed')
//                     line.style.display = "block"
//                     money.classList.toggle('blur')
                    
//                 }else{
//                     eye.classList.remove('Closed')
//                     eye.classList.add('Open')
//                     line.style.display = "none"
//                     money.classList.toggle('blur')
//                 }
//         })

//     }
    
// }


// hideAndShowMoneyPanel()




// const hideAndShowMoneyPanel = () =>{
//     const line = document.querySelector('[line-eye]');
//     const eye = document.querySelector('[eye]');
//     const moneyDescription = document.querySelector('[balance-money] .descripton-money')
//     const money = document.querySelector('[balance-money] .app-slide__balance__money')
//     const valueMoney = money.innerHTML;
//     money.innerHTML = '●●●●●';
//     moneyDescription.classList.toggle('blur')
//     console.log(valueMoney)
//         if(line && eye && moneyDescription){
//             eye.classList.add('Open')
//             eye.addEventListener('click', (event)=>{
//                 event.preventDefault()
//                 if(eye.classList.contains('Open')){
//                     eye.classList.remove('Open')
//                     eye.classList.add('Closed')
//                     line.style.display = "none"
//                     moneyDescription.classList.toggle('blur')
//                     money.classList.add('ff')
//                     money.innerHTML = valueMoney
                    
//                 }else{
//                     eye.classList.remove('Closed')
//                     eye.classList.add('Open')
//                     line.style.display = "block"
//                     moneyDescription.classList.toggle('blur')
//                     money.innerHTML = '●●●●●';
//                 }
//         })

//     }
    
// }


// hideAndShowMoneyPanel()



const app = document.querySelector('.app')
setTimeout(()=>{
    app.classList.add('animation')
},2000)


