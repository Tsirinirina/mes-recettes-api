import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { texte: 'Bonjour tous le monde' };
  }

  getSalut(): any {
    return { texte: 'Bonjour toi' };
  }
}
