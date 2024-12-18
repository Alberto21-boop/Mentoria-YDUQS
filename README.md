Documentação sobre o projeto

Este projeto tem como finalidade um trabalho de mentoria, que visa melhorar os conhecimentos dos funcionários com nível júnior da empresa.
Neste projeto, vamos desenvolver uma Todo-List que será alimentada por uma API fake. Além disso, este projeto contará com rotas.
Ou seja, haverá uma navegação entre telas, de acordo com as decisões do usuário.

npm create vite@latest

O Vite é uma ferramenta moderna de construção para projetos front-end, incluindo React. Ele foi projetado para ser rápido e simples, com foco em desempenho e eficiência. Aqui estão as principais vantagens do Vite quando usado com React:

Atua no DOM de maneira eficaz, garantindo maior performance, especialmente ao lidar com hooks.
Tempo de inicialização mais rápido.
Hot Module Replacement (HMR): Atualiza rapidamente apenas o que foi alterado.
Empacotamento eficiente para produção, criando builds otimizados e melhorando o desempenho.
Configuração simples.
Suporte nativo a módulos modernos, facilitando a adesão aos pacotes que você queira incluir no projeto.
Melhor performance em projetos grandes.

Configuração inicial:
Após rodar o comando acima, selecione a opção de framework React e a variante TypeScript. Dessa forma, vamos instalar o React, que é uma biblioteca e não um framework em si. O React não possui uma complexidade tão grande como frameworks tradicionais (como Angular), nem exige o uso de design patterns, como MVC ou outras estruturas específicas.

Nota: Estamos lidando com React e não Angular. Por isso, a abordagem será mais flexível e menos rígida em relação à arquitetura

Organização do projeto:
Embora o React permita maior liberdade, teremos uma organização clara e funcional para este projeto. Os componentes serão estruturados em pastas, cada uma contendo dois arquivos:

index.tsx:

Responsável por importar dependências, interfaces, propriedades e a função que compõe o componente.

Aqui, lidaremos com a lógica do componente, como hooks e variáveis.

O retorno será feito utilizando JSX, que renderizará o que será exibido na tela.

Dica: É importante entender os tipos de retorno para evitar que o arquivo fique desorganizado. Funções auxiliares, como handlers de botões ou lógica dos hooks, devem ser escritas como arrow functions separadas. O return será usado exclusivamente para o JSX.

styles.ts:

Arquivo de estilização. Utilizaremos styled-components para encapsular os estilos dos elementos JSX.
Cada elemento estilizado será importado no index.tsx, garantindo que a estilização seja modular e organizada.
Assim, cada componente será composto por uma pasta contendo os dois arquivos: index.tsx e styles.ts.

Estilização com Styled-Components:
Para manter um padrão de desenvolvimento, não utilizaremos CSS puro. Vamos trabalhar com styled-components para organizar melhor os estilos, evitando cores ou estilos espalhados pelos arquivos.

Instale a biblioteca com os seguintes comandos:

npm i styled-components
npm i @types/styled-components -D

Configuração das rotas:
Para gerenciar as rotas, utilizaremos a biblioteca react-router-dom, amplamente usada em projetos React. Instale-a com o comando:

npm install react-router-dom

Após isso, podemos configurar nossas rotas no arquivo Routes.tsx. Esse arquivo será responsável por centralizar todas as rotas da aplicação, incluindo as seguintes:

/: Rota que leva à tela de Home.
/task: Rota que exibe a lista de tarefas.
/task/:id: Rota que exibe uma tarefa específica, identificada pelo ID.
*: Rota que redireciona para a tela de erro.



















