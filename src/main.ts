import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentFormat = new DocumentBuilder()
  .setTitle('REST API')
.setDescription('Api de festividades inventadas')
.setVersion('0.1')
.build()

const document = SwaggerModule.createDocument(app, documentFormat);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);}
  
bootstrap();
