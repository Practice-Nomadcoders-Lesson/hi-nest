import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

export class CreateMovieDto {
  readonly name: string;
  readonly director: string;
}

export class UpdateMovieDto {
  readonly name: string;
  readonly director: string;
}

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `This will return one movie with the id: ${id}`;
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch(':id')
  patchMovie(@Param('id') movieId: string, @Body() updateData: UpdateMovieDto) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
