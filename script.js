var numSquares = 6;
var color_list = [];
var picked_color;
var guess_color = document.getElementById('topColor');
var square = document.querySelectorAll('.card');
var comment = document.getElementById('comment');
var jumbo = document.querySelector('.jumbotron');
var resetButton = document.getElementById('reset');
var mode = document.querySelectorAll('.mode');


init()
function init(){
    setUpMode();
    setUpSquares();
    reset();

}

function setUpMode(){
    for (var i = 0;i<mode.length;i++){
        mode[i].addEventListener('click',function(){
            mode[0].classList.remove('select');
            mode[1].classList.remove('select');
            this.classList.add('select');
            if(this.textContent === "Easy"){
                numSquares = 3;
            }else{
                numSquares = 6;
            }
            
            reset();
        });
}
}

function setUpSquares(){
    for(var i = 0;i<square.length;i++){
        square[i].addEventListener('click',function(){
            var clicked_color  = this.style.backgroundColor;
            if(clicked_color === picked_color){
                comment.textContent = 'Correct';
                resetButton.textContent = 'Play Again?';
                sameColor(clicked_color);
                
            }else{
                this.style.backgroundColor = 'white';
                comment.textContent = 'Try Again'
            }
        });

    }
}

function reset(){
    color_list  = generate_color(numSquares);
    picked_color = pickColor();
    guess_color.textContent = picked_color;
    for(var i = 0;i<square.length;i++){
        if(color_list[i]){
            square[i].style.backgroundColor = color_list[i];
            square[i].style.display = "block";
        }else{
            square[i].style.display = "none";
        }
        
    }
    jumbo.style.backgroundColor = 'rgb(211, 195, 195)';
    resetButton.textContent = 'New Game';
    comment.textContent = '';

}


resetButton.addEventListener('click',()=>{
  reset()
    
})

function sameColor(color){
    for(var i = 0;i<square.length;i++){
        square[i].style.backgroundColor = color;
        jumbo.style.backgroundColor = color;
    }
}
function pickColor(){
    var number = Math.floor(Math.random() * color_list.length); 
    return color_list[number];
}
function generate_color(num){
    var arr = []
    for(var i = 0;i<num;i++){
        //add random colors to color_list
       arr.push(addRandom());
    }
    return arr;
}

function addRandom(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb('+ r + ', ' + g + ', ' + b + ')' ;
}