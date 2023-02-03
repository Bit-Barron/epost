import { IsString } from 'class-validator';

export class CreateSettingDto {
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
