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

const sectionMap: Record<string, string> = {
  plataforma: 'plataforma',
  recursos: 'recursos',
  solucoes: 'solucoes',
  beneficios: 'beneficios',
  demonstracao: 'demonstracao',
  contato: 'contato',
};

const loginUrl = 'https://app.santya.com.br';

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
    secondary: { label: 'Ver recursos', type: 'scroll', value: 'recursos' },
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
    detailTitle: 'Controle a jornada comercial desde a entrada do lead.',
    text: 'Organize funil, histórico, origem, status, responsáveis e próximos passos.',
    bullets: ['Histórico centralizado', 'Funil por status', 'Acompanhamento comercial'],
    flow: ['Lead recebido', 'Atendimento', 'Fechamento'],
    icon: Users2,
  },
  {
    eyebrow: 'ROTINA',
    title: 'Agenda e Tarefas',
    detailTitle: 'Organize visitas, prazos e responsabilidades.',
    text: 'Controle compromissos, tarefas, retornos, visitas e atividades da equipe.',
    bullets: ['Prazos claros', 'Responsáveis definidos', 'Rotina acompanhada'],
    flow: ['Tarefa criada', 'Prazo definido', 'Execução'],
    icon: CalendarDays,
  },
  {
    eyebrow: 'RESULTADO',
    title: 'Fechamentos',
    detailTitle: 'Acompanhe negociações até o resultado final.',
    text: 'Veja evolução, status, valores e previsões de fechamento.',
    bullets: ['Pipeline claro', 'Valor negociado', 'Resultado visível'],
    flow: ['Negociação', 'Aprovação', 'Fechamento'],
    icon: Target,
  },
  {
    eyebrow: 'CONTRATOS',
    title: 'Contratos e Assinaturas',
    detailTitle: 'Do fechamento à assinatura digital.',
    text: 'Controle contratos, pendências, documentos e assinatura digital.',
    bullets: ['Documentos', 'Clicksign', 'Pendências'],
    flow: ['Contrato', 'Assinatura', 'Finalização'],
    icon: FileSignature,
  },
  {
    eyebrow: 'RELACIONAMENTO',
    title: 'Clientes',
    detailTitle: 'Uma base completa para compradores e clientes.',
    text: 'Centralize cadastro, documentos, contratos, unidades e histórico financeiro.',
    bullets: ['Cadastro completo', 'Histórico', 'Financeiro do cliente'],
    flow: ['Cliente', 'Contratos', 'Parcelas'],
    icon: UserRoundCheck,
  },
  {
    eyebrow: 'FINANCEIRO',
    title: 'Financeiro',
    detailTitle: 'Controle financeiro conectado à operação.',
    text: 'Acompanhe contas a receber, parcelas, vencimentos e recebimentos.',
    bullets: ['Contas a receber', 'Vencimentos', 'Movimento financeiro'],
    flow: ['Parcela', 'Pagamento', 'Baixa'],
    icon: CircleDollarSign,
  },
  {
    eyebrow: 'RECEBIMENTOS',
    title: 'Boletos e Baixas',
    detailTitle: 'Boletos, pagamentos e baixas em um só fluxo.',
    text: 'Controle emissão, status, pagamentos, baixas manuais e automáticas.',
    bullets: ['Boletos', 'Baixas', 'Conciliação'],
    flow: ['Boleto', 'Pagamento', 'Baixa'],
    icon: ReceiptText,
  },
  {
    eyebrow: 'COBRANÇA',
    title: 'Inadimplência',
    detailTitle: 'Identifique atrasos com leitura simples e gerencial.',
    text: 'Veja parcelas vencidas, clientes em atraso e pendências financeiras.',
    bullets: ['Parcelas vencidas', 'Clientes em atraso', 'Cobrança'],
    flow: ['Vencimento', 'Alerta', 'Regularização'],
    icon: BadgeAlert,
  },
  {
    eyebrow: 'GESTÃO',
    title: 'Diretoria e BI',
    detailTitle: 'Indicadores para decisão em tempo real.',
    text: 'Acompanhe metas, ranking, vendas, visitas, fechamentos e performance.',
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
    actionLabel: 'Ver recursos',
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

function goToTarget(target: string) {
  if (target.startsWith('http')) {
    window.open(target, '_blank', 'noopener,noreferrer');
    return;
  }

  scrollToId(target);
}

function handleCta(type: 'scroll' | 'url', value: string) {
  if (type === 'url') {
    window.open(value, '_blank', 'noopener,noreferrer');
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.72, delay: 0.12 }}
      className="relative min-h-[736px] md:min-h-[738px] overflow-hidden rounded-[36px] border border-slate-300/90 bg-[#dce3eb] p-1.5 shadow-[0_34px_110px_rgba(22,37,61,0.26)] xl:-ml-6 xl:w-[calc(100%+44px)]"
    >
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[#D9A15B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[#29466F]/30 blur-3xl" />
      <div className="santya-erp-scroll absolute inset-1.5 z-10 overflow-x-auto overflow-y-hidden rounded-[30px] border border-white/80 bg-[#f1f5f9] text-slate-900 shadow-inner">
        <div className="h-full min-h-0 min-w-[730px]">
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

          <div className="grid h-[calc(100%_-_60px)] min-h-0 grid-rows-[112px_minmax(190px,1.05fr)_minmax(180px,0.95fr)] gap-2 p-2.5">
            <div className="relative h-full min-h-0 overflow-hidden rounded-[18px] bg-[linear-gradient(120deg,#182A46_0%,#203A60_58%,#31557F_100%)] px-4 py-3 text-white shadow-[0_16px_42px_rgba(32,50,78,0.26)]">
              <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full border border-white/10" />
              <div className="absolute -right-4 -top-8 h-28 w-28 rounded-full border border-[#D9A15B]/20" />
              <div className="relative flex items-center justify-between gap-5">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D9A15B]">Equipe comercial</div>
                  <h2 className="mt-1.5 text-[22px] font-semibold leading-none">Bem-vindo, Jessica</h2>
                  <p className="mt-1.5 text-[9px] text-white/65">Dashboard ERP • Perfil: admin</p>
                  <div className="mt-2 flex gap-2">
                    <div className="rounded-[8px] bg-[#D9A15B] px-3 py-1.5 text-[8px] font-semibold text-[#172236] shadow-sm">Abrir tarefas</div>
                    <div className="rounded-[8px] border border-white/20 bg-white/[0.06] px-3 py-1.5 text-[8px] font-semibold text-white">Ver todos os leads</div>
                  </div>
                </div>
                <div className="hidden w-[202px] grid-cols-2 gap-2 min-[720px]:grid">
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
              <div className={`${cardClass} h-full min-h-0 p-3`}>
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
              </div>

              <div className={`${cardClass} h-full min-h-0 p-3`}>
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
              </div>

              <div className={`${cardClass} h-full min-h-0 p-3`}>
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
              </div>
            </div>

            <div className="grid h-full min-h-0 grid-cols-2 gap-2.5">
              <div className={`${cardClass} h-full min-h-0 p-3`}>
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
              </div>

              <div className={`${cardClass} h-full min-h-0 p-3`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[12px] font-semibold text-slate-800">Módulos</h3>
                    <p className="mt-1 text-[8px] text-slate-400">Acesso rápido</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[8px] text-slate-500">Operação</span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-1.5">
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
                        className="flex min-w-0 items-center gap-2 rounded-[10px] border px-2.5 py-1.5"
                      >
                        <motion.span animate={{ backgroundColor: isActive ? '#20324E' : '#ffffff', color: isActive ? '#D9A15B' : '#B8742A' }} className="flex h-8 w-8 items-center justify-center rounded-[9px] shadow-sm"><Icon size={14} /></motion.span>
                        <span className={`text-[9px] font-semibold ${isActive ? 'text-slate-800' : 'text-slate-600'}`}>{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="mt-2 grid grid-cols-2 gap-1.5">
                  <div className="flex min-w-0 items-center justify-between rounded-[9px] border border-slate-100 bg-slate-50 px-2.5 py-2">
                    <span className="text-[8px] font-semibold text-slate-500">Financeiro</span>
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[7px] font-bold text-amber-700">84 boletos</span>
                  </div>
                  <div className="flex min-w-0 items-center justify-between rounded-[9px] border border-slate-100 bg-slate-50 px-2.5 py-2">
                    <span className="text-[8px] font-semibold text-slate-500">Contratos</span>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[7px] font-bold text-blue-700">18 assinando</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MegaMenuPanel({ activeKey, onClose, onPanelEnter, onPanelLeave }: { activeKey: keyof typeof megaMenu | null; onClose: () => void; onPanelEnter: () => void; onPanelLeave: () => void }) {
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
                <Button variant="outline" className="rounded-2xl border-slate-300 bg-white/60" style={{ color: textDark }} onClick={() => { goToTarget('demonstracao'); onClose(); }}>
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

export default function App() {
  const { active, setActive } = useHeroRotation(heroSlides.length);
  const hero = useMemo(() => heroSlides[active], [active]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<keyof typeof megaMenu | null>(null);
  const [megaMode, setMegaMode] = useState<'hover' | 'click' | null>(null);
  const megaCloseTimeout = useRef<number | null>(null);
  const megaDesktopRef = useRef<HTMLDivElement | null>(null);
  const [mobileMegaOpen, setMobileMegaOpen] = useState<keyof typeof megaMenu | null>(null);
  const [resourceActive, setResourceActive] = useState(0);

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

  const [resourceLocked, setResourceLocked] = useState(false);
  const [resourceHoverPaused, setResourceHoverPaused] = useState(false);
  const moduleListRef = useRef<HTMLDivElement | null>(null);
  const moduleItemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (resourceLocked || resourceHoverPaused) return;
    const id = window.setInterval(() => setResourceActive((prev) => (prev + 1) % featureDetails.length), 3000);
    return () => window.clearInterval(id);
  }, [resourceLocked, resourceHoverPaused]);

  useEffect(() => {
    if (!resourceLocked) return;
    const id = window.setTimeout(() => setResourceLocked(false), 9000);
    return () => window.clearTimeout(id);
  }, [resourceLocked, resourceActive]);

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

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: cream }}>
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(184,116,42,0.15), transparent 24%), radial-gradient(circle at 18% 15%, rgba(255,255,255,0.7), transparent 16%), linear-gradient(180deg, #F5EBDD 0%, #E9DFC9 13%, #2A4266 42%, #1A2B46 100%)' }} />

      <header className="sticky top-0 z-50 border-b border-white/20 backdrop-blur-xl bg-[rgba(244,237,226,0.42)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-6 relative">
          <button className="text-left max-w-[calc(100vw-84px)] md:max-w-none shrink min-w-0" onClick={() => scrollToId('topo')}>
            <SantyaBrand size="sm" tagline />
          </button>

          <div ref={megaDesktopRef} className="hidden xl:flex items-center gap-7 text-sm relative" onMouseEnter={clearMegaClose} onMouseLeave={scheduleMegaClose}>
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
                  className="flex items-center gap-1 transition hover:opacity-80"
                >
                  <span style={{ color: textDark }}>{item.label}</span>
                  {item.hasMega && <ChevronDown size={15} color={textDark} />}
                </button>
              </div>
            ))}
            <MegaMenuPanel activeKey={megaOpen} onClose={closeMega} onPanelEnter={clearMegaClose} onPanelLeave={scheduleMegaClose} />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="rounded-2xl border-slate-300 bg-white/55 hover:bg-white/80" style={{ color: textDark }} onClick={() => handleCta('url', loginUrl)}>
              Entrar
            </Button>
            <Button className="h-11 min-w-[178px] px-6 whitespace-nowrap rounded-2xl text-sm font-semibold text-[#1b1205] shadow-[0_0_30px_rgba(217,161,91,0.22)]" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('demonstracao')}>
              Solicitar demonstração
            </Button>
          </div>

          <button onClick={() => { closeMega(); setMobileOpen((v) => !v); }} className="xl:hidden w-11 h-11 rounded-2xl border border-white/20 bg-white/10 flex items-center justify-center">
            {mobileOpen ? <X size={20} color={textDark} /> : <Menu size={20} color={textDark} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="xl:hidden border-t border-white/15 bg-[rgba(244,237,226,0.98)] px-4 pb-4 shadow-[0_16px_40px_rgba(22,37,61,0.12)] max-h-[calc(100dvh-80px)] overflow-y-auto">
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
                <Button variant="outline" className="rounded-xl border-slate-300 bg-white text-slate-900" onClick={() => handleCta('url', loginUrl)}>
                  Entrar
                </Button>
                <Button className="rounded-xl text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => { scrollToId('demonstracao'); setMobileOpen(false); }}>
                  Demonstração
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="topo" className="relative z-10">
        <section className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-12 md:pb-20">
          <div className="grid xl:grid-cols-[0.84fr_1.16fr] gap-7 items-stretch">
            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="relative overflow-hidden rounded-[34px] border border-white/10 min-h-[590px] md:min-h-[690px] p-8 md:p-12 xl:p-10 flex flex-col justify-between shadow-[0_30px_100px_rgba(22,37,61,0.18)]" style={{ background: `linear-gradient(135deg, ${slateSoft} 0%, ${slate} 52%, #314C74 100%)` }}>
              <GlowOrb className="w-72 h-72 top-8 right-0" />
              <GlowOrb className="w-96 h-96 -bottom-10 left-12" />
              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '34px 34px' }} />

              <div className="relative z-10 max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs tracking-[0.24em] uppercase" style={{ color: goldSoft, background: 'rgba(255,255,255,0.05)' }}>
                  <Sparkles size={14} /> {hero.eyebrow}
                </span>
                <AnimatePresence mode="wait">
                  <motion.div key={hero.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45 }}>
                    <h1 className="mt-7 text-4xl md:text-6xl xl:text-[52px] font-semibold leading-[1.02] max-w-5xl text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.18)]">{hero.title}</h1>
                    <p className="mt-6 text-white/80 text-base md:text-xl leading-8 max-w-3xl">{hero.text}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button size="lg" className="rounded-2xl px-7 text-[#1b1205] font-semibold text-sm md:text-base" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => handleCta(hero.primary.type as 'scroll' | 'url', hero.primary.value)}>
                    {hero.primary.label}
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-2xl px-7 bg-white/5 border-white/20 text-white hover:bg-white/10" onClick={() => handleCta(hero.secondary.type as 'scroll' | 'url', hero.secondary.value)}>
                    {hero.secondary.label}
                  </Button>
                </div>

                <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/82">
                  {['ERP empresarial', 'Operação completa', 'Diretoria em tempo real', 'PWA no PC e celular'].map((tag) => (
                    <div key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">{tag}</div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap items-end justify-between gap-6 pt-10">
                <div className="flex gap-2 items-center">
                  {heroSlides.map((_, index) => (
                    <button key={index} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${index === active ? 'w-14' : 'w-2.5 bg-white/30'}`} style={index === active ? { background: `linear-gradient(90deg, ${goldSoft}, ${gold})` } : undefined} />
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

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="grid lg:grid-cols-[0.86fr_1.14fr] gap-6 items-center">
            <div className="rounded-[30px] border border-white/20 p-8 md:p-9 bg-[rgba(244,237,226,0.92)] backdrop-blur-sm shadow-[0_16px_60px_rgba(22,37,61,0.08)]">
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: gold }}>o que é a santya</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight" style={{ color: textDark }}>Mais do que CRM. Um ERP empresarial para organizar a operação inteira.</h2>
              <p className="mt-6 leading-8" style={{ color: textMuted }}>
                A Santya é uma Plataforma ERP Inteligente criada para centralizar gestão comercial, financeira e operacional. Leads, tarefas, contratos, clientes, recebimentos e indicadores compartilham o mesmo contexto, com uma experiência premium e simples de usar.
              </p>
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

        <section id="erp-completo" className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 text-white">
          <div className="rounded-[34px] border border-white/15 p-7 md:p-10 shadow-[0_22px_70px_rgba(22,37,61,0.14)]" style={{ background: 'linear-gradient(145deg, rgba(22,37,61,0.96), rgba(43,65,100,0.94))' }}>
            <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-7 lg:gap-12 items-end">
              <div>
                <div className="text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>Operação integrada</div>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">ERP completo, não apenas CRM</h2>
              </div>
              <p className="text-white/78 leading-8">
                A Santya conecta comercial, contratos, clientes, financeiro e diretoria em uma única plataforma. O time acompanha leads, agenda e tarefas; a gestão acompanha metas, fechamentos e performance; o financeiro controla boletos, baixas, vencimentos e inadimplência.
              </p>
            </div>

            <div className="mt-9 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {[
                { icon: Users2, title: 'Comercial', text: 'CRM, agenda, tarefas e fechamentos.' },
                { icon: FileSignature, title: 'Contratos', text: 'Contratos, assinaturas, documentos e pendências.' },
                { icon: CircleDollarSign, title: 'Financeiro', text: 'Boletos, contas a receber, baixas e inadimplência.' },
                { icon: ChartNoAxesCombined, title: 'Gestão', text: 'Metas, diretoria, BI, ranking e indicadores.' },
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
          </div>
        </section>

        <section id="plataforma" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 text-white">
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
                  <button onClick={() => goToTarget(item.target)} className="w-full h-full text-left">
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

        <section id="recursos" className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20 text-white" onMouseEnter={() => setResourceHoverPaused(true)} onMouseLeave={() => setResourceHoverPaused(false)}>
          <div className="grid min-w-0 items-stretch gap-6 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="flex min-w-0 flex-col overflow-hidden rounded-[30px] border border-white/20 p-6 md:p-7 lg:h-[620px] xl:h-[590px] backdrop-blur-sm shadow-[0_20px_65px_rgba(22,37,61,0.08)]" style={{ background: 'linear-gradient(160deg, rgba(217,161,91,0.20), rgba(244,237,226,0.13), rgba(255,255,255,0.04))' }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/82"><Sparkles size={14} style={{ color: goldSoft }} /> núcleo de valor</div>
              <h2 className="mt-4 text-[29px] font-semibold leading-[1.08] text-white md:text-[34px]">Módulos que trabalham juntos, com visão de ponta a ponta.</h2>
              <p className="mt-4 max-w-xl leading-7 text-white/78">A Santya conecta comercial, contratos, clientes, financeiro e diretoria em uma única plataforma.</p>

              <div ref={moduleListRef} className="santya-module-list mt-5 flex min-w-0 gap-2 overflow-x-auto pb-2 lg:grid lg:h-[230px] lg:grid-cols-1 lg:auto-rows-[40px] lg:overflow-x-hidden lg:overflow-y-auto lg:pr-2 lg:pb-0">
                {featureDetails.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = resourceActive === index;
                  return (
                    <button
                      ref={(element) => { moduleItemRefs.current[index] = element; }}
                      id={`resource-${index}`}
                      key={item.title}
                      onClick={() => {
                        setResourceActive(index);
                        setResourceLocked(true);
                      }}
                      className={`flex h-10 min-w-[164px] items-center gap-2.5 overflow-hidden rounded-[13px] border px-3 text-left transition-colors duration-300 lg:min-w-0 lg:w-full ${isActive ? 'border-[rgba(217,161,91,0.58)] bg-[rgba(255,248,240,0.14)] text-white shadow-[0_8px_22px_rgba(0,0,0,0.12)]' : 'border-white/10 bg-white/[0.05] text-white/68 hover:border-white/20 hover:bg-white/[0.08]'}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px]" style={{ background: isActive ? 'rgba(217,161,91,0.18)' : 'rgba(255,255,255,0.06)', color: isActive ? goldSoft : '#CBD5E1' }}><Icon size={14} /></span>
                      <span className="min-w-0 truncate text-[12px] font-semibold">{item.title}</span>
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
                      <Button className="rounded-2xl px-6 text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('demonstracao')}>
                        Ver isso em ação
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="solucoes" className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20">
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
                <motion.button key={sector} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: idx * 0.05 }} className="text-left rounded-[24px] border border-slate-200 bg-white/70 p-5 hover:border-[rgba(217,161,91,0.45)] transition" onClick={() => scrollToId('demonstracao')}>
                  <div className="text-lg font-medium" style={{ color: textDark }}>{sector}</div>
                  <div className="mt-2 text-sm leading-6" style={{ color: textMuted }}>ERP empresarial para organizar processos, dados e decisões com mais segurança para crescer.</div>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: gold }}>Saiba mais <ArrowUpRight size={15} /></div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20">
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

        <section id="demonstracao" className="max-w-7xl mx-auto px-4 md:px-6 pb-12 pt-8 text-white">
          <div className="rounded-[36px] border border-white/20 overflow-hidden shadow-[0_24px_80px_rgba(22,37,61,0.12)]">
            <div className="grid lg:grid-cols-[1fr_0.85fr]">
              <div className="p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #314C74, #20324E)' }}>
                <div className="text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>Demonstração</div>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">Veja como a Santya conecta sua operação na prática.</h2>
                <p className="mt-5 text-white/82 max-w-2xl leading-7">Solicite uma demonstração da Plataforma ERP Inteligente e descubra como integrar comercial, contratos, clientes, financeiro e diretoria com mais controle, automação e visão real.</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button className="rounded-2xl px-7 text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('contato')}>
                    Solicitar demonstração
                  </Button>
                  <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => scrollToId('contato')}>
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
                  <Button className="rounded-2xl text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => window.location.href = 'mailto:contato@santya.com.br?subject=Solicitação%20de%20demonstração%20Santya'}>
                    contato@santya.com.br
                  </Button>
                  <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => handleCta('url', loginUrl)}>
                    Entrar no sistema
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="max-w-7xl mx-auto px-4 md:px-6 pb-12 pt-4">
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
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('resource-0')}>CRM e Leads</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('resource-1')}>Agenda e Tarefas</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('resource-2')}>Fechamentos</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('resource-3')}>Contratos e Assinaturas</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('resource-5')}>Financeiro</button>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: textDark }}>Recursos</div>
                  <div className="space-y-3.5 text-sm" style={{ color: textMuted }}>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('resource-4')}>Clientes</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('resource-6')}>Boletos e Baixas</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('resource-7')}>Inadimplência</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('resource-11')}>Automações e WhatsApp</button>
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
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => handleCta('url', loginUrl)}>Entrar no sistema</button>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: textDark }}>Contato</div>
                  <div className="space-y-3.5 text-sm" style={{ color: textMuted }}>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('contato')}>WhatsApp comercial</button>
                    <button className="block break-all text-left transition-colors hover:text-[#B8742A]" onClick={() => window.location.href = 'mailto:contato@santya.com.br'}>contato@santya.com.br</button>
                    <button className="block text-left transition-colors hover:text-[#B8742A]" onClick={() => scrollToId('demonstracao')}>Solicitar demonstração</button>
                    <a className="block text-left transition-colors hover:text-[#B8742A]" href="/privacidade">Política de privacidade</a>
                    <a className="block text-left transition-colors hover:text-[#B8742A]" href="/termos">Termos de uso</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center gap-5 border-t border-slate-200 pt-7 text-center text-sm md:flex-row md:justify-between md:text-left">
              <div style={{ color: textMuted }}>© 2026 Santya. Todos os direitos reservados.</div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end" style={{ color: textMuted }}>
                <a className="transition-colors hover:text-[#B8742A]" href="/privacidade">Política de Privacidade</a>
                <a className="transition-colors hover:text-[#B8742A]" href="/termos">Termos de Uso</a>
                <button className="transition-opacity hover:opacity-75" onClick={() => scrollToId('contato')} style={{ color: gold }}>Fale Conosco</button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
