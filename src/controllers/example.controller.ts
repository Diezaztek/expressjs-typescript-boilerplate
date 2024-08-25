import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import "reflect-metadata";
import ExampleService from '../services/example.service';
import IExampleController from '../interfaces/example.controller.type';
import IExampleService from '../interfaces/example.service.type';
import { TYPES } from '../configs/types.config';

/**
 * ExampleController class handles the HTTP requests and responses for examples.
 */
@injectable()
export class ExampleController implements IExampleController {
  @inject(TYPES.ExampleService)
  private _exampleService!: IExampleService;

  public async getAllExamples (_: Request, res: Response): Promise<void> {
    try {
      const examples = await this._exampleService.getAllExamples();
      res.status(200).json(examples);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  public async createExample (req: Request, res: Response): Promise<void> {
    try {
      const exampleData = req.body;
      const createdExample = await this._exampleService.createExample(exampleData);
      res.status(201).json(createdExample);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}

