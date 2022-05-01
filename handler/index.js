export default function makeExpressHandler(controller) {
  return (req, res) => {
    const httpRequest = adaptRequest(req);

    controller(httpRequest)
      .then(httpResponse => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch(e => {
        console.error(e);

        return res
          .status(500)
          .send({ error: "An unknown error occurred." });
      });
  };
}

function adaptRequest(req) {
  return Object.freeze({
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path,
    headers: {
      "Content-Type": req.get("Content-Type"),
      Referer: req.get("referer"),
      "User-Agent": req.get("User-Agent"),
    },
  });
}
