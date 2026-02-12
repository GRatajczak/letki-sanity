import {defineArrayMember, defineField, defineType} from 'sanity'

export const courses = defineType({
  name: 'courses',
  title: 'Courses',
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
    }),
    defineField({
      name: 'link',
      type: 'string',
    }),
    defineField({
      name: 'kursy',
      title: 'Kursy',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'course'}]})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'Courses', subtitle: 'Blok: courses'}
    },
  },
})
