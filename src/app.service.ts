import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'BIENVENIDO A MI API NESTJS-Abraham10VelGlez';
  }

  getpage2(): string {
    return 'RUTA DE APRENDIZAJE NIVEL NO SE, PERO SE PONE BUENA ESTA VAINA LOCA';
  }

}
