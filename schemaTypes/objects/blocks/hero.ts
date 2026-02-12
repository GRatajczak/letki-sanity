import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'marker',
      type: 'boolean',
      initialValue: true,
      hidden: true,
      readOnly: true,
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'Hero', subtitle: 'Blok: hero'}
    },
  },
})
