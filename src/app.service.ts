import { Injectable } from '@nestjs/common';
import { json } from 'express';

@Injectable()
export class AppService {
  getHello(): any {
    return { texte: 'Bonjour tous le monde' };
  }

  getSalut(): any {
    return { texte: 'Bonjour toi' };
  }
}
