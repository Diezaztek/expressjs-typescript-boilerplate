// test.di.config.ts
import { Container } from 'inversify';
import ExampleRepository from '../src/repository/example.repository';
import ExampleService from '../src/services/example.service';
import { Sequelize } from 'sequelize';
import { TYPES } from '../src/configs/types.config';
import IExampleService from '../src/interfaces/example.service.type';
import IExampleRepository from '../src/interfaces/example.repository.type';

const testContainer = new Container();

testContainer.bind(Sequelize).toConstantValue(new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
}));
testContainer.bind<IExampleService>(TYPES.ExampleService).to(ExampleService);
testContainer.bind<IExampleRepository>(TYPES.ExampleRepository).to(ExampleRepository);
testContainer.bind(TYPES.Sequelize).toConstantValue(testContainer.get(Sequelize));

export default testContainer;
