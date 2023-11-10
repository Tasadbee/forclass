var elMainInp = document.querySelector('.main__input')
var arr = []
var arr2 = ['olma, anor, behi, nok']
var elMainTitle = document.querySelector('.main__input__box__title')

function Addfn(){
    if(elMainInp.value.length <= 4 && elMainInp.value.length > 1){
        arr.push(elMainInp.value)
        elMainTitle.textContent = arr
        elMainInp.style.border = "3px solid green";
        
    }else{
        elMainInp.style.border = "3px solid red";
        elMainTitle.textContent = 'XXXXX'
    }
   
}
function Delfn(){
    if(elMainInp.value.length <= 4  && elMainInp.value.length > 1){
        arr.shift(elMainInp.value)
        elMainTitle.textContent = 'Harid uchun rahmat'
        elMainInp.style.border = 'black'
    }else{
        elMainInp.style.border = "3px solid red";
        elMainTitle.textContent = 'XXXXX'
    }
    
    
}