export default class ErrorRepository {
  constructor(сode, description){
    this.collection = new Map();
    this.collection.set(сode, description);
  }

  translate(code){
    if (this.collection.has(code)) {
      return this.collection.get(code);
    } else {
      return 'Unknown error';
    }
  }

}
