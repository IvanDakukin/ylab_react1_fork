/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  addProduct(code) {
    let cart;

    if (this.state.cart.some(product => product.code === code)) {
      cart = this.state.cart.map(product =>
        product.code === code ? { ...product, ammount: product.ammount + 1 } : product,
      );
    } else {
      const product = this.state.list.find(item => item.code === code);
      cart = [...this.state.cart, { ...product, ammount: 1 }];
    }

    this.setState({
      ...this.state,
      cart,
    });
  }

  removeProduct(code) {
    this.setState({
      ...this.state,
      cart: this.state.cart.filter(product => product.code !== code),
    });
  }

  setCartVisibility(isCartOpen) {
    this.setState({
      ...this.state,
      isCartOpen,
    });
  }
}

export default Store;
