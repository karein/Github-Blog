[] Listagem do seu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.  
[] Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela  
[] Criar uma página para exibir um post (issue) completo

[] Fetch / Axios  
[] Roteamento e React Router DOM  
[] Formulários

[X] Primeiramente, crie um repositório **público** no GitHub. Esse repositório será onde você vai criar `issues` que serão os posts do seu blog que, inclusive, podem ser do mesmo repositório onde você vai deixar o seu código.

[] O título da `issue` será o nome do Post e o conteúdo será o corpo do post.  
[] [GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user): Será utilizada para buscar os dados do seu usuário do GitHub. No link você pode ver como fazer a requisição para ela, mas basicamente você deve fazer uma chamada para api.github.com/users/${username}

[] [GitHub Search API](https://docs.github.com/pt/rest/search): Essa é a parte mais divertida da aplicação! Você vai utilizar a API de busca do GitHub para filtrar por issues do repositório que você criou. Além disso, essa será a mesma API que você utilizará para fazer o filtro por busca.  
[] A rota a ser utilizada principalmente é a rota https://api.github.com/search/issues.
Essa rota recebe um parâmetro q que faz uma busca a partir de uma string. Nessa string, você pode passar, por exemplo, qual repositório você quer buscar enviando o texto q=${texto}%20repo:${username}/${repo}. Além disso, o parâmetro q também será usado para enviar um texto de busca, ou seja, você enviara o texto de busca + o parâmetro repo para ele buscar tudo junto.  
[] [GitHub Issues API](https://docs.github.com/pt/rest/issues/issues#get-an-issue): Para exibir o post completo, você precisará utilizar a GitHub Issues API para retornar todos os dados de uma issue. Você pode fazer isso através do number da issue para acessá-la através da URL no mesmo repositório, onde no mesmo exemplo de issue anterior, a URL ficaria assim: https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1

[] Além disso, é legal que você utilize as rotas dinâmicas do [react-router](https://reactrouter.com/), onde você pode receber parâmetros através dela para exibir a página do post completa. Esse parâmetro pode ser o `number` da issue para você conseguir fazer o fetch na Issues API. Para isso, você pode utilizar o hook useParams do react-router-dom.  
[] Como última dica, para exibir o post você precisará formatar ele, pois no GitHub ele é escrito no formato de markdown e para ser exibido em tela corretamente, você precisará converter ele desse formato markdown para um formato HTML. Para isso você pode utilizar o react-markdown.
