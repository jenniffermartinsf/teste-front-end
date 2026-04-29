export const classNames = (
  ...values: (string | false | null | undefined)[]
): string => values.filter(Boolean).join(' ')
