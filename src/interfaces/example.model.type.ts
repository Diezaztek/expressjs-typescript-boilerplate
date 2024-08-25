import { Optional } from "sequelize";

interface ExampleAttributes {
    id: string;
    name: string;
    description: string;
}
  
interface ExampleCreationAttributes extends Optional<ExampleAttributes, 'id'> {}

export { ExampleAttributes, ExampleCreationAttributes };