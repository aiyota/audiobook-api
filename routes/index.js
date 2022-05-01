const root = "api";
const version = "v1";
const base = `${root}/${version}`;
const audiobook = Object.freeze({
  getById: `/${base}/audiobook/:id`,
  getAll: `/${base}/audiobook`,
  create: `/${base}/audiobook`,
  update: `${base}/audiobook/:id`,
  delete: `${base}/audiobook/:id`,
});

const routes = Object.freeze({
  root,
  version,
  base,
  audiobook,
});

export default routes;
