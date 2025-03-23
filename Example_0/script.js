const container = document.getElementById('container');
const addBtn = document.getElementById('add');

// HTMLCollection (live)
const htmlCollection = container.children;

// NodeList (non-live)
const nodeList = container.querySelectorAll('p');

console.log("처음 HTMLCollection:", htmlCollection);
console.log("처음 NodeList:", nodeList);

//DOM 수정
addBtn.addEventListener('click', () => {
    const newPara = document.createElement('p');
    newPara.textContent = `Paragraph ${htmlCollection.length + 1}`;
    container.appendChild(newPara);

    console.log("버튼 클릭 후 HTMLCollection:", htmlCollection);
    console.log("버튼 클릭 후 NodeList:", nodeList);
});
