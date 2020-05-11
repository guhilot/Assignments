// Enter your code here

// const getCharacters = async function(pageNo = 1)
// {
//     const url = 'https://swapi.dev/api/people/'

//     let actualUrl = url + `?page=${pageNo}`

//     var apiResults= await fetch(actualUrl)
//         .then(res=>res.json())
//     return apiResults
// }

// const getEntireCharacterList = async function(pageNo = 1)
// {
//     const result = await getCharacters(pageNo)
//     const finalres = result.results 
//         if(result.next != null){
//             return finalres.concat(await getEntireCharacterList(pageNo+1))
//         }
//         else{
//             return finalres
//         }
// }



//     (async ()=>{
//         const entireList = await getEntireCharacterList()
//         var ul = document.getElementById('results')
//         for(let i = 0; i < entireList.length ; ++i)
//         {
//             var li = document.createElement('li')
//             li.innerHTML = entireList[i].name + ' - ' + entireList[i].birth_year
//             ul.appendChild(li)
//         }
//     })();

// const url = 'https://swapi.dev/api/people/'


// const hold = async function(url){
//     var apiResults= await fetch(url)
//         .then(res=>res.json())
//     return apiResults
// }

// const val = hold("https://swapi.dev/api/people")

for(i = 1; i < 10; ++i)
{
    const url = 'https://swapi.dev/api/people/?page=' + i.toString();
    //console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>dataMan([data]))
}

// function dataMan(val){
//     const oo = val.map(nom=>{
//         return nom.results.map(n=>{
//             return {name : n.name, birthday : n.birth_year}
//         })
//     })
//     console.log(oo)
// }

const url = 'https://swapi.dev/api/people/?page=3';

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
