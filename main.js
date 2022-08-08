const container = document.querySelector('.container');

function createGridSquares(num){
    for(i=0; i<num*num; i++){
        const div = document.createElement('div');
        div.classList.add('grid-square')
        container.appendChild(div);
    }
}

function hoverChangeColor(){
    const gridSquare = document.querySelectorAll('.grid-square')
    gridSquare.forEach(square => {
        square.addEventListener('mouseover',() => {
            square.style.backgroundColor = 'black';
        })
    })
}

function ChangeGridSquaresSize(num){
    const gridSquare = document.querySelectorAll('.grid-square')
    gridSquare.forEach(square => {
        square.style.cssText = `width: calc(480px / ${num}); height: calc(480px / ${num})`;
    })
}

function randomColor(){
    const gridSquare = document.querySelectorAll('.grid-square')
    gridSquare.forEach(square => {
        square.addEventListener('mouseover',() => {
            rgba = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
            square.style.backgroundColor = rgba;
        })
    })
}

function reset(){
    const gridSquare = document.querySelectorAll('.grid-square')
    gridSquare.forEach(square => {
        square.style.backgroundColor = 'white';
    })
}

function main(num){
    createGridSquares(num);
    ChangeGridSquaresSize(num);
}

function click(slidervalue){
    main(slidervalue);
    hoverChangeColor();
    const chooseColorButton = document.querySelectorAll('.selector');
    chooseColorButton.forEach(button => {
        if(button.dataset.selection === 'blackColor'){
            button.addEventListener('click', () => {
                hoverChangeColor();
            });
        }else if(button.dataset.selection === 'randomColor'){
            button.addEventListener('click', () => {
                randomColor();
            });
        }else if(button.dataset.selection === 'reset'){
            button.addEventListener('click', () => {
                reset();
            });            
        }
    })
}

function slider(){
    const slider = document.querySelector('input');
    const value = document.querySelector('#value');
    value.textContent = slider.value;
    click(slider.value)
    slider.addEventListener('input', () =>{
        value.textContent = slider.value;
        click(slider.value);
    })
}


slider()









