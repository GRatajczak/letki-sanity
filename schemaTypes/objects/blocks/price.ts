import {defineArrayMember, defineField, defineType} from 'sanity'

export const price = defineType({
  name: 'price',
  title: 'Cena',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Główny tytuł',
      type: 'string',
      description: 'Np. "Cena"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'disclaimer',
      title: 'Dopisek pod tytułem',
      type: 'text',
      rows: 2,
      description:
        'Opcjonalnie. Np. "PODANA KWOTA TO CENA ZA DZIEŃ OD OSOBY. CENA NIE OBEJMUJE NOCLEGÓW, WYŻYWIENIA I TRANSPORTU."',
    }),
    defineField({
      name: 'prices',
      title: 'Ceny (po prawej stronie)',
      type: 'array',
      description: 'Od 1 do 4 pozycji. Każda: kwota + opcjonalny dopisek (np. "Przy 4 osobach").',
      validation: (rule) => rule.required().min(1).max(4),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'priceItem',
          title: 'Pozycja ceny',
          fields: [
            defineField({
              name: 'amount',
              title: 'Cena',
              type: 'string',
              description: 'Np. "300", "400 zł" lub "zapytaj". Na stronie może wyświetlić się z prefiksem "od".',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Dopisek pod ceną',
              type: 'string',
              description: 'Opcjonalnie, np. "Przy 4 osobach", "Przy 2-3 osobach".',
            }),
          ],
          preview: {
            select: {amount: 'amount', caption: 'caption'},
            prepare({amount, caption}) {
              return {
                title: amount ? `${amount}${caption ? ` – ${caption}` : ''}` : 'Pozycja ceny',
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', prices: 'prices'},
    prepare({title, prices}) {
      const count = prices?.length ?? 0
      return {
        title: title || 'Cena',
        subtitle: count ? `${count} ${count === 1 ? 'cena' : count < 5 ? 'ceny' : 'cen'}` : 'Blok: price',
      }
    },
  },
})
