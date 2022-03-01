const hideAndShowMoneyPanel = () =>{
    const line = document.querySelector('[line-eye]');
    const eye = document.querySelector('[eye]');
    const money = document.querySelector('[balance-money]')
    line.style.display = "none"
        if(line && eye && money){
            eye.classList.add('Open')
            eye.addEventListener('click', (event)=>{
                event.preventDefault()
                if(eye.classList.contains('Open')){
                    eye.classList.remove('Open')
                    eye.classList.add('Closed')
                    line.style.display = "block"
                    money.classList.toggle('blur')
                    
                }else{
                    eye.classList.remove('Closed')
                    eye.classList.add('Open')
                    line.style.display = "none"
                    money.classList.toggle('blur')
                }
        })

    }
    
}


hideAndShowMoneyPanel()