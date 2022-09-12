export class DuplicatedFieldError extends Error {
  constructor(fieldName: string) {
    super(`Duplicated field: ${fieldName}`);
  }
}