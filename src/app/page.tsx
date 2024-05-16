import { log } from "console";
import { client } from "../../sanity/lib/client";
import Image from "next/image";






export default async function Home() {
  // get data image and name
  const dataSanity = await client.fetch(`*[_type == 'test']{
  
  "imageUrl": image.asset->url
  
}` )  
 console.log(dataSanity) 

//  get student bio 
 const dataStudent = await client.fetch(`*[_type == 'student']{ 
  name,age,dob,address,genderSelect,subjects,socialUrl,hobby,content
 }[0]`)
 console.log(dataStudent.content[0])


  return (
    <main className=" min-h-screen  p-24">
      <div className="flex flex-col items-center gap-12">
      <h1 className="text-2xl font-bold uppercase"> Data Fetching From Sanity</h1> 
      
      {dataSanity.map((item:any) => (
         <div key={item.testName}>
        <h2>{item.testName}</h2>
        <Image  
        src={item.imageUrl}
        alt="image from sanity cms"

        width={400}
        height={400}
        /> 
      </div>
    ))}  
     </div>
    <div className="bg-red-100 h-autu w-full p-12 flex flex-col  ">
       <h2 className="text-2xl font-bold uppercase text-center">Student Information</h2>
      <div className="flex justify-evenly gap-8 pt-20">
      <div>
         <p> Age: {dataStudent.age}</p>
         <p>Date Of Birth:{dataStudent.dob}</p>
         <p>Gender:{dataStudent.genderSelect}</p>
         <p>Teaches:{`${dataStudent.subjects[0]},${dataStudent.subjects[2]}`}</p>
         <p>Contact:{dataStudent.socialUrl}</p>
         <p>Hobbies:{`${dataStudent.hobby[0]},${dataStudent.hobby[1]}`}</p>
      </div> 
      <div> 
         <h2 className="text-xl font-bold">Address</h2>
         <p className="">Street Name: {dataStudent.address.street}</p>
         <p>Street Number: {dataStudent.address.streetNo}</p>
         <p>City: {dataStudent.address.city}</p>
         
      </div> 
      </div>
     
    </div> 

    </main>
  );
}
