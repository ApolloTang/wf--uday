/**
 *
 * This file is a standard library parttern that the consumer
 * of library only has to worry about a single entry point of
 * the library.
 *
 * This api file provides an interface to interact with Instution
 * (which has been rename to school).
 *
 */

import { Institution as School } from './models/Institution'
import { Teacher, Student } from './models/Role'

// single instance of 'School' class
let school: School|undefined = undefined

const getSchool = (): School => {
  if (school === undefined) {
    school = new School()
  }
  return school
}


export {
  School, Teacher, Student,
  getSchool,
}

// re-export classess
export { default } from './models/Role' // Re-export Roles enum

