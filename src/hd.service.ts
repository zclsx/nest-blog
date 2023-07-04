import { Injectable } from '@nestjs/common';

@Injectable()
export class HdService {
  hd() {
    return 'hd service method';
  }
}
//nest g s hd --no-spec --flat
//--no-spec没有测试文件
//--flat不会多一层目录
//创建好之后服务放到模块里才能使用
