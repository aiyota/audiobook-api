function created(body = null) {
  return {
    headers: { "Content-Type": "application/json" },
    statusCode: 201,
    body,
  };
}

function ok(body = null) {
  return body
    ? {
        headers: { "Content-Type": "application/json" },
        statusCode: 200,
        body,
      }
    : {
        statusCode: 200,
      };
}

function noContent() {
  return {
    statusCode: 204,
  };
}

function badRequest(error = null) {
  const headers = {
    "Content-Type": "application/json",
  };
  const statusCode = 400;

  return error
    ? {
        headers,
        statusCode,
        body: {
          error: error.message,
        },
      }
    : {
        headers,
        statusCode,
      };
}

function notFound(error = null) {
  const headers = {
    "Content-Type": "application/json",
  };
  const statusCode = 404;

  return error
    ? {
        headers,
        statusCode,
        body: {
          error: error.message,
        },
      }
    : {
        headers,
        statusCode,
      };
}

const httpResults = Object.freeze({
  ok,
  created,
  noContent,
  badRequest,
  notFound,
});

export default httpResults;
