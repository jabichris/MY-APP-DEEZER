const { location } = window;
const protocol = location.protocol && location.protocol;
const hostname = location.hostname && location.hostname;
const port = (location.port && `:${location.port}`) || '';

const  REACT_APP_URL_BACKEND  = 'https://api.deezer.com'

const backend = {
  reactUrl: REACT_APP_URL_BACKEND,
  defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`
};

export { backend };
