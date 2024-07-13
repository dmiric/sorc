import { Module } from '@nestjs/common';
import { ProjectConfigService } from './project-config/project-config.service';

@Module({
  providers: [ProjectConfigService]
})
export class ProjectModule {}
