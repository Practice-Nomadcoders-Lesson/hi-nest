import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

export class CreateMovieDto {
  readonly title: string;
  readonly year: number;
  readonly genres: string[];
}

export class UpdateMovieDto {
  readonly title: string;
  readonly year: number;
  readonly genres: string[];
}

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patchMovie(@Param('id') movieId: string, @Body() updateData: UpdateMovieDto) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
