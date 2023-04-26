async function insertion(){
    
    const barsArray = document.querySelectorAll(".bar");
    
    barsArray[0].style.background = 'lightgreen';
    for(let i = 1; i < barsArray.length; i++){
        
        let j = i-1;
        let key = barsArray[i].style.height;
        
        barsArray[i].style.background = 'pink';

        await waitforme(delay);

        while(j >= 0 && (parseInt(barsArray[j].style.height) > parseInt(key))){
            
            barsArray[j].style.background = 'pink';
            barsArray[j + 1].style.height = barsArray[j].style.height;
            j--;

            await waitforme(delay);

            for(let k = i; k >= 0; k--){
                barsArray[k].style.background = 'lightgreen';
            }
        }
        barsArray[j + 1].style.height = key;
        barsArray[i].style.background = 'lightgreen';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    console.log("sort btn pressed")
    disableNewArray();
    disableSorting();
    disableSizeSlider();
    
    await insertion();

    enableNewArray();
    enableSorting();
    enableSizeSlider();
});


