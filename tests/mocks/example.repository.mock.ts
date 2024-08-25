import IExampleRepository from "../../src/interfaces/example.repository.type"

class ExampleRepositoryMock implements IExampleRepository {
  findAll = jest.fn();
  create = jest.fn();
}

export default ExampleRepositoryMock;
