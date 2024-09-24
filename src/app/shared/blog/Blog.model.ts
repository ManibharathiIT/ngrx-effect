export interface BlogModel{
    id:number,
    title:string,
    description:string
}

export interface Blogs{
    bloglist:BlogModel[],
    Errormessage:string
}

//In TypeScript, an interface is used to define the shape of an object, ensuring that any object or class adheres to a specific structure.
//It’s like a contract that defines the properties and methods an object must have, without implementing any behavior itself.