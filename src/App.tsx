import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  BellRing,
  BrainCircuit,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Crown,
  LayoutDashboard,
  Menu,
  MessageCircleMore,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
  X,
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
    eyebrow: 'SANTYA • SISTEMA COMERCIAL PREMIUM',
    title: 'Sistema comercial completo para empresas que querem mais controle, automação e resultado.',
    text:
      'CRM, agenda, tarefas, fechamentos, dashboard executivo, notificações no sistema, alertas no WhatsApp e acesso via PWA em uma experiência premium pensada para vender seu sistema com autoridade.',
    primary: { label: 'Solicitar demonstração', type: 'scroll', value: 'demonstracao' },
    secondary: { label: 'Entrar no sistema', type: 'url', value: loginUrl },
  },
  {
    eyebrow: 'OPERAÇÃO + GESTÃO + DIRETORIA',
    title: 'Uma plataforma para organizar a rotina comercial do lead ao fechamento.',
    text:
      'Menos improviso, mais acompanhamento, mais visão para gestores e mais segurança para a diretoria com dados claros e operação centralizada.',
    primary: { label: 'Conhecer a plataforma', type: 'scroll', value: 'plataforma' },
    secondary: { label: 'Ver recursos', type: 'scroll', value: 'recursos' },
  },
  {
    eyebrow: 'MOVIMENTO + SOFISTICAÇÃO + CONFIANÇA',
    title: 'Seu site principal precisa mostrar valor, clareza e presença de marca.',
    text:
      'A Santya vende controle da operação, inteligência comercial, mobilidade e suporte humanizado em uma linguagem visual moderna e premium.',
    primary: { label: 'Quero essa versão', type: 'scroll', value: 'demonstracao' },
    secondary: { label: 'Explorar conceito', type: 'scroll', value: 'solucoes' },
  },
];

const completeSystemCards = [
  {
    icon: Users2,
    title: 'CRM e Leads',
    text: 'Carteira organizada, histórico, acompanhamento e visão de status para a jornada comercial.',
    target: 'resource-0',
  },
  {
    icon: ClipboardCheck,
    title: 'Tarefas Comerciais',
    text: 'Controle de atividades, responsáveis, prazos, pendências e disciplina operacional.',
    target: 'resource-2',
  },
  {
    icon: CalendarDays,
    title: 'Agenda e Compromissos',
    text: 'Plantões, visitas, rotina diária e agenda comercial individual ou compartilhada.',
    target: 'resource-1',
  },
  {
    icon: Target,
    title: 'Fechamentos',
    text: 'Acompanhamento de andamento, previsão, status e evolução comercial com mais clareza.',
    target: 'solucoes',
  },
  {
    icon: LayoutDashboard,
    title: 'Painel da Diretoria',
    text: 'Indicadores e visão consolidada da operação para decisões mais bem orientadas.',
    target: 'resource-3',
  },
  {
    icon: BellRing,
    title: 'Notificações no Sistema',
    text: 'Avisos para tarefas, leads, compromissos e atualizações importantes da operação.',
    target: 'beneficios',
  },
  {
    icon: MessageCircleMore,
    title: 'Alertas no WhatsApp',
    text: 'Comunicação rápida para eventos relevantes sem excesso de ruído no dia a dia.',
    target: 'demonstracao',
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
    eyebrow: 'CRM E GESTÃO DE LEADS',
    title: 'Controle a jornada comercial desde a entrada do lead.',
    text: 'Cadastro organizado, histórico de movimentações, visão por status, ações do time e acompanhamento mais disciplinado da evolução comercial.',
    bullets: ['Histórico centralizado', 'Jornada por status', 'Mais controle comercial'],
    icon: Users2,
  },
  {
    eyebrow: 'AGENDA COMERCIAL',
    title: 'Mais organização para compromissos, plantões, visitas e rotina diária.',
    text: 'A Santya ajuda a estruturar a agenda por usuário e por equipe, reduzindo ruído e melhorando a execução comercial.',
    bullets: ['Agenda individual', 'Rotina por equipe', 'Compromissos do dia'],
    icon: CalendarDays,
  },
  {
    eyebrow: 'TAREFAS E EXECUÇÃO',
    title: 'Acompanhe responsáveis, prazos e pendências com clareza.',
    text: 'Menos perda de contexto e mais disciplina operacional para o time comercial agir no momento certo.',
    bullets: ['Prazos visíveis', 'Responsáveis definidos', 'Execução acompanhada'],
    icon: ClipboardCheck,
  },
  {
    eyebrow: 'DIRETORIA E GESTÃO',
    title: 'Visão executiva da operação comercial em uma experiência premium.',
    text: 'Leitura mais estratégica da operação, gargalos mais visíveis e acompanhamento por gestor e time.',
    bullets: ['Leitura executiva', 'Indicadores claros', 'Acompanhamento consolidado'],
    icon: Crown,
  },
];

const benefits = [
  'Menos perda de oportunidade',
  'Rotina comercial mais organizada',
  'Equipe mais acompanhada',
  'Mais controle para gestores',
  'Mais segurança para diretoria',
  'Menos ruído operacional',
];

