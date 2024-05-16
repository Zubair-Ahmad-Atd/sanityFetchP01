import { defineType,defineField } from "sanity";  

export const subject = defineType({ 
 name:"subjects",
 type: "document",
 title: "Enter Subjects",
 fields:[defineField(
    {name:"subject",title:"Subject",type:"string" }
)]
})