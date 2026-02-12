import {defineArrayMember, defineField, defineType} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
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
                title: title || 'Obraz galerii',
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
    prepare() {
      return {title: 'Gallery', subtitle: 'Blok: gallery'}
    },
  },
})
