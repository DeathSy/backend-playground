import app from './server'

const HOST = process.env.HOST || "0.0.0.0"
const PORT = parseInt(process.env.PORT || "3000", 10);

app.listen(PORT, HOST, () =>
  console.log(`express server is running on http://${HOST}:${PORT}`)
);
