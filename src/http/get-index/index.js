// html string to return as response body
let body = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<title>Hello HTML</title>
		<link rel="stylesheet" href="_static/default.css">
	</head>
	<body>
    <h1>Hello Beginners!</h1>
    <img src="_static/me_begin.jpg">
		<p>Oh yea, wait a minute</p>
     <form action="/name" method="post">
      <label>First Name :</label>
      <input type="text" name="first" value="Mr."><br>
      <label>Last Name :</label>
      <input type="text" name="last" value="POSTman"><br><br>
      <input type="submit" value="Submit">
    </form>
	</body>
</html>
`
// boilerplate Lambda function handler
exports.handler = async function http(req) {
  console.log('Praise Cage')
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}