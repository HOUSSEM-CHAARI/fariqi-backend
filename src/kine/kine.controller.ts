import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { KineService } from './kine.service';
import { CreateKineDto } from './dto/create-kine.dto';
import { UpdateKineDto } from './dto/update-kine.dto';
import { Kine } from './kine.entity';

import { AuthGuard } from '@nestjs/passport';
import { AuthKineService } from '../auth-kine/auth-kine.service';

@Controller('kine')
export class KineController {
  constructor(
    private readonly kineService: KineService,
    private readonly authKineService: AuthKineService,
  ) {}

  @Post()
  async create(@Body() createKineDto: CreateKineDto): Promise<Kine> {
    return this.kineService.create(createKineDto);
  }

  @Get()
  async findAll(): Promise<Kine[]> {
    return this.kineService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateKineDto: UpdateKineDto,
  ): Promise<Kine> {
    return this.kineService.update(+id, updateKineDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Kine> {
    return this.kineService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    await this.kineService.remove(+id);
    return { message: `kine avec l'id ${id} supprimé.` };
  }

  // 🔐 Auth route
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authKineService.validateKine(body.email, body.password);
  }

  @UseGuards(AuthGuard('kine-jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
