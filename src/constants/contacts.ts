import LinkedIn from '@assets/icons/linkedIn.png'
import Facebook from '@assets/icons/facebook.png'
import Instagram from '@assets/icons/instagram.png'
import Twitter from '@assets/icons/twitter.png'
import { nanoid } from 'nanoid'

export const contacts = [
  {
    id: nanoid(),
    name: 'LinkedIn',
    img: LinkedIn,
    url: 'https://www.linkedin.com/',
  },
  {
    id: nanoid(),
    name: 'Facebook',
    img: Facebook,
    url: 'https://ru-ru.facebook.com/',
  },
  {
    id: nanoid(),
    name: 'Instagram',
    img: Instagram,
    url: 'https://www.instagram.com/',
  },
  {
    id: nanoid(),
    name: 'Twitter',
    img: Twitter,
    url: 'https://x.com/',
  },
]
