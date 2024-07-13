import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DopplerService } from './doppler/doppler/doppler.service';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const doppler = app.get(DopplerService);
  doppler.getToken();
  await app.listen(3000);
}
bootstrap();
