export interface Columns {    
    field:string;
    title:string;
    type?:string;
    buttonDetails?:{
        btnText:string;
        btnClass:string
    }
    cellRenderer?:string;
    cellRendererParams?:{}
}