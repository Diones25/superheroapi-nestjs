import { Controller, Get, Param } from '@nestjs/common';
import { SuperheroapiService } from './superheroapi.service';

@Controller('superheroapi')
export class SuperheroapiController {

  constructor(private readonly superheroapiService: SuperheroapiService) { }

  @Get(':name')
  async getSearchSuperheroName(@Param('name') name: string) {
    return this.superheroapiService.getSearchSuperheroName(name);
  }
}
