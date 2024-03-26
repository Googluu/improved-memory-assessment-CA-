import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { EnvConf } from '../conf/app.conf';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: +EnvConf().database.db_port,
          username: EnvConf().database.db_user,
          database: EnvConf().database.db_name,
          password: EnvConf().database.db_password,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule]
})
export class DbModule {}
