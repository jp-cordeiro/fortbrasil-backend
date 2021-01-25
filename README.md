## Sobre
Projeto para teste prático: Construção de um sistema de gerenciamento de estabelecimentos.

## Como usar

### :rotating_light: Aviso!
* Banco de dados utilizado: PostgresSQL.
* Caso opte por rodar o projeto localmente sem docker, instalar o PostgresSQL.

### Instalação local

```bash

# Instalar dependências
$ yarn install

# Crie um arquivo .env com base no .env-example (preecha as informações corretamente).
$ cp .env-example .env

# Cria a base e executa as migrations
$ yarn typeorm:run

# Aviso! Executar este comando apenas uma vez, pois ele irá popular o banco com dados iniciais
$ yarn seed:run


# Execute a aplicação
$ yarn dev
```

### Utilizando [docker](https://www.docker.com/).

```bash
# Crie um arquivo .env com base no .env-example (preecha as informações corretamente).
$ cp .env.example .env

# Subir a aplicação
$ docker-compose up -d
```
