import {defineField, defineType} from 'sanity'

export const iconWithTitle = defineType({
  name: 'iconWithTitle',
  title: 'Ikona z tytulem',
  type: 'object',
  fields: [
    defineField({
      name: 'ikona',
      title: 'Ikona',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Tytul',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'ikona.altText',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Ikona z tytulem',
        subtitle: subtitle || 'Brak opisu ikony',
      }
    },
  },
})
