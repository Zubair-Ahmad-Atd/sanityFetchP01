export default  { 
    name:"book",
    title:"Book",
    type: "document",
    fields:[ 
        { 
            name:"bookName",
            title:"Book Name",
            type: "string"
        }, 
        { 
            name:"ceated_at",
            title:"Created At",
            type: "date"
        },
        { 
            name:"picture",
            title:"Picture",
            type:"image"
        }
    ]
}