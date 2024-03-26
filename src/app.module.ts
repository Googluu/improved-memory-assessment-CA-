import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { EnvConf } from './conf/app.conf';
import { MathModule } from './math/math.module';
import { DatePayloadModule } from './date-payload/date-payload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConf],
      isGlobal: true,
    }),
    DbModule,
    AuthModule,
    UserModule,
    MathModule,
    DatePayloadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
