# CarroAgil

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 9.0.6.

## Primeira execução

Executar `npm install --save @angular/cli` para instalar as dependencias do projeto, uma única vez.

## Servidor de desenvolvimento

Executar `ng serve` Para rodar a aplicação, que estará acessível em `http://localhost:4200/`.

## Compilação

Executar `ng build` para compilar o projeto. Os artefatos estarão disponíveis no diretório `dist/`.

## Deploy

Para subir a aplicação na aws, executar `aws s3 cp dist/carro-agil s3://<seu s3 bucket>/ --recursive`.

## Aplicação demo

Uma aplicação de exemplo econtra-se em execução na aws, a poderá ser acessada em `https://carro-agil.bornia.net/`

## Componentes arquiteturais deste demo

Route53: configuração do domínio bornia.net/
CloudFront: cdn para acesso mais rápido
S3: armazenamento do aplicação Angular
Cognito: para a autenticação da aplicação, federada com login via Google.