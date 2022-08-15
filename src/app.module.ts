import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { Module } from '@nestjs/common';
import { DonationsModule } from './donations/donations.module';
@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault]
  }), DonationsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
