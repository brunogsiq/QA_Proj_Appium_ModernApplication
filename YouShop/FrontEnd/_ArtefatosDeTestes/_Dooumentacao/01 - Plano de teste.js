/*
    Este documento tem o intuíto de auxiliar a identificar quais testes deverão ser realizados;

    Cada possível teste a ser realizado será de autonomia do Q.A, determinado para função,
    dando ao mesmo a responsabilidade de identificar as melhores técnicas de execução e evidenciamento;

    1.A - Identificação de beneficiários da aplicação:

        A.1: Administradores da plataforma;
        A.2: Vendedores da Plataforma;
        A.3: Compradores da plataforma;

    1.B - Visão p/ utilização da aplicação:

        B.1: Administradores:
            Estes terão como visão principal a administração, validação e policiamento do conteúdo, anúncios, bloqueios, banimentos, eclusões
                entre outras ações administrativas a Beneficiários da aplicação A.2 e A.3;

        B.2: Vendedores:
            Estes terão como visão principal a ação de anunciar livros dos quais tenham condições de serem revendidos respeitando as regras da aplicação,
                evitando casos que podem levar o consumidor ao prejuízo, assim como excluir anúncios e outros fluxos de vendas disponíveis;

        B.3: Compradores:
            Estes terão como visão principal oportunidade de comprar um livro do qual haja desejo, entre outros processos introduzidos pela lei do consumidor
                que poderão neste caso realizar todo processo de comprar à desistência, ou à devolução;

    1.C - Funcionalidade:

        Beneficiários A.1, A.2 e A.3:

            Cadastro;
            Alteração de cadastro;
            Login;

        Beneficiários A.2:

            Anúncios;
            Criação de loja virtual afiliada;
            Disponibilidade de fotos entre outras ações para divulgação de produtos;
            Criação, Exclusão, Congelamento de produto para evitar vendas com estoque zerado;

        Beneficiários A.3

            Compra, troca, devolução, tudo dentro da lei do código de direitos do consumidor sobre compras pela internet;
            Alteração de dados de cadastros;
            Exclusão de conta;

    1.D - Casos de uso:

        Alterações de dados cadastrais deverão após realizado serem salvos e ter a confirmação reinserindo a senha;

        Recebimento de códigos de validações para acesso a plataforma deverão permitir alteração do meio de recebimento
            como o e-mail ou telefone somente se houver um aplicativo de segurança de duas etapas registrados e validado;

        Trocas e devoluções deverão ser realizadas em até 7 dias após a compra ou até 23:59:59 do sétimo dia, caso o processo seja realizado após
            o Cliente perde o direito por lei;

        Anúncios que contenham propagandas externas deverão ser bloqueados durante o processo de criação, eventualmente algum anúncio ou conteúdo que
            desreite as regras da plataforma deverão ser alertados ao vendedor;

        O cliente poderá realizar perguntas especifícas sobre o produtos, embora este funcionalidade seja para colaborar com a venda,
            palavras de baixo calão deverão ser bloqueadas através de uma nuvem de dicionários, mantendo a qualidade e respeito entre
                os Beneficiários da plataforma a fim de evitar problemas para ambos;

        Cadastro com dados inválidos, incorretos, incompletos deverão ser mantidos em uma área de staging até que seja confirmados ou validados
            para a segurança de todos os Beneficiários envolvidos;

    1.E - Testes a contemplar casos de uso:

        Dado que foi realizada uma alteração de endereço de recebimento,
        Quando clicar na opção salvar,
        Então deverá ser apresentado o modal de confrimação através de senha.

        Dado que um Beneficiário com problemas para realização de login deseja realizar alteração do meio de recebimento do código de verificação,
        Quando o mesmo solicitar a troca do tipo de contato, seja e-mail, telefone,
        Então a plataforma deverá solicitar o código de validação de segurança por duas etapas.

        Dado que um usuário deseja realizar uma devolução de produto dentro do prazo vigente,
        Quando o processo do pedido for realizado dentro do prazo em dias e horas,
        Então deverá ser apresentado o modal de confirmação da solicitação.

        Dado que um cadastro de produto foi realizado contendo o site da loja particular do vendedor,
        Quando tentar salvar o anúncio,
        Então o sistema deverá informar que há informações que inflingem a regra da plataforma.

        Dado que uma pergunta ou resposta em um produto foi utilizada palavras bloqueadas pelo sistema de dados,
        Quando o comentário for enviado,
        Então o sistema deverá apresentar um alerta sobre palavras proibidas pela plataforma de acordo com os termos de uso.

        Dado que um cadastro foi realizado na plataforma de forma incorreta ou com dados falsos,
        Quando o usuário tentar realizar uma compra/anúncio
        Então a plataforma deverá informá-lo que deverão ser confrimados os dados através de provações por questões de segurança a fim de evitar danos aos envolvidos.

    2.A - Escolhendo Casos de Testes:

        Visão Mobile - Tela "Quero Vender":

            Pré-requisito: Acessar a plataforma através do site ofocial da aplicação.
            Dado que o Beneficiário da aplicação acessou a sessão quero vender em formato retrato
            Quando visualizar os elementos em tela,
            As informações que trazem o tutorial de utilização desta funcionalidade deverão estar dispostos em caroussel

        Visão Desktop - Tela "Quero Vender":

            Pré-requisito: Acessar a plataforma através do site ofocial da aplicação.
            Dado que o Beneficiário da aplicação acessou a sessão quero vender pela web-Desktop 
            Quando visualizar os elementos em tela,
            As informações que trazem o tutorial de utilização desta funcionalidade deverão estar dispostos em barra de rolagem com indicação para mais conteúdos.


        Visão Mobile - Tela "Sebos e Livros":

            Pré-requisito: Acessar a plataforma através do site ofocial da aplicação.
            Dado que o usuário acessou a tela mencionada,
            Quando visualizar os elementos em tela,
            Então o menu lateral com filtros deverá ficar escondido, sendo possível sua visão atráves do ícone de 3 traços para identificação de sua abertura.

        Visão Desktop - Tela "Sebos e Livros":

            Pré-requisito: Acessar a plataforma através do site ofocial da aplicação.
            Dado que o usuário acessou a tela mencionada,
            Quando visualizar os elementos em tela,
            Então o menu lateral com filtros deverá por default ser apresentado sem nenhum checkbox selecionado trazendo todo o conteúdo referente.
*/