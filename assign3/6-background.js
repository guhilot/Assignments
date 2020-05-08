// Enter your code here

const form = document.getElementById('frm')

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const btn = document.getElementById('btn1')
btn.onclick = function(e){
    e.preventDefault()

    console.log(btn.className)

    const value1 = document.getElementById("interval").value


    document.querySelector('.btn').value = document.querySelector('.btn').value == 'Stop'? 'Start':'Stop'
    btn.className = btn.className == "btn btn-danger"? "btn btn-primary": "btn btn-danger" 


    btn.className == "btn btn-danger"? hold = setInterval(()=>{
        document.body.style.backgroundColor = random_rgba()
        }, value1*1000) : clearInterval(hold)
}


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
const body = document.getElementsByTagName('body')




