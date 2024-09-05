type Book ={
    id:number,
    title:string,
    author:string,
    rating:number
}

type InputBook = Omit<Book, "id" |"rating" > & {
    id?:number
    rating?:number
}