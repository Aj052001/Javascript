// fetch 

const URL = "https://jsonplaceholder.typicode.com/posts";
const data1 = []
const fetchData =  async()=>{

    const res = await fetch(URL)
    const data = await res.json()
    
   for(let i of data)
   {
    data1.push(i)
   }


}


const root = document.querySelector(".root")
console.log(root)

fetchData()

setTimeout(()=>{
    data1.map((item,index,arr)=>{
        console.log(item.title)

         const div = document.createElement("div")
         div.classList.toggle("box")

         const title = document.createElement("p")
         title.textContent = item.title
         div.append(title)
         root.append(div)
    })
},1000)






// fetch(URL,{
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     })
//     .then(response =>{
//         if(response.ok){
//             return response.json()
//         }else{
//             throw new Error("Something went wrong!!!")
//         }
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error =>{
//         console.log("inside catch");
//         console.log(error);
//     })
