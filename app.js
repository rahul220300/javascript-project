

    let screen = document.querySelector('.screen');
        let buttons = document.querySelectorAll('.btn');
        let clear = document.querySelector('.btn-clear');
        let equal = document.querySelector('.btn-equal');
        //let one_clear = document.querySelector('.btn-one-equal');
         
        buttons.forEach(function(button){
            button.addEventListener('click',function(e){
                e.preventDefault();
                let value = e.target.dataset.num;
                screen.value += value;
            })
        });

        equal.addEventListener('click',function(e){
            if(screen.value ===""){
                screen.value="";
            }
            else{
                const answer = eval(screen.value);
                screen.value = answer;
            }
        })
        clear.addEventListener('click',function(e){
            screen.value ="";
        })

    
