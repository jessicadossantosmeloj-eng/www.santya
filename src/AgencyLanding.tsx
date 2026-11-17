import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight, Code2, Database, Instagram,
  Globe2, Layers3, Menu, MessageCircle, MonitorSmartphone, Search,
  ShieldCheck, ShoppingBag, Sparkles, Workflow, X, Zap,
} from 'lucide-react';

const whatsappNumber = '553484149487'; // Número já configurado no site atual; validar antes da publicação.
const email = 'contato@santya.com.br';
const instagramUrl = 'https://www.instagram.com/santyatech/';
const whatsapp = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
const buttonGold = 'inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E7BB76] to-[#B8742A] px-6 py-3.5 text-sm font-semibold text-[#17273E] shadow-[0_14px_30px_rgba(184,116,42,.18)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-px hover:shadow-[0_16px_34px_rgba(184,116,42,.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E7BB76]';
const buttonOutline = 'inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition-colors duration-200 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';
const navigation = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como trabalhamos', href: '#processo' },
  { label: 'Santya ERP', href: '/erp' },
  { label: 'Contato', href: '#contato' },
];
const services = [
  { icon: Globe2, number: '01', name: 'Sites profissionais', text: 'Sites institucionais modernos, responsivos, rápidos e pensados para transformar visitas em contatos.', keywords: ['Institucional', 'Landing pages', 'SEO técnico'] },
  { icon: ShoppingBag, number: '02', name: 'Lojas virtuais', text: 'Vitrines digitais com catálogo, jornada de compra clara e integrações definidas para cada operação.', keywords: ['Catálogo', 'E-commerce', 'Experiência mobile'] },
  { icon: Code2, number: '03', name: 'Sistemas personalizados', text: 'Plataformas sob medida para acompanhar clientes, vendas, contratos, finanças e processos.', keywords: ['ERP e CRM', 'Painéis', 'Portais privados'] },
  { icon: Workflow, number: '04', name: 'Automações e integrações', text: 'Fluxos conectados que reduzem tarefas repetitivas e tornam o dia a dia da empresa mais organizado.', keywords: ['Fluxos', 'Integrações', 'IA aplicada'] },
];
const projects = [
  { category: 'PRODUTO • DESENVOLVIMENTO', name: 'Santya ERP', description: 'Plataforma de gestão com módulos de CRM, comercial, contratos e financeiro.', kind: 'erp', href: '/erp', action: 'Explorar o produto', actual: true },
  { category: 'EXEMPLO DE SOLUÇÃO', name: 'Site institucional', description: 'Experiência digital elegante para apresentar negócios, serviços e empreendimentos.', kind: 'website', href: '#contato', action: 'Solicitar projeto', actual: false },
  { category: 'EXEMPLO DE SOLUÇÃO', name: 'Portal de atendimento', description: 'Área privada com filtros, informações, disponibilidade e acesso conforme o perfil.', kind: 'portal', href: '#contato', action: 'Solicitar projeto', actual: false },
];
const processSteps = [
  { no: '01', title: 'Entendemos a ideia', body: 'Conversamos sobre sua empresa, o que precisa e o resultado esperado.' },
  { no: '02', title: 'Desenhamos a solução', body: 'Definimos as páginas, funções, integrações, prazo e orçamento.' },
  { no: '03', title: 'Criamos e refinamos', body: 'Desenvolvemos, testamos as telas e ajustamos os detalhes.' },
  { no: '04', title: 'Entregamos e orientamos', body: 'Publicamos após aprovação e explicamos como utilizar sua solução.' },
];

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <motion.div
    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.48, delay: Math.min(delay, 0.18), ease: [0.22, 1, 0.36, 1] }}
    className={className}>{children}</motion.div>;
}

