import { type SchemaTypeDefinition } from 'sanity'
import { student } from './student'
import { teacher } from './teacher'
import book from './book'
import { subject } from './subject'
import {test} from './test'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [student,teacher,book,subject,test]
}
