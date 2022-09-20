# Projeto node

<h2>Sistema back-end de gerenciamento de uma hamburgueria<h2>
  
<img src="./assets/print.gif">

> Projeto finalizado
> <br>

## 💻 Sobre o Projeto

Esta é uma aplicação que faz o cadastro e gerenciamento dos pedidos de uma hamburgueria, utilizando 🔧: <b>Node, Express, Uuid e Cors</b>.

Foi criada as seguintes rotas

<b>POST /order</b>: A rota receber o pedido do cliente, o nome do cliente e o valor do pedido, em seguinda acrescenta o ID e status seguindo o seguinte formato: { id: "a5990bdc-736c-46da-9dd0-d69e23c35ce9", order: "1 Burger, 1 Batata Frita", clientName:"Matheus", price: 30.50, status:"Em preparação" }.

<b>GET</b> /order: Rota que lista todos os pedidos já feitos.

<b>PUT</b> /order/:id: Essa rota utiliza o id do pedido para alterar o pedido já feito. Pode alterar,um ou todos os dados do pedido.

<b>DELETE</b> /order/:id:Essa rota utiliza o id do pedido para deletar um pedido já feito.

<b>GET</b> /order/:id: Essa rota utiliza o id do pedido para retornar apenas um pedido específico.

<b>PATCH</b> /order/:id: Essa rota utiliza o id do pedido para alterar o status do pedido recebido para "Pronto".

Exemplo📃:

Se for chamada a rota POST /order repassando { order: "1 Burger, 1 Batata Frita", clientName:"Matheus", price: 30.50 }, o array ficara assim:

[
	{
		"id": "d62cf350-9549-43bc-a5da-100e12684acb",
		"name": "Matheus",
		"order": "1 Burger, 1 Batata Frita",
		"price": 30.50,
		"status": "In preparation"
	},
];
Se for chamada a rota PATCH /order/d62cf350-9549-43bc-a5da-100e12684acb, o array ficara assim:

[
{
		"id": "d62cf350-9549-43bc-a5da-100e12684acb",
		"name": "Matheus",
		"order": "1 Burger, 1 Batata Frita",
		"price": 30.50,
		"status": "Pronto"
	},
];

Middlewares✅:

O Middleware ✅: checkUserId é utilizado em todas rotas que recebem o parâmetro ID, ele verifica se o ID passado existe, se não existi retorne um erro, caso contrário permite que a requisição continue normalmente;

## ☕ tecnologias utilizadas

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<br>

## 💙 Colaborador

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="./assets/autor.png" width="100px;" alt="Foto do autor Matheus Juvenal"/><br>
        <sub>
          <a>Matheus Juvenal</a>
        </sub>
      </a>
    </td>
  </tr>
</table>

<div>
 <a href="https://www.linkedin.com/in/matheus-juvenal-de-oliveira-379768237/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
<a href = "mailto:mathjuveoliveira@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>
<br>

[⬆ Voltar ao topo](#Projeto-node)<br>
