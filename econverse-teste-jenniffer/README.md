# Teste Econverse

Implementação do teste prático de Front-End da Econverse em React, TypeScript e Sass, com arquitetura `feature-first`, tipagem estrita, responsividade, acessibilidade básica e cobertura de testes com Vitest.

## Stack

- React 19
- TypeScript 6
- Vite 8
- Sass
- ESLint
- Prettier
- Vitest
- React Testing Library
- vitest-axe

## Arquitetura

O projeto foi reorganizado dentro de `src` com separação clara de responsabilidades:

- `pages/home`: composição da página
- `features/product-shelf`: vitrine, abas e carrossel
- `features/product-modal`: modal do produto e seletor de quantidade
- `features/newsletter`: formulário e validação da newsletter
- `entities/product`: tipos, mapeamento, curadoria e consumo do catálogo
- `shared`: estilos globais, utilitários, assets e componentes reutilizáveis

## Requisitos atendidos

- Tipagem estrita
- Zero `any`
- Componentes bem separados
- Estados de `loading` e `error`
- Layout responsivo para desktop, tablet e mobile
- Acessibilidade básica
- ESLint e Prettier configurados
- Testes de regra de negócio, hook e componentes críticos

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse a URL exibida no terminal.

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
npm run format:check
npm test
npm run test:watch
npm run test:coverage
```

## Validação de qualidade

Antes da entrega, os principais checks esperados são:

```bash
npm run format:check
npm run lint
npm test
npm run build
```

## Catálogo e assets

- O catálogo é consumido do endpoint JSON fornecido pela Econverse.
- Os assets visuais principais do Figma foram internalizados em `src/assets/econverse` para evitar dependência de URLs temporárias.

## Observações

- A curadoria das abas da vitrine é feita no front-end, porque o feed não fornece categorias reais.
- Campos visuais ausentes no JSON, como preço riscado e parcelamento, foram derivados de forma determinística para sustentar o layout.
