let x = prompt("Введите число")
        while(true){
            let x = prompt("Введите число")
            if(isNaN(x)){
                alert("Это не число")
            }else if(x == '' ) {
                alert("Это не число")
            }else{
                if(x % 2 == 0){
                    alert("Число четное")
                }else if(x % 2 != 0){
                    alert("Число не четное")
                }
            }    
        }