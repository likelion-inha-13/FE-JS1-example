const ul = document.getElementById('color');

// 1.appendChild innerHTML 이용해서 추가 
// const green = document.createElement('li')
// green.innerHTML='green';
// ul.appendChild(green);

// 2.appendChild innerHTML 없이 추가
// const blue = document.createTextNode('blue');
// const newLi2 = document.createElement('li');
// newLi2.appendChild(blue);
// ul.appendChild(newLi2);

// 3.insertBefore
// const newLi = document.createElement('li');
// const textNode = document.createTextNode('black');
// newLi.appendChild(textNode);
// const red = document.getElementById('red');
// //red 앞에 삽입
// ul.insertBefore(newLi,red);

