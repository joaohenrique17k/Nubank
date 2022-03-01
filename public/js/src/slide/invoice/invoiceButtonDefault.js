const button = document.querySelectorAll('.app-slide__invoice__button');
button.forEach(btn =>{
    btn.addEventListener('click', (event) =>{
        event.preventDefault();
    })

})