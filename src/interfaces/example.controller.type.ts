import { Request, Response } from 'express';

interface IExampleController {
    getAllExamples(req: Request, res: Response): Promise<void>;
    createExample(req: Request, res: Response): Promise<void>;
}

export default IExampleController;