import {  get_request } from './Requests';

const getListApi = async () => {
  const response = await get_request({ target: '/products' });
  return response;
}

export { getListApi };
