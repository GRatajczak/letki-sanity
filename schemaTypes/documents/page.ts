import {defineArrayMember, defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
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
      name: 'seo',
      type: 'seo',
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
        defineArrayMember({type: 'contactForm'}),
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
        title: title || 'Page',
        subtitle: subtitle ? `/${subtitle}` : 'Brak slugu',
      }
    },
  },
})
