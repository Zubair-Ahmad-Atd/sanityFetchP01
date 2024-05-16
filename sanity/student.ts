import { title } from "process";

export const student = {

    name: 'student',
    type: 'document',
    title: 'Student Profile',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Student Name'
        },
        {
            name: 'age',
            type: 'number',
            title: 'Student Age'
        },
        {
            name: "dob",
            type: "date",
            title: "Date od Birth"
        }, 

        {
            title: 'Select Gender',
            name: 'genderSelect',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [
                {title: 'Male', value: 'male'},
                {title: 'Female', value: 'female'},
                {title: 'Transgender', value: 'transgender'},
                
              ]
            }
          },
        {
            name: "image",
            type: "image",
            title: "Student Image"
        },
        {
            title: 'Address',
            name: 'address',
            type: 'object',
            fields: [
                { name: 'street', type: 'string', title: 'Street name' },
                { name: 'streetNo', type: 'string', title: 'Street number' },
                { name: 'city', type: 'string', title: 'City' }
            ]
        },

        {
            title: 'Choose Subjects',
            name: 'subjects',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'JavaScript', value: 'JavaScript' },
                    { title: 'TypeScript', value: 'TypeScript' },
                    { title: 'Python', value: 'Phython' },
                    { title: 'Artificial Intelligence', value: 'Artificial Intelligence' }
                ]
            }
        },
        {
            title: 'Student Social URL',
            name: 'socialUrl',
            type: 'url'
        },
        // Presented as a tokenizing tag-field
        {
            title: 'Hobbies',
            name: 'hobby',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }, 
        {
            title: 'Your Description', 
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
          }


    ]

}