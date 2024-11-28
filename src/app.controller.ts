import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('uuid')
  getUuid(): string {
    return this.appService.generateNewUuid();
  }

  @Get('generate-token')
  generateToken() {
  const token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });
    return { token };
  }
  }
