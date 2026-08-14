# Site — Flávia Imóveis

Site institucional e de listagem de imóveis para a **Flávia Imóveis**, em Santa Rita do Sapucaí - MG.

## 1. O que foi criado

Um site de 5 páginas, responsivo, em HTML/CSS/JavaScript puro (sem necessidade de instalar Node.js, servidor ou build):

- **index.html** — Página inicial: hero com busca, imóveis em destaque, serviços, resumo institucional, CTA de WhatsApp, localização com mapa e seção de Instagram.
- **imoveis.html** — Busca e listagem de imóveis com filtros (finalidade, tipo, cidade, bairro, quartos, banheiros, garagem, preço, área) e ordenação.
- **imovel.html** — Página de detalhes de um imóvel específico (acessada como `imovel.html?id=p1`), com galeria, especificações, características, mapa e formulário "Tenho interesse".
- **sobre.html** — Página institucional com a história da imobiliária e os serviços oferecidos.
- **contato.html** — Página de contato com informações, mapa e formulário.

Um botão flutuante de WhatsApp aparece em todas as páginas, e o menu vira "hambúrguer" no celular.

**Importante:** os 6 imóveis atuais em `js/data.js` são **dados de demonstração** (marcados com `demo: true` e exibidos com um selo "Exemplo"), criados apenas para mostrar como o site funciona. Nenhuma informação real de imóveis, preços ou avaliações foi inventada como se fosse verdadeira.

## 2. Estrutura de arquivos

```
flavia-imoveis/
├── index.html          → Página inicial
├── imoveis.html         → Busca de imóveis
├── imovel.html           → Detalhes de um imóvel
├── sobre.html            → Sobre a imobiliária
├── contato.html          → Contato
├── css/
│   └── styles.css        → Todo o design (cores, tipografia, componentes)
├── js/
│   ├── data.js            → Dados da empresa + imóveis (o que você vai editar)
│   ├── icons.js            → Ícones SVG reutilizáveis
│   └── main.js              → Cabeçalho, rodapé, menu, filtros, formulários
└── README.md             → Este arquivo
```

## 3. Como executar o projeto

Não precisa instalar nada. Duas opções:

**Opção simples:** dê duplo clique no arquivo `index.html` — ele abre direto no navegador.

**Opção recomendada (evita pequenas limitações do navegador com arquivos locais):** rode um servidor local. Se tiver Python instalado, abra o terminal na pasta do site e rode:

```
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

## 4. Onde alterar os imóveis

Abra `js/data.js` e edite o array `PROPERTIES`. Cada imóvel é um objeto assim:

```js
{
  id: "p1",              // identificador único (usado na URL do imóvel)
  demo: true,             // MUDE PARA false (ou remova a linha) ao colocar um imóvel real
  code: "FI-1024",         // código do imóvel
  title: "Casa térrea...",  // título
  purpose: "venda",         // "venda" ou "aluguel"
  type: "Casa",              // Casa, Apartamento, Terreno, Comercial, Rural, Outros
  price: 420000,              // valor em número (sem pontos/vírgulas)
  city: "Santa Rita do Sapucaí",
  neighborhood: "Centro",
  bedrooms: 3, suites: 1, bathrooms: 2, garage: 2,
  area: 180, areaLot: 240,   // em m² (use null se não se aplicar)
  description: "...",
  features: ["Quintal", "Churrasqueira"],
}
```

Para adicionar um imóvel novo, copie um bloco inteiro `{ ... }`, cole antes do `];` final e ajuste os dados. O `id` precisa ser único.

**Fotos reais:** hoje os imóveis usam ilustrações genéricas no lugar de fotos (não recebi fotos reais para usar). Para colocar fotos de verdade, é preciso adaptar `js/data.js` e `js/main.js` para receberem uma lista de URLs de imagem por imóvel — posso te ajudar a implementar isso quando você tiver as fotos.

## 5. Onde alterar telefone, endereço e informações da empresa

Também em `js/data.js`, no objeto `COMPANY` (bem no topo do arquivo). Alterar ali atualiza automaticamente o telefone, WhatsApp, endereço, Instagram e mensagem padrão do WhatsApp em **todas as páginas do site**.

## 6. Como colocar o site em produção

O site é 100% estático (HTML/CSS/JS), então pode ser hospedado gratuitamente em serviços como:

- **Netlify** ou **Vercel**: arraste a pasta do site para o painel do serviço.
- **GitHub Pages**: suba os arquivos para um repositório e ative o Pages nas configurações.
- Ou em qualquer hospedagem tradicional (como a que já hospeda `flaviaimoveis.com.br`), enviando os arquivos por FTP.

Não há banco de dados nem backend — todos os imóveis vêm do arquivo `js/data.js`. Se no futuro quiser conectar um CMS ou painel administrativo para cadastrar imóveis sem editar código, a estrutura de dados já está pronta para isso (é só trocar a fonte dos dados de `data.js` para uma API).

## 7. Antes de publicar — pontos de atenção

- [ ] Substituir os imóveis de demonstração pelos imóveis reais (remover `demo: true`).
- [ ] Adicionar fotos reais dos imóveis e da equipe/loja.
- [ ] Adicionar o número de registro no CRECI no rodapé (`js/main.js`, função `renderFooter`).
- [ ] Conferir se telefone, endereço e Instagram estão corretos em `js/data.js`.
- [ ] Testar os links do WhatsApp, o menu mobile e os formulários em um celular real.
