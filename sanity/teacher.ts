import { title } from "process";
import { validation } from "sanity";


export const teacher = { 

     title: 'Teacher Profile',
     name: 'teacher',
     type: 'document', 

     fields: [
        { 
            title: 'Teacher Name',
            name: 'teacherName',
            type:'string',
            validation: (rule:any) => rule.required().error("Khuck likho bhi")
            
        },
        { 
            title: 'Teacher Age',
            name: 'teacherAge',
            type: 'number',
            hidden: ({document}:any)=> document.teacherName === "Qasim",
            readOnly: ({document}:any) => { document.teacherName === "Shabbir"},
            validation: (rule:any) => [
                rule.min(20).max(40).error("Age check karen"),
                rule.required().warning("Age must enter karen")
            ]
        }, 
        { 
            title: "Select Subjects to Teach",
            name: "subject",
            type:"reference",
            to:[{type: "subjects"}],
            hidden: ({document}:any)=> document.teacherAge <= 25
        },
        { 
            title:"Select Multi Subjects",
            name:"multiSub",
            type:"array",
            of:[ { 
                type:"reference",
                to:[{type:"subjects"}]
            }],
            hidden: ({document}:any)=> document.teacherAge <= 25
        },
     ]
}