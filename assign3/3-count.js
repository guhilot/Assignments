// Enter your code here

const butt = document.getElementById("find")
//const text = document.getElementById("input").textContent

butt.onclick = function(e){
  e.preventDefault()

  const text = document.getElementById("input").value
  const readText = document.getElementById("intro").innerHTML
  var replace_word = new RegExp('\\b' + text + '\\b',"g")
  var hold= readText.replace(replace_word,'<span style="background:yellow"> '+ text + '</span>' )
  document.getElementById("intro").innerHTML = hold
}
























  // function highlight(text) {
  // var inputText = document.getElementById("intro");
  // var innerHTML = inputText.innerHTML;

  // var index = innerHTML.indexOf(text);

  // if (index >= 0) { 
  //   innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
  //   inputText.innerHTML = innerHTML;
  //  }

//   for(i=0; i<innerHTML.length; ++i){
//     //var citrus = fruits.slice(1);
//     let text1 = innerHTML.slice(i)
//     console.log(text1)
//      let index = text1.indexOf(text);

//      console.log(index);
  
//     // if (index >= 0) { 
//     //   innerHTML = innerHTML.substring(i,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
//     //   inputText.innerHTML = innerHTML;
//     //  }

//      console.log(index + text.length -1)
//   }
// }




// butt.onclick = function execute(e){
//     e.preventDefault()
//      const ent = document.getElementById("input").value
//      const str = document.getElementById('intro').textContent
//      for(i = 0; i < str.length; ++i)
//     {
//       if(str[i]==ent)
//       {
//           str[i].style.color="red"
//       }
      
//     }
     
// }






// const str = document.getElementById('intro').textContent

// for(i = 0; i < str.length; ++i)
// {
//     //console.log(str[i])
// }

  



