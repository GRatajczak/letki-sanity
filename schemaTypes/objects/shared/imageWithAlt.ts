import {defineField, defineType} from 'sanity'

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Obraz z opisem',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Obraz',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Tekst alternatywny',
      type: 'string',
      validation: (rule) => rule.required().min(3),
    }),
  ],
  preview: {
    select: {
      title: 'altText',
      subtitle: 'image.asset.originalFilename',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Obraz',
        subtitle: subtitle || 'Brak obrazu',
        media,
      }
    },
  },
})