const megaMenu = {
  plataforma: {
    eyebrow: 'ecossistema santya',
    title: 'Sistema comercial completo',
    text: 'Uma plataforma para organizar CRM, agenda, tarefas, fechamentos, indicadores, notificações e acompanhamento executivo em uma estrutura elegante e confiável.',
    actionLabel: 'Conhecer plataforma',
    actionTarget: 'plataforma',
    cards: [
      { label: 'Visão geral da plataforma', description: 'Entenda a jornada completa da operação comercial em um só lugar.', target: 'plataforma' },
      { label: 'Fluxo do lead ao fechamento', description: 'Mostra como o sistema acompanha o processo comercial ponta a ponta.', target: 'recursos' },
      { label: 'Painel da diretoria', description: 'Destaque a visão executiva e os indicadores consolidados da operação.', target: 'resource-3' },
      { label: 'Acesso via PWA', description: 'Explique a mobilidade e a experiência em PC e celular.', target: 'beneficios' },
    ],
  },
  recursos: {
    eyebrow: 'recursos principais',
    title: 'O que a Santya organiza no dia a dia',
    text: 'A Santya centraliza a operação comercial com módulos que tornam o dia a dia mais claro, disciplinado e estratégico.',
    actionLabel: 'Ver recursos',
    actionTarget: 'recursos',
    cards: [
      { label: 'CRM e leads', description: 'Cadastro, histórico, pipeline e andamento da jornada comercial.', target: 'resource-0' },
      { label: 'Agenda comercial', description: 'Plantões, visitas, compromissos e rotina organizada por equipe.', target: 'resource-1' },
      { label: 'Tarefas e execução', description: 'Responsáveis, prazos e acompanhamento operacional com clareza.', target: 'resource-2' },
      { label: 'Notificações e WhatsApp', description: 'Alertas internos e comunicação mais rápida para o time.', target: 'demonstracao' },
    ],
  },
  solucoes: {
    eyebrow: 'soluções por operação',
    title: 'Para operações que precisam de controle real',
    text: 'Perfeito para construtoras, imobiliárias, equipes comerciais e operações consultivas que precisam organizar acompanhamento, rotina e fechamentos.',
    actionLabel: 'Explorar soluções',
    actionTarget: 'solucoes',
    cards: [
      { label: 'Construtoras', description: 'Apresentação premium da operação comercial com mais disciplina e visão gerencial.', target: 'solucoes' },
      { label: 'Imobiliárias', description: 'Mais histórico, agenda e acompanhamento de negociações em um só fluxo.', target: 'solucoes' },
      { label: 'Equipes comerciais', description: 'Rotina mais organizada, menos perda de prazo e acompanhamento do time.', target: 'solucoes' },
      { label: 'Operações consultivas', description: 'Controle de etapas, compromissos e fechamento com leitura estratégica.', target: 'solucoes' },
    ],
  },
} as const;

const previewScreens = [
  {
    title: 'Dashboard comercial',
    subtitle: 'Visão do sistema',
    big: 'Ritmo e operação',
    stats: [
      ['Leads no mês', '15'],
      ['Tarefas abertas', '17'],
      ['Visitas agendadas', '4'],
      ['Fechamentos', '2'],
    ],
    tags: ['CRM', 'Agenda', 'Fechamentos', 'Diretoria'],
  },
  {
    title: 'Painel executivo',
    subtitle: 'Leitura estratégica',
    big: 'Diretoria e gestão',
    stats: [
      ['Meta do mês', '100%'],
      ['Comercial ativo', '4,2 mi'],
      ['Visitas do dia', '6'],
      ['Alertas', '3'],
    ],
    tags: ['BI', 'Radar do dia', 'Equipe', 'Indicadores'],
  },
  {
    title: 'Agenda e tarefas',
    subtitle: 'Rotina organizada',
    big: 'Execução comercial',
    stats: [
      ['Pendências', '12'],
      ['Visitas', '4'],
      ['Plantões', '2'],
      ['Concluídas', '18'],
    ],
    tags: ['Agenda', 'Time', 'Prazos', 'Pendências'],
  },
];

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

