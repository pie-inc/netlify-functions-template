exports.handler = async (event, context) => {
  const { name } = event.queryStringParameters || {};
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
    body: `Hello ${name || 'World'}!`
  };
};