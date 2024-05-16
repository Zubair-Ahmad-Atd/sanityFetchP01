import { log } from "console";
import { client } from "../../sanity/lib/client";
import Image from "next/image";



 async function getData() {
   const fetchData = await client.fetch(`*[_type == "student"]`)
   return fetchData
 } 

 const test = await client.fetch(`*[_type == "student"]`)
 console.log(test[0].age)
 console.log(typeof(test))

export default async function Home() { 
 const data = await getData()
//  console.log(data);
//  console.log(typeof(data)) 

let book = await client.fetch(`*[_type == "book"] { bookName}`) 
console.log(book) 
console.log(typeof(book))
  
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
       <h1> Sanity CMS headless</h1>
       {data[0].name}
       {/* {data.map((item:any) => (
       <p>Name:{item.name}</p>
       ))}  */}
       <br /> 

       <h1>Fetching From Sanity</h1>
       {book.map((boo:any)=>(
       <p key={boo.bookName}>{boo.bookName}</p>
      //  <Image  src={boo.} 
      //  alt="Image from sanity" 
      //  width={200}
      //  height={200}
      //  /> 
      
      
       ))}
       
       
    </main> 
  );
}
