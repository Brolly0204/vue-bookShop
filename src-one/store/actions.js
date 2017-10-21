import * as types from './action-types';

export default {
  saveSlider({commit}, sliders) {
    commit(types.SAVE_SLIDERS, sliders);
  },
  saveBook({commit}, books) {
    commit(types.SAVE_BOOKS, books);
  },
  saveBookList({commit}, bookLists) {
    commit(types.SAVE_BOOKLISTS, bookLists);
  },
  deleteBook({commit}, id) {
    commit(types.DELETE_BOOK, id);
  },
  updateBooks({commit}, book) {
    commit(types.UPDATE_BOOK, book);
  }
};
