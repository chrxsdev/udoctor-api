import { HttpStatus } from '@nestjs/common';

export interface Response {
  httpStatus: HttpStatus,
  message: string | null,
  details?: string | string[] | null,
}