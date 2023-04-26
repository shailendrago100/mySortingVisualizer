async function selection(){
    
    const barsArray = document.querySelectorAll(".bar");
    for(let i = 0; i < barsArray.length; i++){
        
        let min_index = i;
        
        barsArray[i].style.background = 'blue';
        for(let j = i+1; j < barsArray.length; j++){
            
            barsArray[j].style.background = 'pink';

            await waitforme(delay);

            if(parseInt(barsArray[j].style.height) < parseInt(barsArray[min_index].style.height)){
                
                if(min_index !== i){
                    barsArray[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                barsArray[j].style.background = 'cyan';
            }   
        }
        await waitforme(delay);
        swap(barsArray[min_index], barsArray[i]);
        
        barsArray[min_index].style.background = 'cyan';
        
        barsArray[i].style.background = 'lightgreen';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    console.log("sort btn pressed")
    disableNewArray();
    disableSorting();
    disableSizeSlider();

    await selection();

    enableNewArray();
    enableSorting();
    enableSizeSlider();
});