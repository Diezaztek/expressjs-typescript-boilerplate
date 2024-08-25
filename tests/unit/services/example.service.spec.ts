import 'reflect-metadata';
import ExampleRepositoryMock from '../../mocks/example.repository.mock';
import IExampleService from '../../../src/interfaces/example.service.type';
import testContainer from '../../test.ioc.config';
import { TYPES } from '../../../src/configs/types.config';

describe('ExampleService', () => {
  let exampleService: IExampleService;
  let mockExampleRepository: ExampleRepositoryMock;

  beforeEach(() => {
    mockExampleRepository = new ExampleRepositoryMock();
    testContainer.rebind(TYPES.ExampleRepository).toConstantValue(mockExampleRepository);
    exampleService = testContainer.get<IExampleService>(TYPES.ExampleService);
  });

  it('should fetch all examples', async () => {
    const exampleData = [
      {
        id: 1,
        name: 'example1',
        description: 'description1',
      },
      {
        id: 2,
        name: 'example2',
        description: 'description2',
      },
    ];
    mockExampleRepository.findAll.mockResolvedValue(exampleData);

    const examples = await exampleService.getAllExamples();
    expect(examples).toBeDefined();
    expect(examples).toHaveLength(2);
    expect(examples).toEqual(exampleData);
  });

});
