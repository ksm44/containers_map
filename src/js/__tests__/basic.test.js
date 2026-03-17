import ErrorRepository from '../errorRepo';

describe('ErrorRepository class', () => {
  let errorRepo;

  // Создаем новый репозиторий ошибок при каждом тесте
  beforeEach(() => {
    errorRepo = new ErrorRepository(65, 'Проблемка с номером 65');
  });

  test('should create correct map', () => {
    expect(errorRepo.collection).toBeInstanceOf(Map);
    expect(errorRepo.collection.has(65)).toBe(true);
    expect(errorRepo.collection.get(65)).toBe('Проблемка с номером 65');
  });

  test('translate should to give error description', () => {
    expect(errorRepo.translate(65)).toBe('Проблемка с номером 65');
    expect(errorRepo.translate(66)).toBe('Unknown error');
  });

});
