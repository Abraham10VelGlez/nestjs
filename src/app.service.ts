import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'BIENVENIDO A MI API NESTJS-Abraham10VelGlez';
  }
}
