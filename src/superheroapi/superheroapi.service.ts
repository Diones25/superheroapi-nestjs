import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SuperheroapiService {

  constructor(private readonly httpService: HttpService) { }

  private URL: string = `https://www.superheroapi.com/api.php/${process.env.SUPERHERO_API_KEY}`;

  async getSearchSuperheroName(name: string) {
    const url = this.URL;
    try {
      const response = await firstValueFrom(this.httpService.get(`${url}/search/${name}`));
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar o herói: ${error}`);
      throw new Error("Falha ao consumir API externa");
    }
  }
}
