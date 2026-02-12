import {defineField, defineType} from 'sanity'

export const imageBlock = defineType({
  name: 'imageBlock',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'image.altText'},
    prepare({title}) {
      return {title: title || 'Image', subtitle: 'Blok: image'}
    },
  },
})
