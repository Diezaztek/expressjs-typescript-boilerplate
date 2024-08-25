import { inject, injectable } from 'inversify';
import Example from '../models/example.model';
// import sequelize from '../configs/sequelize.config';
import { DataTypes, Sequelize } from 'sequelize';
import { TYPES } from '../configs/types.config';

@injectable()
class ExampleRepository {
  constructor(@inject(TYPES.Sequelize) sequelize: Sequelize) {
    Example.init(
      {
        id: {
          type: DataTypes.STRING,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        tableName: 'example',
        timestamps: false,
      }
    );
  }
  public async findAll() {
    return Example.findAll();
  }

  public async create(example: Example) {
    return Example.create(example as any);
  }
}

export default ExampleRepository;