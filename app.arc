@app
fcc-apis

@static

@http
get /
get /json
get /now
get /:word/echo
post /name


@tables
data
  scopeID *String
  dataID **String
  ttl TTL
