import {defineArrayMember, defineField, defineType} from 'sanity'

export const titleAndRichText = defineType({
  name: 'titleAndRichText',
  title: 'Tytuł i rich tekst',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Treść',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: title || 'Tytuł i rich tekst',
        subtitle: 'Blok: titleAndRichText',
      }
    },
  },
})
