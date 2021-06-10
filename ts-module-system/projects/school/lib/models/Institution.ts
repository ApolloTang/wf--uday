import Roles, {
  Role as Person, // rename to Person since it makes more sense to describe a Person
  Student,
  Teacher,
} from './Role'


export class Institution {
  constructor (
    private students: Student[] = [],
    private teachers: Teacher[] = [],
  ) {}

  addPerson( person: Person ): Institution {
    //
    // Use instanceof to guard to perform type narrowing
    //
    if ( person instanceof Student ) {
      this.students.push( person )
    } else if( person instanceof Teacher ){
      this.teachers.push( person )
    }

    return this // to make this method chainable
                // that is why the return of this
                // method is Institution
  }

  findPerson (
    id: number,
    kind = Roles.Student, // look for Student by default
  ): Person|undefined {
    //
    // Use ==== to guard to perform type narrowing
    //
    if (kind === Roles.Student) {
      const foundStudent = this.students.find(
        ( student:Student ):boolean => student.id === id
      )
      return foundStudent
    } else {
      const foundTeacher = this.teachers.find(
        ( teacher:Teacher ):boolean => teacher.id === id
      )
      return foundTeacher
    }
  }
}
