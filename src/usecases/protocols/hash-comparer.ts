export interface HashComparer {
  compare(firstValue: string, secondValue: string): Promise<boolean>;
}