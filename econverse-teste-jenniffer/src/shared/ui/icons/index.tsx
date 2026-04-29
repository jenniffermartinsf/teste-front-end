import type { JSX, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const createIcon = (path: JSX.Element) => {
  const Icon = (props: IconProps) => (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {path}
    </svg>
  )

  return Icon
}

export const SearchIcon = createIcon(
  <>
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="m16 16 4 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </>,
)

export const CompareIcon = createIcon(
  <>
    <path
      d="M7 7h10"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
    <path
      d="m13.5 4 3.5 3-3.5 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="M17 17H7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
    <path
      d="m10.5 14-3.5 3 3.5 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </>,
)

export const HeartIcon = createIcon(
  <path
    d="M12 20.3S4 15.7 4 9.9C4 7.2 6 5 8.7 5c1.6 0 3 0.8 3.8 2.1C13.3 5.8 14.7 5 16.3 5 19 5 21 7.2 21 9.9c0 5.8-8 10.4-8 10.4Z"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
  />,
)

export const UserIcon = createIcon(
  <>
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M5.5 19c1.4-3 4-4.5 6.5-4.5s5.1 1.5 6.5 4.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </>,
)

export const CartIcon = createIcon(
  <>
    <path
      d="M3 5h2l2.2 9.3a1 1 0 0 0 1 .7h8.9a1 1 0 0 0 1-.8L20 8H7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <circle cx="10" cy="19" r="1.5" fill="currentColor" />
    <circle cx="17" cy="19" r="1.5" fill="currentColor" />
  </>,
)

export const ShieldIcon = createIcon(
  <path
    d="M12 3c2 1.5 4.5 2.5 7 2.7V11c0 5-3.1 8-7 10-3.9-2-7-5-7-10V5.7C7.5 5.5 10 4.5 12 3Z"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
  />,
)

export const TruckIcon = createIcon(
  <>
    <path
      d="M3 7h11v8H3z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="M14 10h3l3 3v2h-6z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <circle cx="7" cy="18" r="1.8" fill="currentColor" />
    <circle cx="17" cy="18" r="1.8" fill="currentColor" />
  </>,
)

export const CreditCardIcon = createIcon(
  <>
    <rect
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
      width="18"
      x="3"
      y="6"
    />
    <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
  </>,
)

export const CrownIcon = createIcon(
  <path
    d="m4 18 2-10 5 5 5-7 4 12H4Z"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
  />,
)

export const ChevronLeftIcon = createIcon(
  <path
    d="m14.5 6-6 6 6 6"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
  />,
)

export const ChevronRightIcon = createIcon(
  <path
    d="m9.5 6 6 6-6 6"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
  />,
)

export const MinusIcon = createIcon(
  <path
    d="M6 12h12"
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth="1.8"
  />,
)

export const PlusIcon = createIcon(
  <>
    <path
      d="M12 6v12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
    <path
      d="M6 12h12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </>,
)

export const CloseIcon = createIcon(
  <>
    <path
      d="m6 6 12 12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
    <path
      d="M18 6 6 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </>,
)
