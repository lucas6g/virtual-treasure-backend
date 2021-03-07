# Descrição geral do sistema

a aplicacao tem como objetivo permitir que o usuario
em uma certa localidade geografica posicione baus virtuais contendo um tesouro que é uma imagem que so pode ser acessada a partir de uma chave unica gerada pela propria aplicacao para acesso do baú fica a criterio do usuario que criou o bau dentro da aplicação a forma com que ele concede acesso a essa chave apos a abertura do bau sera emviada uma notificacao a quem criou o bau, e um email para o usuario que abrio o bau tendo dentro dele o conteudo do bau.

# Criação de Baus

**RF**

- O usuário deve poder criar baus virtuais em localização atual;
- A aplicaçao deve gerar uma chave no momento da criação do bau;
- O usuário deve poder fazer upload do tesouro associado ao bau;
- O usuario deve poder anexar informações de seu criterio de acesso a chave do bau;
- O usuario deve poder atribuir uma descricao ao bau;
- O usuario deve poder atribuir um nome bau;

**RNF**

- Utilizar Amazom S3 para o armazenamento das imagens em produção;
- Utilizar a api do google maps para definir a locallidade do bau;
- Utilizar lib multer para fazer upload da imagem;
- Utilizar lib para diminuir o tamanho da imagem;

**RN**

- A aplição deve gerar a chave de acesso ao bau;
- O usuario não pode fazer upload de imagens porgraficas;

# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Ethereal para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Busca de baus

**RF**

- O usuario deve poder listar todos os baus proximo a sua localidade;
- O usuario deve poder buscar baus por nome utilizando um mapa;

**RNF**

- Os baus presentes em sua localidade devem ser armazenados em cache;
- Utilizar a api do google maps para buscar a localização do bau;

**RN**

- O usuario não pode listar baus que ja foram abertos;

# Abertura de Baus

**RF**

- O usuario deve poder incerir a chave para a abertura do bau;
- O usuario que abrio o bau deve receber o conteudo do bau via email;
- O usuario que criou o bau deve receber uma notificacao quando o bau for aberto;

**RNF**

- As notificações dos baus devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- O usuario que criou o bau não pode abrilo uma vez esse bau criado;
- O usuario tem 3 tentativas de abrir o bau dentro de um minuto;
- o usuario deve estar a pelo menos 100 metros do bau para tentar abrilo

# Confirmação de email

**RF**

- O usuario deve poder confirmar seu email;
- O usuário deve receber um e-mail com instruções de confirmação do email;

**RNF**

- Utilizar Ethereal para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O codigo enviado para confirmação do email, deve expirar em 2h
