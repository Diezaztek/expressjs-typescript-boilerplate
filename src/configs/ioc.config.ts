import dotenv from 'dotenv';
import { Container } from 'inversify';
import { TYPES } from './types.config';
import IExampleRepository from '../interfaces/example.repository.type';
import IExampleService from '../interfaces/example.service.type';
import IExampleController from '../interfaces/example.controller.type';
import {ExampleController} from '../controllers/example.controller';
import ExampleService from '../services/example.service';
import ExampleRepository from '../repository/example.repository';
import { Dialect, Sequelize } from 'sequelize';
import * as databaseConfig from './database.config';

dotenv.config();

const iocContainer = new Container();

const dbConfig = databaseConfig as any;
const sequelize = new Sequelize({
    dialect: dbConfig.dialect as Dialect,
    host: dbConfig.host,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    logging: false
});

iocContainer.bind<IExampleController>(TYPES.ExampleController).to(ExampleController);
iocContainer.bind<IExampleService>(TYPES.ExampleService).to(ExampleService);
iocContainer.bind<IExampleRepository>(TYPES.ExampleRepository).to(ExampleRepository);
iocContainer.bind<Sequelize>(TYPES.Sequelize).toConstantValue(sequelize);

export { iocContainer };