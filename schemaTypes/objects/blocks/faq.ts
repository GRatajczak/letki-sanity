import {defineArrayMember, defineField, defineType} from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'questions',
      type: 'array',
      of: [defineArrayMember({type: 'faqItem'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'backgroundimage',
      title: 'Background image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'link',
      type: 'string',
    }),
    defineField({
      name: 'noPadding',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'biggerMaxWidth',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'headingOnLeft',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'FAQ', subtitle: 'Blok: faq'}
    },
  },
})
