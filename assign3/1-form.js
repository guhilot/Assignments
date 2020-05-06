// Enter your code here
const form = document.getElementById("frm")

form.onsubmit = function(e){
  e.preventDefault()
  const cb = document.querySelectorAll('.sub')
  var str = ""
  cb.forEach(chk=>{
    if(chk.checked == true)
    {
        str += chk.value + ", "
    }
  })
  
  console.log(`name: ${form.fname.value}`)
  console.log(`email: ${form.gmail.value}`)
  console.log(`registration status: ${form.regStat.value}`)
  console.log(`class section: ${form.reg.value}`)
  console.log(`course: ${str.slice(0,-2)}`)
  console.log(`class goals: ${form.texta.value}`)
}


// function myFunction() {
//   var checkBox = document.getElementById("myCheck");
//   var text = document.getElementById("text");
//   if (checkBox.checked == true){
//     text.style.display = "block";
//   } else {
//      text.style.display = "none";
//   }
// }