function BrowserMockup({ kind }: { kind: string }) {
  if (kind === 'erp') return <div className="h-full bg-[#edf2f8] p-3">
    <div className="mb-2 flex justify-between rounded-lg bg-[#20324e] px-3 py-2 text-[9px] font-semibold text-white"><span>SANTYA ERP</span><span>Visão geral • Gestão</span></div>
    <div className="grid grid-cols-3 gap-2"><div className="col-span-2 rounded-lg bg-[#233d62] p-3 text-white"><span className="text-[9px] text-[#e2b77b]">DASHBOARD</span><div className="mt-2 text-lg font-semibold">Seu negócio em movimento.</div><div className="mt-1 h-2 w-3/4 rounded-full bg-white/20"/></div><div className="rounded-lg bg-white p-3"><div className="text-[9px] text-slate-500">OPERAÇÃO</div><div className="mt-2 text-2xl font-bold text-[#20324e]">24</div><div className="mt-1 h-1.5 rounded bg-[#e7b979]/50"/></div></div>
    <div className="mt-2 grid grid-cols-3 gap-2">{[0,1,2].map(i=><div key={i} className="rounded-lg bg-white p-3"><div className="mb-2 h-1.5 w-1/2 rounded bg-slate-200"/><div className="h-5 w-2/3 rounded bg-[#d5dfe9]"/><div className="mt-3 h-1.5 rounded bg-[#e7b979]/70"/></div>)}</div>
  </div>;
  if (kind === 'website') return <div className="relative h-full overflow-hidden bg-[#F4EDE2] p-5"><div className="flex items-center justify-between border-b border-[#ae9b80]/30 pb-3 text-xs font-semibold text-[#28354c]"><span>ESTÚDIO</span><span className="text-[9px]">SOBRE • SERVIÇOS • CONTATO</span></div><div className="mt-8 max-w-[70%] font-serif text-[26px] leading-[1.1] text-[#273950]">Uma presença que inspira confiança.</div><div className="mt-4 h-2 w-1/2 rounded bg-[#c2b3a0]"/><div className="mt-2 h-2 w-2/5 rounded bg-[#d5cbbd]"/><div className="mt-5 h-6 w-28 rounded bg-[#b8742a]"/><div className="absolute -bottom-7 -right-5 h-48 w-36 rotate-[-18deg] rounded-t-[100px] bg-gradient-to-br from-[#c69b64] via-[#a87642] to-[#304765] shadow-xl"/></div>;
  return <div className="h-full bg-[#f4f7fa] p-3"><div className="flex justify-between rounded-lg bg-[#1f3352] px-3 py-3 text-xs font-bold text-white"><span>PORTAL</span><span className="text-[9px]">Área restrita</span></div><div className="mt-3 text-xs font-semibold text-[#273a55]">Painel de oportunidades</div><div className="mt-2 grid grid-cols-3 gap-2">{[0,1,2].map(i=><div key={i} className="rounded-lg bg-white p-2"><div className="h-12 rounded-md bg-gradient-to-br from-[#b6c9d9] to-[#637c93]"/><div className="mt-2 h-1.5 rounded bg-slate-200"/><div className="mt-2 h-1.5 w-2/3 rounded bg-[#e8c592]"/></div>)}</div><div className="mt-3 h-8 rounded-lg bg-white"/></div>;
}

