export class Book {
    id: number = 0;
    bookName: string = '';
    authorName: string = '';
    publishingYear: string = '';
    language: string = '';

    constructor(id:number=0,bookName:string='',authorName:string='',publishingYear:string='',laguage:string=''){
        this.id=id;
        this.bookName=bookName;
        this.authorName=authorName;
        this.publishingYear=publishingYear;
        this.language=laguage;
    }

}
