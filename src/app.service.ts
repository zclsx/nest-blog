import { Injectable } from '@nestjs/common';
import { HdService } from './hd.service';

//装饰器不声明，构造函数会被报错，加上后变成服务提供者
//@Injectable()会将构造函数分析
@Injectable()
export class AppService {
  //依赖注入hd方法
  constructor(private readonly hd: HdService) {}
  getHello(): string {
    // return 'Hello World!';
    return this.hd.hd();
  }
  //findOne(){} ....
}
