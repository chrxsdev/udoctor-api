import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from './common/interfaces/response.interface';

@Injectable()
export class AppService {

  // Getting Started
  getStarter(): Response {
    return {
      message: 'UDoctor API v1',
      httpStatus: HttpStatus.OK,  
    };
  }
}
