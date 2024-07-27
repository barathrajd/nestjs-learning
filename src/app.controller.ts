import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { User } from './type/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }
}
