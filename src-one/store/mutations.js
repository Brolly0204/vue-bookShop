import * as types from './action-types';

export default {
  [types.SAVE_SLIDERS](state, sliders = []) {
    state.sliders = [...sliders];
  },
  [types.SAVE_BOOKS](state, books = []) {
    state.books = [...books];
  },
  [types.SAVE_BOOKLISTS](state, bookLists = []) {
    state.bookLists = [...bookLists];
  },
  [types.DELETE_BOOK](state, id) {
    console.log('delete');
    state.bookLists = state.bookLists.filter(book => book.id !== parseFloat(id));
  },
  [types.UPDATE_BOOK](state, book) {
    state.bookLists = state.bookLists.map(item => {
      if (item.id === book.id) {
        return book;
      }
      return item;
    });
  }
};
