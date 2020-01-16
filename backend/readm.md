### Curso de Nodejs, Reactjs, React Native realisado na Semana Omnistack da Rocktseat

#### Iniciando o projeto Backend
- crie uma pasta com o comando `mkdir semanaOmnisteck10`
- use o comando `cd semanaOmnisteck` para entrar na pasta
- vamos criar a pasta do projeto backend e entrar na pasta ` mkdir backend && cd backend`
- para iniciar o projeto vou usar o comando `yarn init -y` (lembrando que deve ter o yarn instalado em seu computado, caso não tenha pode usar o npm no lugar do yarn que da no mesmo)

#### Dependecias do projeto
- `yarn add express` (modulo para criar o servidor web)
- `yarn add nodemon -D` (modulo usado para reiniciar a plicação automaticamente quando ocorrer algma mudança no codigo)
#### Criando o arquivo inicial 
- crie um arquivo com o nome `index.js` dentro da pasta raiz do projeto
- o meu ficou dessa forma:
```
    const express = require('express')
    const app = express() //inicializando o modulo express

    app.get('/', (req, res) => {
    return res.send('Bem vindo a semana Omnistack!')
    })

    app.listen(3333)
```
- para iniciar a aplicação abra o terminal na pasta do projeto e execulte o comando `node index.js`
- agora nosso servidor ja esta no ar e podemos acessar no caminho `localhost:3333` teremos a seguinte mensagem: 
```
    Bem vindo a semana Omnistack!
```
- para nosso servidor ficar com cara de uma API vamos retornar a menssagem no formato JSON 
```
    return res.json({message: 'Bem vindo a semana Omnistack!'})
```
- agora no browser aparece dessa maneira:
```
{
    "message": "Bem vindo a semana Omnistack!"
}
```
#### Alterando o package.json para iniciar com nodemon
- adicione os scripts para inicialização
```
    "scripts": {
    "dev": "nodemon index.js"
  },
```
- agora podemos iniciar o nosso projeto com o comando `yarn dev` que ele ja inicia com o nodemon

#### Rotas da API
##### Metodos HTTP (GET, POST, PUT, DELETE)

##### Tipos de parâmetros
- query params: req.query (usados para filtros, ordenação, paginação e etc)
- route params: req.params (usado para identificar um recurso na alteração e remoção, usado nos metodos "PUT, DELETE")
- body: req.body (usado para criação ou alteração de um registro, "PUT ou POST") 

