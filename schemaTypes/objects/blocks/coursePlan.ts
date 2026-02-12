import {defineArrayMember, defineField, defineType} from 'sanity'

export const coursePlan = defineType({
  name: 'coursePlan',
  title: 'Course Plan',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'days',
      type: 'array',
      of: [defineArrayMember({type: 'courseDay'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'Course Plan', subtitle: 'Blok: coursePlan'}
    },
  },
})
