import {defineField, defineType} from 'sanity'

export const threeParagraphs = defineType({
  name: 'threeParagraphs',
  title: 'Three Paragraphs',
  type: 'object',
  fields: [
    defineField({
      // Ta nazwa jest celowa dla kompatybilnosci z frontendem.
      name: 'fistparagraph',
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
      name: 'thirdparagraph',
      type: 'text',
      rows: 4,
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
  ],
  preview: {
    select: {title: 'fistparagraph'},
    prepare({title}) {
      return {title: title || 'Three Paragraphs', subtitle: 'Blok: threeParagraphs'}
    },
  },
})
