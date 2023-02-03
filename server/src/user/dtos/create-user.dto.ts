import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  password: string;

  @IsString()
  email: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  street: string;

  @IsString()
  PLZ: string;

  @IsString()
  location: string;

  @IsString()
  phone: string;
}
