import {defineField, defineType} from 'sanity'

export const instagramImage = defineType({
  name: 'instagramImage',
  title: 'Obraz Instagram',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Obraz',
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
        title: title || 'Obraz Instagram',
        subtitle: subtitle || 'Brak obrazu',
        media,
      }
    },
  },
})
