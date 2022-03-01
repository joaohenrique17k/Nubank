const internalGraphicBalance = () =>{
    const containerGraphic = document.querySelector('.internal__balance__graphic .graphic')
    const database = [
        {date:"Jan"},
        {date:"Fev"},
        {date:"Mar"},
        {date:"Abr"},
        {date:"Mai"},
        {date:"Hoje"},
        {date:"Jul"},
        {date:"Ago"},
        {date:"Set"},
        {date:"Out"},
        {date:"Nov"},
        {date:"Dez"},
    ]
    let model = "";
    database.forEach((item, index) =>{
        model += `<div class="graphic-item" >
                        <span class="graphicColunm "></span>
                        <span class="graphic-date ${index === 5 ? 'graphicColor' : ''}">${item.date}</span>
                    </div>`
    })
    containerGraphic.innerHTML = model;

    const colunmGraphic = document.querySelectorAll('.graphicColunm');
    const graphicItemArray = Array.from(colunmGraphic);
    graphicItemArray.reduce((b,a,i) => {
    let result  = b + a.scrollHeight
    a.style.height = `${a.scrollHeight + b}px`;
        i < 6 ? a.classList.add('graphicBackground') : '';
    return result
    },0);
}
internalGraphicBalance();