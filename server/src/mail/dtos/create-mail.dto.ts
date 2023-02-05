import { IsString } from 'class-validator';

export class CreateLetterDto {
  @IsString()
  mail: string;
}
