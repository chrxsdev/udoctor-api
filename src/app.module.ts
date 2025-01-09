import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/db.configuration';
import { Config, dbData } from './config/configuration.interface';

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV ?? 'development'}`,
      load: [configuration],
    }),

    // Database Connection
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const databaseConfig: dbData = config.get<dbData>('db');
        return {
          type: 'postgres',
          logging: false,
          extra: {
            extensions: ['unaccent']
          },
          entities: [__dirname + '/**/*.entity.{js,ts}'],
          //! PROD false
          synchronize: true,
          ...databaseConfig,
        }
      }
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
