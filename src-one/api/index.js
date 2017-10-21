import { get, post, remove, put } from './utils';

// const domain = 'http://127.0.0.1:7000/api';
const domain = '/api';
const REQ_API = {
  getSliderUrl: `${domain}/getSliders`,
  getBookUrl: `${domain}/getBooks`,
  addBookUrl: `${domain}/addBook`,
  removeBookUrl: `${domain}/book`,
  putBookUrl: `${domain}/updateBook`
};

// 获取轮播图片
export const getSlider = () => get(REQ_API.getSliderUrl);

// 获取图书
export const getBook = () => get(REQ_API.getBookUrl);

// 获取单个
export const getBookId = id => get(`${REQ_API.getBookUrl}/${id}`);

// 添加图书
export const addBook = book => post(REQ_API.addBookUrl, book);

// 删除图书
export const removeBook = id => remove(`${REQ_API.removeBookUrl}/${id}`);

// 修改图书
export const updateBook = params => put(REQ_API.putBookUrl, params);
