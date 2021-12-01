# Dog Hotel 

## Sobre

Trata-se um projeto feito em React Native, onde serão abordados os assuntos tratados em sala, como requisições get e post, em APIs externas.

O projeto foi idealizado pelos integrantes deste repositório, prototipado para entrega na matéria de Projeto Integrador.

O aplicativo é voltado para donos de cães que desejam hospedar seus cachorros com qualidade e segurança, quando realizam viagens nas quais os pets não podem ir junto.

Para uma melhor compreensão do projeto, optamos pela utilização do LiveShare, consequentemente facilitando o andamento, dessa forma não sendo necessário a criação de várias branchs, tornando-o mais simples.

## Integrantes

- Danilo da Silva Ranéa
- João Vitor Maldonado Roschel
- Paulo Henrique Honorato de Souza
- Paulo Henrique Nogueira Costa
- Sillas Cavalcante Lopes Pinto

## Quick start
Necessário [Node.js](https://nodejs.org/en/) a para instalação das dependências. 

Instalação do  [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable):
- ```npm install --global yarn```

Realize os comandos a seguir na raíz do projeto.
***
1. Instale as dependências do Expo:
```yarn add expo-cli ```
2. Check-in de instalação dos pacotes do projeto com:
```yarn install ```
3. Instale  o pacote do json-server:
```yarn add json-server```

#### Execução do projeto juntamente com o servidor: 

##### Caso o ambiente seja Android Studio:
- Execute o servidor com ```yarn server```, e após isso, execute o projeto com ```yarn start```

> Obs: Atente-se! A connection deve estar na opção "LAN" para que o servidor funcione corretamente.
***
##### Caso o ambiente não seja Android Studio - configure a execução do servidor:
1. Copie o <em>[endereco_ipv4]</em> da sua máquina por meio do
```ipconfig```
2. Substitua o <em>[endereco_ipv4]</em> no endpoint da API em **utils/api.ts**, utilize a porta 3000
3. Faça o host do servidor (API) com
```yarn json-server server.json --host [endereco_ipv4]```
4. Execute o projeto com
```yarn start```

## Integrantes

- Danilo da Silva Ranéa
- João Vitor Maldonado Roschel
- Paulo Henrique Honorato de Souza
- Paulo Henrique Nogueira Costa
- Sillas Cavalcante Lopes Pinto
