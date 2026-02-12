import {defineField, defineType} from 'sanity'

export const courseDay = defineType({
  name: 'courseDay',
  title: 'Dzien kursu',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytul dnia',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Opis dnia',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'desc',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Dzien kursu',
        subtitle: subtitle || 'Brak opisu',
      }
    },
  },
})
