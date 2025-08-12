import { IsString, IsNumber, IsArray, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // each 설정으로 요소 모두 검사
  readonly genres: string[];
}
