export type DecodedWithID = {
  id: string;
}

export interface TokenDecoder {
  decode(token: string): DecodedWithID; 
}