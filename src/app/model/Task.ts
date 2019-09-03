export class task
{
    constructor( public taskname:string,public parentTask: string,public priority: number, public startDate: Date, public endDate: Date){

    }
}