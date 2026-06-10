/** Strips `enabled:` prefix from class names for non-form elements (e.g., <a> tags) */
export const stripEnabledPrefix = (className: string) =>
  className.replace(/enabled:/g, '');
