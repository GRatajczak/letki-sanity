import {defineField, defineType} from 'sanity'

export const contactForm = defineType({
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Zdjęcie',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'marker',
      type: 'boolean',
      initialValue: true,
      hidden: true,
      readOnly: true,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Contact Form', subtitle: 'Blok: contactForm'}
    },
  },
})
