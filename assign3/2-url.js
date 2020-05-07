// Enter your code here

// Input:
// http://www.example.com?name=r2d2&email=r2d2%4@me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no

const form = document.getElementById('frm')
form.onsubmit = function(e){
    e.preventDefault()
    const url = document.getElementById('comments').value
    //console.log(url)   
    // let n = url.indexOf("?"); 
    // const str1 = url.slice(0,22)
    // console.log(str1)
    // console.log(url)
    let arr = []
    //console.log(url.length)
    for(i=0;i<url.length;++i){
        if(url[i]=='?' || url[i]=='&')
        {
            arr.push(i)
        }
    }
    //console.log(arr)
    //var res = str.replace("=", ":");
    const str1 = (url.slice(0,arr[0])).replace('=',' : ')
    const str2 = (url.slice(arr[0]+1,arr[1])).replace('=',' : ')
    const str3 = (url.slice(arr[1]+1,arr[2])).replace('=',' : ')
    const str4 = (url.slice(arr[2]+1)).replace('=',' : ')

    //console.log(str1,str2,str3,str4)
    const div = document.querySelector('.root')
    const form1 = document.createElement('form')
    form1.className ='bg-light border rounded w-50 mx-auto mt-5 p-3'
    div.append(form1)
    
    const h2 = document.createElement('h2')
    //h2.style.marginBottom="520px"
    const h4 = document.createElement('h4')
    const h41 = document.createElement('h4')
    const p = document.createElement('p')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
  
    //form1.innerText="test"
    // p.style.fontSize='medium'
    // p.style.fontWeight='normal'
    // p1.style.fontSize='medium'
    // p1.style.fontWeight='normal'
    // p2.style.fontSize='medium'
    // p2.style.fontWeight='normal'
    // p3.style.fontSize='medium'
    // p3.style.fontWeight='normal'
    h2.innerText='Results'
    h4.innerText='URL'
    h41.innerText='Query Parameters'
    p.innerText = str1
    p1.innerText = str2
    p2.innerText = str3
    p3.innerText = str4
    
    form1.append(h2)
    form1.append(h4)
    form1.append(p)
    form1.append(h41)
    form1.append(p1)
    form1.append(p2)
    form1.append(p3)
    
}

