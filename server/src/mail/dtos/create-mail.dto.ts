import { IsString } from 'class-validator';

export class CreateMailDto {
  @IsString()
  email: string;
}
