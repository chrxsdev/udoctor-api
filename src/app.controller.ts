import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SimpleResponse } from './common/interfaces/basic-response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): SimpleResponse {
    return this.appService.getStarter();
  }
}
