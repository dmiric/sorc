import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DopplerService } from './doppler/doppler/doppler.service';
import { SpecificationService } from './project/specification/specification.service';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const doppler = app.get(DopplerService);
  doppler.getToken();
  const projectSpec = app.get(SpecificationService);
  projectSpec.show();
  app.close();
  //await app.listen(3000);
}
bootstrap();
