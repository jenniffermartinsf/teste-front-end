import categoryBeverages from '@/assets/econverse/category-beverages.png'
import categoryFashion from '@/assets/econverse/category-fashion.png'
import categoryHealth from '@/assets/econverse/category-health.png'
import categorySports from '@/assets/econverse/category-sports.png'
import categorySupermarket from '@/assets/econverse/category-supermarket.png'
import categoryTechnology from '@/assets/econverse/category-technology.png'
import categoryTools from '@/assets/econverse/category-tools.png'
import heroBackground from '@/assets/econverse/hero-background.jpg'
import logo from '@/assets/econverse/logo.svg'
import productIphone from '@/assets/econverse/product-iphone.png'
import socialFacebook from '@/assets/econverse/social-facebook.svg'
import socialInstagram from '@/assets/econverse/social-instagram.svg'
import socialLinkedin from '@/assets/econverse/social-linkedin.svg'

export const assetCatalog = {
  logo,
  heroBackground,
  categoryIcons: {
    technology: categoryTechnology,
    supermarket: categorySupermarket,
    beverages: categoryBeverages,
    tools: categoryTools,
    health: categoryHealth,
    sports: categorySports,
    fashion: categoryFashion,
  },
  footerSocial: {
    instagram: socialInstagram,
    facebook: socialFacebook,
    linkedin: socialLinkedin,
  },
  productPhoto: productIphone,
} as const
