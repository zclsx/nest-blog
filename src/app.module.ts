import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HdService } from './hd.service';

@Module({
  imports: [],
  controllers: [AppController],
  //服务放到模块里，nest会自动放入
  providers: [AppService, HdService],
})
export class AppModule {}
