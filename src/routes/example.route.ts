import { Router } from 'express';
import { TYPES } from '../configs/types.config';
import { iocContainer } from '../configs/ioc.config';
import IExampleController from '../interfaces/example.controller.type';

const router = Router();
const exampleController = iocContainer.get<IExampleController>(TYPES.ExampleController);

router.get('/', exampleController.getAllExamples.bind(exampleController));
router.post('/', exampleController.createExample.bind(exampleController));

export default router;