import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsString()
  roles: string;
}
