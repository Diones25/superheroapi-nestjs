import { Module } from '@nestjs/common';
import { SuperheroapiController } from './superheroapi.controller';
import { SuperheroapiService } from './superheroapi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SuperheroapiController],
  providers: [SuperheroapiService]
})
export class SuperheroapiModule {}
