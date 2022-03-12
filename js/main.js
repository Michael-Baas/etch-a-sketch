//Etch-a-Sketch application 


const reset = document.querySelector('#reset')
const slider = document.querySelector('#gridSizeSlider')
const currentGridSize = document.querySelector('#currentGridSize');
slider.oninput = makeGrid

function makeGrid(){
    currentGridSize.innerText = `${slider.value} x ${slider.value}`;
    let newValue = slider.value;
    let oldValue = grid.childElementCount
    let dif = newValue - oldValue
    if(dif > 0) {
        makeRows(newValue, oldValue, newValue)
    }
    if(dif < 0){
        makeRows(newValue, oldValue, newValue)
    }
     
    const pixels = document.querySelectorAll('.column')
    


    function makeRows(dif, oldValue, newValue){
        const grid = document.querySelector('#grid')
        
        deleteAllChildren(grid)
        
            for (i = 0; i < (newValue); i++){
                // make rows
                
                const newRow = document.createElement("div")
                newRow.className = 'row'
                grid.appendChild(newRow)
            } 
            const rows = document.querySelectorAll('.row')
            rows.forEach(row => {
                for(i = 0; i < newValue; i++){
                    console.log(oldValue)
                    let newColumn = document.createElement("span");
                    newColumn.className = "column";
                    row.appendChild(newColumn) 
                }
            
            })
     
     }
             // //Create Columns
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
                max = 246
                return Math.floor(Math.random() * Math.floor(256))
            }
            let red = color()
            let blue = color()
            let green = color()
            let alpha = Math.random()
        
            return `rgb(${red},${green},${blue},${alpha})`
        }
    }
        
        function deleteAllChildren(parentNode){
        while(parentNode.firstChild){
            parentNode.removeChild(parentNode.firstChild)
        }
    }








