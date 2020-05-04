# bootcamp-desafio-07

## Sobre o desafio

Nesse desafio a aplicação criada até agora treinar o que foi disponibilizado até o desafio 06 do bootcamp GoStack ganha um nome e uma interface, é a GoFinances!

Esse desafio é construção da interface para acessar o backend do [desafio 06](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-database-upload), exibindo as transações criadas e permitindo a importação de um arquivo CSV para gerar novos registros no banco de dados.

### Funcionalidades da aplicação

- **`Listar as transações da sua API`**: A página `Dashboard` deve ser capaz de exibir uma listagem através de uma tabela, com o campo `title`, `value`, `type` e `category` de todas as transações que estão cadastradas na API.

- **`Exibir o balance da API`**: A página `Dashboard` deve exibir o balance que é retornado do backend, contendo o total geral, junto ao total de entradas e saídas.

- **`Importar arquivos CSV`**: Na página `Import`, permitir o envio de um arquivo no formato `csv` para o backend, que irá fazer a importação das transações para o banco de dados. O arquivo csv deve seguir o seguinte [modelo](https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-database-upload/assets/file.csv).


Para esse desafio temos os seguintes testes:

- **`should be able to list the total balance inside the cards`**: Para que esse teste passe, sua aplicação deve permitir que seja exibido na sua Dashboard, cards contendo o total de `income`, `outcome` e o total da subtração de `income - outcome` que são retornados pelo balance do seu backend.

* **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados dentro de uma tabela, toda as transações que são retornadas do seu backend.

- **`should be able to navigate to the import page`**: Para que esse teste passe, você deve permitir a troca de página através do Header, pelo botão que contém o nome `Importar`.

- **`should be able to upload a file`**: Para que esse teste passe, você deve permitir que um arquivo seja enviado através do componente de drag-n-drop na página de `import`, e que seja possível exibir o nome do arquivo enviado para o input.

## Licença

Todos os direitos reservados à **[Rocketseat](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-reactjs).**
