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