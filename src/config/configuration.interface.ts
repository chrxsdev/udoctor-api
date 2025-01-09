export interface Config {
  db: dbData;
  api: string;
  jwtSecret?: string;
}

export interface dbData {
  host: string;
  port: number;
  username: string;
  password: string;
  database?: string;
  schema?: string;
}
