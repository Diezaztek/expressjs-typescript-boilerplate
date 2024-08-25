import { injectable, inject } from 'inversify';
import "reflect-metadata";
import Example from '../models/example.model';
import ExampleRepository from '../repository/example.repository';
import IExampleService from '../interfaces/example.service.type';
import IExampleRepository from '../interfaces/example.repository.type';
import { TYPES } from '../configs/types.config';


@injectable()
class ExampleService implements IExampleService {
    @inject(TYPES.ExampleRepository)
    private _exampleRepository!: IExampleRepository;

    // Get all examples
    public async getAllExamples(): Promise<Example[]> {
        try {
            return await this._exampleRepository.findAll();
        } catch(err) {
            console.error("Error in ExampleService.getAllExamples: ", err);
            throw err;
        }
    }

    // Create an example
    public async createExample(example: Example): Promise<Example> {
        try {
            return await this._exampleRepository.create(example);
        } catch(err) {
            console.error("Error in ExampleService.createExample: ", err);
            throw err;
        }
    }

}

export default ExampleService;