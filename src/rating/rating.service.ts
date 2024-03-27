import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rating } from './entities/rating.entity';
import { Model } from 'mongoose';

@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating.name)
    private ratingModel: Model<Rating>,
  ) {}
  create(createRatingDto: CreateRatingDto) {
    return this.ratingModel.create(createRatingDto);
  }

  findAll() {
    return this.ratingModel.find({});
  }

  findOne(id: string) {
    return this.ratingModel.findById(id);
  }

  update(id: string, updateRatingDto: UpdateRatingDto) {
    return this.ratingModel.findByIdAndUpdate(id, updateRatingDto);
  }

  remove(id: string) {
    return this.ratingModel.findByIdAndDelete(id);
  }
}
