import { Test, TestingModule } from '@nestjs/testing';
import { ProjectSpecService } from './project-spec.service';

describe('ProjectSpecService', () => {
  let service: ProjectSpecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectSpecService],
    }).compile();

    service = module.get<ProjectSpecService>(ProjectSpecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
