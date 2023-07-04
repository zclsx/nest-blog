import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('b')//父
export class AppController {
  constructor(private readonly appService: AppService) {
    // private readonly ts
    // appService: AppService声明后
    //不用自己new实例 ，nest自动应用这个实例
  }

  @Get('a')//要继承父  出来的地址localhost：3000/b/a
  getHello(): string {
    //在控制器里处理也可以，但是不能复用，访问方法只能路由
    //单独拿出去this.appService.getHello()变成服务给其他路由去用
    return this.appService.getHello();
  }
}
