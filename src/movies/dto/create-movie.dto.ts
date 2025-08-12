import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  // each 설정으로 요소 모두 검사
  @IsArray()
  @IsString({ each: true })
  readonly genres: string[];
}
