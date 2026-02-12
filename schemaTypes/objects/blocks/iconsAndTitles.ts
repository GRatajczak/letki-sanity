import {defineArrayMember, defineField, defineType} from 'sanity'

export const iconsAndTitles = defineType({
  name: 'iconsAndTitles',
  title: 'Icons and Titles',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'iconsandtitles',
      title: 'Ikony i tytuly',
      type: 'array',
      of: [defineArrayMember({type: 'iconWithTitle'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'Icons and Titles', subtitle: 'Blok: iconsAndTitles'}
    },
  },
})
