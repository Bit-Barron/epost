import { IsString } from 'class-validator';

export class CreateMailDto {
  @IsString()
  to: string;

  @IsString()
  subject: string;

  @IsString()
  text: string;
}
