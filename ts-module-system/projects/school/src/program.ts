/*
 * The program.ts file contains a program that we are going to run
 * on Node to execute some meaningful task. This file imports all
 * the values exported by the api.ts file.
 */

import Types, {
  getSchool,
  School,
  Teacher, Student
} from '../lib/api'


// get default `School` instance
const school: School = getSchool()

// create people for the school
const monica = new Student(1, 'Monica', 'Geller', '04-22-1969')
const rechel = new Student(2, 'Rachel', 'Green', '04-05-1969')
const phoebe = new Student(3, 'Phoebe', 'Buffay', '02-06-1969')
const ross   = new Teacher(1, 'Ross', 'Buffay', 'Palecontology,Music')
const joey   = new Teacher(2, 'Joey', 'Tribbiani', 'Dance,Acting')

// add students to school
school.addPerson( monica )
school.addPerson( rechel )
school.addPerson( phoebe )
school.addPerson( ross   )
school.addPerson( joey   )

// find people in the school

const s = school.findPerson( 1, Types.Student )
const t = school.findPerson( 2, Types.Teacher )


// However, despite these values being an instance of Teacher or
// Student , since the return type of findPerson is Person , the
// TypeScript compiler won’t let you call canTeach or getAge methods
// since they don’t exist on the type of Person , hence we have
// used type assertion.
//
if (s) {
  console.log(
    'Student %s is %d years old',
    s.getFullName(), (s as Student).getAge()
  )
}

if (t) {
  console.log(
    'Can teacher %s teach dance? %s.',
    t.getFullName(), (t as Teacher).canTeach('Dance')
  )
}


