import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from './common/interfaces/response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBasicInformation(): Response {
    return this.appService.getStarter();
  }
}
