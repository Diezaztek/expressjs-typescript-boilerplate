import { Model } from 'sequelize';

class Example extends Model {
    public id!: string;
    public name!: string;
    public description!: string;
}
  
export default Example;