import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DopplerService } from './doppler/doppler/doppler.service';
import { ProjectSpecService } from './project/project-spec/project-spec.service';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const projectSpecService = app.get(ProjectSpecService);
  const projectSpec = projectSpecService.load();
  projectSpecService.show();
  const doppler = app.get(DopplerService);
  doppler.getSecret(projectSpec, 'NEON_API_KEY');
  app.close();
  //await app.listen(3000);
}
bootstrap();
