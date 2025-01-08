import { HttpStatus, Injectable } from '@nestjs/common';
import { SimpleResponse } from './common/interfaces/basic-response.interface';

@Injectable()
export class AppService {

  // Getting Starter
  getStarter(): SimpleResponse {
    return {
      message: 'UDoctor API v1',
      httpStatus: HttpStatus.OK,  
    };
  }
}
