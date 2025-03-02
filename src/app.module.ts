import { Module } from '@nestjs/common';
import { SuperheroapiModule } from './superheroapi/superheroapi.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SuperheroapiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
