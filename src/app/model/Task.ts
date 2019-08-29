export class task
{
    constructor( public name:string,public parentTask: string,public priority: number, public startDate: Date, public endDate: Date){

    }
}