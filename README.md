<h1 align="center">🦸‍♀️<img src="./front/src/assets/logo.svg">🦸‍♂️</h1>
<p> O projeto visa conectar pessoas que desejam fazer contribuições monetárias a ONG's (Organizações não governamentais) que precisam de ajuda.</p>
<p>Aplicação criada pela Rocketseat para a 11ª Semana Omnistack.</p>

<div align="center">
  <img src="./imgs_readme/be_the_hero.png" alt="Página inicial">
  <img src="./imgs_readme/be_the_hero1.png" alt="Página de cadastro">
  <img src="./imgs_readme/be_the_hero2.png" alt="Perfil da ONG com os casos cadastrados">
  <img src="./imgs_readme/be_the_hero3.png" alt="Página de cadastro de casos">
  <img src="./imgs_readme/be_the_hero_mobile.png" alt="Imagem inicial do aplicativo mobile">
  <img src="./imgs_readme/be_the_hero_mobile1.png" alt="Listagem de casos">
  <img src="./imgs_readme/be_the_hero_mobile2.png" alt="Detalhes do caso">
</div>

<h2>🚀 Tecnologias</h2>
<ul>
  <li>Node.js</li>
  <li>React</li>
  <li>React Native</li>
  <li>Express</li>
  <li>Knex</li>
  <li>Jest</li>
  <li>Expo</li>
</ul>

<h2>🔧 Instalação</h2>
<h3>Pré-requisitos:</h3>
<ul>
  <li>Node.js</li>
  <ol>
    <li>Vá ao site <a href="https://nodejs.org/en/download/" title="Site Node.js">https://nodejs.org/en/download/</a></li>
    <li>Escolha a versão de acordo com o seu sistema operacional.</li>
  </ol>
</ul>
<span>OBS: o NPM já vem acompanhado do Node.js.</span>

<h3>Clonar o projeto e instalar as dependências:</h3>
<ol>
  <li>Clone o repositório:
    <code>git clone https://github.com/ana-ferreiramg/be-the-hero.git</code>
  </li>
  <li>Execute o comando abaixo nas pastas backend, frontend e mobile:
    <code>npm install</code>
  </li>
</ol>

<h4><strong>Se houver erro na hora de instalar as dependências, siga as instruções a seguir:</strong></h4>
<p>
    Abra o CMD(ou PowerShell) como administrador e rode: <code>npm install --global --production windows-build-tools</code>
    <br/><span>(caso a instalação fique em loop cancele a operação (ctrl+c) para finalizar em lotes)</span>
</p>

Se não funcionar siga as instruções a seguir:

<ol>
    <li>Instale o Python versão 2.7.x (o node-gyp não suporta a versão 3 do Python)</li>
    <li>Configure a variável de ambiente do sistema (Path) com o caminho até o python:
        <ul>
            <li>C:\Users\{seu usuário aqui}\.windows-build-tools\python27\python.exe</li>
            <li><a href="https://medium.com/@victorromariopazdejesus/python-3-configurando-vari%C3%A1veis-de-ambiente-no-windows-10-63059c7192e6">Configurar variável de ambiente no windows</a></li>
        </ul>
    </li>
    <li>Abra o CMD(ou PowerShell) como administrador e instale o node-gyp: <code>npm install --global node-gyp</code></li>
    <li>Entre no diretório do projeto e tente instalar as dependências: <code>npm install</code></li>
</ol>

<h2>🚩 Rodar aplicação</h2>
<p>🔸 Para utilizar a versão web:</p>
<ol>
  <li>Execute <code>npm start</code> nas pastas backend e frontend.</li>
</ol>
<p>🔸 Versão mobile:</p>
<ol>
  <li>Excute <code>npm start</code> nas pastas backend e mobile, vai abrir uma página web no seu navegador, leia o QR Code no seu celular com o aplicativo Expo <img src="./imgs_readme/expo.png" width="20px" height="20px">.</li>
</ol>
