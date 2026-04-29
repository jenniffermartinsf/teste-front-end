import { useState } from 'react'

import type { Product } from '@/entities/product/model/product.types'
import { useProductCatalog } from '@/entities/product/hooks/use-product-catalog'
import { NewsletterForm } from '@/features/newsletter/components/newsletter-form'
import { ProductModal } from '@/features/product-modal/components/product-modal'
import { ProductShelf } from '@/features/product-shelf/components/product-shelf'
import { assetCatalog } from '@/shared/config/media'

import {
  categoryItems,
  footerColumns,
  headerBenefits,
  headerSearchIcon,
  membershipIcon,
  partnerBanners,
  primaryNavigation,
  utilityActions,
} from './home.data'
import styles from './index.module.scss'

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string
  icon: string
  label: string
}) => (
  <a
    aria-label={label}
    className={styles.socialLink}
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    <img alt="" height="24" src={icon} width="24" />
  </a>
)

const HeaderSection = () => {
  const SearchIcon = headerSearchIcon
  const MembershipIcon = membershipIcon
  const handleSearchSubmit = (
    event: React.SyntheticEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault()
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.topBar}>
          {headerBenefits.map(({ icon: Icon, text, highlightedText }) => (
            <div
              className={styles.benefit}
              key={`${text}-${highlightedText ?? 'default'}`}
            >
              <Icon className={styles.benefitIcon} />
              <span className={styles.benefitText}>
                {text}{' '}
                {highlightedText ? (
                  <strong className={styles.benefitHighlight}>
                    {highlightedText}
                  </strong>
                ) : null}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.mainBar}>
          <a className={styles.logoLink} href="#home">
            <img
              alt="Econverse"
              className={styles.logo}
              src={assetCatalog.logo}
            />
          </a>
          <form
            className={styles.searchForm}
            onSubmit={handleSearchSubmit}
            role="search"
          >
            <input
              aria-label="Buscar produtos"
              className={styles.searchInput}
              placeholder="O que você está buscando?"
              type="search"
            />
            <button
              aria-label="Buscar"
              className={styles.searchButton}
              type="submit"
            >
              <SearchIcon />
            </button>
          </form>
          <div className={styles.utilityBar}>
            {utilityActions.map(({ icon: Icon, label, badge }) => (
              <button
                aria-label={label}
                className={styles.utilityButton}
                key={label}
                type="button"
              >
                <Icon />
                {badge ? (
                  <span className={styles.utilityBadge}>{badge}</span>
                ) : null}
              </button>
            ))}
          </div>
        </div>
        <nav
          aria-label="Categorias principais"
          className={styles.navigationBar}
        >
          <ul className={styles.navigationList}>
            {primaryNavigation.map((item) => (
              <li key={item}>
                <a
                  className={styles.navigationLink}
                  href="#produtos-relacionados"
                >
                  {item}
                </a>
              </li>
            ))}
            <li className={styles.membershipItem}>
              <a className={styles.membershipLink} href="#newsletter">
                <MembershipIcon className={styles.membershipIcon} />
                Assinatura
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const HeroSection = ({ onPrimaryAction }: { onPrimaryAction: () => void }) => (
  <section className={styles.hero} id="home">
    <div className={styles.heroMedia}>
      <img
        alt=""
        className={styles.heroBackground}
        height="390"
        src={assetCatalog.heroBackground}
        width="1440"
      />
      <div className={styles.heroOverlay} />
    </div>
    <div className={styles.heroContent}>
      <p className={styles.heroEyebrow}>50% Off nos produtos</p>
      <h1 className={styles.heroTitle}>Venha conhecer nossas promoções</h1>
      <button
        className={styles.heroButton}
        onClick={onPrimaryAction}
        type="button"
      >
        Ver produto
      </button>
    </div>
  </section>
)

const CategorySection = () => (
  <section className={styles.categorySection}>
    <div className={styles.categoryGrid}>
      {categoryItems.map((item) => (
        <article
          className={
            item.featured ? styles.categoryCardFeatured : styles.categoryCard
          }
          key={item.id}
        >
          <div className={styles.categoryMedia}>
            <img alt="" height="61" src={item.imageUrl} width="61" />
          </div>
          <strong className={styles.categoryLabel}>{item.label}</strong>
        </article>
      ))}
    </div>
  </section>
)

const PartnerBannersSection = () => (
  <section className={styles.partnerSection}>
    <div className={styles.partnerGrid}>
      {partnerBanners.map((banner) => (
        <article className={styles.partnerCard} key={banner.id}>
          <img
            alt=""
            className={styles.partnerBackground}
            height="350"
            src={banner.imageUrl}
            width="634"
          />
          <div className={styles.partnerOverlay} />
          <div className={styles.partnerContent}>
            <h2 className={styles.partnerTitle}>{banner.title}</h2>
            <p className={styles.partnerDescription}>{banner.description}</p>
            <button className={styles.partnerButton} type="button">
              Confira
            </button>
          </div>
        </article>
      ))}
    </div>
  </section>
)

const BrandShowcaseSection = () => (
  <section className={styles.brandSection}>
    <h2 className={styles.sectionTitle}>Navegue por marcas</h2>
    <div className={styles.brandGrid}>
      {Array.from({ length: 5 }, (_, index) => (
        <article className={styles.brandCard} key={index}>
          <img
            alt="Econverse"
            className={styles.brandLogo}
            src={assetCatalog.logo}
          />
        </article>
      ))}
    </div>
  </section>
)

const FooterSection = () => (
  <footer className={styles.footer}>
    <section className={styles.newsletterSection} id="newsletter">
      <div className={styles.newsletterCopy}>
        <h2 className={styles.newsletterTitle}>
          Inscreva-se na nossa newsletter
        </h2>
        <p className={styles.newsletterDescription}>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>
      <NewsletterForm />
    </section>
    <section className={styles.footerContent}>
      <div className={styles.footerBrand}>
        <img
          alt="Econverse"
          className={styles.footerLogo}
          src={assetCatalog.logo}
        />
        <p className={styles.footerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.socialLinks}>
          <SocialLink
            href="https://www.instagram.com"
            icon={assetCatalog.footerSocial.instagram}
            label="Instagram"
          />
          <SocialLink
            href="https://www.facebook.com"
            icon={assetCatalog.footerSocial.facebook}
            label="Facebook"
          />
          <SocialLink
            href="https://www.linkedin.com"
            icon={assetCatalog.footerSocial.linkedin}
            label="LinkedIn"
          />
        </div>
      </div>
      <div className={styles.footerDivider} />
      <div className={styles.footerColumns}>
        {footerColumns.map((column) => (
          <div className={styles.footerColumn} key={column.id}>
            <h3 className={styles.footerColumnTitle}>{column.title}</h3>
            <ul className={styles.footerList}>
              {column.links.map((link) => (
                <li key={link}>
                  <a className={styles.footerLink} href="#newsletter">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    <div className={styles.footerBottom}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </footer>
)

const HomePage = () => {
  const { catalogState, retry } = useProductCatalog()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handlePrimaryHeroAction = (): void => {
    document
      .getElementById('produtos-relacionados')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className={styles.page}>
        <HeaderSection />
        <main className={styles.main}>
          <HeroSection onPrimaryAction={handlePrimaryHeroAction} />
          <CategorySection />
          <ProductShelf
            anchorId="produtos-relacionados"
            catalogState={catalogState}
            onRetry={retry}
            onSelectProduct={setSelectedProduct}
            showTabs
            title="Produtos relacionados"
          />
          <PartnerBannersSection />
          <ProductShelf
            anchorId="produtos-curadoria"
            catalogState={catalogState}
            onRetry={retry}
            onSelectProduct={setSelectedProduct}
            title="Produtos relacionados"
          />
          <PartnerBannersSection />
          <BrandShowcaseSection />
          <ProductShelf
            anchorId="produtos-final"
            catalogState={catalogState}
            onRetry={retry}
            onSelectProduct={setSelectedProduct}
            title="Produtos relacionados"
          />
        </main>
        <FooterSection />
      </div>
      <ProductModal
        key={selectedProduct?.id ?? 'closed'}
        onClose={() => {
          setSelectedProduct(null)
        }}
        product={selectedProduct}
      />
    </>
  )
}

export default HomePage
