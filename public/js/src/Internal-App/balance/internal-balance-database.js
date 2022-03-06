const databaseBalance = () => {
    const area = document.querySelector('.App-Internal__area__balance');
    let model = "";
    const databasebalance1 = [
        {category: 'Transferência recebida', name: 'Marina Soares', money:'R$ 414,10',date:'Sábado', image:'public/img/purple/deposit_1.png'},
        {category: 'Transferência recebida', name: 'Gabriel Lima', money:'R$ 300,00',date:'Sábado', image:'public/img/purple/deposit_1.png'},
        {category: 'Transferência enviada', name: 'Rachel Jordan', money:'R$ 300,00',date:'Domingo', image:'public/img/purple/deposit.png'},
        {category: 'Transferência devolvida', name: 'Gabriel Lima', money:'R$ 300,00',date:'08 FEV', image:'public/img/purple/deposit_1.png'},
        {category: 'Transferência enviada', name: 'Marina Soares', money:'R$ 300,00',date:'07 FEV', image:'public/img/purple/deposit.png'},
        {category: 'Pagamento', name: 'Cartão Nubank', money:'R$ 1.337,13',date:'04 FEV', image:'public/img/purple/card.png'},
        {category: 'Transferência devolvida', name: 'Gabriel Lima', money:'R$ 300,00',date:'03 FEV', image:'public/img/purple/deposit_1.png'},
        {category: 'Transferência devolvida', name: 'Gabriel Lima', money:'R$ 300,00',date:'03 FEV', image:'public/img/purple/deposit_1.png'},
    ];

    databasebalance1.forEach(item =>{
        model +=  `<div class="App-Internal-App-item">
        <div class="description">
            <div>
                <img class="image"src="${item.image}" alt="">
            </div>
            <div>
                <h6 class="category">${item.category}</h6>
                <p class="name">${item.name}</p>   
                <p class="money">${item.money}</p>              
            </div>
        </div>
        <span class="data">${item.date}</span>
     </div>`;

    })
    area.innerHTML = model


    const search = document.querySelector('.input-balance');
    function handleClick(){
        model = this.value
        r = new RegExp(model, 'gi')
        for(i in databasebalance1){
            if(databasebalance1[i].name.match(r) || databasebalance1[i].category.match(r)){
                area.children[i].removeAttribute('style')
            }
            else{
                area.children[i].style.display = "none";
    
            }
        }
    }

    search.addEventListener('keyup',handleClick)
}
databaseBalance();



















// Transferência recebida
// Marina Soares

// R$ 414,10
// Sábado

// Transferência recebida
// Gabriel Lima

// R$ 300,00
// Sábado

// Transferência enviada
// Rachel Jordan

// R$ 300,00
// Domingo

// Transferência devolvida
// Gabriel Lima

// R$ 300,00
// 08 FEV

// Transferência enviada
// Marina Soares

// R$ 300,00
// 07 FEV

// Pagamento
// Cartão Nubank

// R$ 1.337,13
// 04 FEV

// Transferência devolvida
// Gabriel Lima

// R$ 300,00
// 03 FEV

// Transferência devolvida
// Gabriel Lima

// R$ 300,00
// 03 FEV

