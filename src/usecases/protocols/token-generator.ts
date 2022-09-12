export interface TokenGenerator {
  generate(value: { id: string }): string;
}