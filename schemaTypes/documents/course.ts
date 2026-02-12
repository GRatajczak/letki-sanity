import {defineField, defineType} from 'sanity'

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'courseInformations',
      title: 'Informacje o kursie',
      type: 'object',
      fields: [
        defineField({
          name: 'people',
          type: 'object',
          fields: [
            defineField({
              name: 'min',
              type: 'number',
              validation: (rule) => rule.required().min(1),
            }),
            defineField({
              name: 'max',
              type: 'number',
              validation: (rule) => rule.required().min(1),
            }),
          ],
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'place',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'price',
          type: 'number',
          validation: (rule) => rule.required().min(0),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Course',
        subtitle: subtitle ? `/${subtitle}` : 'Brak slugu',
      }
    },
  },
})
