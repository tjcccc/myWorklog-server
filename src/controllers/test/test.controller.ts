import { Controller, Get } from '@nestjs/common';
import { TestService } from 'src/services/test/test.service';
import Thing from '../../models/thing';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  test(): string {
    return this.testService.getTest();
  }

  @Get('/things')
  async getThings(): Promise<string> {
    console.log("getting...");
    const thing: Thing = await this.testService.getThings();
    const greeting = "hello " + thing.name + "!";
    console.log(greeting);
    return greeting;
  }

}
