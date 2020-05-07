// Enter your code here

const butt = document.getElementById("find")


butt.onclick = function execute(e){
    e.preventDefault()
     const ent = document.getElementById("input").value
     const str = document.getElementById('intro').textContent
     for(i = 0; i < str.length; ++i)
    {
      if(str[i]==ent)
      {
          str[i].style.color="red"
      }
      
    }
     
}






// const str = document.getElementById('intro').textContent

// for(i = 0; i < str.length; ++i)
// {
//     //console.log(str[i])
// }

  



