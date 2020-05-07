// Enter your code here

const form = document.getElementById('frm')

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const btn = document.getElementById('btn1')
btn.onclick = function(e){
    e.preventDefault()
    //const value1 = btn.className == "btn btn-danger"? document.getElementById("interval").value : 500
    //document.getElementById("interval").value
    console.log(btn.className)

    const value1 = document.getElementById("interval").value


    document.querySelector('.btn').value = document.querySelector('.btn').value == 'Stop'? 'Start':'Stop'
    btn.className = btn.className == "btn btn-danger"? "btn btn-primary": "btn btn-danger" 
    
        let hold = setInterval(()=>{
        document.body.style.backgroundColor = random_rgba()
        }, value1*1000)

}

 
    //document.querySelector('.btn').value = 'Hide'


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
//document.querySelector('.btn').value = 'Hide'
const body = document.getElementsByTagName('body')


// setInterval(()=>{
//     document.body.style.backgroundColor = random_rgba()
// }, 10000)
//class="btn btn-primary"



