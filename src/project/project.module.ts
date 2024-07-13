import { Module } from '@nestjs/common';
import { SpecificationService } from './specification/specification.service';

@Module({
  providers: [SpecificationService]
})
export class ProjectModule {}
