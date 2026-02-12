import {defineField, defineType} from 'sanity'

export const textContent = defineType({
  name: 'textContent',
  title: 'Text Content',
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
      rows: 5,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'Text Content', subtitle: 'Blok: textContent'}
    },
  },
})
