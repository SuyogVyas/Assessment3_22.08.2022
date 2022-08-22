import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";


export class EmpDataService implements InMemoryDbService{


    constructor()
    {

    }

    createDb() {
        return {
            employeeList:[
                {Srno:1,FirstName:'Suyog',MiddleName:'Gopal',LastName:'Vyas',EmployeeType:'contract',gender:'male',Actions:['view','edit'],Address:"Gondia",DOB:'07/08/2000',pincode:444444,emailid:"s@gmail.com",Contact:1214144241},
                {Srno:2,FirstName:'Aman',MiddleName:'Shiv',LastName:'Sahu',EmployeeType:'contract',gender:'male',Actions:['view','edit','delete'],Address:"Gondia",DOB:'07/08/2000',pincode:444444,emailid:"s@gmail.com",Contact:1214144241},
                {Srno:3,FirstName:'Mitesh',MiddleName:'Gopal',LastName:'Sakalkar',EmployeeType:'permanent',gender:'male',Actions:['view','edit','delete'],Address:"Gondia",DOB:'07/08/2000',pincode:444444,emailid:"s@gmail.com",Contact:1214144241},
                {Srno:4,FirstName:'Chinmay',MiddleName:'Prashant',LastName:'Deshkar',EmployeeType:'contract',gender:'male',Actions:['view','edit','delete'],Address:"Gondia",DOB:'07/08/2000',pincode:444444,emailid:"s@gmail.com",Contact:1214144241},
                {Srno:5,FirstName:'Viplav',MiddleName:'Nitin',LastName:'Khode',EmployeeType:'permanent',gender:'male',Actions:['view','edit','delete'],Address:"Gondia",DOB:'07/08/2000',pincode:444444,emailid:"s@gmail.com",Contact:1214144241},
                {Srno:6,FirstName:'Sanket',MiddleName:'Sanjay',LastName:'Bhageria',EmployeeType:'permanent',gender:'male',Actions:['view','edit','delete'],Address:"Gondia",DOB:'07/08/2000',pincode:444444,emailid:"s@gmail.com",Contact:1214144241},
            ]
        }
    }

   
}