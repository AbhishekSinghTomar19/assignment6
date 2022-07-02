export class DataService{
    constructor() {}
    tasks = [
        {
          Employee: 'Solaris',
          Designation: 'SDE'
        },
        {
          Employee: 'Srishti',
          Designation: 'Testing'
        }
      ];

    //  statusUpdated = new EventEmitter<any>();


      addEmployee(Details:{Employee: string,Designation: string}) {
        this.tasks.push(Details);
      }

      changeDesignation(updateInfo: {index: number, NewDesignation: string}){
        //console.log(updateInfo);
        //console.log(this.tasks[updateInfo.index]);
        
        this.tasks[updateInfo.index].Designation = updateInfo.NewDesignation;
        
      }
}