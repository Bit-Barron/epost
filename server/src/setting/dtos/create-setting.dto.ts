import { IsString } from 'class-validator';

export class CreateSettingDto {
  @IsString()
  street: string;

  @IsString()
  PLZ: string;

  @IsString()
  location: string;

  @IsString()
  phone: number;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  salutation: string;

  userId: number;
}
