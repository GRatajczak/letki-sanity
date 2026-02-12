import {defineField, defineType} from 'sanity'

export const aboutUsContent = defineType({
  name: 'aboutUsContent',
  title: 'About Us Content',
  type: 'object',
  fields: [
    defineField({
      name: 'firstparagraph',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondparagraph',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'firstimage',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondimage',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thirdimage',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'firstparagraph'},
    prepare({title}) {
      return {title: title || 'About Us Content', subtitle: 'Blok: aboutUsContent'}
    },
  },
})
