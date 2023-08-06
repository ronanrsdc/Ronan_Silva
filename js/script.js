const nameProj = document.getElementById('name-project')
const descProj = document.getElementById('desc-project')
const imgProj = document.getElementById('img-project')


const reset = () => {
    nameProj.innerText = 'Previwer do projeto';
    descProj.innerText = 'Passe o mouse sobre os projetos para ver suas descrições e uma imagem do mesmo sem precisar abrir o site ';
    imgProj.innerHTML = '';
}

const altProj1 = () => {
    nameProj.innerText = 'QRCODE';
    descProj.innerText = 'Esse projeto foi construir um site para exibir um QRCODE de forma amigavel. Projeto Foi obtido atravez do site Frontend Mentor';
    imgProj.innerHTML = '<img src="../imagens/paginas/Qr Code - ronanrsdc.github.io.png" alt="Pagina Qrcode">';
}

const altProj2 = () =>{
    nameProj.innerText = 'Product previwer';
    descProj.innerText = 'Projeto obtido atraves do site Frontend Mentor com o objetivo de aperfeiçoar os conhecimentos de CSS e HTML criando uma pagina reponsiva para demostração de um produto';
    imgProj.innerHTML = '<img src="../imagens/paginas/Product preview card component - ronanrsdc.github.io.png" alt="Product Previer">';
}
const altProj3 = () =>{
    nameProj.innerText = 'Google Glass';
    descProj.innerText = 'Projeto realizado durante o curso de HTML5 e CSS3 da plataforma Curso em Vídeo onde foi contruido uma pagina de noticias sobre o Google Glass usando HTML,CSS e Js';
    imgProj.innerHTML = '<img src="../imagens/paginas/GoogleGlass - ronanrsdc.github.io.png" alt="Google Glass Page">';
}

const altProj4 = () =>{
    nameProj.innerText = 'Site Android';
    descProj.innerText = 'Site criado durante o curso de HTML e CSS da plataforma curso em vídeo';
    imgProj.innerHTML = '<img src="../imagens/paginas/Curiosidade Tech - ronanrsdc.github.io.png" alt="Site Android">';
}

const altProj5 = () =>{
    nameProj.innerText = 'Grupo Escoteiro';
    descProj.innerText = 'Projeto de desenvolvimento e idealização propria onde trabalho na construção do site do 32º Vinicius de Sousa Mitre, grupo de escoteiros da cidade de Cláudio-MG onde atuo atualmente';
    imgProj.innerHTML = '<img src="../imagens/paginas/32º Vinicios de Sousa Mitre - ronanrsdc.github.io.png" alt="Grupo Escoteiro 32">';
}

const altProj6 = () => {
    nameProj.innerText = 'Super Mario Jump';
    descProj.innerText = 'Projeto onde testo meus aprendizados em JS com a criação de um jogo interativo';
    imgProj.innerHTML = '<img src="../imagens/paginas/Mario Jump - ronanrsdc.github.io.png" alt="Jogo SupermarioJump">';
}

const altProj7 = () =>{
    nameProj.innerText = 'Projeto Dev - X-man';
    descProj.innerText = 'Projeto desenvolvido durante o evento "Do zedo ao programador contratado" ofececido pelo canal Dev em Dobro onde foi criado um site interativo em HTML, CSS e JavaScript';
    imgProj.innerHTML = '<img src="../imagens/paginas/Projeto X- Men - Semana do Zero ao Programador Contratado_ - ronanrsdc.github.io.png" alt="X-man">';
}

const altProj8 = () => {
    nameProj.innerText = 'Site Avaliação';
    descProj.innerText = 'Projeto obtido atraves do site Frontend Mentor';
    imgProj.innerHTML = '<img src="../imagens/paginas/Reviwerpage - ronanrsdc.github.io.png" alt="Reviwe Page">';
}