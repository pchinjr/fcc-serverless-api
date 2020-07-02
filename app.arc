@app
fcc-apis

@static

@http
get /
get /json
get /now
get /echo/:word
get /name
post /name


@tables
data
  scopeID *String
  dataID **String
  ttl TTL
