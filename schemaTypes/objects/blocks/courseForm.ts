import {defineArrayMember, defineField, defineType} from 'sanity'

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
    defineField({
      name: 'dates',
      title: 'Daty',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'dateEntry',
          title: 'Data',
          fields: [
            defineField({
              name: 'date',
              title: 'Data',
              type: 'date',
            }),
          ],
          preview: {
            select: {date: 'date'},
            prepare({date}) {
              return {title: date ? new Date(date).toLocaleDateString('pl-PL') : 'Data'}
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Course Form', subtitle: 'Blok: courseForm'}
    },
  },
})
