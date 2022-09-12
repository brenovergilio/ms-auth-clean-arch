export interface HashGenerator {
  hash(id: string): Promise<string>;
}