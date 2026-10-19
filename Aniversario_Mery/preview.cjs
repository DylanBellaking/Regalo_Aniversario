const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const root = path.join(__dirname, 'dist');
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp'};
http.createServer((req,res) => {
  let name;
  try { name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end(); return; }
  const file = path.resolve(root, '.' + (name === '/' ? '/index.html' : name));
  if (!file.startsWith(root + path.sep)) {res.writeHead(403).end();return;}
  fs.readFile(file,(err,data)=>{
    if(err){res.writeHead(404).end('No encontrado');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(data);
  });
}).listen(port, '0.0.0.0', () => {
  console.log(`En este computador: http://localhost:${port}`);
  const addresses = new Set(Object.values(os.networkInterfaces()).flat()
    .filter(address => address && address.family === 'IPv4' && !address.internal)
    .map(address => address.address));
  for (const address of addresses) console.log(`En tu red: http://${address}:${port}`);
  console.log('Desde otro dispositivo en el mismo Wi-Fi, abre una dirección de "En tu red".');
  console.log('Para acceder desde Internet, reenvía este puerto desde la vista Puertos de VS Code.');
});
