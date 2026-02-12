import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytul SEO',
      type: 'string',
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: 'description',
      title: 'Opis SEO',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'SEO',
        subtitle: subtitle || 'Brak opisu SEO',
      }
    },
  },
})
