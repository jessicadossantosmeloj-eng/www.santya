import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useMotionValueEvent } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeAlert,
  Bell,
  BrainCircuit,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Crown,
  FileSignature,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  MonitorSmartphone,
  ReceiptText,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundCheck,
  Users2,
  WalletCards,
  X,
  Zap,
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

const gold = '#B8742A';
const goldDeep = '#8F571C';
const goldSoft = '#D9A15B';
const cream = '#F4EDE2';
const slate = '#20324E';
const slateSoft = '#2B4164';
const slateDeep = '#16253D';
const textDark = '#213049';
const textMuted = '#52627C';
const textLightMenu = '#5E6778';

// Trocar 34 8414-9487 pelo número oficial da Santya, se necessário.
const whatsappUrl = 'https://wa.me/553484149487?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20Sistema%20Santya';
const sectionMap: Record<string, string> = {
  plataforma: 'plataforma',
  recursos: 'recursos',
  solucoes: 'solucoes',
  beneficios: 'beneficios',
  demonstracao: 'demonstracao',
  contato: 'contato',
};

const loginUrl = 'https://app.santya.com.br';
const contactEmail = 'contato@santya.com.br';
const demoMailto = 'mailto:contato@santya.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20demonstra%C3%A7%C3%A3o%20Santya';
const siteContainer = 'mx-auto w-full max-w-7xl px-4 md:px-6 xl:max-w-[1440px] xl:px-8 2xl:max-w-[1600px]';
const demoSegments = [
  'Construtora',
  'Incorporadora',
  'Imobiliária',
  'Prestador de serviços',
  'Comércio',
  'Indústria',
  'Escritório',
  'Outro',
];

const menuItems = [
  { key: 'plataforma', label: 'Plataforma', hasMega: true },
  { key: 'recursos', label: 'Recursos', hasMega: true },
  { key: 'solucoes', label: 'Soluções', hasMega: true },
  { key: 'beneficios', label: 'Benefícios' },
  { key: 'demonstracao', label: 'Demonstração' },
  { key: 'contato', label: 'Contato' },
];

const heroSlides = [
  {
    eyebrow: 'SANTYA • PLATAFORMA ERP INTELIGENTE',
    title: 'ERP inteligente para empresas que precisam controlar vendas, contratos, financeiro e operação.',
    text:
      'A Santya centraliza CRM, agenda, tarefas, fechamentos, contratos, clientes, financeiro, boletos, baixas, inadimplência, diretoria, notificações e automações em uma plataforma premium, simples de usar e pronta para escalar.',
    primary: { label: 'Solicitar demonstração', type: 'scroll', value: 'demonstracao' },
    secondary: { label: 'Entrar no sistema', type: 'url', value: loginUrl },
  },
  {
    eyebrow: 'GESTÃO COMERCIAL, FINANCEIRA E OPERACIONAL',
    title: 'Uma operação completa, conectada do lead ao financeiro.',
    text:
      'Comercial, contratos, clientes e financeiro trabalham no mesmo fluxo, enquanto gestores e diretoria acompanham metas, pendências e resultados em tempo real.',
    primary: { label: 'Conhecer a plataforma', type: 'scroll', value: 'plataforma' },
    secondary: { label: 'Conhecer módulos', type: 'scroll', value: 'recursos' },
  },
  {
    eyebrow: 'AUTOMAÇÃO + ESCALA + VISÃO GERENCIAL',
    title: 'ERP empresarial com experiência premium e simples de usar.',
    text:
      'Organize processos, reduza tarefas manuais e dê ao time a clareza necessária para executar melhor, com acesso seguro no computador ou no celular.',
    primary: { label: 'Ver a Santya na prática', type: 'scroll', value: 'demonstracao' },
    secondary: { label: 'Explorar módulos', type: 'scroll', value: 'plataforma' },
  },
];

const completeSystemCards = [
  {
    icon: Users2,
    title: 'CRM e Leads',
    text: 'Centralize oportunidades, histórico, funil, responsáveis e próximos passos da jornada comercial.',
    target: 'resource-0',
  },
  {
    icon: CalendarDays,
    title: 'Agenda e Tarefas',
    text: 'Organize compromissos, visitas, responsáveis, prazos e pendências de cada equipe.',
    target: 'resource-1',
  },
  {
    icon: Target,
    title: 'Fechamentos',
    text: 'Acompanhamento de andamento, previsão, status e evolução comercial com mais clareza.',
    target: 'resource-2',
  },
  {
    icon: FileSignature,
    title: 'Contratos e Assinaturas',
    text: 'Acompanhe contratos, status de assinatura, pendências, documentos e etapas críticas do fechamento.',
    target: 'resource-3',
  },
  {
    icon: UserRoundCheck,
    title: 'Clientes',
    text: 'Centralize compradores, histórico, contratos, unidades, parcelas e relacionamento em uma base organizada.',
    target: 'resource-4',
  },
  {
    icon: WalletCards,
    title: 'Financeiro',
    text: 'Contas a receber, parcelas, vencimentos, status de pagamento e visão financeira integrada à operação.',
    target: 'resource-5',
  },
  {
    icon: ReceiptText,
    title: 'Boletos e Baixas',
    text: 'Emissão de boletos, pagamentos, baixas automáticas e manuais, conciliação e histórico em um só fluxo.',
    target: 'resource-6',
  },
  {
    icon: BadgeAlert,
    title: 'Inadimplência',
    text: 'Identifique parcelas vencidas, clientes em atraso e pendências com leitura simples, rápida e gerencial.',
    target: 'resource-7',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Diretoria e BI',
    text: 'Metas, ranking, performance e indicadores consolidados para a diretoria em tempo real.',
    target: 'resource-8',
  },
  {
    icon: Home,
    title: 'Empreendimentos',
    text: 'Organize empreendimentos, unidades, disponibilidade, contratos e a visão comercial da operação.',
    target: 'resource-9',
  },
  {
    icon: Building2,
    title: 'Área do Corretor',
    text: 'Ofereça uma experiência profissional para corretores acompanharem oportunidades e processos.',
    target: 'resource-10',
  },
  {
    icon: Settings2,
    title: 'Configurações e Permissões',
    text: 'Defina acessos, perfis, regras e parâmetros para cada área trabalhar com mais segurança.',
    target: 'beneficios',
  },
  {
    icon: Zap,
    title: 'Automações e WhatsApp',
    text: 'Automatize avisos, notificações e comunicações importantes sem perder o contexto da operação.',
    target: 'resource-11',
  },
  {
    icon: MonitorSmartphone,
    title: 'PWA para PC e Celular',
    text: 'Uso leve, moderno e prático no navegador ou como app instalado.',
    target: 'beneficios',
  },
];

const featureDetails = [
  {
    eyebrow: 'COMERCIAL',
    title: 'CRM e Leads',
    detailTitle: 'Transforme oportunidades em vendas acompanhadas.',
    text: 'Cada lead entra com origem, histórico, responsável, status e próximos passos, para a equipe não perder atendimento nem prazo.',
    bullets: ['Histórico completo', 'Próximo passo claro', 'Gestão acompanha tudo'],
    flow: ['Lead recebido', 'Atendimento', 'Fechamento'],
    icon: Users2,
  },
  {
    eyebrow: 'ROTINA',
    title: 'Agenda e Tarefas',
    detailTitle: 'Mantenha a equipe produtiva e cada compromisso no radar.',
    text: 'Visitas, retornos, tarefas, prazos e responsáveis ficam organizados para a rotina comercial avançar sem pontos cegos.',
    bullets: ['Prazos claros', 'Responsáveis definidos', 'Rotina acompanhada'],
    flow: ['Tarefa criada', 'Prazo definido', 'Execução'],
    icon: CalendarDays,
  },
  {
    eyebrow: 'RESULTADO',
    title: 'Fechamentos',
    detailTitle: 'Conduza cada negociação até o resultado.',
    text: 'Acompanhe evolução, valores, previsões e status para priorizar oportunidades e dar previsibilidade às vendas.',
    bullets: ['Pipeline claro', 'Valor negociado', 'Resultado visível'],
    flow: ['Negociação', 'Aprovação', 'Fechamento'],
    icon: Target,
  },
  {
    eyebrow: 'CONTRATOS',
    title: 'Contratos e Assinaturas',
    detailTitle: 'Leve o fechamento ao contrato com menos atrito.',
    text: 'Documentos, assinaturas, pendências e histórico permanecem conectados ao cliente e à negociação.',
    bullets: ['Documentos', 'Clicksign', 'Pendências'],
    flow: ['Contrato', 'Assinatura', 'Finalização'],
    icon: FileSignature,
  },
  {
    eyebrow: 'RELACIONAMENTO',
    title: 'Clientes',
    detailTitle: 'Tenha todo o relacionamento com o cliente em uma só visão.',
    text: 'Cadastro, documentos, contratos, unidades e histórico financeiro ficam acessíveis para atender com mais contexto.',
    bullets: ['Cadastro completo', 'Histórico', 'Financeiro do cliente'],
    flow: ['Cliente', 'Contratos', 'Parcelas'],
    icon: UserRoundCheck,
  },
  {
    eyebrow: 'FINANCEIRO',
    title: 'Financeiro',
    detailTitle: 'Transforme vendas em recebimentos acompanhados.',
    text: 'Contas a receber, parcelas, vencimentos e pagamentos ficam conectados à operação para uma visão financeira confiável.',
    bullets: ['Contas a receber', 'Vencimentos', 'Movimento financeiro'],
    flow: ['Parcela', 'Pagamento', 'Baixa'],
    icon: CircleDollarSign,
  },
  {
    eyebrow: 'RECEBIMENTOS',
    title: 'Boletos e Baixas',
    detailTitle: 'Acompanhe o ciclo do boleto até a baixa.',
    text: 'Emissão, status, pagamentos, conciliação e baixas manuais ou automáticas compartilham o mesmo histórico.',
    bullets: ['Boletos', 'Baixas', 'Conciliação'],
    flow: ['Boleto', 'Pagamento', 'Baixa'],
    icon: ReceiptText,
  },
  {
    eyebrow: 'COBRANÇA',
    title: 'Inadimplência',
    detailTitle: 'Antecipe riscos e organize a cobrança.',
    text: 'Visualize parcelas vencidas, clientes em atraso e pendências financeiras para agir com prioridade e contexto.',
    bullets: ['Parcelas vencidas', 'Clientes em atraso', 'Cobrança'],
    flow: ['Vencimento', 'Alerta', 'Regularização'],
    icon: BadgeAlert,
  },
  {
    eyebrow: 'GESTÃO',
    title: 'Diretoria e BI',
    detailTitle: 'Decida com a operação inteira diante dos olhos.',
    text: 'Metas, ranking, vendas, visitas, fechamentos e performance chegam à diretoria em indicadores claros e atuais.',
    bullets: ['Metas', 'Ranking', 'Indicadores'],
    flow: ['Dados', 'Dashboard', 'Decisão'],
    icon: ChartNoAxesCombined,
  },
  {
    eyebrow: 'OPERAÇÃO',
    title: 'Empreendimentos',
    detailTitle: 'Organize empreendimentos e unidades em uma visão única.',
    text: 'Controle unidades, disponibilidade, vínculo com contratos e visão comercial.',
    bullets: ['Unidades', 'Disponibilidade', 'Reservas'],
    flow: ['Empreendimento', 'Unidade', 'Venda'],
    icon: Home,
  },
  {
    eyebrow: 'CORRETORES',
    title: 'Área do Corretor',
    detailTitle: 'Uma experiência profissional para parceiros e corretores.',
    text: 'Ofereça informações, oportunidades e processos acompanhados.',
    bullets: ['Informação centralizada', 'Oportunidades', 'Processos'],
    flow: ['Acesso', 'Consulta', 'Acompanhamento'],
    icon: Building2,
  },
  {
    eyebrow: 'AUTOMAÇÃO',
    title: 'Automações',
    detailTitle: 'Menos trabalho manual e mais controle.',
    text: 'Use notificações, WhatsApp, alertas e automações para reduzir retrabalho.',
    bullets: ['WhatsApp', 'Notificações', 'Alertas'],
    flow: ['Evento', 'Automação', 'Aviso'],
    icon: Zap,
  },
];

