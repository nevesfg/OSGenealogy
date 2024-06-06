<template>
  <div ref="treeChart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const data = {
  name: "QDOS/86-DOS",
  info: "QDOS, também conhecido como 86-DOS, foi um sistema operacional desenvolvido pela Seattle Computer Products (SCP) em 1980 para o microprocessador Intel 8086. Foi inicialmente projetado como um clone do CP/M, um sistema operacional popular na época. A Microsoft adquiriu uma versão modificada do QDOS, chamada 86-DOS, para distribuição com o IBM PC em 1981.",
  link: "https://betawiki.net/wiki/86-DOS",
  children: [
    {
      name: "PC-DOS",
      info: "PC-DOS, ou Personal Computer Disk Operating System, foi uma versão do sistema operacional MS-DOS desenvolvido pela Microsoft para os primeiros computadores pessoais IBM PC. Lançado em 1981 junto com o IBM PC original, o PC-DOS era quase idêntico ao MS-DOS, com pequenas diferenças de marca registrada e licenciamento. ",
      link: "https://museucapixaba.com.br/hoje/sistema-operacional-ibm-pc-dos-de-1981/",
      children: [
        {
          name: "OS/2",
          info: "OS/2 é um sistema operacional desenvolvido originalmente pela IBM em parceria com a Microsoft. Lançado em 1987, foi concebido como o sucessor do MS-DOS, com suporte a multitarefa, uma interface gráfica avançada e um ambiente de desenvolvimento robusto. Embora tenha sido inicialmente bem recebido, o OS/2 enfrentou desafios de mercado significativos devido à popularidade crescente do Windows.",
          link: "https://pt.wikipedia.org/wiki/OS/2#:~:text=OS%2F2%20ou%20OS%2F2,modo%20protegido%20do%20MS%2DDOS.",
          children: [
            {
              name: "Windows NT",
              info: "O Windows NT é uma família de sistemas operacionais desenvolvida pela Microsoft, lançada inicialmente em 1993. Ele foi projetado como uma arquitetura de sistema operacional mais robusta e segura em comparação com as versões anteriores do Windows, foi projetado para suportar ambientes de servidor e estação de trabalho, oferecendo recursos como multitarefa preemptiva, segurança aprimorada, sistema de arquivos NTFS e suporte a redes.",
              link: "https://www.hu.usp.br/wp-content/uploads/sites/47/2016/09/introducao.pdf",
              children: [
                {
                  name: "Windows 2000",
                  info: "O Windows 2000 foi um sistema operacional lançado pela Microsoft em fevereiro de 2000, projetado principalmente para uso em ambientes corporativos e servidores. Ele foi construído sobre a base do Windows NT e oferecia melhorias significativas em relação às versões anteriores, como maior estabilidade, segurança e suporte a hardware e software.",
                  link: "https://windowsdainformacao.wordpress.com/2013/09/11/historia-do-windows-windows-2000/",
                  children: [
                    {
                      name: "Windows XP",
                      info: "O Windows XP foi um sistema operacional lançado pela Microsoft em outubro de 2001. Foi uma das versões mais populares e amplamente utilizadas do Windows, devido à sua estabilidade, desempenho e novos recursos. O XP trouxe uma interface gráfica atualizada, maior facilidade de uso, suporte a dispositivos plug and play, melhor gerenciamento de energia e uma série de outras melhorias. Ele também introduziu o Windows Update para manter o sistema atualizado com as últimas correções de segurança e atualizações de software.",
                      link: "https://pt.wikipedia.org/wiki/Windows_XP",
                      children: [
                        {
                          name: "Windows 7",
                          info: "O Windows 7 foi um sistema operacional lançado pela Microsoft em outubro de 2009. Ele foi projetado como uma atualização do Windows Vista, com foco na melhoria da usabilidade, desempenho e estabilidade. O Windows 7 introduziu uma série de novos recursos, como a barra de tarefas aprimorada, a funcionalidade Aero Peek, a biblioteca de documentos, o Windows Touch para dispositivos sensíveis ao toque e o modo XP para executar aplicativos legados.",
                          link: "https://pt.wikipedia.org/wiki/Windows_7",
                          children: [
                            {
                              name: "Windows Phone 8",
                              info: "O Windows Phone 8 foi um sistema operacional móvel desenvolvido pela Microsoft, lançado em outubro de 2012. Foi uma atualização significativa do Windows Phone 7, trazendo várias melhorias em desempenho, funcionalidade e personalização.",
                              link: "https://appdomes.online/windows-phone-8-tudo-o-que-voce-precisa-saber/",
                              children: [],
                            },
                            {
                              name: "Windows 10",
                              info: "O Windows 10 é um sistema operacional lançado pela Microsoft em julho de 2015. Ele representa uma mudança significativa em relação às versões anteriores do Windows, com um modelo de serviço contínuo de atualização e melhorias regulares. O Windows 10 combina elementos familiares do Windows 7 e do Windows 8, oferecendo uma experiência familiar para os usuários, ao mesmo tempo em que introduz novos recursos e melhorias, como o menu Iniciar expandido, a assistente virtual Cortana, o navegador Microsoft Edge e a integração do Xbox Live.",
                              link: "https://www.techtarget.com/searchenterprisedesktop/definition/Windows-10",
                              children: [
                                {
                                  name: "Windows 11",
                                  info: "O Windows 11 é a próxima versão do sistema operacional da Microsoft, anunciado em junho de 2021 e previsto para ser lançado em outubro do mesmo ano. Este novo sistema operacional traz uma série de atualizações e melhorias em relação ao Windows 10, incluindo uma nova interface de usuário com um menu Iniciar redesenhado, cantos arredondados nas janelas, novas animações e efeitos visuais, além de várias melhorias de desempenho e segurança.",
                                  link: "https://www.microsoft.com/pt-br/windows/windows-11?r=1",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "Windows Server 2000",
                  info: "O Windows Server 2000 foi um sistema operacional de servidor lançado pela Microsoft em fevereiro de 2000, como parte da família de sistemas operacionais Windows 2000. Foi projetado para oferecer um ambiente estável e confiável para a execução de aplicativos e serviços de rede em ambientes empresariais.",
                  link: "https://microsoft.fandom.com/wiki/Windows_2000_Server",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "MS-DOS",
      info: "O MS-DOS, ou Microsoft Disk Operating System, foi um sistema operacional de linha de comando desenvolvido pela Microsoft. Lançado inicialmente em 1981, o MS-DOS foi o sistema operacional padrão para a maioria dos computadores pessoais baseados em IBM PC durante os anos 80 e início dos anos 90. Ele foi projetado para gerenciar o armazenamento e a execução de programas em computadores compatíveis com IBM PC.",
      link: "https://www.sutori.com/en/story/a-historia-dos-sistemas-operativos--AXQnMVWYfN3dApcbDZGKm8aj",
      children: [
        {
          name: "Windows",
          info: "O Windows 1.0 foi a primeira versão do sistema operacional gráfico da Microsoft, lançada em novembro de 1985. Foi desenvolvido como uma interface gráfica para o MS-DOS, permitindo que os usuários navegassem e executassem programas de maneira mais intuitiva através de janelas, menus e ícones. No entanto, o Windows 1.0 era limitado em comparação com as versões posteriores, oferecendo apenas recursos básicos como o Bloco de Notas, Calculadora, Paint e um gerenciador de arquivos.",
          link: "https://tecnoblog.net/noticias/microsoft-lanca-windows/",
          children: [
            {
              name: "Windows 95",
              info: "O Windows 95 foi um marco significativo no desenvolvimento dos sistemas operacionais da Microsoft. Lançado em agosto de 1995, foi uma grande evolução em relação ao MS-DOS e às versões anteriores do Windows. Introduziu uma interface de usuário totalmente nova com o menu Iniciar, a barra de tarefas e o explorador de arquivos, que se tornaram características icônicas do Windows.",
              link: "https://pt.wikipedia.org/wiki/Windows_95",
              children: [
                {
                  name: "Windows ME",
                  info: "O Windows Millennium Edition, também conhecido como Windows ME, foi um sistema operacional lançado pela Microsoft em setembro de 2000. Projetado como uma atualização do Windows 98, o ME tinha como objetivo fornecer melhorias em usabilidade e multimídia, incluindo recursos como a restauração do sistema, suporte a USB aprimorado e o Windows Media Player 7. No entanto, o Windows ME foi amplamente criticado por sua instabilidade, problemas de compatibilidade de hardware e software, e muitos usuários consideraram-no menos confiável do que o Windows 98",
                  link: "https://archive.org/details/windows-me_br",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const treeChart = ref(null);

const drawChart = () => {
  const width = 1480;
  const height = 600; 

  const svg = d3
    .select(treeChart.value)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0,40)");

  const root = d3.hierarchy(data);
  const treeLayout = d3.tree().size([width - 60, height - 100]); 
  treeLayout(root);

  const nodeProperties = {
    "Windows Server 2000": {
      x: -70,
      y: -20,
      width: 140,
      height: 35,
      fontSize: "13px",
    },
  };

  // Tooltip
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // Links
  svg
    .selectAll("path.link")
    .data(root.links())
    .enter()
    .append("path")
    .attr("class", "link")
    .attr(
      "d",
      d3
        .linkVertical()
        .x((d) => d.x)
        .y((d) => d.y)
    )
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 3);

  // Nodes
  const node = svg
    .selectAll("g.node")
    .data(root.descendants())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", (d) => `translate(${d.x},${d.y})`)
    .on("mouseover", (event, d) => {
      tooltip.transition().duration(700).style("opacity", 1);
      tooltip
        .html(
          `<strong>${d.data.name}</strong><p>${d.data.info}</p><a href="${d.data.link}" target="_blank">Mais informações</a>`
        )
        .style("left", event.pageX + 5 + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", () => {
      tooltip.transition().duration(5500).style("opacity", 0);
    });

  node
    .append("rect")
    .attr("x", (d) =>
      nodeProperties[d.data.name] ? nodeProperties[d.data.name].x : -50
    )
    .attr("y", (d) =>
      nodeProperties[d.data.name] ? nodeProperties[d.data.name].y : -20
    )
    .attr("width", (d) =>
      nodeProperties[d.data.name] ? nodeProperties[d.data.name].width : 100
    )
    .attr("height", (d) =>
      nodeProperties[d.data.name] ? nodeProperties[d.data.name].height : 40
    )
    .attr("rx", 10) 
    .attr("ry", 10) 
    .attr("fill", "white")
    .attr("stroke", "#999");

  node
    .append("text")
    .attr("dy", 3)
    .attr("x", 0)
    .attr("text-anchor", "middle")
    .attr("font-size", (d) =>
      nodeProperties[d.data.name]
        ? nodeProperties[d.data.name].fontSize
        : "12px"
    )
    .text((d) => d.data.name);
};

onMounted(() => {
  drawChart();
});
</script>

<style>
svg {
  font: 10px sans-serif;
}

.node {
  cursor: pointer;
}

.node rect {
  fill: white;
  transition: fill 0.3s;
}

.node:hover rect {
  fill: #6d6636;
}

.node text {
  font: 12px sans-serif;
  pointer-events: none; 
}

.node:hover text {
  fill: white;
}

.tooltip {
  position: absolute;
  text-align: left; 
  width: 300px; 
  height: auto;
  padding: 10px;
  font: 12px sans-serif;
  background: #d0c18f;
  border: 2px solid white;
  border-radius: 8px;
  pointer-events: auto; 
  opacity: 0;
  z-index: 1000; 
}

.tooltip strong {
  display: block;
  margin-bottom: 10px; 
}

.tooltip p {
  text-align: justify; 
  margin: 0; 
}

.tooltip a {
  color: #0056b3;
  text-decoration: none;
}

.tooltip a:hover {
  text-decoration: underline;
}
</style>
