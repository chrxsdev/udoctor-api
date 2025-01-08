import { HttpStatus } from '@nestjs/common';

export interface SimpleResponse {
  httpStatus: HttpStatus,
  message: string | null,
  details?: string | string[] | null,
}