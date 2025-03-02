import { Module } from '@nestjs/common';
import { SuperheroapiModule } from './superheroapi/superheroapi.module';

@Module({
  imports: [SuperheroapiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
