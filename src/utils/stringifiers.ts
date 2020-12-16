export const stringifyError = (error: unknown, prefix = '[Error] '): string => {
  if (error instanceof Error) {
    return `${prefix}${error.name}: ${error.message}`;
  }

  return `${prefix}Unknown`;
};
