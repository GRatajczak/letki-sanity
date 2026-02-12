import {defineField, defineType} from 'sanity'

export const faqItem = defineType({
  name: 'faqItem',
  title: 'Pytanie FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Pytanie',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Odpowiedz',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'answer',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'FAQ',
        subtitle: subtitle || 'Brak odpowiedzi',
      }
    },
  },
})
