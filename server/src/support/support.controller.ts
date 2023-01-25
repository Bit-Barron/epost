import { Controller, Post } from '@nestjs/common';
import { SupportService } from './support.service';

@Controller('support')
export class SupportController {
  constructor(private supportService: SupportService) {}

  @Post('/')
  getSupport() {
    return this.supportService.getsSupport();
  }
}
