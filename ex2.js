function arrayThree() {
    let numbers = [0, 0, 0 ];

    if(numbers[0] === numbers[1] && numbers[2] === numbers[0]){
        console.log(numbers[0], numbers[1], numbers[2]);
    }
    if(numbers[0] > numbers[1] && numbers[1] > numbers[2]){
        console.log(numbers[0], numbers[1], numbers[2]);
    }
    else if (numbers[0] > numbers[1] && numbers[2] > numbers[1]){
        console.log(numbers[0], numbers[2], numbers[1]);
        
    }
    else if(numbers[1] > numbers[0] && numbers[2] >numbers[0]){
        console.log(numbers[1], numbers[2], numbers[0]);
        

    }else if (numbers[1] > numbers[0] && numbers[0] > numbers[2]){
        console.log(numbers[1], numbers[0], numbers[2]);
        
    } 
    else if(numbers[2] > numbers[1] && numbers[1] > numbers[0]){
        console.log(numbers[2], numbers[1], numbers[0]);  
        
    }
     else if(numbers[2]> numbers[1] && numbers[0] > numbers[1]){
            console.log(numbers[2], numbers[0], numbers[1]);
          
      
    }
}
