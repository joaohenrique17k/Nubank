const graphic = () =>{
  const graphicItem = document.querySelectorAll('[graphic-item]');
  const graphicItemArray = Array.from(graphicItem);
   graphicItemArray.reduce((b,a,i) => {
      let result  = b + a.scrollHeight
      a.style.height = `${result}px`;
      i > 5 ? a.classList.add('graphicColor'): '';
      return result
  },0);

}
graphic();

 
     

  
 
