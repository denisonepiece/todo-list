import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { MongoModule } from './common/mongo.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TodoModule,
    MongoModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
