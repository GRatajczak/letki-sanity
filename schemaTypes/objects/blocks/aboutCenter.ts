import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutCenter = defineType({
  name: 'aboutCenter',
  title: 'About Center',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              type: 'imageWithAlt',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'image.altText',
              subtitle: 'image.image.asset.originalFilename',
              media: 'image.image',
            },
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Obraz',
                subtitle: subtitle || 'Brak obrazu',
                media,
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'About Center', subtitle: 'Blok: aboutCenter'}
    },
  },
})
