//Etch-a-Sketch application 


const reset = document.querySelector('#reset')

const slider = document.querySelector('#gridSizeSlider')

const grid = querySelector('#grid')

slider.oninput = makeGrid

function makeGrid(){

    newValue = slider.value;
    console.log(newValue)
    oldValue = document.querySelector('#grid').childElementCount
    console.log(oldValue)
    dif = newValue - oldValue
    console.log(dif, oldValue)
    if(dif > 0) {
        makeRows(dif, newValue)
    }
    if(dif < 0){
        removeRows(dif)
    }
    
    const pixels = document.querySelectorAll('.column')
    


    function makeRows(dif, newValue){

        for (i = 1; i < (dif+1); i++){
            // Create Rows
            const rowFirstChild = document.querySelector('#grid > .row');
            const rowParent = rowFirstChild.parentNode;
            let newRow = document.createElement("div")
            newRow.className = 'row'
            rowParent.insertBefore(newRow, rowFirstChild.nextSibling)
        } 
        const columns = document.querySelectorAll('.row')
        console.log(columns)
        columns.forEach(column => {
            for(i = 1; i < newValue; i++){
                // console.log(column)
                const columnFirstChild = column;
                // let columnParent = columnFirstChild.parentNode;
                // console.log(columnParent)
                let newPixel = document.createElement("span");
                newPixel.className = "column";
    
                columnFirstChild.insertBefore(newPixel, columnFirstChild.firstChild)

            }

        })
            
            console.log(document.querySelector('#grid').firstElementChild.childNodes.length)
            //Create Columns
            
        
        

        }



        pixels.forEach((pixel) => { 
            pixel.addEventListener('mouseover', () => { // Add mouseover smurfs to all pixels
                randomColorCheck = document.querySelector('#randomColor').checked
                // Make background change on hover
                if(randomColorCheck){
                    pixel.style.backgroundColor = randomColor()
                }
                else{
                    pixel.style.backgroundColor = '#333'
                }
            })
        })


        reset.addEventListener('click', () => {
            pixels.forEach((pixel) => {
                    pixel.style.backgroundColor = ''
                })
               
            
            })
        // Color the "pixels"
        pixels.forEach((pixel) => { 
            pixel.addEventListener('mouseover', () => { // Add mouseover smurfs to all pixels
                randomColorCheck = document.querySelector('#randomColor').checked
                // Make background change on hover
                if(randomColorCheck){
                    pixel.style.backgroundColor = randomColor()
                }
                else{
                    pixel.style.backgroundColor = '#333'
                }
            })
        })
        // Random RGBa value
        function randomColor(){
            function color(){
                min = 0
                max = 256
                return Math.floor(Math.random() * Math.floor(256))
            }
            let red = color()
            let blue = color()
            let green = color()
            let alpha = Math.random()
        
            return `rgb(${red},${green},${blue},${alpha})`
        }
    }
    
    
    function removeRows(dif){
        for(i = 0; i <  Math.abs(dif); i++){
            const gridContainer = document.querySelector('#grid')
            gridContainer.removeChild(gridContainer.lastChild)
            const rowContainer = document.querySelector('.row')
            rowContainer.removeChild(rowContainer.lastChild)
        }
    }
    











