import moment from 'moment'

/**
 * This function takes a Date object and returns a number which
 * would be the age of the person.
 *
 * @param date - Date of birth of a person
 * @returns Age of the person
 */
export default (date: Date): number => {
  return moment().diff( date, 'year')
}
