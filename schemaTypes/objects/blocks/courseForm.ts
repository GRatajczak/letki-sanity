import {defineField, defineType} from 'sanity'

export const courseForm = defineType({
  name: 'courseForm',
  title: 'Course Form',
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
      return {title: 'Course Form', subtitle: 'Blok: courseForm'}
    },
  },
})
