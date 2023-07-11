const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');



let result=0;
for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        let input = e.target.innerText;
        let val = screen.value;
        if(val==="Invalid Operation"){
            val='';
        }
        if(input === 'C'){
            val='';
            screen.value=val;
        }
        else if(input==='x'){
            val += '*';
            screen.value = val;
        }
        else if(input==='^'){
            val += '**';
            screen.value = val;
        }
        else if(input==='='){
            try{
                let result=eval(val);
                screen.value=result;
            }
            catch(e){
                screen.value='Invalid Operation';
            }
        }
        else{
            val += input;
            screen.value=val;
        }
    })
}