import Example from "../models/example.model";

interface IExampleRepository {
    findAll(): Promise<Example[]>;
    create(example: Example): Promise<Example>;
}

export default IExampleRepository;