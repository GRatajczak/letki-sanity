import {defineField, defineType} from 'sanity'

export const instagram = defineType({
  name: 'instagram',
  title: 'Instagram',
  type: 'object',
  fields: [
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
      return {title: 'Instagram', subtitle: 'Blok: instagram'}
    },
  },
})
