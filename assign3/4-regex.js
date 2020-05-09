// Enter your code here
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /[^\s]+\s/g; // Change this line
// let result = sample.match(countWhiteSpace);
// console.log(result);

const form = document.getElementById("frm")


form.onsubmit = function(e){
    e.preventDefault()
    const butt = document.getElementById("butt")
    const text = document.getElementById("userinput").value
    //console.log(text)
    

    let snip = /[^,]+,\s/g
    let result = text.match(snip)

    for(i=0;i<result.length;++i){
        const p = document.createElement('p')
        const hr = document.createElement('hr')
        butt.append(p)
        butt.append(hr)
        p.innerHTML = result[i].slice(0, -2)
        
    }
}