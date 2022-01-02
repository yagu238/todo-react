import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
