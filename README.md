Criar a documentação sobre o projeto;

Este projeto tem como finalidade, um trabalho de mentoria , que visa melhorar os conhecimentos dos funcionarios com novel junior da empresa.
Neste projeto vamos fazer uma Todo-List, que será alimentada por uma API fake, assim como este projeto contara com rotas também.
Ou seja, havera uma navegação entre telas, de acordo com as descisões do usuario.

Para iniciarmos o projeto:

npm create vite@latest

O Vite é uma ferramenta moderna de construção para projetos front-end, incluindo React. Ele é projetado para ser rápido e simples, com foco em desempenho e eficiência. Aqui estão as principais vantagens do Vite quando usado com React:
Ele atua no DOM de maneira eficaz, criando assim uma maior performance quando o assunto são hooks

Tempo de inicialização mais rápido.
Hot Module que atua rapidamente , atualizando apenas o que foi alterado.
Empacotamento Eficiente para Produção, criando bulds otimizadas, atuando em em uma performace melhor.
Configuração simples.
Suporte Nativo a Módulos Modernos, facil adessão aos pacotes que você queira incluir ao projeto.
Performa melhor em projetos grandes.

Feito isso vamos selecionar a opção de "framework" React e a variante TypeScript para que assim possamos instalar a nossa biblioteca React,
Ou seja, vamos trabalhar com uma biblioteca, e não com um framwork em si, afinal React não é um framwork que possui uma complexidade, e muito menos uma necessidade de design patterns no desenvolvimento , ou o tal do MVC, ou qualquer outra coisa como no Angular.
Afinal não estamos atuando com Angular , mas com o Raect, e só com o React.
Não que não teremos uma "arquitetura" para este projeto, muito pelo contrario, vamos ter uma esopecie de ordem por arquivo, e assim vamos ter a nossa organização de maneira fluida, e assima de tudo funcional.
O componente será construido por dois arquivos, um index.tsx, que iria receber os imports, interface, propriedades, a função que compõe o componente,e ai adentramos na parte logica, com os hooks, variaveis, para que haja o retorno com o RETURN abrigando o nosso JSX que ira compor o que renderiza na tela por sua vez.
Aqui é muito importante entendermos os tipos de returno , para que assim o arquivo não se torne uma bagunça.
Logo é muito importante entender que para questões que envolva botões, ou outros retornos que agregam a logica em si, ou aos funcionamentos dos hooks, vamos sempre no atentar a utilização de arrow function.
Deixando assim o return de utilização exclusiva para o nos JSX.

E para nossa estilização, iremos nos utilizar de um segundo arquivo, que sera um styles.ts, cujo iremos abordar uma tecnologia mais a frente.
Porem vale salientar aqui, que devido a trabalharmos com styled-components, encapsular os elemntos do nosso JSX e assim daremos a estilização aos elementos que vão reenderizar na tela.
Seja ele o que for, bastara importalo no index.tsx, e você vera o elemento em tela estilizado de acordo com o que você fez no styles.ts.
E desta forma teremos o componete criado.
Uma pasta, dois arquivos, um index.tsx e o styles.ts


Uma vez instalado o Vite ao projeto vamos estilizar nosso projeto, para darmos mais formas ao usuario, mas não vamos fazer isso com CSS puro,  ou de maneira que possa atrapalhar nosso desenvolvimento,como dito antes, vamos trabalhar com styled-components e assim darmos mais padrão ao nosso desenvolvimento, com cores adicionadas de qualquer maneira, ou com cores perdidas em arquivos.
Por isso vamos instalar o styled-components em nosso projeto

npm i styled-components
npm i @types/styled-components -D

Desta maneira não só nos seguramos que instalamos o styled-components, mas também instalamos globalmente em nosso projeto.

Uma vez feito isso, já teremos quase tudo para "startarmos" o desenvolvimento de nosso projeto.