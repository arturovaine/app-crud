# API CRUD

<details>
  <summary><strong>Descrição dos requisitos da aplicação</strong></summary>

<br />

Crie uma REST API usando o framework (Express ou NestJS) de NodeJS e para o Banco de Dados (MySQL ou MongoDB).

<br />
Essa API deve ter os seguintes modelos:

<br />

Customer
- name: string;
- email: string;
- phone: string;
- password: string;

Banner
- name: string;
- image: string;
- customerID: string | number;
- endAt: string;
- startAt: string;
- status: boolean;

Para os modelos precisamos desenvolver os seguintes endpoints:

- Create
- Read (todos e pelo id)
- Update
- Delete


Como adicional, seria bom que o sistema tivesse documentação com OpenAPI, testes unitários e fosse dockerizada.

</details>

<details>
  <summary><strong>Requisitos (previstos/executados)</strong></summary>

<br />

**Realizados:**

<br />

- [x] Modelos `customer`, `banner`
- [x] Services `customer`, `banner`
- [x] Controllers `customer`, `banner`
- [x] Migrations `customer`, `banner`
- [x] Seeders `customer`, `banner`
- [x] Rotas  `/customer`, POST, GET (all, id), PUT, DELETE
- [x] Rotas  `/banner`, POST, GET (all, id), PUT, DELETE
- [x] Middlewares `customer`, `banner`

<br />

**Parciais/não iniciados:**

- [ ] API dockerizada
- [ ] Testes unitários (model, service, controller)
- [ ] Documentação OpenAPI (Swagger)
- [ ] Autenticação de acesso (JWT)

<br />

</details>

<details>
  <summary><strong>Como executar aplicação</strong></summary>

<br />

Para executar a aplicação, no VSCode:

<br />

Execute no terminal:

>`git clone git@github.com:arturovaine/app-crud.git`

Entre na pasta:

>`cd app-crud`

Execute a instalação das dependências:

>`npm install`

Entre na pasta `/src`:

>`cd src`

Execute no terminal:

>`npm run dev`

<br />

</details>

<details>
  <summary><strong>Testes manuais aplicação</strong></summary>

<br />

Após as migrations e seeders terem sido executadas,

***testes manuais*** possíveis são, para as seguintes rotas via Thunder Client, Postman, Insomnia etc: 

>### localhost:3001

<br />

Requisições POST, GET, PUT, DELETE para:
<details>
  <summary> Customer</summary>

> `POST localhost:3001/customer`

request.body:
```json
{
    "name": "Fulano de Tal",
    "email": "fulanotal@email.com",
    "phone": "(41) 812341234",
    "password": "HxtLjKPEZBuPW"
}
```


> `GET localhost:3001/customer`

response:
```json
[
  {
    "id": 1,
    "name": "Admin",
    "email": "admin@admin.com",
    "phone": "(41) 912341234",
    "password": "HxtLjKPEZBuPW"
  },
  {
    "id": 2,
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "(41) 943214326",
    "password": "HGJGHJsufdggf"
  }
]
```

> `GET localhost:3001/customer/1`

response:
```json
[
  {
    "id": 1,
    "name": "Admin",
    "email": "admin@admin.com",
    "phone": "(41) 912341234",
    "password": "HxtLjKPEZBuPW"
  }
]
```

> `PUT localhost:3001/customer/1`

request.body:
```json
[
  {
    "id": 1,
    "name": "Admin",
    "email": "admin@admin.com",
    "phone": "(41) 912341234",
    "password": "HxtLjKPEZBuPW"
  }
]
```


> `DELETE localhost:3001/customer/1`

request.body / response:
```json
[
  {
    "id": 1,
    "name": "Admin",
    "email": "admin@admin.com",
    "phone": "(41) 912341234",
    "password": "HxtLjKPEZBuPW"
  }
]
```

<br />
</details>

<details>
  <summary> Banner</summary>

> `POST localhost:3001/banner`

request.body:
```json
  {
    "name": "Banner-5",
    "image": "../assets/images/banner5.png",
    "customerID": 1,
    "endAt": "2022-08-12",
    "startAt": "2022-08-11",
    "status": false
  }
```

> `GET localhost:3001/banner`

response:
```json
[
  {
    "id": 1,
    "name": "Banner-1",
    "image": "../assets/images/banner1.png",
    "customerID": 1,
    "endAt": "2022-08-12",
    "startAt": "2022-08-11",
    "status": false
  },
  {
    "id": 2,
    "name": "Banner-2",
    "image": "../assets/images/banner2.png",
    "customerID": 2,
    "endAt": "2022-08-12",
    "startAt": "2022-08-11",
    "status": true
  },
  {
    "id": 3,
    "name": "Banner-3",
    "image": "../assets/images/banner10.png",
    "customerID": 1,
    "endAt": "2022-08-12",
    "startAt": "2022-08-11",
    "status": false
  }
]
```

> `GET localhost:3001/banner/1`

response:
```json
[
  {
    "id": 1,
    "name": "Banner-1",
    "image": "../assets/images/banner1.png",
    "customerID": 1,
    "endAt": "2022-08-12",
    "startAt": "2022-08-11",
    "status": false
  }
]
```

> `PUT localhost:3001/banner/1`

request.body / response:
```json
{
  "id": 1,
  "name": "Banner-1",
  "image": "../assets/images/banner12.png",
  "customerID": 1,
  "endAt": "2022-08-12",
  "startAt": "2022-08-11",
  "status": false
}
```


> `DELETE localhost:3001/banner/1`

request.body / response:
```json
[
  {
    "id": 1,
    "name": "Banner-1",
    "image": "../assets/images/banner12.png",
    "customerID": 1,
    "endAt": "2022-08-12",
    "startAt": "2022-08-11",
    "status": false
  } 
]
```
</details>

</details>