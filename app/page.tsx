const quickStats = [
  { label: 'Leads qualificados no funil', value: '+2.4k', hint: 'Operação comercial com visão centralizada' },
  { label: 'Compromissos e ações do dia', value: '186', hint: 'Agenda, plantões e acompanhamentos conectados' },
  { label: 'Alertas e notificações úteis', value: '24/7', hint: 'Sistema + WhatsApp em fluxos operacionais' },
]

const solutions = [
  {
    title: 'CRM e gestão de leads',
    text: 'Captação, distribuição, acompanhamento, histórico, responsáveis, status e próximas ações em um fluxo comercial realmente organizado.',
    tag: 'Base comercial',
  },
  {
    title: 'Agenda, plantões e compromissos',
    text: 'Administre visitas, reuniões, compromissos da equipe, plantões e agenda diária com rastreabilidade e visão clara por usuário.',
    tag: 'Rotina diária',
  },
  {
    title: 'Tarefas e automações',
    text: 'Acione retornos, lembretes, pendências e regras operacionais para reduzir falhas e acelerar a execução do time.',
    tag: 'Produtividade',
  },
  {
    title: 'Fechamentos e previsibilidade',
    text: 'Acompanhe pipeline, fechamentos previstos e fechados, motivos, próximos passos e evolução por gestor e por período.',
    tag: 'Receita',
  },
  {
    title: 'Diretoria e visão executiva',
    text: 'Leve para a liderança um painel profissional com ritmo comercial, metas, comparativos e leitura consolidada da operação.',
    tag: 'Inteligência',
  },
  {
    title: 'Notificações multicanal',
    text: 'Combine alertas no sistema e no WhatsApp para ações realmente relevantes, sem deixar a operação se perder em excesso de informação.',
    tag: 'Execução',
  },
]

const pillars = [
  'Visual premium com linguagem de software empresarial',
  'Estrutura pronta para site institucional + entrada do sistema',
  'Posicionamento de produto sério para venda B2B',
  'Narrativa alinhada com o seu dashboard real e com a proposta da Santya',
]

const showcaseCards = [
  {
    title: 'Operação comercial completa',
    text: 'CRM, agenda, tarefas, fechamentos e diretoria em uma experiência única.',
  },
  {
    title: 'Acompanhamento em tempo real',
    text: 'Notificações, histórico e indicadores para agir com rapidez e segurança.',
  },
  {
    title: 'Mobilidade e execução',
    text: 'Uso no navegador, no computador e no celular com experiência responsiva e PWA.',
  },
]

const audiences = [
  'Construtoras e incorporadoras com operação comercial intensa',
  'Empresas com time de atendimento, SDR, closer ou gestores comerciais',
  'Negócios que precisam rastrear agenda, tarefas, compromissos e fechamentos',
  'Empresas que querem vender com mais controle, leitura gerencial e organização',
]

const flows = [
  {
    step: '01',
    title: 'Estruturação',
    text: 'A Santya entra com implantação assistida, organização da rotina e definição clara dos fluxos comerciais.',
  },
  {
    step: '02',
    title: 'Execução',
    text: 'Leads, agenda, tarefas, plantões, notificações e fechamentos passam a rodar em um só ambiente.',
  },
  {
    step: '03',
    title: 'Leitura gerencial',
    text: 'Gestores e diretoria acompanham performance, gargalos, ritmo comercial e decisões com mais confiança.',
  },
  {
    step: '04',
    title: 'Escala',
    text: 'A operação evolui com automações, histórico confiável e base para expansão do produto para novos clientes.',
  },
]

