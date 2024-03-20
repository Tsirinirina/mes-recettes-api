import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  getSalut():string {
    return "Bonjour toi"
  }
}
