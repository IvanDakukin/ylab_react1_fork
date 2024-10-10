import StoreModule from '../module';

/**
 * Покупательская корзина
 */
class CategoriesState extends StoreModule {
  initState() {
    return {
      list: [],
    };
  }

  async load() {
    const response = await fetch(`/api/v1/categories?fields=_id,title,parent(_id)&limit=*`);
    const json = await response.json();
    const categories = this.formatCategoryList(json.result.items);
    this.setState(
      {
        ...this.getState(),
        list: [{ value: '', title: 'Все' }, ...categories],
      },
      `Загружены категории из АПИ`,
    );
  }

  formatCategoryList(data) {
    const categoriesList = data.filter(el => !el.parent).map(el => ({ ...el, deep: 0 }));

    for (let i = 0; i < categoriesList.length; i++) {
      const children = data
        .filter(el => el.parent?._id === categoriesList[i]._id)
        .map(el => ({ ...el, deep: categoriesList[i].deep + 1 }));
      categoriesList.splice(i + 1, 0, ...children);
    }

    return categoriesList.map(el => ({ value: el._id, title: '- '.repeat(el.deep) + el.title }));
  }
}

export default CategoriesState;
