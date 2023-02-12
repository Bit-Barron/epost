import { IsOptional, IsString } from 'class-validator';
import { Role } from '../role.enum';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsString()
  @IsOptional()
  role: Role;
}
