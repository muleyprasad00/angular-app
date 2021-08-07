export interface Columns {    
    field:string;
    title:string;
    width?:string;
    type?:string;
    buttonDetails?:{
        btnText:string;
        btnClass:string
    }
    cellRenderer?:string;
    cellRendererParams?:{}
}