import benefitCreditCard from '@/assets/econverse/CreditCard.svg'
import membershipCrown from '@/assets/econverse/CrownSimple.svg'
import utilityCompare from '@/assets/econverse/Group.svg'
import utilityHeart from '@/assets/econverse/Heart.svg'
import benefitShieldCheck from '@/assets/econverse/ShieldCheck.svg'
import utilityShoppingCart from '@/assets/econverse/ShoppingCart.svg'
import benefitTruck from '@/assets/econverse/Truck.svg'
import utilityUserCircle from '@/assets/econverse/UserCircle.svg'
import categoryBeverages from '@/assets/econverse/category-beverages.png'
import categoryFashion from '@/assets/econverse/category-fashion.png'
import categoryHealth from '@/assets/econverse/category-health.png'
import categorySports from '@/assets/econverse/category-sports.png'
import categorySupermarket from '@/assets/econverse/category-supermarket.png'
import categoryTechnology from '@/assets/econverse/category-technology.png'
import categoryTools from '@/assets/econverse/category-tools.png'
import heroBackground from '@/assets/econverse/hero-background.jpg'
import logo from '@/assets/econverse/logo.svg'
import parceirosBanner from '@/assets/econverse/parceiros.svg'
import productIphone from '@/assets/econverse/product-iphone.png'
import socialFacebook from '@/assets/econverse/social-facebook.svg'
import socialInstagram from '@/assets/econverse/social-instagram.svg'
import socialLinkedin from '@/assets/econverse/social-linkedin.svg'

export const assetCatalog = {
  logo,
  heroBackground,
  parceirosBanner,
  headerIcons: {
    compare: utilityCompare,
    creditCard: benefitCreditCard,
    crownSimple: membershipCrown,
    heart: utilityHeart,
    shieldCheck: benefitShieldCheck,
    shoppingCart: utilityShoppingCart,
    truck: benefitTruck,
    userCircle: utilityUserCircle,
  },
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
