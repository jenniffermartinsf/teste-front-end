export const isCompactShelfViewport = (viewportWidth: number): boolean =>
  viewportWidth < 768

export const getPagedShelfSize = (viewportWidth: number): number =>
  viewportWidth >= 1200 ? 4 : 2
