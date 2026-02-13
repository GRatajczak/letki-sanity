import {defineField, defineType,defineArrayMember} from 'sanity'

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
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        defineArrayMember({type: 'hero'}),
        defineArrayMember({type: 'aboutCenter'}),
        defineArrayMember({type: 'courses'}),
        defineArrayMember({type: 'faq'}),
        defineArrayMember({type: 'subHero'}),
        defineArrayMember({type: 'aboutUsContent'}),
        defineArrayMember({type: 'threeParagraphs'}),
        defineArrayMember({type: 'imageBlock'}),
        defineArrayMember({type: 'coursePlan'}),
        defineArrayMember({type: 'iconsAndTitles'}),
        defineArrayMember({type: 'textContent'}),
        defineArrayMember({type: 'titleAndRichText'}),
        defineArrayMember({type: 'courseForm'}),
        defineArrayMember({ type: 'contactForm' }),
        defineArrayMember({type: 'price'}),
        defineArrayMember({type: 'gallery'}),
        defineArrayMember({type: 'instagram'}),
      ],
      validation: (rule) => rule.required().min(1),
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
