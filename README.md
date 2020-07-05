
```
Usage:

const http = require("http");
const server = http.createServer(app);
const io = socketio(server).listen(server);

const gio = require("globalio");
app.use(gio(io));
```

```
Access req.io in every req in router.
```

# globalio
NPM package to globalize socket's io variable.
