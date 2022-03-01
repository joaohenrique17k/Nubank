const invoiceContainerMoviment = () =>{
  const slideInvoice = document.querySelectorAll('[data="selectSlides"]')
  const containerClick = document.querySelectorAll('[data="selectContainerIntegra"]')
  const exitContainerInternal = document.querySelectorAll('.App-internal__closed')

  const containerSlides = document.querySelector('.containerSlides')

  const Opening_the_slide_cards = (container, n) =>{
    if(n == 'open'){
     container.style.zIndex = '100000000000'
     containerSlides.style.top = '0rem';
    }else if(n = 'closed'){
      container.style.zIndex = '0'
     containerSlides.style.top = '200rem';
    }
  }

  slideInvoice.forEach((slides, indexSlide) =>{
    containerClick.forEach((containerSlides, indexContainer)=>{
      exitContainerInternal.forEach((closedContainerSlide) =>{
        if(indexSlide === indexContainer){
           slides.addEventListener('click', (event)=>{
               event.preventDefault();
               Opening_the_slide_cards(containerSlides, cardOpen = 'open');
               console.log(containerSlides)
           })
           closedContainerSlide.addEventListener('click',()=>{
             Opening_the_slide_cards(containerSlides, cardClosed = 'closed')
           })
        }
      })
    })
  })
}
invoiceContainerMoviment()
