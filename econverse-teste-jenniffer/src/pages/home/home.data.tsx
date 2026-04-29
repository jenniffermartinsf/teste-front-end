import { assetCatalog } from '@/shared/config/media'
import type { ComponentType } from 'react'
import type { SVGProps } from 'react'
import {
  CartIcon,
  CreditCardIcon,
  CrownIcon,
  HeartIcon,
  SearchIcon,
  ShieldIcon,
  TruckIcon,
  UserIcon,
} from '@/shared/ui/icons'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export interface HeaderBenefit {
  icon: IconComponent
  text: string
  highlightedText?: string
}

export interface UtilityAction {
  icon: IconComponent
  label: string
  badge?: string
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
    icon: ShieldIcon,
    text: 'Compra',
    highlightedText: '100% segura',
  },
  {
    icon: TruckIcon,
    text: 'Frete grátis acima de',
    highlightedText: 'R$ 200',
  },
  {
    icon: CreditCardIcon,
    text: 'Parcele suas compras',
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
    icon: HeartIcon,
    label: 'Favoritos',
  },
  {
    icon: UserIcon,
    label: 'Minha conta',
  },
  {
    icon: CartIcon,
    label: 'Carrinho',
    badge: '2',
  },
] as const

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
    imageUrl: assetCatalog.heroBackground,
  },
  {
    id: 'partner-2',
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    imageUrl: assetCatalog.heroBackground,
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
    links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
] as const

export const headerSearchIcon = SearchIcon
export const membershipIcon = CrownIcon
