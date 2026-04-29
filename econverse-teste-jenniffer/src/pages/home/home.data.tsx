import { assetCatalog } from '@/shared/config/media'
import { SearchIcon } from '@/shared/ui/icons'

export interface HeaderBenefit {
  iconSrc: string
  textPrefix?: string
  highlightedText: string
  textSuffix?: string
}

export interface UtilityAction {
  iconSrc: string
  label: string
  badge?: string
}

export interface MembershipAction {
  iconSrc: string
  label: string
}

export interface CategoryItem {
  id: string
  label: string
  imageUrl: string
  featured?: boolean
}

export interface PartnerBanner {
  id: string
  title: string
  description: string
  imageUrl: string
}

export interface FooterColumn {
  id: string
  title: string
  links: string[]
}

export const headerBenefits: readonly HeaderBenefit[] = [
  {
    iconSrc: assetCatalog.headerIcons.shieldCheck,
    textPrefix: 'Compra',
    highlightedText: '100% segura',
  },
  {
    iconSrc: assetCatalog.headerIcons.truck,
    highlightedText: 'Frete grátis',
    textSuffix: 'acima de R$ 200',
  },
  {
    iconSrc: assetCatalog.headerIcons.creditCard,
    highlightedText: 'Parcele',
    textSuffix: 'suas compras',
  },
] as const

export const primaryNavigation = [
  'Todas Categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
] as const

export const utilityActions: readonly UtilityAction[] = [
  {
    iconSrc: assetCatalog.headerIcons.compare,
    label: 'Comparar produtos',
  },
  {
    iconSrc: assetCatalog.headerIcons.heart,
    label: 'Favoritos',
  },
  {
    iconSrc: assetCatalog.headerIcons.userCircle,
    label: 'Minha conta',
  },
  {
    iconSrc: assetCatalog.headerIcons.shoppingCart,
    label: 'Carrinho',
    badge: '2',
  },
] as const

export const membershipAction: MembershipAction = {
  iconSrc: assetCatalog.headerIcons.crownSimple,
  label: 'Assinatura',
}

export const categoryItems: readonly CategoryItem[] = [
  {
    id: 'technology',
    label: 'Tecnologia',
    imageUrl: assetCatalog.categoryIcons.technology,
    featured: true,
  },
  {
    id: 'supermarket',
    label: 'Supermercado',
    imageUrl: assetCatalog.categoryIcons.supermarket,
  },
  {
    id: 'beverages',
    label: 'Bebidas',
    imageUrl: assetCatalog.categoryIcons.beverages,
  },
  {
    id: 'tools',
    label: 'Ferramentas',
    imageUrl: assetCatalog.categoryIcons.tools,
  },
  {
    id: 'health',
    label: 'Saúde',
    imageUrl: assetCatalog.categoryIcons.health,
  },
  {
    id: 'sports',
    label: 'Esportes e Fitness',
    imageUrl: assetCatalog.categoryIcons.sports,
  },
  {
    id: 'fashion',
    label: 'Moda',
    imageUrl: assetCatalog.categoryIcons.fashion,
  },
] as const

export const partnerBanners: readonly PartnerBanner[] = [
  {
    id: 'partner-1',
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    imageUrl: assetCatalog.parceirosBanner,
  },
  {
    id: 'partner-2',
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    imageUrl: assetCatalog.parceirosBanner,
  },
] as const

export const footerColumns: readonly FooterColumn[] = [
  {
    id: 'institutional',
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    id: 'help',
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    id: 'terms',
    title: 'Termos',
    links: [
      'Termos e Condições',
      'Política de Privacidade',
      'Troca e Devolução',
    ],
  },
] as const

export const headerSearchIcon = SearchIcon
