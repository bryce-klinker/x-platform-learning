export class Repository {
  constructor(data) {
    this.data = data;
  }

  getAll() {
    return this.data;
  }

  getById(id) {
    return this.getAll().find(d => d.id === Number(id));
  }
}
