export interface PropTypes
{

    n1:number;
    n2:number;
}

export interface Emp
{
    empdetails:{
        empid:number,
        empname:string,
        address:{
            city:string,
            state:string,
            pincode:number
        }
    }
}