export default function Home() {
  return (
    <main className="siteShell">
      <div className="topbar">
        <div className="container topbarInner">
          <div className="topbarLinks">
            <span>Produto SaaS para operação comercial</span>
            <span>CRM • Agenda • Fechamentos • Diretoria</span>
          </div>
          <a href="https://wa.me/5534999999999?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20Santya." target="_blank" rel="noreferrer">
            Fale com a Santya
          </a>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="brand" aria-label="Santya">
            <img src="/santya-symbol.png" alt="Símbolo Santya" className="brandSymbol" />
            <div>
              <strong className="brandName">SANTYA</strong>
              <span className="brandSub">Soluções empresariais inteligentes</span>
            </div>
          </a>

          <nav className="menu">
            <a href="#plataforma">Plataforma</a>
            <a href="#solucoes">Soluções</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="headerActions">
            <a className="btn btnGhost" href="https://app.santya.com.br">
              Entrar
            </a>
            <a
              className="btn btnPrimary"
              href="https://wa.me/5534999999999?text=Ol%C3%A1%2C%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Santya."
              target="_blank"
              rel="noreferrer"
            >
              Solicitar demonstração
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="heroBackdrop" />
        <div className="container heroGrid">
          <div className="heroContent">
            <p className="eyebrow eyebrowHero">Sistema comercial premium</p>
            <h1>Gestão comercial com presença de marca, execução e visão executiva.</h1>
            <p className="heroText">
              A Santya foi desenhada para empresas que precisam vender com mais organização, controle,
              rastreabilidade e inteligência operacional. CRM, agenda, tarefas, notificações, fechamentos
              e diretoria em uma plataforma com padrão visual profissional e discurso de produto sério.
            </p>

            <div className="heroActions">
              <a className="btn btnPrimary" href="https://app.santya.com.br">
                Entrar no sistema
              </a>
              <a className="btn btnSecondary" href="#solucoes">
                Ver a plataforma
              </a>
            </div>

            <div className="heroMetrics">
              {quickStats.map((item) => (
                <article className="heroMetric" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <small>{item.hint}</small>
                </article>
              ))}
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroGlassCard heroDashboard">
              <div className="dashboardTop">
                <div>
                  <p className="miniEyebrow">Equipe comercial</p>
                  <h2>Visão executiva da operação</h2>
                </div>
                <span className="statusPill">Ao vivo</span>
              </div>

              <div className="dashboardMainStats">
                <article>
                  <span>Leads do mês</span>
                  <strong>154</strong>
                </article>
                <article>
                  <span>Tarefas abertas</span>
                  <strong>17</strong>
                </article>
                <article>
                  <span>Visitas agendadas</span>
                  <strong>09</strong>
                </article>
                <article>
                  <span>Fechamentos</span>
                  <strong>R$ 820 mil</strong>
                </article>
              </div>

              <div className="dashboardBottomGrid">
                <div className="chartCard chartCardLarge">
                  <div className="chartHeader">
                    <span>Performance do mês</span>
                    <strong>88% da meta</strong>
                  </div>
                  <div className="chartBars">
                    <span style={{ height: '42%' }} />
                    <span style={{ height: '58%' }} />
                    <span style={{ height: '74%' }} />
                    <span style={{ height: '96%' }} />
                  </div>
                </div>

                <div className="chartStack">
                  <div className="chartCard">
                    <div className="ringWrap">
                      <div className="ring" />
                      <div>
                        <span>Radar do dia</span>
                        <strong>36 ações</strong>
                      </div>
                    </div>
                  </div>
                  <div className="chartCard compactList">
                    <div>
                      <span>Leads qualificados</span>
                      <strong>15</strong>
                    </div>
                    <div>
                      <span>Pendências críticas</span>
                      <strong>04</strong>
                    </div>
                    <div>
                      <span>Ritmo comercial</span>
                      <strong>Em alta</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floatingCard floatingCardLeft">
              <span>Notificações inteligentes</span>
              <strong>Sistema + WhatsApp</strong>
            </div>
            <div className="floatingCard floatingCardRight">
              <span>Uso real no dia a dia</span>
              <strong>PWA no PC e no celular</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="trustStrip">
        <div className="container trustGrid">
          {pillars.map((item) => (
            <div className="trustItem" key={item}>
              <span className="trustDot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section platformSection" id="plataforma">
        <div className="container platformGrid">
          <div className="platformIntro">
            <p className="eyebrow">Plataforma Santya</p>
            <h2>O site oficial precisa vender o nível do sistema que você já construiu.</h2>
            <p>
              A referência visual é de software empresarial premium: navegação forte, hero impactante,
              cards com profundidade, discurso comercial sólido e conexão direta com o dashboard real da
              sua operação.
            </p>
            <div className="platformActions">
              <a className="btn btnPrimary" href="https://app.santya.com.br">
                Acessar app.santya.com.br
              </a>
              <a className="btn btnGhostStrong" href="#contato">
                Falar com especialista
              </a>
            </div>
          </div>

          <div className="showcaseGrid">
            {showcaseCards.map((card) => (
              <article className="showcaseCard" key={card.title}>
                <span className="showcaseBadge">Santya Platform</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="showcaseLine" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section solutionsSection" id="solucoes">
        <div className="container">
          <div className="sectionHeading sectionHeadingLight">
            <p className="eyebrow eyebrowGreen">Soluções</p>
            <h2>Uma página institucional com cara de produto enterprise.</h2>
            <p>
              O discurso da Santya agora posiciona o sistema como uma plataforma comercial robusta,
              moderna e pronta para ser vendida para outras empresas.
            </p>
          </div>

          <div className="solutionsGrid">
            {solutions.map((item) => (
              <article className="solutionCard" key={item.title}>
                <span className="solutionTag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contato">Conhecer solução</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section differentialSection" id="diferenciais">
        <div className="container differentialGrid">
          <div className="differentialPanel darkPanel">
            <p className="eyebrow eyebrowGreen">Diferenciais</p>
            <h2>Visual mais forte, mensagem mais comercial e acabamento muito mais profissional.</h2>
            <p>
              O novo site tira a sensação de landing genérica e coloca a Santya em um nível de produto
              com presença, confiança e ambição de mercado.
            </p>
          </div>

          <div className="differentialList">
            <article>
              <strong>Header premium</strong>
              <p>Topo com barra utilitária, menu mais refinado, CTA principal e marca com postura enterprise.</p>
            </article>
            <article>
              <strong>Hero de impacto</strong>
              <p>Fundo escuro, glassmorphism, números, mockup do dashboard e elementos com movimento sutil.</p>
            </article>
            <article>
              <strong>Conexão com o app real</strong>
              <p>As cores navy e dourado e o foco em operação refletem o dashboard que você já usa hoje.</p>
            </article>
            <article>
              <strong>Discurso pronto para vender</strong>
              <p>O conteúdo fala com empresas, gestores e diretoria, em vez de parecer apenas um projeto interno.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section audienceSection">
        <div className="container audienceGrid">
          <div className="audienceCard">
            <p className="eyebrow">Para quem é</p>
            <h2>Empresas que não querem mais vender no improviso.</h2>
            <p>
              A Santya atende operações que precisam centralizar dados, organizar a execução da equipe e dar
              leitura executiva para quem toma decisão.
            </p>
          </div>

          <div className="audienceList">
            {audiences.map((item) => (
              <div className="audienceItem" key={item}>
                <span>+</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section flowSection" id="como-funciona">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">Como funciona</p>
            <h2>Implantação, operação, leitura gerencial e escala em uma narrativa clara.</h2>
          </div>

          <div className="flowGrid">
            {flows.map((item) => (
              <article className="flowCard" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ctaSection" id="contato">
        <div className="container ctaPanel">
          <div>
            <p className="eyebrow eyebrowGreen">Pronto para apresentar a Santya de forma profissional</p>
            <h2>Seu site oficial agora conversa com o nível do produto que você quer vender.</h2>
            <p>
              Use o site institucional para posicionamento e o app.santya.com.br como porta de entrada do sistema.
              Depois, o próximo passo natural é preparar o ambiente da Portento e dos próximos clientes em subdomínios.
            </p>
          </div>

          <div className="ctaActions">
            <a className="btn btnPrimary" href="https://app.santya.com.br">
              Entrar no sistema
            </a>
            <a
              className="btn btnGhostOnDark"
              href="https://wa.me/5534999999999?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Santya."
              target="_blank"
              rel="noreferrer"
            >
              Solicitar demonstração
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <div className="footerBrand">
              <img src="/santya-symbol.png" alt="Santya" className="brandSymbol" />
              <div>
                <strong>SANTYA</strong>
                <span>Soluções empresariais inteligentes</span>
              </div>
            </div>
            <p>
              Plataforma comercial para empresas que querem mais organização, automação, rastreabilidade e
              leitura executiva da operação.
            </p>
          </div>

          <div className="footerLinks">
            <a href="#plataforma">Plataforma</a>
            <a href="#solucoes">Soluções</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="https://app.santya.com.br">Entrar</a>
          </div>

          <div className="footerLinks footerLinksRight">
            <a href="https://wa.me/5534999999999" target="_blank" rel="noreferrer">
              WhatsApp comercial
            </a>
            <a href="mailto:contato@santya.com.br">contato@santya.com.br</a>
            <span>© 2026 Santya</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
