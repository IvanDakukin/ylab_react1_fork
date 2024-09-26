import StoreModule from '../module';

class Product extends StoreModule {
  initState() {
    return {
      product: {},
    };
  }

  async load(id) {
    const response = await fetch(
      `/api/v1/articles/${id}?fields=_id,title,edition,price,description,madeIn(title),category(title)`,
    );
    const json = await response.json();
    this.setState(
      {
        ...this.getState(),
        product: json.result,
      },
      'Получен товар из АПИ',
    );
  }
}

export default Product;
