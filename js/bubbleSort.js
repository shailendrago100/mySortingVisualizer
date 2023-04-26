async function bubble() {
    const barsArray = document.querySelectorAll(".bar");
    for(let i = 0; i < barsArray.length-1; i++){
        
        for(let j = 0; j < barsArray.length-i-1; j++){
            
            barsArray[j].style.background = 'yellow';
            barsArray[j+1].style.background = 'yellow';
            if(parseInt(barsArray[j].style.height) > parseInt(barsArray[j+1].style.height)){
                
                await waitforme(delay);
                swap(barsArray[j], barsArray[j+1]);
            }
            barsArray[j].style.background = 'pink';
            barsArray[j+1].style.background = 'pink';
        }
        barsArray[barsArray.length-1-i].style.background = 'lightgreen';
    }
    barsArray[0].style.background = 'lightgreen';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    console.log("sort btn pressed")
    disableNewArray();
    disableSorting();
    disableSizeSlider();

    await bubble();

    enableNewArray();
    enableSorting();
    enableSizeSlider();
});


