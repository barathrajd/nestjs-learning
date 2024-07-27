import { Injectable } from '@nestjs/common';
import type { User } from './type/user';

@Injectable()
export class AppService {
  getUsers(): User[] {
    return [];
  }
}
