
async function partitionLomuto(barsArray, l, r){
    
    let i = l - 1;
    
    barsArray[r].style.background = 'blue';
    for(let j = l; j <= r - 1; j++){
        
        barsArray[j].style.background = 'yellow';
        
        await waitforme(delay);

        if(parseInt(barsArray[j].style.height) < parseInt(barsArray[r].style.height)){
            
            i++;
            swap(barsArray[i], barsArray[j]);
             
            barsArray[i].style.background = 'orange';
            if(i != j) barsArray[j].style.background = 'orange';
            
            await waitforme(delay);
        }
        else{
            
            barsArray[j].style.background = 'pink';
        }
    }
    i++; 
    
    await waitforme(delay);
    swap(barsArray[i], barsArray[r]);
    
    barsArray[r].style.background = 'pink';
    barsArray[i].style.background = 'lightgreen';

    await waitforme(delay);
    
    for(let k = 0; k < barsArray.length; k++){
        if(barsArray[k].style.background != 'lightgreen')
            barsArray[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(barsArray, l, r){
    
    if(l < r){
        let pivot_index = await partitionLomuto(barsArray, l, r);
        await quickSort(barsArray, l, pivot_index - 1);
        await quickSort(barsArray, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <barsArray.length && r <barsArray.length){
            barsArray[r].style.background = 'lightgreen';
            barsArray[l].style.background = 'lightgreen';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    console.log("sort btn pressed")
    let barsArray = document.querySelectorAll('.bar');
    let l = 0;
    let r = barsArray.length - 1;
    disableNewArray();
    disableSorting();
    disableSizeSlider();

    await quickSort(barsArray, l, r);

    enableNewArray();
    enableSorting();
    enableSizeSlider();
});