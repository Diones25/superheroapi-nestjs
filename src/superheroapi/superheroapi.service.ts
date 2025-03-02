import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SuperheroapiService {

  constructor(private readonly httpService: HttpService) {}
}
