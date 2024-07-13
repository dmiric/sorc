import { Module } from '@nestjs/common';
import { ProjectSpecService } from './project-spec/project-spec.service';

@Module({
  providers: [ProjectSpecService]
})
export class ProjectModule {}
