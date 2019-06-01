import { Controller, Get, Param, Post, ConflictException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('greet')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getHello(@Param('name') name: string): string {
    return `Hallo ${name}`;
  }

  @Post(':name')
  post(): never {
    throw new ConflictException();
  }
}
