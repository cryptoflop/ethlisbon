import { Injectable } from '@nestjs/common';
import {Survey} from './dtos/app.survey';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  authUser(): string {
    // implement usersignup with credentials
    const userAddress = '0x1';
    return userAddress;
  }

  


}
