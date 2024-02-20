export interface Assoicate{
    id:number;
    name:string;
    email:string;
    phone:string;
    address:string;
    status:boolean;
}

export interface AssociatesModel{
    list:Assoicate[],
    assocaiteobj:Assoicate,
    errormessage:string;
}