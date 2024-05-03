var numberofbuttons = document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberofbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}


document.addEventListener('keydown',function(event){
    makeSound(event.key);

});




function makeSound(key){
    switch(key){
        case "w":
            var tom1= new Audio('music/tom-1.mp3');
            tom1.play();
            break;
            case "a":
                var tom2= new Audio('music/tom-2.mp3');
                tom2.play();
                break;
                 case "s":
                    var tom3= new Audio('music/tom-3.mp3');
                    tom3.play();
                    break;    
                    case "s":
                        var tom3= new Audio('music/tom-3.mp3');
                        tom3.play();
                        break;  
                        case "d":
                            var tom4= new Audio('music/tom-4.mp3');
                            tom4.play();
                            break;
                            case "j":
                                var tom5= new Audio('music/snare.mp3');
                                tom5.play();
                                break;

                                case "l":
                                    var tom6= new Audio('music/kick-bass.mp3');
                                    tom6.play();
                                    break; 
    }
}


   