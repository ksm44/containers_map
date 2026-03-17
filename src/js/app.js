import ErrorRepository from './errorRepo';

const errorRepo = new ErrorRepository(25, 'Проблемка с номером 25');

errorRepo.translate(25);
errorRepo.translate(33);