const benefits = [
  'Operação comercial, financeira e operacional conectada',
  'Menos retrabalho e informação dispersa',
  'Contratos e recebimentos no mesmo fluxo',
  'Equipe mais produtiva e acompanhada',
  'Diretoria em tempo real',
  'Mais segurança para crescer e escalar',
];

const megaMenu = {
  plataforma: {
    eyebrow: 'ecossistema santya',
    title: 'Plataforma ERP Inteligente',
    text: 'Uma operação completa para conectar gestão comercial, contratos, clientes, financeiro e diretoria em uma estrutura elegante, segura e pronta para escalar.',
    actionLabel: 'Conhecer plataforma',
    actionTarget: 'plataforma',
    cards: [
      { label: 'Operação completa', description: 'Comercial, contratos, clientes e financeiro conectados em uma única plataforma.', target: 'erp-completo' },
      { label: 'Gestão comercial', description: 'CRM, agenda, tarefas e fechamentos com contexto do início ao fim.', target: 'resource-0' },
      { label: 'Diretoria em tempo real', description: 'Metas, ranking, BI e indicadores consolidados para decisões rápidas.', target: 'resource-8' },
      { label: 'PWA para PC e celular', description: 'Mobilidade e experiência consistente no navegador ou como aplicativo.', target: 'beneficios' },
    ],
  },
  recursos: {
    eyebrow: 'recursos principais',
    title: 'Módulos para toda a operação',
    text: 'A Santya centraliza a gestão comercial, financeira e operacional com módulos que compartilham dados e contexto.',
    actionLabel: 'Conhecer módulos',
    actionTarget: 'recursos',
    cards: [
      { label: 'CRM, agenda e tarefas', description: 'Leads, compromissos, responsáveis, prazos e rotina organizada por equipe.', target: 'resource-0' },
      { label: 'Contratos e clientes', description: 'Assinaturas, documentos, compradores, unidades e histórico centralizados.', target: 'resource-3' },
      { label: 'Financeiro e inadimplência', description: 'Boletos, contas a receber, baixas, vencimentos e pendências financeiras.', target: 'resource-5' },
      { label: 'Automações e WhatsApp', description: 'Notificações e comunicações relevantes para cada etapa da operação.', target: 'resource-11' },
    ],
  },
  solucoes: {
    eyebrow: 'soluções por operação',
    title: 'Para operações que precisam de controle real',
    text: 'Para construtoras, imobiliárias e empresas que precisam controlar o comercial, contratos, recebimentos e indicadores com profissionalismo.',
    actionLabel: 'Explorar soluções',
    actionTarget: 'solucoes',
    cards: [
      { label: 'Construtoras', description: 'Empreendimentos, unidades, contratos, recebimentos e visão gerencial.', target: 'solucoes' },
      { label: 'Imobiliárias', description: 'Corretores, oportunidades, clientes e processos em um fluxo integrado.', target: 'solucoes' },
      { label: 'Equipes comerciais', description: 'Rotina organizada, metas, tarefas e acompanhamento da performance.', target: 'solucoes' },
      { label: 'Operações em escala', description: 'Permissões, automações e indicadores para crescer com mais controle.', target: 'solucoes' },
    ],
  },
} as const;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openExternal(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openWhatsApp() {
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

function buildWhatsAppUrl(message: string) {
  const baseUrl = whatsappUrl.split('?')[0];
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

function goToTarget(target: string) {
  if (target.startsWith('http')) {
    openExternal(target);
    return;
  }

  scrollToId(target);
}

function handleCta(type: 'scroll' | 'url', value: string) {
  if (type === 'url') {
    openExternal(value);
    return;
  }

  goToTarget(value);
}

function SantyaBrand({ size = 'md', withWordmark = true, tagline = false }: { size?: 'sm' | 'md' | 'lg'; withWordmark?: boolean; tagline?: boolean }) {
  const config = {
    sm: 'h-[34px] sm:h-10',
    md: 'h-[52px]',
    lg: 'h-[60px]',
  }[size];

  if (!withWordmark) {
    return (
      <img src="/brand/santya-symbol-transparent.png" alt="Santya" className={`${config} w-auto shrink-0 object-contain`} />
    );
  }

  return (
    <span className="flex min-w-0 flex-col items-center justify-center">
      <img
        src="/brand/santya-logo-horizontal-transparent.png"
        alt="Santya"
        className={`${config} w-auto max-w-full shrink-0 object-contain`}
      />
      {tagline && (
        <span className="mt-1 hidden whitespace-nowrap text-center text-[9px] font-medium uppercase tracking-[0.32em] text-slate-500/80 sm:block">
          Soluções empresariais inteligentes
        </span>
      )}
    </span>
  );
}

function useHeroRotation(length: number) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((prev) => (prev + 1) % length), 6500);
    return () => window.clearInterval(id);
  }, [length]);

  return { active, setActive };
}

function GlowOrb({ className = '' }: { className?: string }) {
  return <div className={`absolute rounded-full blur-3xl opacity-40 ${className}`} style={{ background: `radial-gradient(circle, ${goldSoft} 0%, rgba(217,161,91,0.22) 36%, transparent 72%)` }} />;
}

function AnimatedCounter({ to, suffix = '', className = '' }: { to: number; suffix?: string; className?: string }) {
  const value = useMotionValue(Math.max(0, Math.round(to * 0.72)));
  const [display, setDisplay] = useState(Math.max(0, Math.round(to * 0.72)).toLocaleString('pt-BR'));

  useMotionValueEvent(value, 'change', (latest) => {
    setDisplay(Math.round(latest).toLocaleString('pt-BR'));
  });

  useEffect(() => {
    let controls = animate(value, to, { duration: 1.25, ease: 'easeOut' });
    const interval = window.setInterval(() => {
      controls.stop();
      value.set(Math.max(0, Math.round(to * 0.9)));
      controls = animate(value, to, { duration: 0.9, ease: 'easeOut' });
    }, 8200);

    return () => {
      controls.stop();
      window.clearInterval(interval);
    };
  }, [to, value]);

  return <motion.span className={className}>{display}{suffix}</motion.span>;
}

