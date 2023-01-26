import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}
  @Post('/dashboard')
  @UseGuards(AuthGuard)
  async dashboard(@Request() req) {
    console.log(req.user);
    return 'test';
  }
}
