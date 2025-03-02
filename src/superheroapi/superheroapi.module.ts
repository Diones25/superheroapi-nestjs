import { Module } from '@nestjs/common';
import { SuperheroapiController } from './superheroapi.controller';
import { SuperheroapiService } from './superheroapi.service';

@Module({
  controllers: [SuperheroapiController],
  providers: [SuperheroapiService]
})
export class SuperheroapiModule {}