function SantyaBrand({ size = 'md', withWordmark = true }: { size?: 'sm' | 'md' | 'lg'; withWordmark?: boolean }) {
  const config = {
    sm: { box: 'w-10 h-10 sm:w-11 sm:h-11', icon: 28, word: 'text-[24px] sm:text-[32px]', sub: 'text-[8px] sm:text-[10px]' },
    md: { box: 'w-12 h-12', icon: 34, word: 'text-[38px]', sub: 'text-[10px]' },
    lg: { box: 'w-16 h-16', icon: 44, word: 'text-[46px]', sub: 'text-[11px]' },
  }[size];

  return (
    <div className="flex items-center gap-4 min-w-0">
      <div
        className={`${config.box} rounded-2xl border border-[rgba(184,116,42,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,237,226,0.72))] flex items-center justify-center shadow-[0_10px_28px_rgba(184,116,42,0.10)]`}
      >
        <svg viewBox="0 0 100 100" width={config.icon} height={config.icon} aria-hidden="true">
          <defs>
            <linearGradient id={`santyaGold-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4D879" />
              <stop offset="45%" stopColor="#D9A15B" />
              <stop offset="100%" stopColor="#8F571C" />
            </linearGradient>
          </defs>
          <rect x="20" y="20" width="60" height="60" rx="2" transform="rotate(45 50 50)" fill="none" stroke={`url(#santyaGold-${size})`} strokeWidth="4.2" />
          <text x="50" y="60" textAnchor="middle" fontSize="54" fontFamily="Cormorant Garamond, Georgia, serif" fontStyle="italic" fill={`url(#santyaGold-${size})`}>
            S
          </text>
        </svg>
      </div>
      {withWordmark && (
        <div className="min-w-0">
          <div className="flex items-end gap-2 sm:gap-3 min-w-0">
            <div
              className={`${config.word} leading-none font-semibold tracking-[0.12em] sm:tracking-[0.18em]`}
              style={{ color: textDark, fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', textShadow: '0 1px 0 rgba(255,255,255,0.55)' }}
            >
              SANTYA
            </div>
            <div className="h-px w-6 sm:w-10 mb-1.5 shrink-0" style={{ background: `linear-gradient(90deg, ${goldSoft}, transparent)` }} />
          </div>
          <div className={`mt-1.5 ${config.sub} uppercase tracking-[0.24em] sm:tracking-[0.42em] whitespace-normal leading-[1.35] max-w-[180px] sm:max-w-none`} style={{ color: textLightMenu }}>
            Soluções empresariais inteligentes
          </div>
        </div>
      )}
    </div>
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

function FloatingCore() {
  const [activeStat, setActiveStat] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActiveStat((prev) => (prev + 1) % 4), 2200);
    return () => window.clearInterval(id);
  }, []);

  const orbitCards = [
    { title: 'CRM', text: 'Leads, histórico e acompanhamento' },
    { title: 'Agenda', text: 'Compromissos, visitas e plantões' },
    { title: 'Fechamentos', text: 'Pipeline, previsão e resultado' },
    { title: 'Diretoria', text: 'Indicadores e visão executiva' },
  ];

  const trackScreens = [...previewScreens, ...previewScreens];

  return (
    <div className="relative min-h-[860px] sm:min-h-[620px] md:min-h-[690px] flex items-center justify-center overflow-hidden rounded-[34px] border border-white/10 shadow-[0_25px_90px_rgba(28,45,73,0.18)]" style={{ background: 'linear-gradient(180deg,#2A4266 0%, #20324E 58%, #1A2B46 100%)' }}>
      <GlowOrb className="w-80 h-80 top-10 right-6" />
      <GlowOrb className="w-72 h-72 bottom-0 left-6" />
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.22) 1px, transparent 1.2px)', backgroundSize: '28px 28px' }} />

      <div className="absolute inset-x-4 md:inset-x-6 top-4 md:top-6 z-20 rounded-[24px] border border-white/10 bg-[rgba(244,237,226,0.08)] p-3 md:p-4 backdrop-blur-md hidden sm:block">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {previewScreens[0].stats.map(([label, value], idx) => (
            <motion.div key={label} animate={{ y: activeStat === idx ? -3 : 0, opacity: activeStat === idx ? 1 : 0.88 }} transition={{ duration: 0.35 }} className="rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.07)] px-3 py-3">
              <div className="text-[11px] text-white/62">{label}</div>
              <div className="mt-1 text-xl md:text-2xl font-semibold text-white">{value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute left-3 right-3 md:left-4 md:right-4 top-[104px] sm:top-[132px] md:top-[150px] z-10 rounded-[28px] border border-white/10 bg-[rgba(245,239,232,0.94)] p-3 shadow-[0_18px_60px_rgba(15,23,42,0.18)] overflow-hidden" style={{ maxHeight: 'calc(100% - 124px)' }}>
        <div className="absolute top-3 right-3 flex items-center gap-2 rounded-full border border-slate-200 bg-white/88 px-3 py-1.5 shadow-sm z-20">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="h-2.5 w-10 rounded-full" style={{ background: `linear-gradient(90deg, ${goldSoft}, ${gold})` }} />
          <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: textMuted }}>prévia em movimento</div>
        </div>

        <div className="overflow-hidden rounded-[22px] hidden md:block">
          <div className="santya-marquee-track">
            {trackScreens.map((screen, index) => (
              <div key={`${screen.title}-${index}`} className="santya-preview-screen rounded-[22px] overflow-hidden border border-slate-200 bg-[#f8f7f4]">
                <div className="flex items-center justify-between gap-4 px-4 py-3 bg-white border-b border-slate-200">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: gold }}>
                      SANTYA • {screen.subtitle}
                    </div>
                    <div className="mt-1 text-base md:text-lg font-semibold" style={{ color: textDark }}>
                      {screen.title}
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                    {screen.tags.map((item) => (
                      <div key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px]" style={{ color: textMuted }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4" style={{ background: 'linear-gradient(180deg, #f8f7f4 0%, #f3f0ea 100%)' }}>
                  <div className="rounded-[22px] p-4 md:p-5" style={{ background: 'linear-gradient(180deg,#1f3d74 0%, #1b3564 100%)' }}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.24em] text-[#d9a15b]">Ritmo comercial</div>
                        <div className="mt-2 text-xl md:text-2xl font-semibold text-white">{screen.big}</div>
                        <div className="mt-1 text-sm text-white/72">Leitura diária da operação</div>
                      </div>
                      <div className="hidden md:flex rounded-full px-4 py-2 text-sm font-medium text-[#1b1205]" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }}>Abrir módulo</div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {screen.stats.map(([label, value]) => (
                        <div key={label} className="rounded-[16px] border border-white/10 bg-white/10 px-3 py-3">
                          <div className="text-[11px] text-white/62">{label}</div>
                          <div className="mt-1 text-lg md:text-xl font-semibold text-white">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid md:grid-cols-[1.15fr_0.85fr] gap-4">
                    <div className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold" style={{ color: textDark }}>Movimento do mês</div>
                          <div className="text-xs mt-1" style={{ color: textMuted }}>Referência comercial</div>
                        </div>
                        <div className="rounded-full px-3 py-1 text-[11px] bg-slate-100" style={{ color: textMuted }}>Equipe comercial</div>
                      </div>
                      <div className="mt-5 flex items-end gap-2 h-[150px]">
                        {[34, 48, 42, 56, 78, 118].map((height, idx) => (
                          <div key={height} className="flex-1 flex flex-col items-center justify-end gap-3">
                            <div className="w-full rounded-t-[14px]" style={{ height, background: idx === 5 ? 'linear-gradient(180deg,#8EC2FF,#2563EB)' : 'linear-gradient(180deg,#7BB3FF,#4E8DFF)' }} />
                            <div className="text-[10px]" style={{ color: textMuted }}>{['OUT', 'NOV', 'DEZ', 'JAN', 'FEV', 'MAR'][idx]}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[20px] border border-slate-200 bg-white p-4">
                        <div className="text-sm font-semibold" style={{ color: textDark }}>Resumo do dia</div>
                        <div className="mt-3 grid gap-3">
                          {[
                            ['Meta do mês', '100%', '🤩'],
                            ['Leads no mês', '15', '•'],
                            ['Visitas agendadas', '4', '•'],
                          ].map(([k, v, e], i) => (
                            <div key={k} className="rounded-[14px] border border-slate-100 bg-slate-50 px-3 py-3 flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <span className="text-lg">{e}</span>
                                <div className="text-sm" style={{ color: textDark }}>{k}</div>
                              </div>
                              <div className="text-lg font-semibold" style={{ color: i === 0 ? '#16a34a' : textDark }}>{v}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[20px] border border-slate-200 bg-white p-4">
                        <div className="text-sm font-semibold" style={{ color: textDark }}>Acesso rápido</div>
                        <div className="mt-3 grid gap-3">
                          {['CRM', 'Agenda', 'Tarefas', 'Diretoria'].map((module) => (
                            <div key={module} className="rounded-[14px] border border-slate-100 bg-slate-50 px-3 py-3 text-sm font-medium" style={{ color: textDark }}>
                              {module}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden rounded-[22px] overflow-hidden border border-slate-200 bg-[#f8f7f4]">
          <div className="flex items-center justify-between gap-3 px-4 py-3 bg-white border-b border-slate-200">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: gold }}>
                SANTYA • prévia em movimento
              </div>
              <div className="mt-1 text-base font-semibold" style={{ color: textDark }}>
                Leitura leve do sistema no celular
              </div>
            </div>
            <div className="rounded-full px-3 py-1 text-[10px] font-medium text-[#1b1205]" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }}>
              Ao vivo
            </div>
          </div>
          <div className="p-3 sm:p-4" style={{ background: 'linear-gradient(180deg, #f8f7f4 0%, #f3f0ea 100%)' }}>
            <div className="overflow-hidden rounded-[18px]">
              <div className="santya-mobile-marquee-track">
                {[...previewScreens, ...previewScreens].map((screen, index) => (
                  <div key={`${screen.title}-mobile-${index}`} className="santya-mobile-preview rounded-[18px] overflow-hidden border border-slate-200 bg-white shadow-sm">
                    <div className="px-3 py-3 border-b border-slate-200 bg-white">
                      <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: gold }}>{screen.subtitle}</div>
                      <div className="mt-1 text-sm font-semibold leading-snug" style={{ color: textDark }}>{screen.title}</div>
                    </div>
                    <div className="p-3" style={{ background: 'linear-gradient(180deg,#1f3d74 0%, #1b3564 100%)' }}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.18em] text-[#d9a15b]">Ritmo comercial</div>
                          <div className="mt-1 text-lg font-semibold text-white leading-tight">{screen.big}</div>
                          <div className="mt-1 text-[11px] text-white/70">Leitura da operação</div>
                        </div>
                        <div className="rounded-full px-3 py-1 text-[10px] font-medium text-[#1b1205]" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }}>
                          Ao vivo
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {screen.stats.slice(0, 4).map(([label, value]) => (
                          <div key={label} className="rounded-[14px] border border-white/10 bg-white/10 px-3 py-2.5 min-h-[74px] flex flex-col justify-between">
                            <div className="text-[10px] leading-tight text-white/65">{label}</div>
                            <div className="mt-1 text-base font-semibold text-white">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-[#f8f7f4] border-t border-slate-200">
                      <div className="rounded-[16px] border border-slate-200 bg-white p-3">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <div className="text-[10px] uppercase tracking-[0.14em]" style={{ color: textMuted }}>Movimento do mês</div>
                            <div className="mt-1 text-xs" style={{ color: textMuted }}>Referência comercial</div>
                          </div>
                          <div className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px]" style={{ color: textMuted }}>Equipe</div>
                        </div>
                        <div className="mt-3 flex items-end gap-1.5 h-[92px]">
                          {[26, 38, 34, 44, 58, 74].map((height, barIndex) => (
                            <div key={`${screen.title}-${barIndex}`} className="flex-1 flex flex-col items-center justify-end gap-2">
                              <div className="w-full rounded-t-[10px]" style={{ height, background: barIndex === 5 ? 'linear-gradient(180deg,#8EC2FF,#2563EB)' : 'linear-gradient(180deg,#A9CCFF,#5B8EF7)' }} />
                              <div className="text-[9px]" style={{ color: textMuted }}>{['OUT', 'NOV', 'DEZ', 'JAN', 'FEV', 'MAR'][barIndex]}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="rounded-[14px] border border-slate-200 bg-white px-3 py-3 min-h-[74px]">
                          <div className="text-[10px] uppercase tracking-[0.14em]" style={{ color: textMuted }}>Resumo do dia</div>
                          <div className="mt-2 text-sm font-semibold" style={{ color: textDark }}>Meta 100%</div>
                        </div>
                        <div className="rounded-[14px] border border-slate-200 bg-white px-3 py-3 min-h-[74px]">
                          <div className="text-[10px] uppercase tracking-[0.14em]" style={{ color: textMuted }}>Acesso rápido</div>
                          <div className="mt-2 text-sm font-semibold" style={{ color: textDark }}>CRM + Agenda</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute inset-0 p-6 md:p-8 pointer-events-none hidden md:block">
        <div className="grid grid-cols-2 gap-4 h-full">
          {orbitCards.map((item, index) => {
            const positions = ['self-start justify-self-start mt-24', 'self-start justify-self-end mt-16', 'self-end justify-self-start mb-28', 'self-end justify-self-end mb-20'];
            return (
              <motion.div key={item.title} animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0], opacity: [0.85, 1, 0.85] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }} className={`${positions[index]} max-w-[220px] rounded-[24px] border p-4 md:p-5 backdrop-blur-md border-white/10 bg-[rgba(255,248,240,0.10)]`}>
                <div className="text-sm font-semibold" style={{ color: goldSoft }}>{item.title}</div>
                <div className="text-sm text-white/86 leading-6 mt-2">{item.text}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MegaMenuPanel({ activeKey, onClose, onPanelEnter, onPanelLeave }: { activeKey: keyof typeof megaMenu | null; onClose: () => void; onPanelEnter: () => void; onPanelLeave: () => void }) {
  if (!activeKey) return null;
  const data = megaMenu[activeKey];

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} onMouseEnter={onPanelEnter} onMouseLeave={onPanelLeave} className="fixed inset-x-0 top-[78px] z-[70] px-3 sm:px-4 pointer-events-auto">
        <div className="mx-auto w-[860px] max-w-full rounded-[24px] border border-white/10 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.22)]" style={{ background: 'rgba(245,237,226,0.97)', backdropFilter: 'blur(18px)' }}>
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
  const megaCloseTimeout = useRef<number | null>(null);
  const [mobileMegaOpen, setMobileMegaOpen] = useState<keyof typeof megaMenu | null>(null);
  const [resourceActive, setResourceActive] = useState(0);

  const clearMegaClose = () => {
    if (megaCloseTimeout.current !== null) {
      window.clearTimeout(megaCloseTimeout.current);
      megaCloseTimeout.current = null;
    }
  };

  const scheduleMegaClose = () => {
    clearMegaClose();
    megaCloseTimeout.current = window.setTimeout(() => setMegaOpen(null), 680);
  };

  useEffect(() => () => clearMegaClose(), []);

  const [resourceLocked, setResourceLocked] = useState(false);

  useEffect(() => {
    if (resourceLocked) return;
    const id = window.setInterval(() => setResourceActive((prev) => (prev + 1) % featureDetails.length), 3200);
    return () => window.clearInterval(id);
  }, [resourceLocked]);

  const activeFeature = featureDetails[resourceActive];
  const ActiveFeatureIcon = activeFeature.icon;

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: cream }}>
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(184,116,42,0.15), transparent 24%), radial-gradient(circle at 18% 15%, rgba(255,255,255,0.7), transparent 16%), linear-gradient(180deg, #F5EBDD 0%, #E9DFC9 13%, #2A4266 42%, #1A2B46 100%)' }} />

      <header className="sticky top-0 z-50 border-b border-white/20 backdrop-blur-xl bg-[rgba(244,237,226,0.42)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-6 relative">
          <button className="text-left max-w-[calc(100vw-84px)] md:max-w-none shrink min-w-0" onClick={() => scrollToId('topo')}>
            <SantyaBrand size="sm" />
          </button>

          <div className="hidden xl:flex items-center gap-7 text-sm relative" onMouseEnter={clearMegaClose} onMouseLeave={scheduleMegaClose}>
            {menuItems.map((item) => (
              <div key={item.key} className="relative">
                <button
                  onMouseEnter={() => { clearMegaClose(); item.hasMega && setMegaOpen(item.key as keyof typeof megaMenu); }}
                  onClick={() => {
                    if (item.hasMega) {
                      setMegaOpen((prev) => (prev === item.key ? null : (item.key as keyof typeof megaMenu)));
                    } else {
                      scrollToId(sectionMap[item.key]);
                      setMegaOpen(null);
                    }
                  }}
                  className="flex items-center gap-1 transition hover:opacity-80"
                >
                  <span style={{ color: textDark }}>{item.label}</span>
                  {item.hasMega && <ChevronDown size={15} color={textDark} />}
                </button>
              </div>
            ))}
            <MegaMenuPanel activeKey={megaOpen} onClose={() => setMegaOpen(null)} onPanelEnter={clearMegaClose} onPanelLeave={scheduleMegaClose} />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="rounded-2xl border-slate-300 bg-white/55 hover:bg-white/80" style={{ color: textDark }} onClick={() => handleCta('url', loginUrl)}>
              Entrar
            </Button>
            <Button className="rounded-2xl px-5 text-[#1b1205] font-semibold shadow-[0_0_30px_rgba(217,161,91,0.22)]" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('demonstracao')}>
              Solicitar demonstração
            </Button>
          </div>

          <button onClick={() => setMobileOpen((v) => !v)} className="xl:hidden w-11 h-11 rounded-2xl border border-white/20 bg-white/10 flex items-center justify-center">
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
          <div className="grid xl:grid-cols-[1.08fr_0.92fr] gap-7 items-stretch">
            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="relative overflow-hidden rounded-[34px] border border-white/10 min-h-[590px] md:min-h-[690px] p-8 md:p-12 flex flex-col justify-between shadow-[0_30px_100px_rgba(22,37,61,0.18)]" style={{ background: `linear-gradient(135deg, ${slateSoft} 0%, ${slate} 52%, #314C74 100%)` }}>
              <GlowOrb className="w-72 h-72 top-8 right-0" />
              <GlowOrb className="w-96 h-96 -bottom-10 left-12" />
              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '34px 34px' }} />

              <div className="relative z-10 max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs tracking-[0.24em] uppercase" style={{ color: goldSoft, background: 'rgba(255,255,255,0.05)' }}>
                  <Sparkles size={14} /> {hero.eyebrow}
                </span>
                <AnimatePresence mode="wait">
                  <motion.div key={hero.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45 }}>
                    <h1 className="mt-7 text-4xl md:text-6xl font-semibold leading-[1.02] max-w-5xl text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.18)]">{hero.title}</h1>
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
                  {['Gestão comercial completa', 'Notificações inteligentes', 'Acesso via PWA', 'Suporte humanizado'].map((tag) => (
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
                    { label: 'CRM + rotina', value: '360°' },
                    { label: 'Diretoria', value: 'BI' },
                    { label: 'WhatsApp + PWA', value: 'ON' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 min-w-[126px]">
                      <div className="text-2xl font-semibold" style={{ color: goldSoft }}>{item.value}</div>
                      <div className="text-xs text-white/70 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <FloatingCore />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="grid lg:grid-cols-[0.86fr_1.14fr] gap-6 items-center">
            <div className="rounded-[30px] border border-white/20 p-8 md:p-9 bg-[rgba(244,237,226,0.92)] backdrop-blur-sm shadow-[0_16px_60px_rgba(22,37,61,0.08)]">
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: gold }}>o que é a santya</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight" style={{ color: textDark }}>Mais do que um programa. Uma plataforma comercial para organizar a operação inteira.</h2>
              <p className="mt-6 leading-8" style={{ color: textMuted }}>
                A Santya é uma plataforma de gestão comercial criada para centralizar leads, tarefas, agenda, acompanhamentos, fechamentos, indicadores e comunicação operacional em um só lugar. A proposta do site é vender exatamente isso: sofisticação, completude e confiança.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 items-center content-center self-center max-w-[720px] mx-auto">
              {[
                { icon: Building2, title: 'Mais controle', text: 'Menos improviso e mais clareza sobre o que está acontecendo na operação.' },
                { icon: ShieldCheck, title: 'Mais confiança', text: 'Estrutura profissional com cara de software robusto e premium.' },
                { icon: BrainCircuit, title: 'Mais inteligência', text: 'Narrativa visual de IA, automação e performance para valor percebido maior.' },
                { icon: LayoutDashboard, title: 'Mais visão', text: 'Diretoria e gestores com leitura clara da operação e dos próximos passos.' },
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

        <section id="plataforma" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 text-white">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: gold }}>Sistema comercial completo</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold max-w-4xl text-white">Tudo que a operação comercial precisa, em um só sistema.</h2>
            </div>
            <p className="max-w-2xl leading-7 text-white/78">Da entrada do lead ao fechamento, com acompanhamento diário, histórico, notificações, visão estratégica e uma apresentação visual muito mais forte para converter empresas interessadas.</p>
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

        <section id="recursos" className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20 text-white">
          <div className="grid xl:grid-cols-[0.38fr_0.62fr] gap-5 items-stretch">
            <div className="rounded-[30px] border border-white/20 p-5 md:p-7 backdrop-blur-sm shadow-[0_20px_65px_rgba(22,37,61,0.08)]" style={{ background: 'linear-gradient(160deg, rgba(217,161,91,0.20), rgba(244,237,226,0.13), rgba(255,255,255,0.04))' }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/82"><Sparkles size={14} style={{ color: goldSoft }} /> núcleo de valor</div>
              <h2 className="mt-5 text-[30px] md:text-[36px] font-semibold leading-[1.08] text-white max-w-[11ch]">Um núcleo que se mexe e explica o seu sistema do jeito certo.</h2>
              <p className="mt-4 text-white/78 leading-7 max-w-xl">Os módulos se destacam sozinhos e, quando a pessoa clicar em um item, o automático pausa para mostrar exatamente aquele conteúdo.</p>
              <div className="mt-7 grid gap-3">
                {['Operação comercial centralizada', 'Notificações e alertas na hora certa', 'Visão para gestores e diretoria', 'Experiência moderna em PC e celular'].map((label) => (
                  <div key={label} className="rounded-[20px] border border-white/10 bg-white/[0.05] px-5 py-4 text-white/82">{label}</div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button className="rounded-2xl text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('demonstracao')}>
                  Solicitar demonstração
                </Button>
                <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => scrollToId('solucoes')}>
                  Ver aplicações
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="grid md:grid-cols-[0.92fr_1.08fr] gap-5 items-stretch">
                <div className="rounded-[30px] border border-white/15 bg-[rgba(32,50,78,0.52)] p-4 md:p-5 order-2 xl:order-1 backdrop-blur-sm shadow-[0_18px_50px_rgba(22,37,61,0.12)]">
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {featureDetails.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = resourceActive === index;
                      return (
                        <button
                          id={`resource-${index}`}
                          key={item.eyebrow}
                          onClick={() => {
                            setResourceActive(index);
                            setResourceLocked(true);
                          }}
                          className={`text-left rounded-[22px] border p-4 transition-all duration-300 min-h-[92px] ${isActive ? 'border-[rgba(217,161,91,0.45)] bg-[rgba(255,248,240,0.14)] shadow-[0_10px_28px_rgba(0,0,0,0.12)]' : 'border-white/10 bg-[rgba(255,248,240,0.07)] hover:bg-[rgba(255,248,240,0.10)]'}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: isActive ? 'rgba(217,161,91,0.18)' : 'rgba(255,255,255,0.07)', color: isActive ? goldSoft : '#D6DEE9' }}>
                              <Icon size={20} />
                            </div>
                            <div>
                              <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: isActive ? goldSoft : 'rgba(255,255,255,0.55)' }}>{item.eyebrow}</div>
                              <div className="mt-2 text-lg font-semibold text-white leading-snug">{item.title}</div>
                              {isActive && <div className="mt-2 text-sm text-white/72 leading-6">{item.text}</div>}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div className="order-1 xl:order-2" key={activeFeature.eyebrow} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }}>
                    <Card className="h-full rounded-[28px] border border-white/15 bg-[rgba(32,50,78,0.62)] p-5 md:p-7 backdrop-blur-sm shadow-[0_18px_50px_rgba(22,37,61,0.12)] overflow-hidden">
                      <CardContent className="p-0 h-full flex flex-col">
                        <div className="w-14 h-14 rounded-[20px] flex items-center justify-center" style={{ background: 'rgba(217,161,91,0.16)', color: goldSoft }}>
                          <ActiveFeatureIcon size={24} />
                        </div>
                        <div className="mt-5 text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>{activeFeature.eyebrow}</div>
                        <h3 className="mt-4 text-[28px] md:text-[34px] font-semibold leading-[1.08] text-white max-w-[15ch]">{activeFeature.title}</h3>
                        <p className="mt-5 text-white/80 leading-8 max-w-2xl">{activeFeature.text}</p>

                        <div className="mt-8 grid sm:grid-cols-3 gap-3">
                          {activeFeature.bullets.map((bullet) => (
                            <div key={bullet} className="rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-4 text-sm text-white/82 leading-6">
                              {bullet}
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto pt-8 flex flex-wrap gap-3">
                          {!resourceLocked ? (
                            <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/72">Rodando automaticamente pelos módulos</div>
                          ) : (
                            <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => setResourceLocked(false)}>
                              Voltar ao automático
                            </Button>
                          )}
                          <Button className="rounded-2xl text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('demonstracao')}>
                            Quero ver isso em ação
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20">
          <div className="rounded-[34px] border border-white/20 bg-[rgba(244,237,226,0.90)] p-8 md:p-10 backdrop-blur-sm shadow-[0_18px_60px_rgba(22,37,61,0.08)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>Para quem é a Santya</div>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold" style={{ color: textDark }}>Feita para empresas que precisam organizar a operação comercial.</h2>
              </div>
              <p className="max-w-2xl leading-7" style={{ color: textMuted }}>Construtoras, imobiliárias, equipes comerciais e operações com volume de leads ganham mais organização, controle e visão estratégica.</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                'Construtoras',
                'Imobiliárias',
                'Equipes comerciais',
                'Operações consultivas',
                'Empresas com volume de leads',
                'Negócios que precisam de mais controle',
              ].map((sector, idx) => (
                <motion.button key={sector} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: idx * 0.05 }} className="text-left rounded-[24px] border border-slate-200 bg-white/70 p-5 hover:border-[rgba(217,161,91,0.45)] transition" onClick={() => scrollToId('demonstracao')}>
                  <div className="text-lg font-medium" style={{ color: textDark }}>{sector}</div>
                  <div className="mt-2 text-sm leading-6" style={{ color: textMuted }}>Estrutura comercial com mais disciplina, acompanhamento e segurança para crescer.</div>
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
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight" style={{ color: textDark }}>Mais organização. Mais controle. Mais resultado.</h2>
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
                    { step: '1. Implantação', text: 'Configuração inicial da empresa, estrutura e usuários.' },
                    { step: '2. Operação', text: 'Uso diário do CRM, tarefas, agenda e fluxo comercial.' },
                    { step: '3. Automação', text: 'Notificações no sistema e alertas importantes no WhatsApp.' },
                    { step: '4. Gestão', text: 'Acompanhamento por gestores e visão consolidada para diretoria.' },
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

        <section id="demonstracao" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 pt-8 text-white">
          <div className="rounded-[36px] border border-white/20 overflow-hidden shadow-[0_24px_80px_rgba(22,37,61,0.12)]">
            <div className="grid lg:grid-cols-[1fr_0.85fr]">
              <div className="p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #314C74, #20324E)' }}>
                <div className="text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>Demonstração</div>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">Quer ver a Santya funcionando na prática?</h2>
                <p className="mt-5 text-white/82 max-w-2xl leading-7">Solicite uma demonstração e conheça como a Santya pode organizar a operação comercial da sua empresa com mais controle, automação e visão estratégica.</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="rounded-2xl px-7 text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('contato')}>
                    Solicitar demonstração
                  </Button>
                  <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={() => scrollToId('contato')}>
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>

              <div id="contato" className="p-8 md:p-12 flex flex-col justify-center" style={{ background: slateDeep }}>
                <div className="text-white/60 text-sm uppercase tracking-[0.24em]">Resumo comercial</div>
                <div className="mt-6 space-y-4">
                  {[
                    'Sistema comercial completo e premium',
                    'CRM, agenda, tarefas, fechamentos, diretoria, notificações e PWA',
                    'Cara de software grande com identidade própria Santya',
                    'Pronto para vender confiança, modernidade e estrutura',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-white/82 leading-7">{item}</div>
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
          <div className="rounded-[32px] border border-white/20 bg-[rgba(244,237,226,0.92)] backdrop-blur-sm shadow-[0_16px_55px_rgba(22,37,61,0.08)] p-8 md:p-10">
            <div className="grid md:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[0.7fr_1.3fr] gap-10">
              <div>
                <SantyaBrand size="md" />
                <p className="mt-6 max-w-md leading-7" style={{ color: textMuted }}>Tecnologia, organização e resultado para a gestão comercial da sua empresa, com operação estruturada, visão estratégica e suporte humanizado.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 break-words">
                <div>
                  <div className="text-sm font-semibold mb-4" style={{ color: textDark }}>Plataforma</div>
                  <div className="space-y-3 text-sm" style={{ color: textMuted }}>
                    <button className="block text-left" onClick={() => scrollToId('resource-0')}>CRM e Leads</button>
                    <button className="block text-left" onClick={() => scrollToId('resource-2')}>Tarefas Comerciais</button>
                    <button className="block text-left" onClick={() => scrollToId('resource-1')}>Agenda e Compromissos</button>
                    <button className="block text-left" onClick={() => scrollToId('solucoes')}>Fechamentos</button>
                    <button className="block text-left" onClick={() => scrollToId('resource-3')}>Painel da Diretoria</button>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-4" style={{ color: textDark }}>Recursos</div>
                  <div className="space-y-3 text-sm" style={{ color: textMuted }}>
                    <button className="block text-left" onClick={() => scrollToId('beneficios')}>Notificações no Sistema</button>
                    <button className="block text-left" onClick={() => scrollToId('contato')}>Alertas no WhatsApp</button>
                    <button className="block text-left" onClick={() => scrollToId('beneficios')}>PWA para PC e Celular</button>
                    <button className="block text-left" onClick={() => scrollToId('demonstracao')}>Suporte Humanizado</button>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-4" style={{ color: textDark }}>Navegação</div>
                  <div className="space-y-3 text-sm" style={{ color: textMuted }}>
                    <button className="block text-left" onClick={() => scrollToId('topo')}>Início</button>
                    <button className="block text-left" onClick={() => scrollToId('plataforma')}>Plataforma</button>
                    <button className="block text-left" onClick={() => scrollToId('recursos')}>Recursos</button>
                    <button className="block text-left" onClick={() => scrollToId('demonstracao')}>Demonstração</button>
                    <button className="block text-left" onClick={() => handleCta('url', loginUrl)}>Entrar no sistema</button>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-4" style={{ color: textDark }}>Contato</div>
                  <div className="space-y-3 text-sm" style={{ color: textMuted }}>
                    <button className="block text-left" onClick={() => scrollToId('contato')}>WhatsApp comercial</button>
                    <button className="block text-left break-all" onClick={() => window.location.href = 'mailto:contato@santya.com.br'}>contato@santya.com.br</button>
                    <button className="block text-left" onClick={() => scrollToId('demonstracao')}>Solicitar demonstração</button>
                    <button className="block text-left" onClick={() => scrollToId('contato')}>Política de privacidade</button>
                    <button className="block text-left" onClick={() => scrollToId('contato')}>Termos de uso</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
              <div style={{ color: textMuted }}>© 2026 Santya. Todos os direitos reservados.</div>
              <div className="flex flex-wrap items-center gap-5" style={{ color: textMuted }}>
                <button onClick={() => scrollToId('contato')}>Política de Privacidade</button>
                <button onClick={() => scrollToId('contato')}>Termos de Uso</button>
                <button onClick={() => scrollToId('contato')} style={{ color: gold }}>Fale Conosco</button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
