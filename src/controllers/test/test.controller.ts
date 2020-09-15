import { Controller, Get } from '@nestjs/common';
import { TestService } from 'src/services/test/test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('/test')
  test(): string {
    return this.testService.getTest();
  }

}
