import {defineArrayMember, defineField, defineType} from 'sanity'

export const global = defineType({
  name: 'global',
  title: 'Global',
  type: 'document',
  fields: [
    defineField({
      name: 'options',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          type: 'string',
          validation: (rule) => rule.required().email(),
        }),
        defineField({
          name: 'facebook',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          type: 'url',
        }),
        defineField({
          name: 'telefon',
          title: 'Telefon',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'instagramimages',
          title: 'Obrazy Instagram',
          type: 'array',
          of: [defineArrayMember({type: 'instagramImage'})],
          validation: (rule) =>
            rule
              .required()
              .min(8)
              .error('Komponent Instagram wymaga minimum 8 obrazow.'),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      email: 'options.email',
    },
    prepare({email}) {
      return {
        title: 'Global',
        subtitle: email || 'Brak emaila',
      }
    },
  },
})
