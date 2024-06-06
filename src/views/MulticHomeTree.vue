<template>
  <div ref="treeChart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const data = {
  name: "Multics",
  info: "Criado em 1964 foi o primeiro sistema operacional de tempo compartilhado (CTSS - Compatible Time-Sharing System).",
  link: "https://www.sutori.com/en/story/a-historia-dos-sistemas-operativos--AXQnMVWYfN3dApcbDZGKm8aj",
  children: [
    {
      name: "UNIX",
      info: "Criado em 1969 O Unix é um sistema operacional que suporta múltiplos usuários, permitindo que vários deles compartilhem o mesmo computador simultaneamente através de terminais remotos. Além disso, é capaz de executar várias tarefas simultaneamente, permitindo que diversos programas sejam executados ao mesmo tempo.",
      link: "https://www.sutori.com/en/story/a-historia-dos-sistemas-operativos--AXQnMVWYfN3dApcbDZGKm8aj",
      children: [
        {
          name: "MINIX",
          info: "O MINIX é um sistema operacional de código aberto baseado em Unix, lançado em 1987 pelo professor Andrew S. Tanenbaum. Embora originalmente projetado para fins educacionais, o MINIX ganhou popularidade como sistema operacional leve e confiável.",
          link: "https://wiki.minix3.org/doku.php?id=www:documentation:read-more",
          children: [],
        },
        {
          name: "LINUX",
          info: "Em 1991, Linus Torvalds tornou público o Linux como um software de código aberto, inspirado pelo Minix. O sistema atraiu a colaboração de inúmeros desenvolvedores e grandes empresas como IBM, Sun Microsystems, HP, Red Hat, Novell, Oracle, Google, Mandriva e Canonical. Atualmente, o Linux é o kernel predominante, sendo utilizado em uma ampla gama de dispositivos, desde computadores pessoais até aparelhos como DVD players, roteadores e smartphones.",
          link: "https://www.sutori.com/en/story/a-historia-dos-sistemas-operativos--AXQnMVWYfN3dApcbDZGKm8aj",
          children: [
            {
              name: "Debian",
              info: "O Debian é um sistema operacional de código aberto baseado no kernel do Linux, lançado inicialmente em 1993 por Ian Murdock. Conhecido por sua estabilidade, segurança e um processo rigoroso de controle de qualidade, o Debian serve como base para muitas outras distribuições, incluindo o Ubuntu. ",
              link: "https://www.debian.org/intro/about.pt.html",
              children: [
                {
                  name: "Ubuntu",
                  info: "O Ubuntu é um sistema operacional baseado no Linux, lançado pela Canonical em outubro de 2004. Destinado a ser amigável e acessível, o Ubuntu é conhecido por sua facilidade de uso, estabilidade e ampla comunidade de suporte. Ele é popular tanto entre usuários domésticos quanto em servidores, oferecendo lançamentos regulares e uma vasta coleção de software disponível através do seu repositório oficial.",
                  link: "https://ubuntu.com/about",
                  children: [
                    {
                      name: "Mint",
                      info: "O Linux Mint é um sistema operacional baseado no Ubuntu e no Debian, lançado pela primeira vez em 2006. Projetado para ser fácil de usar e amigável para iniciantes, o Linux Mint oferece uma interface intuitiva e uma experiência de desktop completa pronta para uso imediato, incluindo codecs multimídia e software pré-instalado.",
                      link: "https://www.linuxmint.com/about.php",
                      children: [],
                    },
                    {
                      name: "Ubuntu Touch",
                      info: "O Ubuntu Touch é um sistema operacional móvel desenvolvido pela Canonical, lançado em 2013. Projetado para smartphones e tablets, o Ubuntu Touch oferece uma interface de usuário unificada e gestos intuitivos. Ele se destaca pela convergência, permitindo que dispositivos móveis sejam usados como computadores de mesa quando conectados a um monitor externo.",
                      link: "https://ubports.com/pt/",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "Android",
              info: "O Android é um sistema operacional móvel desenvolvido pela Google, lançado em setembro de 2008. Baseado no kernel do Linux, o Android tornou-se um dos sistemas operacionais mais populares do mundo, impulsionando uma ampla variedade de dispositivos, incluindo smartphones, tablets, smartwatches, TVs e dispositivos de IoT.",
              link: "https://www.sutori.com/en/story/a-historia-dos-sistemas-operativos--AXQnMVWYfN3dApcbDZGKm8aj",
              children: [
                {
                  name: "WearOS",
                  info: "Wear OS é um sistema operacional desenvolvido pela Google, lançado inicialmente em 2014 como Android Wear. Projetado especificamente para smartwatches e dispositivos vestíveis, Wear OS oferece integração com smartphones Android, permitindo notificações, controle de mídia, monitoramento de atividades físicas e acesso a uma ampla gama de aplicativos através da Google Play Store",
                  link: "https://wearos.google.com/intl/pt_br/",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "GNU",
          info: "GNU - O GNU, estabelecido em 1984, tem como principal e constante objetivo oferecer um sistema de software livre e compatível com o Unix, buscou-se por replicar as características do Unix porém sem utilizar seu código, priorizando a liberdade de copiar, redistribuir e modificar o software, além de encorajar a colaboração e o compartilhamento na comunidade.",
          link: "https://www.sutori.com/en/story/a-historia-dos-sistemas-operativos--AXQnMVWYfN3dApcbDZGKm8aj",
          children: [],
        },
        {
          name: "BSD",
          info: "BSD (Berkeley Software Distribution) é um sistema operacional baseado no Unix, desenvolvido pela Universidade da Califórnia, Berkeley, com seu primeiro lançamento em 1977. Originalmente um conjunto de modificações e melhorias ao Unix, o BSD introduziu muitas inovações importantes, como o sistema de arquivos de Berkeley (FFS) e a implementação de redes TCP/IP, que se tornaram padrões na indústria.",
          link: "https://www.spartacussystem.com.br/home/sistemas-operacionais/unix/bsd",
          children: [
            {
              name: "NeXTSTEP",
              info: "NeXTSTEP é um sistema operacional desenvolvido pela NeXT Inc., fundada por Steve Jobs após sua saída da Apple, lançado pela primeira vez em 1989. Baseado no Unix, NeXTSTEP combina uma interface gráfica avançada com um poderoso ambiente de desenvolvimento orientado a objetos. Ele é conhecido por suas inovações em design de interface e desenvolvimento de software, como o uso de frameworks e ferramentas de programação que facilitaram a criação de aplicativos.",
              link: "https://www.operating-system.org/betriebssystem/_english/bs-nextstep.htm",
              children: [
                {
                  name: "Rhapsody Mac OS X server 1.0",
                  info: "Rhapsody é o codinome para o sistema operacional desenvolvido pela Apple, baseado no NeXTSTEP, após a aquisição da NeXT em 1997. Lançado em 1999 como Mac OS X Server 1.0, Rhapsody combinava a interface clássica do Mac OS com a robustez do Unix, introduzindo o kernel Mach e componentes do BSD.",
                  link: "https://betawiki.net/wiki/Mac_OS_X_Server_1.x",
                  children: [
                    {
                      name: "Darwin [Apple]",
                      info: "Darwin é o núcleo do sistema operacional macOS, desenvolvido pela Apple e lançado pela primeira vez em 2000. Baseado no kernel Mach e componentes do BSD Unix, Darwin fornece a base robusta e segura para macOS, iOS, watchOS e tvOS. Ele é de código aberto, permitindo que desenvolvedores acessem e modifiquem o código-fonte. Darwin inclui funcionalidades avançadas de gerenciamento de memória, processamento multitarefa e suporte a rede, herdando muitos aspectos do NeXTSTEP e Rhapsody",
                      link: "https://www.operating-system.org/betriebssystem/_english/bs-darwin.htm",
                      children: [
                        {
                          name: "macOS X",
                          info: "O macOS X é um sistema operacional desenvolvido pela Apple, lançado pela primeira vez em 2001. Ele combina a estabilidade e segurança do Unix com a interface gráfica intuitiva e elegante do Macintosh. O macOS X introduziu recursos avançados como o Finder, Spotlight e Time Machine, além de uma série de aplicativos nativos para produtividade, criatividade e entretenimento.",
                          link: "https://apple.fandom.com/wiki/OS_X",
                          children: [
                            {
                              name: "iOS",
                              info: "O iOS é um sistema operacional móvel desenvolvido pela Apple Inc., lançado pela primeira vez em 2007 com o iPhone. Projetado especificamente para dispositivos móveis da Apple, como iPhone, iPad e iPod Touch, o iOS oferece uma interface intuitiva e recursos poderosos para comunicação, produtividade, entretenimento e muito mais.",
                              link: "https://apple.fandom.com/wiki/IPhone_OS_1",
                              children: [],
                            },
                          ],
                        },
                        {
                          name: "Mac OS X Server 10",
                          info: "O Mac OS X Server 10 é uma versão do sistema operacional de servidor da Apple, lançada em 2001 como parte da transição do Mac OS clássico para o macOS. Esta versão trouxe uma série de recursos avançados para ambientes de servidor, incluindo gerenciamento de usuários e grupos, compartilhamento de arquivos, serviços de rede, hospedagem de sites e serviços de e-mail.",
                          link: "https://apple.fandom.com/wiki/MacOS_Server",
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
    "Rhapsody Mac OS X server 1.0": {
      x: -110,
      y: -20,
      width: 220,
      height: 35,
      fontSize: "14px",
    },
    "Mac OS X Server 10": {
      x: -70,
      y: -20,
      width: 140,
      height: 35,
      fontSize: "13px",
    },
    "Debian GNU/Linux": {
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
