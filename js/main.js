

function disableSizeSlider(){
    document.querySelector("#arrSize").disabled = true;
}

function enableSizeSlider(){
    document.querySelector("#arrSize").disabled = false;
}

function disableNewArray(){
    document.querySelector(".newArray").disabled = true;
}

function enableNewArray(){
    document.querySelector(".newArray").disabled = false;
}
// enable buttons
function enableSorting(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
}
// disable buttons
function disableSorting(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
}
function swap(element1, element2) {
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    })
}


// whenever slider is changes....new array is formed
let arraySize = document.querySelector('#arrSize');
arraySize.addEventListener('input', function(){

    // console.log(arraySize.value);
    createNewArray(parseInt(arraySize.value));
});

let delay = 150;
let delayElement = document.querySelector('#speedInput');

delayElement.addEventListener('input', function(){
    
    console.log(delayElement.value);
    delay = 310 - parseInt(delayElement.value);
});

let array = [];
createNewArray();

function createNewArray(noOfBars = 50) {
    deleteChild();

    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 500) + 1);
    }
    // console.log(array);

    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]}px`;
        // console.log(array[i]);
        bar.classList.add('bar');
        bar.classList.add('flex_item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){

    enableSorting();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
