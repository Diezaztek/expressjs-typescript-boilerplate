import Example from "../models/example.model";

interface IExampleService {
    getAllExamples(): Promise<Example[]>;
    createExample(example: Example): Promise<Example>;
}

export default IExampleService;