export default function AgencyLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nome: '', servico: '', mensagem: '' });
  const goWhatsApp = (source = 'site') => whatsapp(`Olá! Conheci a SantyaTech pelo ${source} e gostaria de solicitar um orçamento.`);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      'Olá, SantyaTech! Gostaria de solicitar um orçamento.',
      `Nome: ${form.nome.trim()}`,
      `Serviço: ${form.servico}`,
      `Projeto: ${form.mensagem.trim() || 'Gostaria de conversar sobre as possibilidades.'}`
    ].join('\n');
    window.open(whatsapp(body), '_blank', 'noopener,noreferrer');
  };

  return <div className="min-h-screen bg-[#f7f5f0] text-[#22334c]">
    <header className="sticky top-0 z-50 border-b border-[#21334a]/10 bg-[#faf8f4]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
        <a href="/" aria-label="SantyaTech, início" className="group flex items-center gap-2">
          <img src="/brand/santya-logo-horizontal-transparent.png" alt="Santya" className="h-12 w-auto max-w-[170px] object-contain" />
          <span className="border-l border-[#20324E]/25 pl-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#B8742A]">TECH</span>
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navigation.map(item=><a key={item.label} href={item.href} className="text-[13px] font-semibold text-[#34445c] transition hover:text-[#B8742A]">{item.label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex"><a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram da SantyaTech, @santyatech" className="hidden items-center gap-2 rounded-xl px-2 py-3 text-xs font-semibold text-[#33455e] transition-colors duration-200 hover:text-[#b8742a] xl:inline-flex"><Instagram size={18} aria-hidden="true"/> @santyatech</a><a className={buttonGold} href="#contato">Solicitar orçamento <ArrowUpRight size={16}/></a></div>
        <button type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)} className="rounded-xl border border-[#20324E]/15 p-2.5 lg:hidden">{menuOpen?<X size={22}/>:<Menu size={22}/>}</button>
      </div>
      {menuOpen && <nav aria-label="Menu móvel" className="space-y-1 border-t border-slate-200 bg-[#faf8f4] px-5 py-4 lg:hidden">{navigation.map(item=><a key={item.label} className="block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-[#ede7dc]" href={item.href} onClick={()=>setMenuOpen(false)}>{item.label}</a>)}<a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-[#a66d2e]"><Instagram size={17}/> Instagram @santyatech</a><a href="#contato" onClick={()=>setMenuOpen(false)} className="mt-3 block rounded-xl bg-[#20324E] px-4 py-3 text-center text-sm font-semibold text-white">Pedir orçamento</a></nav>}
    </header>

    <main>
      <section className="relative isolate overflow-hidden bg-[#172941] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70" style={{background:'radial-gradient(circle at 75% 22%, rgba(48,101,159,.45), transparent 36%), radial-gradient(circle at 30% 100%, rgba(184,116,42,.15), transparent 36%)'}}/>
        <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-72 h-[700px] w-[700px] rounded-full border border-[#e8bd7f]/10"/>
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-20 pt-20 md:px-8 md:pb-24 md:pt-24 lg:grid-cols-[.92fr_1.08fr] lg:gap-8 lg:px-12 lg:pb-32 lg:pt-28">
          <div>
            <Reveal><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e5bb78]/30 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.22em] text-[#e8be80]"><Sparkles size={14}/> Tecnologia feita para crescer com você</div></Reveal>
            <Reveal delay={0.08}><h1 className="max-w-[710px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[1.06] tracking-[-.055em]">Ideias que viram <span className="bg-gradient-to-r from-[#F3D5A8] via-[#E5B56B] to-[#C88C48] bg-clip-text text-transparent">experiências digitais.</span></h1></Reveal>
            <Reveal delay={0.15}><p className="mt-7 max-w-[570px] text-base leading-8 text-[#d1d9e5] md:text-lg">Criamos sites profissionais, lojas virtuais, sistemas personalizados e automações que valorizam sua marca e simplificam a rotina da empresa.</p></Reveal>
            <Reveal delay={0.22}><div className="mt-9 flex flex-wrap gap-3"><a href="#contato" className={buttonGold}>Quero tirar meu projeto do papel <ArrowUpRight size={18}/></a><a href="#projetos" className={buttonOutline}>Conhecer projetos <ArrowRight size={17}/></a></div></Reveal>
            <Reveal delay={0.28}><div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs text-[#cbd5e2]"><span className="inline-flex items-center gap-2"><Check size={15} className="text-[#E7BB76]"/> Projetos sob medida</span><span className="inline-flex items-center gap-2"><Check size={15} className="text-[#E7BB76]"/> Experiência responsiva</span><span className="inline-flex items-center gap-2"><Check size={15} className="text-[#E7BB76]"/> Atendimento em todo o Brasil</span></div></Reveal>
          </div>
          <Reveal delay={0.18} className="relative">
            <div aria-hidden="true" className="santya-hero-glow absolute -inset-4 rounded-[40px] bg-[#e7bb76]/10 blur-3xl"/>
            <div className="santya-hero-floating relative overflow-hidden rounded-[27px] border border-white/20 bg-[#f3f6fa] p-2 shadow-[0_34px_100px_rgba(0,0,0,.38)]">
              <div className="overflow-hidden rounded-[20px] bg-white">
                <div className="flex h-9 items-center gap-2 border-b border-slate-200 bg-[#f9fafc] px-4"><span className="h-2.5 w-2.5 rounded-full bg-[#ed9d91]"/><span className="h-2.5 w-2.5 rounded-full bg-[#e8c07e]"/><span className="h-2.5 w-2.5 rounded-full bg-[#88c8a7]"/><span className="ml-3 h-4 w-1/2 rounded-full bg-[#e8edf3]"/></div>
                <div className="bg-[#f4f7fb] p-3 sm:p-5"><div className="mb-3 flex items-center justify-between rounded-xl bg-[#1d3455] px-4 py-3 text-white"><span className="text-[10px] font-semibold tracking-[.16em]">SANTYA · DIGITAL STUDIO</span><span className="text-[9px] text-[#e9bd7c]">DASHBOARD CONCEITUAL</span></div><div className="grid grid-cols-6 gap-3"><div className="col-span-4 rounded-xl bg-white p-4 text-[#233c59] shadow-sm"><div className="text-[10px] font-medium text-[#b8742a]">EXPERIÊNCIA DIGITAL</div><div className="mt-2 text-lg font-bold sm:text-2xl">Seu próximo nível começa aqui.</div><div className="mt-4 h-2 w-4/5 rounded bg-slate-100"/><div className="mt-2 h-2 w-3/5 rounded bg-slate-100"/><div className="mt-5 flex h-20 items-end gap-2 sm:h-28">{[35,48,58,43,70,76,95].map((h,i)=><div key={i} className="santya-chart-bar flex-1 rounded-t-md bg-gradient-to-t from-[#294567] to-[#d8a35c]" style={{height:`${h}%`, animationDelay: `${i * -0.48}s`}}/>)}</div></div><div className="col-span-2 space-y-3"><div className="rounded-xl bg-white p-3 shadow-sm"><Layers3 className="text-[#b8742a]" size={20}/><div className="mt-3 h-2 w-2/3 rounded bg-slate-200"/><div className="mt-2 h-2 w-1/2 rounded bg-slate-100"/></div><div className="rounded-xl bg-white p-3 shadow-sm"><Zap className="text-[#b8742a]" size={20}/><div className="mt-3 h-2 w-4/5 rounded bg-slate-200"/><div className="mt-2 h-2 w-1/2 rounded bg-slate-100"/></div></div></div></div>
              </div>
            </div>
            <div className="santya-hero-badge absolute -bottom-6 -left-2 hidden items-center gap-3 rounded-2xl border border-white/20 bg-white p-4 text-[#20324e] shadow-xl sm:flex"><div className="rounded-xl bg-[#f7ead7] p-2"><ShieldCheck size={20} className="text-[#b8742a]"/></div><div className="text-xs"><div className="font-bold">Tecnologia com propósito</div><div className="mt-0.5 text-slate-500">Do conceito à experiência</div></div></div>
          </Reveal>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-24 bg-[#f7f5f0] py-20 md:py-28"><div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12"><Reveal><div className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#a16a2f]">O que fazemos</div><div className="flex flex-wrap items-end justify-between gap-6"><h2 className="max-w-3xl text-[clamp(2.2rem,4.2vw,4rem)] font-semibold leading-[1.1] tracking-[-.045em]">Soluções digitais que trabalham <span className="text-[#b8742a]">a favor do seu negócio.</span></h2><p className="max-w-sm text-sm leading-7 text-[#617087]">Da primeira página de um site até uma plataforma completa, cada projeto começa pela necessidade real da sua empresa.</p></div></Reveal><div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{services.map((service,i)=><Reveal delay={i*0.07} key={service.name}><a href="#contato" className="group flex h-full flex-col rounded-[26px] border border-[#ddd8d0] bg-white p-6 shadow-[0_14px_45px_rgba(32,50,78,.04)] transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-[#ddb479] hover:shadow-[0_18px_42px_rgba(32,50,78,.1)]"><div className="flex items-start justify-between"><div className="rounded-2xl bg-[#f6eade] p-3 text-[#a46a2b]"><service.icon size={27}/></div><span className="text-xs tracking-widest text-[#b3b0a9]">{service.number}</span></div><h3 className="mt-8 text-[22px] font-semibold leading-tight">{service.name}</h3><p className="mt-3 flex-1 text-sm leading-7 text-[#64718a]">{service.text}</p><div className="mt-6 flex flex-wrap gap-1.5">{service.keywords.map(keyword=><span key={keyword} className="rounded-full bg-[#f4f2ee] px-2.5 py-1 text-[10px] font-semibold text-[#626b7b]">{keyword}</span>)}</div><div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#a66d2e]">Conversar sobre esse serviço <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></div></a></Reveal>)}</div></div></section>

      <section id="projetos" className="scroll-mt-24 bg-white py-20 md:py-28"><div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12"><Reveal><div className="text-xs font-bold uppercase tracking-[.22em] text-[#a16a2f]">Nosso universo</div><h2 className="mt-4 max-w-3xl text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-[1.1] tracking-[-.045em]">Do visual ao funcional. <span className="text-[#b8742a]">Tudo conectado.</span></h2><p className="mt-5 max-w-2xl text-sm leading-7 text-[#64718a]">Conheça nosso produto de gestão e exemplos ilustrativos de tipos de projetos que desenvolvemos. As telas conceituais não representam clientes reais.</p></Reveal><div className="mt-12 grid gap-6 lg:grid-cols-3">{projects.map((project,i)=><Reveal delay={i*0.08} key={project.name}><article className="group overflow-hidden rounded-[26px] border border-slate-200 bg-[#fafbfc] shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg"><div className="h-[240px] overflow-hidden border-b border-[#e4e8ed] p-4"><div className="h-full overflow-hidden rounded-xl border border-slate-200 shadow-[0_8px_32px_rgba(32,50,78,.12)] transition duration-500 group-hover:scale-[1.03]"><BrowserMockup kind={project.kind}/></div></div><div className="p-6"><div className="text-[10px] font-bold tracking-[.2em] text-[#a16a2f]">{project.category}</div><h3 className="mt-3 text-2xl font-semibold">{project.name}</h3><p className="mt-3 min-h-[68px] text-sm leading-7 text-[#64718a]">{project.description}</p><a href={project.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a16a2f] hover:underline">{project.action}<ArrowUpRight size={17}/></a></div></article></Reveal>)}</div></div></section>

      <section className="bg-[#20324E] py-14 text-white"><div className="mx-auto grid max-w-[1440px] gap-6 px-5 md:grid-cols-3 md:px-8 lg:px-12"><div className="flex items-start gap-4"><MonitorSmartphone className="shrink-0 text-[#edbd78]" size={28}/><div><h3 className="font-semibold">Pensado para todas as telas</h3><p className="mt-2 text-sm leading-6 text-[#c5cfde]">Experiências que funcionam no celular, tablet e computador.</p></div></div><div className="flex items-start gap-4"><Search className="shrink-0 text-[#edbd78]" size={28}/><div><h3 className="font-semibold">Estrutura preparada para SEO</h3><p className="mt-2 text-sm leading-6 text-[#c5cfde]">Boas práticas técnicas para ajudar seu negócio a ser encontrado.</p></div></div><div className="flex items-start gap-4"><Database className="shrink-0 text-[#edbd78]" size={28}/><div><h3 className="font-semibold">Soluções sob medida</h3><p className="mt-2 text-sm leading-6 text-[#c5cfde]">Integrações e funcionalidades definidas de acordo com o projeto.</p></div></div></div></section>

      <section id="processo" className="scroll-mt-24 bg-[#f7f5f0] py-20 md:py-28"><div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12"><Reveal><div className="text-xs font-bold uppercase tracking-[.22em] text-[#a16a2f]">Nosso processo</div><h2 className="mt-4 text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-[1.1] tracking-[-.045em]">Da sua ideia até <span className="text-[#b8742a]">o lançamento.</span></h2></Reveal><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{processSteps.map((step,i)=><Reveal delay={i*.07} key={step.no}><div className="h-full rounded-[24px] border border-[#e5ded3] bg-white p-6"><div className="text-4xl font-semibold text-[#d7a666]">{step.no}</div><h3 className="mt-7 text-lg font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-[#66748a]">{step.body}</p>{i<3&&<ChevronRight className="mt-5 text-[#c38b4c]"/>}</div></Reveal>)}</div></div></section>

      <section id="contato" className="scroll-mt-24 bg-white py-20 md:py-28"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-20 lg:px-12"><Reveal><div className="text-xs font-bold uppercase tracking-[.22em] text-[#a16a2f]">Vamos conversar?</div><h2 className="mt-4 max-w-xl text-[clamp(2.3rem,4.3vw,4rem)] font-semibold leading-[1.1] tracking-[-.045em]">Sua próxima grande ideia pode começar <span className="text-[#b8742a]">aqui.</span></h2><p className="mt-6 max-w-lg text-base leading-8 text-[#64718a]">Conte o que vc precisa. Vamos entender seu projeto e preparar uma proposta de acordo com seu objetivo.</p><a href={goWhatsApp()} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#9b632b] hover:underline"><MessageCircle size={19}/> Conversar pelo WhatsApp <ArrowUpRight size={16}/></a><p className="mt-5 text-sm text-[#68778d]">Ou escreva para <a href={`mailto:${email}`} className="font-semibold text-[#20324E] underline">{email}</a></p><a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#e5ded3] bg-[#faf8f4] px-4 py-3 text-sm font-semibold text-[#20324E] transition-colors duration-200 hover:border-[#d7a666] hover:text-[#a16a2f]"><Instagram size={18} aria-hidden="true"/> Acompanhe no Instagram <span className="text-[#a16a2f]">@santyatech</span><ArrowUpRight size={15}/></a></Reveal><Reveal delay={.12}><form onSubmit={submit} className="rounded-[30px] border border-[#e4ded4] bg-[#f8f6f2] p-6 shadow-[0_20px_65px_rgba(32,50,78,.08)] md:p-9"><div className="text-xl font-semibold">Peça seu orçamento</div><p className="mt-2 text-sm text-[#65738a]">O formulário prepara uma mensagem para enviar pelo WhatsApp.</p><div className="mt-7 grid gap-5"><label className="text-sm font-semibold">Seu nome *<input required maxLength={100} autoComplete="name" value={form.nome} onChange={e=>setForm({...form,nome:e.target.value})} placeholder="Como podemos te chamar?" className="mt-2 w-full rounded-xl border border-[#d9dfe7] bg-white px-4 py-3.5 text-sm font-normal outline-none focus:border-[#b8742a] focus:ring-2 focus:ring-[#b8742a]/15"/></label><label className="text-sm font-semibold">O que vc precisa? *<select required value={form.servico} onChange={e=>setForm({...form,servico:e.target.value})} className="mt-2 w-full rounded-xl border border-[#d9dfe7] bg-white px-4 py-3.5 text-sm font-normal outline-none focus:border-[#b8742a] focus:ring-2 focus:ring-[#b8742a]/15"><option value="">Escolha um serviço</option>{services.map(s=><option key={s.name} value={s.name}>{s.name}</option>)}<option value="Ainda não sei">Ainda não sei / Quero orientação</option></select></label><label className="text-sm font-semibold">Conte sua ideia<textarea rows={4} maxLength={1500} value={form.mensagem} onChange={e=>setForm({...form,mensagem:e.target.value})} placeholder="Me fale um pouco sobre seu projeto..." className="mt-2 w-full resize-y rounded-xl border border-[#d9dfe7] bg-white px-4 py-3.5 text-sm font-normal outline-none focus:border-[#b8742a] focus:ring-2 focus:ring-[#b8742a]/15"/></label></div><button type="submit" className={`${buttonGold} mt-6 w-full`}>Preparar mensagem no WhatsApp <ArrowUpRight size={18}/></button><p className="mt-4 text-center text-xs leading-5 text-[#798398]">Os dados são usados apenas para compor sua mensagem no WhatsApp. Não são enviados automaticamente.</p></form></Reveal></div></section>
    </main>
    <footer className="bg-[#17273f] py-10 text-white"><div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-5 md:px-8 lg:px-12"><div><div className="text-lg font-bold tracking-[.12em]">SANTYA <span className="text-[#e7bb76]">TECH</span></div><p className="mt-2 text-xs text-[#c8d1dd]">Sites, sistemas e soluções digitais. Uberlândia/MG • Brasil.</p></div><div className="flex flex-wrap gap-5 text-xs text-[#c8d1dd]"><a href="#servicos" className="hover:text-white">Serviços</a><a href="/erp" className="hover:text-white">Santya ERP</a><a href="#contato" className="hover:text-white">Contato</a><a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-[#e7bb76]"><Instagram size={15} aria-hidden="true"/> @santyatech</a><a href="/privacidade" className="hover:text-white">Privacidade</a></div><div className="text-xs text-[#aab8cc]">© {new Date().getFullYear()} SantyaTech</div></div></footer>
  </div>;
}
