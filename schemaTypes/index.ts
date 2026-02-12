import {course} from './documents/course'
import {global} from './documents/global'
import {page} from './documents/page'
import {aboutCenter} from './objects/blocks/aboutCenter'
import {aboutUsContent} from './objects/blocks/aboutUsContent'
import {contactForm} from './objects/blocks/contactForm'
import {courseForm} from './objects/blocks/courseForm'
import {coursePlan} from './objects/blocks/coursePlan'
import {courses} from './objects/blocks/courses'
import {faq} from './objects/blocks/faq'
import {gallery} from './objects/blocks/gallery'
import {hero} from './objects/blocks/hero'
import {imageBlock} from './objects/blocks/image'
import {iconsAndTitles} from './objects/blocks/iconsAndTitles'
import {instagram} from './objects/blocks/instagram'
import {subHero} from './objects/blocks/subHero'
import {textContent} from './objects/blocks/textContent'
import {threeParagraphs} from './objects/blocks/threeParagraphs'
import {courseDay} from './objects/shared/courseDay'
import {faqItem} from './objects/shared/faqItem'
import {iconWithTitle} from './objects/shared/iconWithTitle'
import {imageWithAlt} from './objects/shared/imageWithAlt'
import {instagramImage} from './objects/shared/instagramImage'
import {seo} from './objects/shared/seo'

export const schemaTypes = [
  page,
  global,
  course,
  seo,
  imageWithAlt,
  instagramImage,
  iconWithTitle,
  faqItem,
  courseDay,
  hero,
  aboutCenter,
  courses,
  faq,
  subHero,
  aboutUsContent,
  threeParagraphs,
  imageBlock,
  coursePlan,
  iconsAndTitles,
  textContent,
  courseForm,
  contactForm,
  gallery,
  instagram,
]
