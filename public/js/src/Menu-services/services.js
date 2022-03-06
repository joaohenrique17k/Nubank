// const draggables = document.querySelectorAll('.draggable')
// const containers = document.querySelectorAll('.container')

// draggables.forEach(draggable => {
//   draggable.addEventListener('dragstart', () => {
//     draggable.classList.add('dragging')
//   })
//   draggable.addEventListener('touchstart', () => {
//     draggable.classList.add('dragging')
//   })

//   draggable.addEventListener('dragend', () => {
//     draggable.classList.remove('dragging')
//   })
//   draggable.addEventListener('touchend', () => {
//     draggable.classList.remove('dragging')
//   })
// })

// containers.forEach(container => {
//   container.addEventListener('touchmove', e => {

//     const afterElement = getDragAfterElement(container, e.clientY)
//     const draggable = document.querySelector('.dragging')
//     if (afterElement == null) {
//       container.appendChild(draggable)
//     } else {
//       container.insertBefore(draggable, afterElement)
//     }
//   })
//   container.addEventListener('dragover', e => {
//     e.preventDefault()
//     const afterElement = getDragAfterElement(container, e.clientY)
//     const draggable = document.querySelector('.dragging')
//     if (afterElement == null) {
//       container.appendChild(draggable)
//     } else {
//       container.insertBefore(draggable, afterElement)
//     }
//   })
// })

// function getDragAfterElement(container, y) {
//   const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
//   let arr = []
//   const sla = document.querySelectorAll('.draggable');
//   sla.forEach(i => arr.push({name:i.innerText}))
  
    
//   menu(arr)


//   return draggableElements.reduce((closest, child) => {
//     const box = child.getBoundingClientRect()
//     const offset = y - box.top - box.height / 2
//     if (offset < 0 && offset > closest.offset) {
//       return { offset: offset, element: child }
//     } else {
//     //   console.log(closest)
//       return closest
//     }
//   }, { offset: Number.NEGATIVE_INFINITY }).element

  
// // }

const el = document.getElementById("items");
const sortable = Sortable.create(el, {
    animation: 200,
    ghostClass : "sortable-ghost" ,   // Nome da classe para o espaço reservado para soltar 
	chooseClass : "sortable-chosen" ,   // Nome da classe para o item escolhido 
	dragClass : "sortable-drag" ,   // Nome da classe para o item arrastado
});

let slide = sortable.el;
console.log(slide)
function moveList(event){
  let arr = [];
  if(event.type === 'touchstart' ||event.type === 'touchend') event.preventDefault();
  const items = document.querySelectorAll("#items .draggable");
  items.forEach(i => arr.push({name:i.innerText}))
  if(arr.length === 7){
    arr.pop()
  }
  menu(arr)
  arr = [];
}
slide.addEventListener('drop', moveList)
// slide.addEventListener('touchstart', moveList)
slide.addEventListener('touchend', moveList)
// let naosei = []
// function moveList(event){
//   if(event.type === 'touchstart') event.preventDefault();
//   const items = document.querySelectorAll("#items .draggable");
//   items.forEach(i => naosei.push({name:i.innerText}))
//   console.log(naosei)
//   menu(naosei)
//   naosei = [];
// }
// slide.addEventListener('click', moveList)
// slide.addEventListener('touchend', moveList)


// const sla = document.querySelectorAll('.draggable');
// sla.forEach(i => arr.push({name:i.innerText}))