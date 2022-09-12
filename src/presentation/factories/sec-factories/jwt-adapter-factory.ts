import { JwtAdapter } from "../../../infra/adapters/jwt-adapter";

export const makeJwtAdapter = (): JwtAdapter => {
  const jwtSecret = process.env.JWT_SECRET ?? 'secret';
  return new JwtAdapter(jwtSecret);
}