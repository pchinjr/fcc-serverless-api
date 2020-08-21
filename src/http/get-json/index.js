// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http (req) {
  let message = "Hello json"
  if (process.env.MESSAGE_STYLE==="uppercase") {
    message = message.toUpperCase()
  }
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({"message": message})
  }
}