function RealErpDashboardPreview() {
  const [cycleStep, setCycleStep] = useState(0);
  const erpScrollRef = useRef<HTMLDivElement | null>(null);
  const cardClass = 'min-w-0 overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.06)]';
  const navigation = ['Início', 'CRM', 'Agenda', 'Fechamentos', 'Contratos', 'Clientes', 'Financeiro', 'Diretoria', 'Empreendimentos', 'Configurações'];
  const activeNavigation = ['Início', 'CRM', 'Financeiro', 'Diretoria'][cycleStep % 4];
  const activeRadar = cycleStep % 4;
  const activeModule = (cycleStep + 1) % 4;
  const radarItems = [
    ['Tarefas atrasadas', '1', '#ef4444'],
    ['Primeiro contato atrasado', '0', '#94a3b8'],
    ['Visitas agendadas', '1', '#2563eb'],
    ['Leads do mês', '11', '#B8742A'],
  ];

  useEffect(() => {
    const interval = window.setInterval(() => setCycleStep((step) => step + 1), 2100);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = erpScrollRef.current;
    if (!container) return;
    const scrollContainer = container;

    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame: number | null = null;
    let loopTimer: number | null = null;
    let resumeTimer: number | null = null;
    let autoScrollUntil = 0;

    const clearMotion = () => {
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      if (loopTimer !== null) window.clearTimeout(loopTimer);
      animationFrame = null;
      loopTimer = null;
    };

    const canAutoScroll = () => mobileQuery.matches && !reducedMotionQuery.matches && scrollContainer.scrollWidth > scrollContainer.clientWidth;

    const scheduleNextLeg = (delay = 1400) => {
      if (!canAutoScroll()) return;
      if (loopTimer !== null) window.clearTimeout(loopTimer);
      loopTimer = window.setTimeout(startNextLeg, delay);
    };

    const animateTo = (target: number) => {
      const start = scrollContainer.scrollLeft;
      const distance = target - start;
      const duration = 8500;
      const startedAt = performance.now();

      if (Math.abs(distance) < 1) {
        scheduleNextLeg();
        return;
      }

      const tick = (now: number) => {
        if (!canAutoScroll()) {
          clearMotion();
          return;
        }

        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 0.5 - Math.cos(Math.PI * progress) / 2;
        autoScrollUntil = now + 160;
        scrollContainer.scrollLeft = start + distance * eased;

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(tick);
        } else {
          animationFrame = null;
          scheduleNextLeg();
        }
      };

      animationFrame = window.requestAnimationFrame(tick);
    };

    function startNextLeg() {
      if (!canAutoScroll()) return;
      const maxScroll = Math.max(0, scrollContainer.scrollWidth - scrollContainer.clientWidth);
      animateTo(scrollContainer.scrollLeft < maxScroll / 2 ? maxScroll : 0);
    }

    const pauseForInteraction = () => {
      if (!mobileQuery.matches) return;
      clearMotion();
      if (resumeTimer !== null) window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => scheduleNextLeg(0), 6500);
    };

    const handleScroll = () => {
      if (performance.now() > autoScrollUntil) pauseForInteraction();
    };

    const handleViewportChange = () => {
      clearMotion();
      if (resumeTimer !== null) window.clearTimeout(resumeTimer);
      if (canAutoScroll()) scheduleNextLeg(1800);
    };

    scrollContainer.addEventListener('pointerdown', pauseForInteraction, { passive: true });
    scrollContainer.addEventListener('touchstart', pauseForInteraction, { passive: true });
    scrollContainer.addEventListener('mouseenter', pauseForInteraction, { passive: true });
    scrollContainer.addEventListener('wheel', pauseForInteraction, { passive: true });
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    mobileQuery.addEventListener('change', handleViewportChange);
    reducedMotionQuery.addEventListener('change', handleViewportChange);
    scheduleNextLeg(1800);

    return () => {
      clearMotion();
      if (resumeTimer !== null) window.clearTimeout(resumeTimer);
      scrollContainer.removeEventListener('pointerdown', pauseForInteraction);
      scrollContainer.removeEventListener('touchstart', pauseForInteraction);
      scrollContainer.removeEventListener('mouseenter', pauseForInteraction);
      scrollContainer.removeEventListener('wheel', pauseForInteraction);
      scrollContainer.removeEventListener('scroll', handleScroll);
      mobileQuery.removeEventListener('change', handleViewportChange);
      reducedMotionQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);

  return (
    <motion.div
      role="img"
      aria-label="Prévia ilustrativa do ERP Santya"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.72, delay: 0.12 }}
      className="relative min-h-[620px] w-full max-w-full self-start overflow-hidden rounded-[36px] border border-slate-300/90 bg-[#dce3eb] p-1.5 shadow-[0_34px_110px_rgba(22,37,61,0.26)] md:min-h-[650px] xl:min-h-[690px] xl:-ml-2 xl:w-full 2xl:min-h-[720px] 2xl:-ml-4 2xl:w-[calc(100%+28px)]"
    >
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[#D9A15B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[#29466F]/30 blur-3xl" />
      <div ref={erpScrollRef} className="santya-erp-scroll absolute inset-1.5 z-10 overflow-x-auto overflow-y-hidden rounded-[30px] border border-white/80 bg-[#f1f5f9] text-slate-900 shadow-inner">
        <div className="h-full min-h-0 min-w-[760px] xl:min-w-full">
          <div className="sticky top-0 z-20 flex h-[60px] items-center gap-2.5 border-b border-slate-200 bg-white/95 px-3.5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] backdrop-blur-xl">
            <div className="flex shrink-0 items-center gap-2.5 pr-1">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] shadow-sm ring-1 ring-slate-100">
                <img src="/brand/santya-symbol-transparent.png" alt="" className="h-7 w-auto object-contain" />
              </div>
              <div>
                <div className="text-[12px] font-bold leading-none text-slate-800">Santya ERP</div>
                <div className="mt-1 text-[8px] uppercase tracking-[0.14em] text-slate-400">Gestão inteligente</div>
              </div>
            </div>

            <nav className="flex min-w-0 flex-1 items-center gap-0.5 overflow-hidden" aria-label="Navegação ilustrativa do ERP">
              {navigation.map((item) => (
                <motion.div
                  key={item}
                  animate={activeNavigation === item ? { opacity: 1, boxShadow: '0 5px 14px rgba(32,50,78,0.18)' } : { opacity: 0.72, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                  transition={{ duration: 0.45 }}
                  className={`shrink-0 rounded-full px-2 py-1.5 text-[8px] font-semibold ${activeNavigation === item ? (item === 'Início' ? 'bg-[#ea580c] text-white' : 'bg-[#20324E] text-white') : 'text-slate-500'}`}
                >
                  {item}
                </motion.div>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500">
                <Bell size={13} />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#B8742A]" />
              </div>
              <span className="text-[10px] font-semibold text-slate-600">Admin</span>
              <div className="flex items-center gap-1.5 rounded-[9px] bg-[#ea580c] px-2.5 py-2 text-[9px] font-semibold text-white shadow-sm">
                <LogOut size={11} /> Sair
              </div>
            </div>
          </div>

          <div className="grid h-[calc(100%_-_60px)] min-h-0 grid-rows-[146px_200px_minmax(178px,1fr)] gap-2 p-2.5 md:grid-rows-[146px_205px_minmax(178px,1fr)] xl:grid-rows-[146px_210px_minmax(182px,1fr)] 2xl:grid-rows-[146px_218px_minmax(190px,1fr)]">
            <div className="relative h-full min-h-0 overflow-hidden rounded-[18px] bg-[linear-gradient(120deg,#182A46_0%,#203A60_58%,#31557F_100%)] px-4 py-4 text-white shadow-[0_16px_42px_rgba(32,50,78,0.26)]">
              <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full border border-white/10" />
              <div className="absolute -right-4 -top-8 h-28 w-28 rounded-full border border-[#D9A15B]/20" />
              <div className="relative flex h-full items-center justify-between gap-5">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D9A15B]">Equipe comercial</div>
                  <h2 className="mt-1.5 text-[22px] font-semibold leading-none">Bem-vindo, Jessica</h2>
                  <p className="mt-1.5 text-[9px] text-white/65">Dashboard ERP • Perfil: admin</p>
                  <div className="mt-2 flex gap-2">
                    <div className="rounded-[8px] bg-[#D9A15B] px-3 py-1.5 text-[8px] font-semibold text-[#172236] shadow-sm">Abrir tarefas</div>
                    <div className="rounded-[8px] border border-white/20 bg-white/[0.06] px-3 py-1.5 text-[8px] font-semibold text-white">Ver todos os leads</div>
                  </div>
                </div>
                <div className="hidden w-[216px] grid-cols-2 gap-2 min-[720px]:grid">
                  {[
                    ['Leads do mês', '11'],
                    ['Visitas', '1'],
                    ['Fechamentos', '12'],
                    ['Pendências', '8'],
                  ].map(([label, value], index) => (
                    <motion.div key={label} animate={{ y: cycleStep % 4 === index ? -2 : 0, backgroundColor: cycleStep % 4 === index ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.07)' }} transition={{ duration: 0.4 }} className="rounded-[10px] border border-white/10 px-2.5 py-2">
                      <div className="text-[8px] text-white/55">{label}</div>
                      <AnimatedCounter to={Number(value)} className="mt-1 block text-[16px] font-semibold text-white" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid h-full min-h-0 grid-cols-3 gap-2.5">
              <div className={`${cardClass} flex h-full min-h-0 flex-col p-3`}>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-[12px] font-semibold text-slate-800">Performance do trimestre</h3>
                    <p className="mt-1 text-[8px] text-slate-400">Resultado acumulado</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-semibold text-emerald-700">Acima da meta</span>
                </div>
                <div className="mt-2.5 flex items-center gap-3">
                  <motion.div initial={{ rotate: -120, scale: 0.88, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} transition={{ duration: 1.3, ease: 'easeOut' }} className="relative h-[72px] w-[72px] shrink-0 rounded-full" style={{ background: 'conic-gradient(#16a34a 0deg 286deg, #D9A15B 286deg 330deg, #e2e8f0 330deg 360deg)' }}>
                    <div className="absolute inset-[7px] flex flex-col items-center justify-center rounded-full bg-white">
                      <AnimatedCounter to={199} suffix="%" className="text-[19px] font-bold text-slate-800" />
                      <span className="text-[7px] text-slate-400">meta atingida</span>
                    </div>
                  </motion.div>
                  <div className="grid flex-1 gap-1.5">
                    {[
                      ['Meta', 'R$ 1,0 mi'],
                      ['Atual', 'R$ 2,0 mi'],
                      ['Gap', 'R$ 0'],
                    ].map(([label, value], index) => (
                      <div key={label} className="flex items-center justify-between rounded-[9px] bg-slate-50 px-2.5 py-2">
                        <span className="text-[8px] text-slate-400">{label}</span>
                        <span className={`text-[9px] font-semibold ${index === 1 ? 'text-emerald-700' : 'text-slate-700'}`}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto grid grid-cols-3 gap-1.5 pt-2.5">
                  {[
                    ['Contratos', '42'],
                    ['Meta fin.', 'R$ 2,0 mi'],
                    ['Equipe', '8 ativos'],
                  ].map(([label, value]) => (
                    <div key={label} className="min-w-0 rounded-[9px] border border-slate-100 bg-slate-50 px-2 py-1.5">
                      <div className="truncate text-[7px] font-medium text-slate-400">{label}</div>
                      <div className="mt-0.5 truncate text-[8px] font-bold text-slate-700">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${cardClass} flex h-full min-h-0 flex-col p-3`}>
                <h3 className="text-[12px] font-semibold text-slate-800">Radar do mês</h3>
                <p className="mt-1 text-[8px] text-slate-400">Pontos de atenção da operação</p>
                <div className="mt-2.5 flex items-center gap-3">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} className="relative h-[74px] w-[74px] shrink-0 rounded-full" style={{ background: 'conic-gradient(#B8742A 0deg 305deg, #2563eb 305deg 333deg, #ef4444 333deg 360deg)' }}>
                    <div className="absolute inset-[9px] flex flex-col items-center justify-center rounded-full bg-white">
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} className="flex flex-col items-center">
                        <AnimatedCounter to={13} className="text-[19px] font-bold text-slate-800" />
                        <span className="text-[7px] text-slate-400">total</span>
                      </motion.div>
                    </div>
                  </motion.div>
                  <div className="min-w-0 flex-1 space-y-1.5">
                    {radarItems.map(([label, value, color], index) => (
                      <motion.div key={label} animate={{ x: activeRadar === index ? 3 : 0, backgroundColor: activeRadar === index ? `${color}12` : 'rgba(255,255,255,0)' }} transition={{ duration: 0.35 }} className="flex items-center justify-between gap-2 rounded-[7px] px-1.5 py-1 text-[8px]">
                        <div className="flex min-w-0 items-center gap-1.5 text-slate-500">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
                          <span className="truncate">{label}</span>
                        </div>
                        <motion.span animate={{ scale: activeRadar === index ? 1.16 : 1 }} className="font-semibold text-slate-700">{value}</motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto grid grid-cols-3 gap-1 pt-2">
                  {[
                    ['Contratos pend.', '7', '#B8742A'],
                    ['Boletos venc.', '9', '#ef4444'],
                    ['Assinaturas', '18', '#2563eb'],
                  ].map(([label, value, color]) => (
                    <div key={label} className="min-w-0 rounded-[8px] border border-slate-100 bg-slate-50 px-1.5 py-1">
                      <div className="flex min-w-0 items-center gap-1">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
                        <span className="truncate text-[7px] font-medium text-slate-500">{label}</span>
                      </div>
                      <span className="mt-0.5 block text-[9px] font-bold text-slate-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${cardClass} flex h-full min-h-0 flex-col p-3`}>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-[12px] font-semibold text-slate-800">Ritmo comercial</h3>
                    <p className="mt-1 text-[8px] text-slate-400">Evolução dos últimos 6 meses</p>
                  </div>
                  <span className="text-[9px] font-semibold text-emerald-700">+18,4%</span>
                </div>
                <div className="mt-2.5 rounded-[11px] bg-slate-50 px-2 pt-1">
                  <svg viewBox="0 0 220 82" className="h-[68px] w-full" role="img" aria-label="Gráfico de linha do ritmo comercial">
                    {[14, 36, 58].map((y) => <line key={y} x1="8" y1={y} x2="212" y2={y} stroke="#e2e8f0" strokeWidth="1" />)}
                    <motion.path d="M10 62 C35 58, 41 48, 54 52 S83 61, 94 42 S120 25, 136 34 S166 45, 178 21 S199 18, 211 10" fill="none" stroke="#B8742A" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0.35 }} animate={{ pathLength: [0, 1, 1], opacity: [0.35, 1, 1] }} transition={{ duration: 5.6, times: [0, 0.58, 1], repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }} />
                    <motion.path d="M10 62 C35 58, 41 48, 54 52 S83 61, 94 42 S120 25, 136 34 S166 45, 178 21 S199 18, 211 10 L211 72 L10 72 Z" fill="url(#lineArea)" animate={{ opacity: [0, 0.3, 0.3] }} transition={{ duration: 5.6, times: [0, 0.58, 1], repeat: Infinity, repeatDelay: 1.4 }} />
                    <defs><linearGradient id="lineArea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#D9A15B" stopOpacity="0.22" /><stop offset="1" stopColor="#D9A15B" stopOpacity="0" /></linearGradient></defs>
                  </svg>
                  <div className="flex justify-between px-1 pb-2 text-[7px] text-slate-400">
                    {['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'].map((month) => <span key={month}>{month}</span>)}
                  </div>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-1.5 pt-2.5">
                  {[
                    ['Boletos emitidos', '84'],
                    ['Pagos', '61'],
                    ['A vencer', '14'],
                    ['Inadimplentes', '9'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex min-w-0 items-center justify-between gap-1 rounded-[9px] border border-slate-100 bg-slate-50 px-2 py-1.5">
                      <span className="truncate text-[7px] font-medium text-slate-500">{label}</span>
                      <span className="shrink-0 text-[8px] font-bold text-slate-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid h-full min-h-0 grid-cols-2 gap-2.5">
              <div className={`${cardClass} flex h-full min-h-0 flex-col p-3`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[12px] font-semibold text-slate-800">Comparativo</h3>
                    <p className="mt-1 text-[8px] text-slate-400">Venda total do mês</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[15px] font-bold text-slate-800">R$ 0</div>
                    <div className="mt-0.5 text-[8px] text-slate-400">vs R$ 524 mil mês anterior</div>
                  </div>
                </div>
                <div className="mt-3 flex h-[74px] items-end gap-2.5 border-b border-slate-100 px-3">
                  {[
                    ['Fev', 24, '#cbd5e1'],
                    ['Mar', 34, '#cbd5e1'],
                    ['Abr', 42, '#94a3b8'],
                    ['Mai', 53, '#64748b'],
                    ['Jun', 64, '#20324E'],
                    ['Jul', 6, '#D9A15B'],
                  ].map(([month, height, color], index) => (
                    <div key={month} className="flex flex-1 flex-col items-center justify-end gap-1">
                      <motion.div
                        className="w-full max-w-[30px] rounded-t-[6px]"
                        style={{ background: String(color) }}
                        initial={{ height: 4 }}
                        animate={{ height: [4, Number(height), Number(height)] }}
                        transition={{ duration: 5.8, times: [0, 0.26, 1], delay: index * 0.12, repeat: Infinity, repeatDelay: 1.2, ease: 'easeOut' }}
                      />
                      <span className="text-[7px] text-slate-400">{month}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2.5 grid grid-cols-4 gap-1.5">
                  {[
                    ['Valor vendido', 'R$ 2,0 mi'],
                    ['Contratos', '42'],
                    ['Previsão', 'R$ 524 mil'],
                    ['Meta', '199%'],
                  ].map(([label, value]) => (
                    <div key={label} className="min-w-0 rounded-[9px] border border-slate-100 bg-slate-50 px-2 py-1.5">
                      <div className="truncate text-[7px] font-medium text-slate-400">{label}</div>
                      <div className="mt-0.5 truncate text-[8px] font-bold text-slate-700">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${cardClass} flex h-full min-h-0 flex-col p-3`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[12px] font-semibold text-slate-800">Módulos</h3>
                    <p className="mt-1 text-[8px] text-slate-400">Acesso rápido</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[8px] text-slate-500">Operação</span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-1">
                  {[
                    { label: 'CRM', icon: Users2 },
                    { label: 'Todos os Leads', icon: LayoutDashboard },
                    { label: 'Fechamentos', icon: Target },
                    { label: 'Diretoria', icon: Crown },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeModule === index;
                    return (
                      <motion.div
                        key={item.label}
                        animate={{ y: isActive ? -2 : 0, borderColor: isActive ? 'rgba(184,116,42,0.38)' : 'rgba(241,245,249,1)', backgroundColor: isActive ? 'rgba(255,247,237,0.92)' : 'rgba(248,250,252,1)' }}
                        transition={{ duration: 0.38 }}
                        className="flex min-w-0 items-center gap-1.5 rounded-[10px] border px-2 py-1"
                      >
                        <motion.span animate={{ backgroundColor: isActive ? '#20324E' : '#ffffff', color: isActive ? '#D9A15B' : '#B8742A' }} className="flex h-7 w-7 items-center justify-center rounded-[8px] shadow-sm"><Icon size={13} /></motion.span>
                        <span className={`text-[8px] font-semibold ${isActive ? 'text-slate-800' : 'text-slate-600'}`}>{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="mt-1.5 grid grid-cols-2 gap-1">
                  <div className="flex min-w-0 items-center justify-between rounded-[8px] border border-slate-100 bg-slate-50 px-2 py-1.5">
                    <span className="text-[8px] font-semibold text-slate-500">Financeiro</span>
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[7px] font-bold text-amber-700">84 boletos</span>
                  </div>
                  <div className="flex min-w-0 items-center justify-between rounded-[8px] border border-slate-100 bg-slate-50 px-2 py-1.5">
                    <span className="text-[8px] font-semibold text-slate-500">Contratos</span>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[7px] font-bold text-blue-700">18 assinando</span>
                  </div>
                  <div className="flex min-w-0 items-center justify-between rounded-[8px] border border-slate-100 bg-slate-50 px-2 py-1.5">
                    <span className="text-[8px] font-semibold text-slate-500">Clientes</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[7px] font-bold text-emerald-700">126 ativos</span>
                  </div>
                  <div className="flex min-w-0 items-center justify-between rounded-[8px] border border-slate-100 bg-slate-50 px-2 py-1.5">
                    <span className="text-[8px] font-semibold text-slate-500">Inadimplência</span>
                    <span className="rounded-full bg-red-50 px-2 py-0.5 text-[7px] font-bold text-red-700">9 alertas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/25 bg-white/60 px-3 py-1 text-[9px] font-medium tracking-[0.04em] text-slate-500 shadow-sm backdrop-blur-md md:hidden">
        Deslize para ver a prévia completa
      </div>
    </motion.div>
  );
}

function MegaMenuPanel({ activeKey, onClose, onPanelEnter, onPanelLeave, onDemo }: { activeKey: keyof typeof megaMenu | null; onClose: () => void; onPanelEnter: () => void; onPanelLeave: () => void; onDemo: () => void }) {
  if (!activeKey) return null;
  const data = megaMenu[activeKey];

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} onMouseEnter={onPanelEnter} onMouseLeave={onPanelLeave} className="fixed inset-x-0 top-[78px] z-[70] px-3 sm:px-4 pointer-events-auto">
        <div className="mx-auto w-[900px] max-w-full rounded-[24px] border border-slate-200 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.24)]" style={{ background: '#F4EDE2' }}>
          <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] text-slate-900">
            <div className="p-5 md:p-7 lg:p-8 border-b md:border-b-0 md:border-r border-slate-200/70 min-w-0">
              <div className="text-xs uppercase tracking-[0.28em]" style={{ color: gold }}>{data.eyebrow}</div>
              <h3 className="mt-4 text-[30px] md:text-[34px] font-semibold leading-[1.08] text-slate-900 max-w-[12ch] break-words">{data.title}</h3>
              <p className="mt-4 leading-7 text-slate-600 max-w-xl">{data.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-2xl text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => { goToTarget(data.actionTarget); onClose(); }}>
                  {data.actionLabel}
                </Button>
                <Button variant="outline" className="rounded-2xl border-slate-300 bg-white/60" style={{ color: textDark }} onClick={() => { onDemo(); onClose(); }}>
                  Solicitar demonstração
                </Button>
              </div>
            </div>
            <div className="p-5 md:p-7 lg:p-8 grid sm:grid-cols-2 gap-3 min-w-0">
              {data.cards.map((card) => (
                <button key={card.label} onClick={() => { goToTarget(card.target); onClose(); }} className="min-w-0 text-left rounded-[20px] border border-slate-200/80 bg-white/72 p-4 hover:bg-white transition hover:-translate-y-0.5 duration-200">
                  <div className="text-[15px] font-semibold leading-snug text-slate-900 break-words">{card.label}</div>
                  <div className="mt-2 text-sm text-slate-600 leading-6 break-words">{card.description}</div>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: gold }}>
                    Saiba mais <ArrowUpRight size={15} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

type DemoFormState = {
  name: string;
  company: string;
  segment: string;
  phone: string;
  email: string;
  message: string;
};

const emptyDemoForm: DemoFormState = {
  name: '',
  company: '',
  segment: '',
  phone: '',
  email: '',
  message: '',
};

function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState<DemoFormState>(emptyDemoForm);
  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormState, string>>>({});

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const updateField = (field: keyof DemoFormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const inputClass = 'mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 text-sm text-slate-900 outline-none transition focus:border-[#B8742A] focus:ring-4 focus:ring-[#D9A15B]/20';
  const labelClass = 'text-sm font-semibold text-slate-700';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof DemoFormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = 'Informe seu nome.';
    if (!form.company.trim()) nextErrors.company = 'Informe a empresa.';
    if (!form.segment.trim()) nextErrors.segment = 'Selecione o segmento.';
    if (!form.phone.trim()) nextErrors.phone = 'Informe o WhatsApp.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const message = [
      'Olá, quero conhecer o Sistema Santya.',
      '',
      `Nome: ${form.name.trim()}`,
      `Empresa: ${form.company.trim()}`,
      `Segmento: ${form.segment.trim()}`,
      `WhatsApp: ${form.phone.trim()}`,
      `E-mail: ${form.email.trim() || '-'}`,
      `Mensagem: ${form.message.trim() || '-'}`,
    ].join('\n');

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    setForm(emptyDemoForm);
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-[rgba(10,18,32,0.72)] px-4 py-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Solicitar demonstração da Santya"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.22 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/20 bg-[#F4EDE2] shadow-[0_28px_90px_rgba(0,0,0,0.32)]"
      >
        <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#20324E,#D9A15B,#B8742A)]" />
        <button
          type="button"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:bg-white"
          onClick={onClose}
          aria-label="Fechar modal de demonstração"
        >
          <X size={18} />
        </button>

        <form onSubmit={handleSubmit} className="max-h-[calc(100dvh-48px)] overflow-y-auto p-6 pt-8 md:p-8 md:pt-10">
          <div className="pr-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.26em]" style={{ color: gold }}>Demonstração Santya</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">Conte um pouco sobre sua empresa.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              Envie os dados pelo WhatsApp e o time da Santya retorna com uma demonstração direcionada para sua operação.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <label className={labelClass}>
              Nome completo *
              <input className={inputClass} value={form.name} onChange={updateField('name')} autoComplete="name" />
              {errors.name && <span className="mt-1 block text-xs font-medium text-red-600">{errors.name}</span>}
            </label>
            <label className={labelClass}>
              Empresa *
              <input className={inputClass} value={form.company} onChange={updateField('company')} autoComplete="organization" />
              {errors.company && <span className="mt-1 block text-xs font-medium text-red-600">{errors.company}</span>}
            </label>
            <label className={labelClass}>
              Segmento *
              <select className={`${inputClass} appearance-none`} value={form.segment} onChange={updateField('segment')}>
                <option value="">Selecione</option>
                {demoSegments.map((segment) => (
                  <option key={segment} value={segment}>{segment}</option>
                ))}
              </select>
              {errors.segment && <span className="mt-1 block text-xs font-medium text-red-600">{errors.segment}</span>}
            </label>
            <label className={labelClass}>
              WhatsApp *
              <input className={inputClass} value={form.phone} onChange={updateField('phone')} inputMode="tel" autoComplete="tel" />
              {errors.phone && <span className="mt-1 block text-xs font-medium text-red-600">{errors.phone}</span>}
            </label>
            <label className={labelClass}>
              E-mail
              <input className={inputClass} value={form.email} onChange={updateField('email')} type="email" autoComplete="email" />
            </label>
            <label className={`${labelClass} md:col-span-2`}>
              Mensagem / Observação
              <textarea
                className="mt-2 min-h-[104px] w-full resize-y rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#B8742A] focus:ring-4 focus:ring-[#D9A15B]/20"
                value={form.message}
                onChange={updateField('message')}
              />
            </label>
          </div>

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              className="h-12 rounded-2xl border-slate-300 bg-white/70 px-6 font-semibold text-slate-700 hover:bg-white"
              onClick={onClose}
            >
              Fechar
            </Button>
            <Button
              className="h-12 rounded-2xl px-6 font-semibold text-[#1b1205] shadow-[0_14px_34px_rgba(184,116,42,0.22)]"
              style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }}
              type="submit"
              aria-label="Enviar solicitação de demonstração pelo WhatsApp"
            >
              Enviar pelo WhatsApp
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

const internalPages = {
  '/privacidade': {
    eyebrow: 'Privacidade',
    title: 'Política de Privacidade',
    paragraphs: [
      'A Santya utiliza dados de contato enviados pelo site para demonstração comercial, atendimento, suporte e comunicação com empresas interessadas na plataforma.',
      'Essas informações podem incluir nome, e-mail, telefone, empresa e mensagens enviadas voluntariamente pelos canais de contato.',
      'A Santya não vende dados pessoais. As informações são usadas para relacionamento comercial, melhoria do atendimento e suporte operacional.',
      'Para dúvidas, solicitações ou remoção de dados, entre em contato pelo e-mail contato@santya.com.br.',
    ],
  },
  '/termos': {
    eyebrow: 'Termos',
    title: 'Termos de Uso',
    paragraphs: [
      'O uso deste site tem finalidade institucional e comercial, permitindo conhecer a Santya, solicitar demonstrações e acessar canais de contato.',
      'A demonstração comercial não garante contratação automática, disponibilidade de funcionalidades específicas ou acesso ao sistema sem autorização prévia.',
      'O acesso ao sistema Santya é destinado a usuários autorizados, conforme condições comerciais, permissões e responsabilidades definidas para cada empresa.',
      'O visitante se compromete a usar o site de forma adequada, sem interferir na operação, segurança ou disponibilidade dos serviços. Em caso de dúvidas, fale com contato@santya.com.br.',
    ],
  },
  '/seguranca': {
    eyebrow: 'Segurança',
    title: 'Segurança e Boas Práticas',
    paragraphs: [
      'A Santya trabalha com controle de acesso, perfis de usuário e permissões para apoiar uma operação mais organizada e protegida.',
      'Os dados são tratados por empresa e por contexto operacional, respeitando regras de acesso e responsabilidades internas de cada cliente.',
      'Boas práticas como senhas fortes, usuários individuais, revisão de permissões e cuidado com dispositivos compartilhados ajudam a proteger a operação.',
      'Nenhum sistema deve prometer segurança absoluta. A Santya busca proteção operacional, governança de acesso e melhoria contínua dos processos.',
    ],
  },
  '/contato': {
    eyebrow: 'Contato',
    title: 'Fale com a Santya',
    paragraphs: [
      'Para conhecer a Plataforma ERP Inteligente Santya, solicitar uma demonstração ou falar com o time comercial, use os canais abaixo.',
      'E-mail: contato@santya.com.br',
    ],
  },
} as const;

function InternalPage({ page }: { page: typeof internalPages[keyof typeof internalPages] }) {
  const isContact = page.title === 'Fale com a Santya';
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: cream, color: textDark }}>
      <header className="border-b border-slate-200/70 bg-[rgba(244,237,226,0.94)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
          <button className="min-w-0 text-left" onClick={() => { window.location.href = '/'; }} aria-label="Voltar para o início">
            <SantyaBrand size="sm" tagline />
          </button>
          <Button
            variant="outline"
            className="h-11 rounded-2xl border-slate-300 bg-white/70 px-4 text-sm font-semibold hover:bg-white"
            style={{ color: textDark }}
            onClick={() => { window.location.href = '/'; }}
          >
            Voltar para início
          </Button>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-20">
          <div className="rounded-[30px] border border-slate-200 bg-white/72 p-6 shadow-[0_18px_60px_rgba(22,37,61,0.08)] md:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: gold }}>{page.eyebrow}</div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{page.title}</h1>
            <div className="mt-7 space-y-5 text-base leading-8" style={{ color: textMuted }}>
              {page.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {isContact && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  className="h-12 rounded-2xl px-6 font-semibold text-[#1b1205]"
                  style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }}
                  onClick={openWhatsApp}
                  aria-label="Abrir WhatsApp comercial da Santya em nova aba"
                >
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-2xl border-slate-300 bg-white/70 px-6 font-semibold"
                  style={{ color: textDark }}
                  onClick={() => setDemoModalOpen(true)}
                >
                  Solicitar demonstração
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-2xl border-slate-300 bg-white/70 px-6 font-semibold"
                  style={{ color: textDark }}
                  onClick={() => openExternal(loginUrl)}
                  aria-label="Entrar no sistema Santya em nova aba"
                >
                  Entrar no sistema
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 text-center text-sm md:flex-row md:text-left" style={{ color: textMuted }}>
          <div>© 2026 Santya. Todos os direitos reservados.</div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <a className="hover:text-[#B8742A]" href="/privacidade">Privacidade</a>
            <a className="hover:text-[#B8742A]" href="/termos">Termos</a>
            <a className="hover:text-[#B8742A]" href="/seguranca">Segurança</a>
            <a className="hover:text-[#B8742A]" href="/contato">Contato</a>
          </div>
        </div>
      </footer>
      <DemoModal open={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}

export default function App() {
  const currentPage = internalPages[window.location.pathname as keyof typeof internalPages];
  if (currentPage) {
    return <InternalPage page={currentPage} />;
  }

  const { active, setActive } = useHeroRotation(heroSlides.length);
  const hero = useMemo(() => heroSlides[active], [active]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<keyof typeof megaMenu | null>(null);
  const [megaMode, setMegaMode] = useState<'hover' | 'click' | null>(null);
  const megaCloseTimeout = useRef<number | null>(null);
  const megaDesktopRef = useRef<HTMLDivElement | null>(null);
  const [mobileMegaOpen, setMobileMegaOpen] = useState<keyof typeof megaMenu | null>(null);
  const [resourceActive, setResourceActive] = useState(0);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const clearMegaClose = () => {
    if (megaCloseTimeout.current !== null) {
      window.clearTimeout(megaCloseTimeout.current);
      megaCloseTimeout.current = null;
    }
  };

  const closeMega = () => {
    clearMegaClose();
    setMegaOpen(null);
    setMegaMode(null);
  };

  const scheduleMegaClose = () => {
    if (megaMode !== 'hover') return;
    clearMegaClose();
    megaCloseTimeout.current = window.setTimeout(closeMega, 120);
  };

  useEffect(() => () => clearMegaClose(), []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (megaDesktopRef.current && !megaDesktopRef.current.contains(event.target as Node)) {
        clearMegaClose();
        setMegaOpen(null);
        setMegaMode(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        clearMegaClose();
        setMegaOpen(null);
        setMegaMode(null);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const [resourceHoverPaused, setResourceHoverPaused] = useState(false);
  const moduleListRef = useRef<HTMLDivElement | null>(null);
  const moduleItemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (resourceHoverPaused) return;
    const id = window.setTimeout(() => setResourceActive((prev) => (prev + 1) % featureDetails.length), 3000);
    return () => window.clearTimeout(id);
  }, [resourceActive, resourceHoverPaused]);

  useEffect(() => {
    const container = moduleListRef.current;
    const item = moduleItemRefs.current[resourceActive];
    if (!container || !item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    if (isDesktop) {
      const top = container.scrollTop + itemRect.top - containerRect.top - (container.clientHeight - itemRect.height) / 2;
      container.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    } else {
      const left = container.scrollLeft + itemRect.left - containerRect.left - (container.clientWidth - itemRect.width) / 2;
      container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    }
  }, [resourceActive]);

  const activeFeature = featureDetails[resourceActive];
  const ActiveFeatureIcon = activeFeature.icon;
  const goToResource = (index: number) => {
    setResourceActive(index);
    scrollToId('recursos');
  };
  const goToCardTarget = (target: string) => {
    const match = target.match(/^resource-(\d+)$/);
    if (match) {
      goToResource(Number(match[1]));
      return;
    }

    goToTarget(target);
  };
  const openDemoModal = () => {
    closeMega();
    setMobileOpen(false);
    setMobileMegaOpen(null);
    setDemoModalOpen(true);
  };
  const handleDemoAwareCta = (type: 'scroll' | 'url', value: string) => {
    if (type === 'scroll' && value === 'demonstracao') {
      openDemoModal();
      return;
    }

    handleCta(type, value);
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: cream }}>
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(184,116,42,0.15), transparent 24%), radial-gradient(circle at 18% 15%, rgba(255,255,255,0.7), transparent 16%), linear-gradient(180deg, #F5EBDD 0%, #E9DFC9 13%, #2A4266 42%, #1A2B46 100%)' }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(244,237,226,0.08)] backdrop-blur-md supports-[backdrop-filter]:bg-[rgba(244,237,226,0.06)]">
        <div className={`${siteContainer} h-16 md:h-20 flex items-center justify-between gap-4 md:gap-6 relative`}>
          <button className="text-left max-w-[calc(100vw-84px)] md:max-w-none shrink min-w-0" onClick={() => scrollToId('topo')} aria-label="Ir para o início">
            <SantyaBrand size="sm" tagline />
          </button>

          <div ref={megaDesktopRef} className="hidden xl:flex items-center gap-8 text-[15px] font-semibold relative 2xl:gap-9 2xl:text-base" onMouseEnter={clearMegaClose} onMouseLeave={scheduleMegaClose}>
            {menuItems.map((item) => (
              <div key={item.key} className="relative">
                <button
                  onMouseEnter={() => {
                    if (!item.hasMega || megaMode === 'click') return;
                    clearMegaClose();
                    setMegaOpen(item.key as keyof typeof megaMenu);
                    setMegaMode('hover');
                  }}
                  onClick={() => {
                    if (item.hasMega) {
                      if (megaMode === 'click' && megaOpen === item.key) {
                        closeMega();
                      } else {
                        clearMegaClose();
                        setMegaOpen(item.key as keyof typeof megaMenu);
                        setMegaMode('click');
                      }
                    } else {
                      scrollToId(sectionMap[item.key]);
                      closeMega();
                    }
                  }}
                  className="flex items-center gap-1.5 text-[#20324E] transition-colors duration-200 hover:text-[#B8742A]"
                >
                  <span>{item.label}</span>
                  {item.hasMega && <ChevronDown size={16} className="shrink-0" />}
                </button>
              </div>
            ))}
            <MegaMenuPanel activeKey={megaOpen} onClose={closeMega} onPanelEnter={clearMegaClose} onPanelLeave={scheduleMegaClose} onDemo={openDemoModal} />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="rounded-2xl border-slate-300 bg-white/55 hover:bg-white/80" style={{ color: textDark }} onClick={() => handleCta('url', loginUrl)} aria-label="Entrar no sistema Santya em nova aba">
              Entrar
            </Button>
            <Button className="h-11 min-w-[178px] px-6 whitespace-nowrap rounded-2xl text-sm font-semibold text-[#1b1205] shadow-[0_0_30px_rgba(217,161,91,0.22)]" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={openDemoModal}>
              Solicitar demonstração
            </Button>
          </div>

          <button onClick={() => { closeMega(); setMobileOpen((v) => !v); }} className="xl:hidden w-11 h-11 rounded-2xl border border-white/35 bg-white/20 flex items-center justify-center shadow-sm backdrop-blur-md" aria-label={mobileOpen ? 'Fechar menu mobile' : 'Abrir menu mobile'} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={20} color={textDark} /> : <Menu size={20} color={textDark} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="xl:hidden border-t border-white/25 bg-[rgba(244,237,226,0.78)] px-4 pb-4 shadow-[0_16px_40px_rgba(22,37,61,0.12)] max-h-[calc(100dvh-64px)] md:max-h-[calc(100dvh-80px)] overflow-y-auto backdrop-blur-xl">
            <div className="flex flex-col gap-2 pt-4 text-sm" style={{ color: textDark }}>
              {menuItems.map((item) => (
                <div key={item.key} className="rounded-2xl border border-slate-200 bg-white/60 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-4 py-4 text-left"
                    onClick={() => {
                      if (item.hasMega) {
                        setMobileMegaOpen((prev) => (prev === item.key ? null : (item.key as keyof typeof megaMenu)));
                      } else {
                        scrollToId(sectionMap[item.key]);
                        setMobileOpen(false);
                        setMobileMegaOpen(null);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.hasMega ? <ChevronDown size={16} color={textDark} /> : <ChevronRight size={16} color={textDark} />}
                  </button>

                  {item.hasMega && mobileMegaOpen === item.key && (
                    <div className="px-4 pb-4 border-t border-slate-200 bg-[rgba(244,237,226,0.7)]">
                      <div className="pt-4 grid gap-3">
                        {megaMenu[item.key as keyof typeof megaMenu].cards.map((card) => (
                          <button key={card.label} className="text-left rounded-2xl border border-slate-200 bg-white px-4 py-4" onClick={() => { goToTarget(card.target); setMobileOpen(false); setMobileMegaOpen(null); }}>
                            <div className="font-medium">{card.label}</div>
                            <div className="mt-2 text-sm leading-6" style={{ color: textMuted }}>{card.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-3">
                <Button variant="outline" className="h-11 rounded-xl border-slate-300 bg-white text-slate-900" onClick={() => { openExternal(loginUrl); setMobileOpen(false); }} aria-label="Entrar no sistema Santya em nova aba">
                  Entrar
                </Button>
                <Button className="h-11 rounded-xl text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={openDemoModal}>
                  Demonstração
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="topo" className="relative z-10">
        <section className={`${siteContainer} relative overflow-hidden pt-24 md:pt-28 pb-12 md:pb-20`}>
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[linear-gradient(180deg,rgba(42,66,102,0.42)_0%,rgba(244,237,226,0.10)_48%,transparent_100%)]" />
          <div className="grid items-stretch gap-6 xl:grid-cols-[0.82fr_1.18fr] 2xl:grid-cols-[0.78fr_1.22fr] 2xl:gap-8">
            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="relative overflow-hidden rounded-[34px] border border-white/10 min-h-[560px] md:min-h-[660px] xl:min-h-[700px] 2xl:min-h-[740px] p-8 md:p-12 xl:p-10 2xl:p-12 flex flex-col justify-between shadow-[0_30px_100px_rgba(22,37,61,0.18)]" style={{ background: `linear-gradient(135deg, ${slateSoft} 0%, ${slate} 52%, #314C74 100%)` }}>
              <GlowOrb className="w-72 h-72 top-8 right-0" />
              <GlowOrb className="w-96 h-96 -bottom-10 left-12" />
              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '34px 34px' }} />

              <div className="relative z-10 max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs tracking-[0.24em] uppercase" style={{ color: goldSoft, background: 'rgba(255,255,255,0.05)' }}>
                  <Sparkles size={14} /> {hero.eyebrow}
                </span>
                <AnimatePresence mode="wait">
                  <motion.div key={hero.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45 }}>
                    <h1 className="mt-7 text-4xl md:text-6xl xl:text-[56px] 2xl:text-[62px] font-semibold leading-[1.02] max-w-5xl text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.18)]">{hero.title}</h1>
                    <p className="mt-6 text-white/80 text-base md:text-xl leading-8 max-w-3xl">{hero.text}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button size="lg" className="rounded-2xl px-7 text-[#1b1205] font-semibold text-sm md:text-base" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => handleDemoAwareCta(hero.primary.type as 'scroll' | 'url', hero.primary.value)}>
                    {hero.primary.label}
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-2xl px-7 bg-white/5 border-white/20 text-white hover:bg-white/10" onClick={() => handleDemoAwareCta(hero.secondary.type as 'scroll' | 'url', hero.secondary.value)}>
                    {hero.secondary.label}
                  </Button>
                </div>
                <p className="mt-5 text-sm font-medium text-white/62">Plataforma para uso contínuo da equipe, com contratação mensal adequada à sua operação.</p>

                <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/82">
                  {['ERP empresarial', 'Operação completa', 'Diretoria em tempo real', 'PWA no PC e celular'].map((tag) => (
                    <div key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">{tag}</div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap items-end justify-between gap-6 pt-10">
                <div className="flex gap-2 items-center">
                  {heroSlides.map((_, index) => (
                    <button key={index} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${index === active ? 'w-14' : 'w-2.5 bg-white/30'}`} style={index === active ? { background: `linear-gradient(90deg, ${goldSoft}, ${gold})` } : undefined} aria-label={`Mostrar destaque ${index + 1}`} />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
                  {[
                    { label: 'Operação integrada', value: '360°' },
                    { label: 'Diretoria em tempo real', value: 'BI' },
                    { label: 'Automações + PWA', value: 'ON' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 min-w-[126px]">
                      <div className="text-2xl font-semibold" style={{ color: goldSoft }}>{item.value}</div>
                      <div className="text-xs text-white/70 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <RealErpDashboardPreview />
          </div>
        </section>

        <section className={`${siteContainer} py-10 md:py-16`}>
          <div className="grid lg:grid-cols-[0.86fr_1.14fr] gap-6 items-center">
            <div className="rounded-[30px] border border-white/20 p-8 md:p-9 bg-[rgba(244,237,226,0.92)] backdrop-blur-sm shadow-[0_16px_60px_rgba(22,37,61,0.08)]">
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: gold }}>o que é a santya</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight" style={{ color: textDark }}>Um ERP empresarial para organizar a operação inteira.</h2>
              <p className="mt-6 leading-8" style={{ color: textMuted }}>
                A Santya é uma Plataforma ERP Inteligente criada para centralizar gestão comercial, financeira e operacional. Leads, tarefas, contratos, clientes, recebimentos e indicadores compartilham o mesmo contexto, com uma experiência premium e simples de usar.
              </p>
              <p className="mt-4 text-sm font-medium leading-6" style={{ color: goldDeep }}>Plataforma pronta para uso recorrente da equipe, todos os dias.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 items-center content-center self-center max-w-[720px] mx-auto">
              {[
                { icon: Building2, title: 'Mais controle', text: 'Comercial, contratos, clientes e financeiro conectados na mesma operação.' },
                { icon: ShieldCheck, title: 'Mais confiança', text: 'Permissões, histórico e processos organizados para trabalhar com segurança.' },
                { icon: BrainCircuit, title: 'Mais inteligência', text: 'Automações e informação contextual para reduzir trabalho manual.' },
                { icon: LayoutDashboard, title: 'Mais visão', text: 'Gestores e diretoria acompanham indicadores e próximos passos em tempo real.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="rounded-[28px] border-white/20 bg-[rgba(244,237,226,0.94)] backdrop-blur-sm shadow-[0_16px_50px_rgba(22,37,61,0.08)] min-h-[220px] h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(217,161,91,0.16)', color: goldSoft }}><Icon size={22} /></div>
                      <h3 className="text-lg font-semibold" style={{ color: textDark }}>{item.title}</h3>
                      <p className="mt-3 text-sm leading-7" style={{ color: textMuted }}>{item.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="erp-completo" className={`${siteContainer} py-10 md:py-20 text-white`}>
          <div className="rounded-[34px] border border-white/15 p-7 md:p-10 shadow-[0_22px_70px_rgba(22,37,61,0.14)]" style={{ background: 'linear-gradient(145deg, rgba(22,37,61,0.96), rgba(43,65,100,0.94))' }}>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-7 lg:gap-12 items-end">
              <div>
                <div className="text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>Operação integrada</div>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">Do primeiro lead ao pagamento: sua operação inteira conectada.</h2>
              </div>
              <p className="text-white/78 leading-8">
                A Santya centraliza comercial, contratos, clientes, financeiro, boletos, baixas, inadimplência, diretoria e automações em uma única plataforma ERP inteligente.
              </p>
            </div>

            <div className="mt-9 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {[
                { icon: Users2, title: 'Comercial', text: 'CRM, agenda, tarefas, visitas, follow-up e fechamentos em um fluxo claro para a equipe vender mais.' },
                { icon: FileSignature, title: 'Contratos', text: 'Documentos, assinaturas, pendências e histórico conectados ao cliente e à negociação.' },
                { icon: CircleDollarSign, title: 'Financeiro', text: 'Boletos, contas a receber, baixas, vencimentos e inadimplência acompanhados em tempo real.' },
                { icon: ChartNoAxesCombined, title: 'Gestão', text: 'Metas, ranking, diretoria, indicadores e visão da operação para decidir com segurança.' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: idx * 0.06 }} className="rounded-[24px] border border-white/10 bg-white/[0.07] p-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(217,161,91,0.16)', color: goldSoft }}><Icon size={22} /></div>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <p className="text-sm text-white/65">Ideal para empresas que precisam controlar a operação todos os dias.</p>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => scrollToId('recursos')}>
                Conhecer a plataforma <ArrowUpRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section id="plataforma" className={`${siteContainer} py-16 md:py-24 text-white`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: gold }}>Plataforma ERP Inteligente</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold max-w-4xl text-white">Tudo que a operação precisa, conectado em um só ERP.</h2>
            </div>
            <p className="max-w-2xl leading-7 text-white/78">Do primeiro contato à assinatura, do boleto à baixa, com histórico, automações e diretoria em tempo real para conduzir a empresa com mais clareza.</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch auto-rows-fr">
            {completeSystemCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: idx * 0.04 }} className="h-full">
                  <button onClick={() => goToCardTarget(item.target)} className="w-full h-full text-left">
                    <Card className="group h-full min-h-[250px] md:min-h-[270px] rounded-[28px] border-white/20 bg-[rgba(244,237,226,0.92)] hover:bg-[rgba(255,249,242,0.98)] transition-all duration-500 overflow-hidden backdrop-blur-sm shadow-[0_16px_50px_rgba(22,37,61,0.08)]">
                      <CardContent className="p-6 md:p-7 h-full flex flex-col justify-between">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110" style={{ background: 'rgba(217,161,91,0.16)', color: goldSoft }}><Icon size={22} /></div>
                        <h3 className="text-xl font-semibold min-h-[56px] flex items-center text-balance" style={{ color: textDark }}>{item.title}</h3>
                        <p className="mt-4 leading-7 text-sm min-h-[84px]" style={{ color: textMuted }}>{item.text}</p>
                        <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-medium" style={{ color: goldSoft }}>Explorar recurso <ArrowUpRight size={16} /></div>
                      </CardContent>
                    </Card>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="recursos" className={`${siteContainer} py-8 md:py-20 text-white`}>
          <div className="grid min-w-0 items-stretch gap-6 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="flex min-w-0 flex-col overflow-hidden rounded-[30px] border border-white/20 p-6 md:p-7 lg:h-[620px] xl:h-[590px] backdrop-blur-sm shadow-[0_20px_65px_rgba(22,37,61,0.08)]" style={{ background: 'linear-gradient(160deg, rgba(217,161,91,0.20), rgba(244,237,226,0.13), rgba(255,255,255,0.04))' }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/82"><Sparkles size={14} style={{ color: goldSoft }} /> núcleo de valor</div>
              <h2 className="mt-4 text-[29px] font-semibold leading-[1.08] text-white md:text-[34px]">Módulos que trabalham juntos, com visão de ponta a ponta.</h2>
              <p className="mt-4 max-w-xl leading-7 text-white/78">Acompanhe sua equipe, contratos e financeiro em tempo real.</p>

              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10" aria-label="Progresso dos módulos integrados">
                <div key={`${resourceActive}-${resourceHoverPaused}`} className={`santya-module-progress h-full rounded-full ${resourceHoverPaused ? 'is-paused' : ''}`} />
              </div>

              <div ref={moduleListRef} onMouseEnter={() => { if (window.matchMedia('(hover: hover)').matches) setResourceHoverPaused(true); }} onMouseLeave={() => setResourceHoverPaused(false)} className="santya-module-list mt-4 flex min-w-0 gap-2 overflow-x-auto pb-2 lg:grid lg:h-[230px] lg:grid-cols-1 lg:auto-rows-[40px] lg:overflow-x-hidden lg:overflow-y-auto lg:pr-2 lg:pb-0">
                {featureDetails.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = resourceActive === index;
                  return (
                    <button
                      ref={(element) => { moduleItemRefs.current[index] = element; }}
                      id={`resource-${index}`}
                      key={item.title}
                      onClick={() => goToResource(index)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative flex h-10 min-w-[164px] items-center gap-2.5 overflow-hidden rounded-[13px] border px-3 text-left transition-all duration-300 lg:min-w-0 lg:w-full ${isActive ? 'border-[rgba(217,161,91,0.82)] bg-[rgba(217,161,91,0.20)] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] ring-1 ring-[rgba(217,161,91,0.22)]' : 'border-white/10 bg-white/[0.05] text-white/68 hover:border-white/20 hover:bg-white/[0.08]'}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px]" style={{ background: isActive ? 'rgba(217,161,91,0.18)' : 'rgba(255,255,255,0.06)', color: isActive ? goldSoft : '#CBD5E1' }}><Icon size={14} /></span>
                      <span className="min-w-0 truncate text-[12px] font-semibold">{item.title}</span>
                      {isActive && <span className="ml-auto hidden shrink-0 text-[8px] font-bold uppercase tracking-[0.14em] text-[#E7B979] sm:inline">Ativo</span>}
                    </button>
                  );
                })}
              </div>

            </div>

            <AnimatePresence mode="wait">
              <motion.div key={activeFeature.title} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.28 }} className="min-w-0 lg:h-[620px] xl:h-[590px]">
                <Card className="min-w-0 overflow-hidden rounded-[30px] border border-white/15 bg-[rgba(32,50,78,0.68)] p-7 md:p-8 lg:h-full backdrop-blur-sm shadow-[0_20px_60px_rgba(22,37,61,0.14)]">
                  <CardContent className="flex min-w-0 flex-col p-0 lg:h-full">
                    <div className="flex min-w-0 items-start gap-5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px]" style={{ background: 'rgba(217,161,91,0.16)', color: goldSoft }}>
                        <ActiveFeatureIcon size={27} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: goldSoft }}>{activeFeature.eyebrow}</div>
                        <h3 className="mt-2 break-words text-[28px] font-semibold leading-tight text-white md:text-[38px]">{activeFeature.title}</h3>
                      </div>
                    </div>

                    <div className="mt-6 text-[19px] font-medium leading-snug text-white/92 md:text-[22px]">{activeFeature.detailTitle}</div>
                    <p className="mt-4 max-w-3xl break-words text-base leading-7 text-white/76">{activeFeature.text}</p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {activeFeature.bullets.map((bullet) => (
                        <div key={bullet} className="min-w-0 overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white/82 break-words">
                          {bullet}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[20px] border border-white/10 bg-[rgba(22,37,61,0.28)] p-4">
                      <div className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/48">Fluxo conectado</div>
                      <div className="mt-3 grid min-w-0 grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                        {activeFeature.flow.map((step, index) => (
                          <React.Fragment key={step}>
                            <div className="min-w-0 rounded-[13px] border border-white/10 bg-white/[0.06] px-3 py-3 text-center text-[12px] font-medium leading-5 text-white/84 break-words">
                              {step}
                            </div>
                            {index < activeFeature.flow.length - 1 && <ChevronRight size={15} className="shrink-0 text-[#D9A15B]" />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-5">
                      <Button className="rounded-2xl px-6 text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={openDemoModal}>
                        Ver em demonstração
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="solucoes" className={`${siteContainer} py-8 md:py-20`}>
          <div className="rounded-[34px] border border-white/20 bg-[rgba(244,237,226,0.90)] p-8 md:p-10 backdrop-blur-sm shadow-[0_18px_60px_rgba(22,37,61,0.08)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>Para quem é a Santya</div>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold" style={{ color: textDark }}>Feita para empresas que precisam controlar a operação completa.</h2>
              </div>
              <p className="max-w-2xl leading-7" style={{ color: textMuted }}>Construtoras, imobiliárias e operações em crescimento ganham integração entre comercial, contratos, clientes, financeiro e diretoria.</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                'Construtoras',
                'Imobiliárias',
                'Incorporadoras',
                'Equipes comerciais e financeiras',
                'Empresas com múltiplos processos',
                'Negócios em crescimento',
              ].map((sector, idx) => (
                <motion.button key={sector} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: idx * 0.05 }} className="text-left rounded-[24px] border border-slate-200 bg-white/70 p-5 hover:border-[rgba(217,161,91,0.45)] transition" onClick={openDemoModal}>
                  <div className="text-lg font-medium" style={{ color: textDark }}>{sector}</div>
                  <div className="mt-2 text-sm leading-6" style={{ color: textMuted }}>ERP empresarial para organizar processos, dados e decisões com mais segurança para crescer.</div>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: gold }}>Saiba mais <ArrowUpRight size={15} /></div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className={`${siteContainer} py-8 md:py-20`}>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-[30px] border border-slate-200 p-8 md:p-10 backdrop-blur-sm shadow-[0_16px_55px_rgba(22,37,61,0.08)] bg-[rgba(244,237,226,0.92)]">
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: gold }}>Benefícios</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight" style={{ color: textDark }}>Controle real para uma operação que não para de crescer.</h2>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {benefits.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white/70 p-4 leading-7" style={{ color: textMuted }}>{item}</div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/20 p-8 md:p-10 flex flex-col justify-between backdrop-blur-sm shadow-[0_16px_55px_rgba(22,37,61,0.08)]" style={{ background: 'linear-gradient(180deg, rgba(217,161,91,0.18), rgba(32,50,78,0.40))' }}>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/70">Como funciona</div>
                <div className="mt-6 grid gap-4">
                  {[
                    { step: '1. Estrutura', text: 'Configuração da empresa, equipes, perfis, permissões e empreendimentos.' },
                    { step: '2. Operação', text: 'CRM, agenda, tarefas, fechamentos, contratos e clientes no dia a dia.' },
                    { step: '3. Financeiro', text: 'Boletos, contas a receber, baixas, vencimentos e inadimplência integrados.' },
                    { step: '4. Inteligência', text: 'Automações, alertas e diretoria em tempo real para agir com clareza.' },
                  ].map((item) => (
                    <div key={item.step} className="rounded-[22px] border border-white/15 bg-[rgba(22,37,61,0.20)] p-5">
                      <div className="font-medium" style={{ color: cream }}>{item.step}</div>
                      <div className="mt-2 text-sm text-white/76 leading-6">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="demonstracao" className={`${siteContainer} pb-12 pt-8 text-white`}>
          <div className="rounded-[36px] border border-white/20 overflow-hidden shadow-[0_24px_80px_rgba(22,37,61,0.12)]">
            <div className="grid lg:grid-cols-[1fr_0.85fr]">
              <div className="p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #314C74, #20324E)' }}>
                <div className="text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>Demonstração</div>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">Veja como a Santya conecta sua operação na prática.</h2>
                <p className="mt-5 text-white/82 max-w-2xl leading-7">Solicite uma demonstração e veja o melhor plano para sua operação. Conheça uma plataforma de uso mensal para integrar comercial, contratos, clientes, financeiro e diretoria com mais controle, automação e visão real.</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button className="rounded-2xl px-7 text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={openDemoModal}>
                    Solicitar demonstração
                  </Button>
                  <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={openWhatsApp} aria-label="Abrir WhatsApp comercial da Santya em nova aba">
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>

              <div id="contato" className="p-8 md:p-12 flex flex-col justify-center" style={{ background: slateDeep }}>
                <div className="text-white/60 text-sm uppercase tracking-[0.24em]">O que você vai conhecer</div>
                <div className="mt-5 space-y-3">
                  {[
                    'Plataforma ERP Inteligente',
                    'CRM, agenda, tarefas, fechamentos e diretoria',
                    'Contratos, clientes, financeiro, boletos e baixas',
                    'Inadimplência, automações, WhatsApp, notificações e PWA',
                    'Pronto para empresas que precisam de controle, escala e profissionalismo',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3.5 text-white/82 leading-6">{item}</div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button className="rounded-2xl text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => { window.location.href = demoMailto; }}>
                    contato@santya.com.br
                  </Button>
                  <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => handleCta('url', loginUrl)} aria-label="Entrar no sistema Santya em nova aba">
                    Entrar no sistema
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className={`${siteContainer} pb-12 pt-4`}>
          <div className="rounded-[32px] border border-white/20 bg-[rgba(244,237,226,0.92)] backdrop-blur-sm shadow-[0_16px_55px_rgba(22,37,61,0.08)] p-8 md:p-10 xl:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="flex min-w-0 flex-col items-center text-center">
                <SantyaBrand size="md" />
                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: gold }}>Soluções empresariais inteligentes</div>
                <p className="mt-5 max-w-sm text-center leading-7" style={{ color: textMuted }}>Plataforma ERP Inteligente para conectar gestão comercial, financeira e operacional, com automação, diretoria em tempo real e suporte humanizado.</p>
              </div>
              <div className="grid min-w-0 gap-9 break-words sm:grid-cols-2 xl:grid-cols-4">
                <div className="min-w-0">
                  <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: textDark }}>Plataforma</div>
                  <div className="space-y-3.5 text-sm" style={{ color: textMuted }}>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => goToResource(0)}>CRM e Leads</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => goToResource(1)}>Agenda e Tarefas</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => goToResource(2)}>Fechamentos</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => goToResource(3)}>Contratos e Assinaturas</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => goToResource(5)}>Financeiro</button>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: textDark }}>Recursos</div>
                  <div className="space-y-3.5 text-sm" style={{ color: textMuted }}>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => goToResource(4)}>Clientes</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => goToResource(6)}>Boletos e Baixas</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => goToResource(7)}>Inadimplência</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => goToResource(11)}>Automações e WhatsApp</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('beneficios')}>PWA para PC e Celular</button>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: textDark }}>Navegação</div>
                  <div className="space-y-3.5 text-sm" style={{ color: textMuted }}>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('topo')}>Início</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('plataforma')}>Plataforma</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('recursos')}>Recursos</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('demonstracao')}>Demonstração</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => openExternal(loginUrl)} aria-label="Entrar no sistema Santya em nova aba">Entrar no sistema</button>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: textDark }}>Contato</div>
                  <div className="space-y-3.5 text-sm" style={{ color: textMuted }}>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={openWhatsApp} aria-label="Abrir WhatsApp comercial da Santya em nova aba">WhatsApp comercial</button>
                    <button className="block break-all text-left transition-colors hover:text-[#B8742A]" onClick={() => { window.location.href = `mailto:${contactEmail}`; }}>contato@santya.com.br</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={openDemoModal}>Solicitar demonstração</button>
                    <a className="block text-left transition-colors hover:text-[#B8742A]" href="/privacidade">Política de privacidade</a>
                    <a className="block text-left transition-colors hover:text-[#B8742A]" href="/termos">Termos de uso</a>
                    <a className="block text-left transition-colors hover:text-[#B8742A]" href="/seguranca">Segurança</a>
                    <a className="block text-left transition-colors hover:text-[#B8742A]" href="/contato">Fale Conosco</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center gap-5 border-t border-slate-200 pt-7 text-center text-sm md:flex-row md:justify-between md:text-left">
              <div style={{ color: textMuted }}>© 2026 Santya. Todos os direitos reservados.</div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end" style={{ color: textMuted }}>
                <a className="transition-colors hover:text-[#B8742A]" href="/privacidade">Política de Privacidade</a>
                <a className="transition-colors hover:text-[#B8742A]" href="/termos">Termos de Uso</a>
                <a className="transition-colors hover:text-[#B8742A]" href="/seguranca">Segurança</a>
                <a className="transition-opacity hover:opacity-75" href="/contato" style={{ color: gold }}>Fale Conosco</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <DemoModal open={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
