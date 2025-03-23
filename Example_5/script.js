const input = document.querySelector('.input');
const enter = document.querySelector('.enter');
const result = document.querySelector('.result');
const box = document.querySelector('.box');
let content = '';

// 1.addEventListener쓰기
// input.addEventListener("change",(e)=>{
//     content = e.target.value;
// })
// enter.addEventListener("click",()=>{
//     result.innerHTML = content;
// })
// box.addEventListener("mouseover",()=>{
//     box.classList.add('box-over');
// })
// box.addEventListener("mouseout",()=>{
//     box.classList.remove('box-over');
// })

// 2.onchange, onclick 쓰기 
// input.onchange = (e)=>{
//     content = e.target.value;
// }
// enter.onclick = ()=>{
//     result.innerHTML = content;
// }
// box.onmouseover = ()=>{
//     box.classList.add('box-over');
// }
// box.onmouseout = ()=>{
//     box.classList.remove('box-over');
// }