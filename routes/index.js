const root = "api";
const version = "v1";
const base = `${root}/${version}`;
const audiobook = Object.freeze({
  get: `/${base}/audiobook`,
  getById: `/${base}/audiobook/:id`,
  post: `/${base}/audiobook`,
  patch: `/${base}/audiobook/:id`,
  delete: `/${base}/audiobook/:id`,
});

const routes = Object.freeze({
  root,
  version,
  base,
  audiobook,
});

export default routes;
