// Enter your code here

const url = 'https://swapi.dev/api/people';

   function dataMan(val){
       const h2 = document.querySelector('h2')
       const ul = document.createElement('ul')
       h2.append(ul)
       const hold = val.map(nom=>{
            return nom.results.map(n=>{
                //return [n.name, n.birth_year]
                const li = document.createElement('li')
                ul.append(li)
                const str = n.name
                const str2 = n.birth_year
                const str3 = str.concat(", ")
                const str4 = str3.concat(str2)
                li.innerHTML = str4
                li.style.fontSize = "medium"
            })
       })
    }
    //dataMan([data])

    async function loop(url){
        // url1 = url.slice(0, -1)
        console.log(url.toString())
        // for(i=2; i<=9; ++i)
        // {
           await fetch(url)
            .then(res=>res.json())
            .then(data=>console.log(data))
        // } 
    }
  
    fetch(url)
        .then(res=>res.json())
        .then(data=>dataMan([data]))
