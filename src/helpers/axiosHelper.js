import axios from 'axios';
import * as urlHelper from './urlHelper';

const NODE_ENV  = 'test';
const { reactUrl, defaultUrl } = urlHelper.backend;

export default (data = {}) => {
  const { token, URL } = data;
  const baseURL = URL || (reactUrl && `${reactUrl}`) || (defaultUrl && `${defaultUrl}`);
  const headers = { 'access-token': token || localStorage.token || undefined };

  return (NODE_ENV === 'test' && axios) || axios.create({ baseURL, headers });
};
