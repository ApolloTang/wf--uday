import getAge from '../utils/getAge'
import {RoleInterface} from './type'


enum Roles {
  Student,
  Teacher,
}

class Role implements RoleInterface {
  constructor (
    public id: number,
    public firstName: string,
    public lastName: string,
  ){}

  getFullName(): string {
    return `${ this.firstName } ${ this.lastName }`
  }
}



// Polymorphism
// both Student and Teacher inherits Person Class

class Student extends Role {
  private dob: Date

  constructor (
    public id: number,
    public firstName: string,
    public lastName: string,
    public _dob: string
  ){
    super(id, firstName, lastName)
    this.dob = new Date(_dob )
  }

  getAge(): number {
    return getAge( this.dob )
  }
}


class Teacher extends Role {
  private subjects: string[]

  constructor (
    public id: number,
    public firstName: string,
    public lastName: string,
    public _subjects: string
  ){
    super(id, firstName, lastName)
    this.subjects = _subjects.split(',')
  }

  canTeach(subject: string): boolean {
    return this.subjects.includes( subject )
  }
}


export {
  Roles as default, // Not sure why the default export !
  Role,
  Student,
  Teacher,
}


