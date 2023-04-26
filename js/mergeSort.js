

async function merge(barsArray, low, mid, high){
    
    const n1 = mid - low + 1;
    const n2 = high - mid;
    
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await waitforme(delay);
        
        barsArray[low + i].style.background = 'red';
        left[i] = barsArray[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
        
        barsArray[mid + 1 + i].style.background = 'yellow';
        right[i] = barsArray[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            
            if((n1 + n2) === barsArray.length){
                barsArray[k].style.background = 'green';
            }
            else{
                barsArray[k].style.background = 'lightgreen';
            }
            
            barsArray[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            
            if((n1 + n2) === barsArray.length){
                barsArray[k].style.background = 'green';
            }
            else{
                barsArray[k].style.background = 'lightgreen';
            } 
            barsArray[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        
        if((n1 + n2) === barsArray.length){
            barsArray[k].style.background = 'green';
        }
        else{
            barsArray[k].style.background = 'lightgreen';
        }
        barsArray[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        
        if((n1 + n2) === barsArray.length){
            barsArray[k].style.background = 'green';
        }
        else{
            barsArray[k].style.background = 'lightgreen';
        }
        barsArray[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(barsArray, l, r){
    
    if(l >= r){
        return;
    }
    const mid = l + Math.floor((r - l) / 2);
    
    await mergeSort(barsArray, l, mid);
    await mergeSort(barsArray, mid + 1, r);
    await merge(barsArray, l, mid, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    console.log("sort btn pressed")
    let barsArray = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(barsArray.length) - 1;
    disableNewArray();
    disableSorting();
    disableSizeSlider();

    await mergeSort(barsArray, l, r);
    
    enableNewArray();
    enableSorting();
    enableSizeSlider();
});


