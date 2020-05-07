// Enter your code here

const form = document.getElementById("frm")
//const str = document.getElementById('result')


form.onsubmit = function(e){
    e.preventDefault()
    const res = document.getElementById('result')
    const str = document.getElementById('number').value
    const ch = str.toString()
    const hold = reverse(ch)
    if(hold==ch){
        res.innerText = 'Yes'
    }
    else{
        res.innerText = 'No'
    }
}

function reverse (string) {
    var newString = string.split('').reverse().join('');
    return newString;
   }

