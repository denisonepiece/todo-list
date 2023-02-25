import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { MongoModule } from './common/mongo.module';

@Module({
  imports: [TodoModule, MongoModule],
})
export class AppModule {}
