let base_key;

export default {
  init(key){
    base_key = key;
  },
  getAll() {
    return JSON.parse(localStorage.getItem(base_key) || "{}");
  },
  save(item) {
    localStorage.setItem(base_key, JSON.stringify(item));
  },
  get(key) {
    let item = this.getAll();
    return item[key];
  },
  store(key, value) {
    let item = this.getAll();
    item[key] = value;
    this.save(item);
  },
  initStore(key, value) {
    let item = this.getAll();
    if (item[key] !== undefined)
      return;

    item[key] = value;
    this.save(item);
  },
  clear(key) {
    let item = this.getAll();
    delete item[key];
    this.save(item);
  },
  clearAll() {
    localStorage.removeItem(base_key);
  },
  saveArrayItem(key, value)
  {
    let item = this.getAll();
    if(item[key] !== undefined )
    {
      if(item[key].includes(value))return;
      item[key] = [...item[key], value];
    }else {
      item[key] = [value];
    }
    this.save(item);
  }
}
