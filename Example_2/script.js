const blue = document.getElementById('blue');

console.log("blue.firstChild:",blue.firstChild); //"Blue" , 텍스트 노드이다. 
console.log("blue.firstElementChild:",blue.firstElementChild); //null 

const blueTextNode = blue.firstChild;

console.log("blueTextNode.nodeName:",blueTextNode.nodeName); //'#text'
console.log("blueTextNode.nodeType:",blueTextNode.nodeType); // 3 : text Node라는 뜻이다. 

console.log("blueTextNode.nodeValue:",blueTextNode.nodeValue); // 'Blue' 
