import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

import { environment } from './environments/environment';
import { entities } from './entities';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [...entities],
      synchronize: environment.dbSync,
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
