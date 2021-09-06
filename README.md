# estabelesis
Bem-vindo(a) a Estabelesis, sistema de gerenciamento de estabelecimentos!

PRINCIPAIS FUNCIONALIDADES:
    Authenticação
    Criação/listagem/edição/remoção de estabelecimentos.

PRINCIPAIS TECNOLOGIAS:
    Backend(API) 
        - servidor              ->  Nodejs/Express 
        - Token de Autenticação ->  jsonwebtoken(JWT)
        - Upload de arquivos    ->  multer
        - Criptografia de senha ->  bcryptsjs
        - Allow origin          ->  CORS
        - SGBD                  ->  Mysql
        - Unit test             ->  Jest
        - ORM                   ->  Sequelize


    FrontEnd
        - ReactJS 
        - Axios
        - Redux/ Redux-saga /redux-persist 
        - react-toastify
        - styled-components
        - JSX
        - CSS


CONFIGURAÇÕES INICIAS E REQUISITOS:

Para rodar a aplicação, é obrigatório ter o nodejs instalado na sua máqina numa das versões recentes.

Após clonar o repositório, digite npm install/npm update na linha de comando dentro do ./backend e no ./web do projeto.

Depois disso, precisa criar um banco de dados local(mysql) com o nome estabelesis ou
fique a vontade para modificar o arquivo .env localizado em: ./backend/.env.

Lembra-se de que que os dados do banco de dados como PORTA, HOST, DB_USERNAME, DB_PASSWORD
da sua máquina local devem ser os mesmos para garantir o funcionamento a aplicação.

Uma finalizar essas configurações, agora precisar rodar as migrações localizadas em ./backend/src/database/migrations.

Para fazer isso, basta executar o camnado: npx sequelize-cli db:migrate

Após isso, precisar rodar o seeder de usuário localizado em ./backend/src/database/seeders pra poder se autenticar futuramente.

Deu tudo certo? Pronto, agora basta digitar npm start para rodar a API.

Para o front-end, entre no local ./web e digite npm start

Por padrão, a API está rodando em: http://localhost:3333/ e a web em: http://localhost:3000/



API

Autenticação

endpoint: BASE_URL/auth/login
Method: GET
Type: Json
body: email String, password String

Listar todos os estabelecimentos
endpoint: BASE_URL/estabelecimentos
Method: GET
Type: Json
body: email String, password String

Criar estabelecimento
endpoint: BASE_URL/estabelecimentos
Method: POST
Type: multipart/form-data
body: 
    name String, 
    email String,
    telefone String, 
    logo file,
    diretor String,
    localizaçao String, 


Mostrar um estabelecimento
endpoint: BASE_URL/estabelecimentos/id
Method: GET
Type: Json

Atualizar um estabelecimento
endpoint: BASE_URL/estabelecimentos/id
Method: PUT
Type: multipart/form-data


Remover um estabelecimento
endpoint: BASE_URL/estabelecimentos/id
Method: DELETE
Type: Json


Buscar estabelecimentos por localização
endpoint: BASE_URL/estabelecimentos/localizacal/nome_da_localizacao
Method: GET
Type: Json

