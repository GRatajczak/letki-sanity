import {defineField, defineType} from 'sanity'

export const subHero = defineType({
  name: 'subHero',
  title: 'Sub Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'Sub Hero', subtitle: 'Blok: subHero'}
    },
  },
})
