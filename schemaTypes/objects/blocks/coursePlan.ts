import {defineArrayMember, defineField, defineType} from 'sanity'

export const coursePlan = defineType({
  name: 'coursePlan',
  title: 'Course Plan',
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
      name: 'items',
      title: 'Pozycje (obraz + teksty)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'coursePlanItem',
          title: 'Pozycja',
          fields: [
            defineField({
              name: 'image',
              title: 'Obraz',
              type: 'imageWithAlt',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Tytuł',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'textLines',
              title: 'Linie tekstu (pogrubiony + przypisek)',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'textLine',
                  title: 'Linia',
                  fields: [
                    defineField({
                      name: 'boldText',
                      title: 'Pogrubiony tekst',
                      type: 'string',
                    }),
                    defineField({
                      name: 'caption',
                      title: 'Przypisek',
                      type: 'string',
                    }),
                  ],
                  preview: {
                    select: {boldText: 'boldText'},
                    prepare({boldText}) {
                      return {title: boldText || 'Linia'}
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {title: 'title'},
            prepare({title}) {
              return {title: title || 'Pozycja'}
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
      return {title: title || 'Course Plan', subtitle: 'Blok: coursePlan'}
    },
  },
})
