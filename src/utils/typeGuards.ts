export function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export function keyIn<T>(
  key: string | number | symbol,
  dictionary: T,
): key is keyof typeof dictionary {
  return key in dictionary;
}
