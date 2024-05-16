// import { log } from "console";
// import { client } from "../../sanity/lib/client";
// import Image from "next/image";
// import { useState } from "react";




"use client"


// export default async function Home() {
//  const dataSanity = await client.fetch(`*[_type == 'test']{testName}`)
//   console.log(dataSanity)

//   return (
//     <main className="flex min-h-screen flex-col items-center  p-24">
//     {dataSanity.map((item:any ,index:number)=>(
//     <div key={item.index}>
//       <p>The Name Of BOOK : {item.testName}</p>
//      </div>
//     ))} 
//     <form> 
//       <label htmlFor="txt">Change The name of book</label><br />
//       <input type="text" id="txt" name="txt"></input>
//       <button>Submit</button>
//     </form>
     
//      </main>
//   );
// } 



import React, { useState } from 'react'
import { client } from "../../sanity/lib/client";


// export const updateDataInSanity = async (title:any) => {
//   try {
//     // Example: Update document with ID 'documentId' in Sanity
//     const result = await client
//       .patch(`*[_type == 'test']{testName}`) // Replace 'documentId' with your document ID
//       .set({ testName:title }) // Update the 'title' field
//       .commit();
//     console.log('Data updated in Sanity:', result);
//     return result;
//   } catch (error) {
//     console.error('Error updating data in Sanity:', error);
//     throw new Error('Error updating data in Sanity');
//   }
// }; 

export const updateDataInSanity = async (title: string) => {
  try {
    // Retrieve a specific document by its unique identifier
    const documents = await client
      .fetch(`*[_type == 'test'][0]._id`); // Select the first document that matches the criteria
    
    if (documents.length === 0) {
      throw new Error('No documents found to update');
    }

    const documentId = documents[0]._id; // Extract the _id of the first document

    // Update the selected document
    const result = await client
      .patch(documentId) // Use the _id of the document you want to update
      .set({ testName: title }) // Update the 'testName' field with the provided title
      .commit();
    
    console.log('Data updated in Sanity:', result);
    return result;
  } catch (error) {
    console.error('Error updating data in Sanity:', error);
    throw new Error('Error updating data in Sanity');
  }
};

const Home = () => {
  // Step 1: Create state variable to store input field data
  const [title, setTitle] = useState('');

  // Step 2: Event handler function to handle form submission
  const handleFormSubmit = async(e:any) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Step 4: Access the input field data from the state variable
    // setTitle(e.target.value)
    await updateDataInSanity(title)
    console.log(title); 
 

    // You can perform further actions here, such as sending the data to a server.
  }; 

  const handleInputChange = (e:any) => {
    setTitle(e.target.value); // Update the title state
    // console.log('Input Changed:', e.target.value); // Log the input value
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="txt">Change The name of book</label><br />
        {/* Step 3: Update state on change */}
        <input 
          type="text" 
          id="txt" 
          name="txt" 
          value={title} 
          onChange={handleInputChange}
        />
        <button type="submit" >Submit</button> {/* Use type="submit" for submit button */}
      </form>
    </div>
  );
};

export default Home;


