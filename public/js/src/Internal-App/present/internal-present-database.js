const internalpresentData = [
    {name:'Brasil Arlines',category: 'Viagem',money:'Apagar R$ 268,35 com 26.835pts', image:'public/img/travel.png',date:'Domingo'},
    {name:'Movies Online',category: 'Serviços',money:'Apagada em 14 MAR com 2.600pts', image:'public/img/service.png',date:'Segunda'},
    {name:'Praia Hotel',category: 'Viagem',money:'Apagar R$ 341,90 com 34.190pts', image:'public/img/travel.png',date:'20 JUL'},
    {name:'Stream Music',category: 'Serviços',money:'Apagar R$ 26,90 com 2.000pts', image:'public/img/service.png',date:'18 JUL'},
    {name:'Stream Music',category: 'Serviços',money:'Apagar R$ 26,90 com 2.000pts', image:'public/img/service.png',date:'18 JUL'},
    {name:'Stream Music',category: 'Serviços',money:'Apagar R$ 26,90 com 2.000pts', image:'public/img/service.png',date:'18 JUL'},
    {name:'Brasil Arlines',category: 'Viagem',money:'Apagar R$ 268,35 com 26.835pts', image:'public/img/travel.png',date:'Domingo'},
    {name:'Movies Online',category: 'Serviços',money:'Apagada em 14 MAR com 2.600pts', image:'public/img/service.png',date:'Segunda'},
    {name:'Praia Hotel',category: 'Viagem',money:'Apagar R$ 341,90 com 34.190pts', image:'public/img/travel.png',date:'20 JUL'},
];
const area = document.querySelector('.App-Internal__area1')
let model = "";
internalpresentData.forEach(item =>{
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
