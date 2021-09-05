import app from './app';

const PORT = 3000;
const HOST = '0.0.0.0';

app.get('/', (request, response) => {
  return response.json({ message: "Hello, seja bem-vindo ao sistema de gerenciamento de estabelecimentos!" });
});

app.listen(PORT, HOST);
