import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import {
  ArrowUpRight,
  BellRing,
  BrainCircuit,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleDashed,
  ClipboardCheck,
  Crown,
  LayoutDashboard,
  Menu,
  MessageCircleMore,
  MonitorSmartphone,
  PhoneCall,
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

const menuItems = [
  { key: 'plataforma', label: 'Plataforma' },
  { key: 'recursos', label: 'Recursos' },
  { key: 'solucoes', label: 'Soluções' },
  { key: 'beneficios', label: 'Benefícios' },
  { key: 'demonstracao', label: 'Demonstração' },
  { key: 'contato', label: 'Contato' },
];

const megaMenu = {
  plataforma: {
    title: 'Sistema comercial completo',
    text: 'Uma plataforma para organizar CRM, agenda, tarefas, fechamentos, indicadores, notificações e acompanhamento executivo em uma estrutura elegante e confiável.',
    links: ['Visão geral da plataforma', 'Fluxo do lead ao fechamento', 'Painel da diretoria', 'Acesso via PWA'],
  },
  recursos: {
    title: 'Recursos principais',
    text: 'A Santya centraliza a operação comercial com módulos que tornam o dia a dia mais claro, disciplinado e estratégico.',
    links: ['CRM e leads', 'Agenda comercial', 'Tarefas e execução', 'Notificações e WhatsApp'],
  },
  solucoes: {
    title: 'Para operações que precisam de controle real',
    text: 'Perfeito para construtoras, imobiliárias, times comerciais e empresas que precisam organizar acompanhamento, rotinas e fechamentos.',
    links: ['Construtoras', 'Imobiliárias', 'Equipes comerciais', 'Operações consultivas'],
  },
};

const heroSlides = [
  {
    eyebrow: 'SANTYA • SISTEMA COMERCIAL PREMIUM',
    title: 'Sistema comercial completo para empresas que querem mais controle, automação e resultado.',
    text:
      'CRM, agenda, tarefas, fechamentos, dashboard executivo, notificações no sistema, alertas no WhatsApp e acesso via PWA em uma experiência premium pensada para vender seu sistema com autoridade.',
    primary: 'Solicitar demonstração',
    secondary: 'Entrar no sistema',
  },
  {
    eyebrow: 'OPERAÇÃO + GESTÃO + DIRETORIA',
    title: 'Uma plataforma para organizar a rotina comercial do lead ao fechamento.',
    text:
      'Menos improviso, mais acompanhamento, mais visão para gestores e mais segurança para a diretoria com dados claros e operação centralizada.',
    primary: 'Conhecer a plataforma',
    secondary: 'Ver recursos',
  },
  {
    eyebrow: 'MOVIMENTO + SOFISTICAÇÃO + CONFIANÇA',
    title: 'Seu site principal precisa mostrar valor, clareza e presença de marca.',
    text:
      'A Santya vende controle da operação, inteligência comercial, mobilidade e suporte humanizado em uma linguagem visual moderna e premium.',
    primary: 'Quero essa versão',
    secondary: 'Explorar conceito',
  },
];

const completeSystemCards = [
  { icon: Users2, title: 'CRM e Leads', text: 'Carteira organizada, histórico, acompanhamento e visão de status para a jornada comercial.' },
  { icon: ClipboardCheck, title: 'Tarefas Comerciais', text: 'Controle de atividades, responsáveis, prazos, pendências e disciplina operacional.' },
  { icon: CalendarDays, title: 'Agenda e Compromissos', text: 'Plantões, visitas, rotina diária e agenda comercial individual ou compartilhada.' },
  { icon: Target, title: 'Fechamentos', text: 'Acompanhamento de andamento, previsão, status e evolução comercial com mais clareza.' },
  { icon: LayoutDashboard, title: 'Painel da Diretoria', text: 'Indicadores e visão consolidada da operação para decisões mais bem orientadas.' },
  { icon: BellRing, title: 'Notificações no Sistema', text: 'Avisos para tarefas, leads, compromissos e atualizações importantes da operação.' },
  { icon: MessageCircleMore, title: 'Alertas no WhatsApp', text: 'Comunicação rápida para eventos relevantes sem excesso de ruído no dia a dia.' },
  { icon: MonitorSmartphone, title: 'PWA para PC e Celular', text: 'Uso leve, moderno e prático no navegador ou como app instalado.' },
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

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function SantyaBrand({ size = 'md', withWordmark = true }: { size?: 'sm' | 'md' | 'lg'; withWordmark?: boolean }) {
  const config = {
    sm: { box: 'w-11 h-11', icon: 30, word: 'text-[32px]', sub: 'text-[10px]' },
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
          <div className="flex items-end gap-3">
            <div
              className={`${config.word} leading-none font-semibold tracking-[0.18em]`}
              style={{ color: textDark, fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', textShadow: '0 1px 0 rgba(255,255,255,0.55)' }}
            >
              SANTYA
            </div>
            <div className="h-px w-10 mb-1.5" style={{ background: `linear-gradient(90deg, ${goldSoft}, transparent)` }} />
          </div>
          <div className={`mt-1.5 ${config.sub} uppercase tracking-[0.42em] truncate`} style={{ color: textLightMenu }}>
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
    const id = setInterval(() => setActive((prev) => (prev + 1) % length), 6500);
    return () => clearInterval(id);
  }, [length]);

  return { active, setActive };
}

function GlowOrb({ className = '' }: { className?: string }) {
  return <div className={`absolute rounded-full blur-3xl opacity-40 ${className}`} style={{ background: `radial-gradient(circle, ${goldSoft} 0%, rgba(217,161,91,0.22) 36%, transparent 72%)` }} />;
}

function FloatingCore() {
  const rotate = useMotionValue(0);
  const smoothRotate = useSpring(rotate, { stiffness: 40, damping: 20 });
  const [activeCard, setActiveCard] = useState(0);
  const [previewOffset, setPreviewOffset] = useState(0);
  const previewMaxOffset = -744;

  useEffect(() => {
    let frame = 0;
    const id = setInterval(() => {
      frame += 8;
      rotate.set(frame);
    }, 100);
    return () => clearInterval(id);
  }, [rotate]);

  useEffect(() => {
    const id = setInterval(() => setActiveCard((prev) => (prev + 1) % 4), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let direction = -1;
    const id = setInterval(() => {
      setPreviewOffset((prev) => {
        const next = prev + direction * 6;
        if (next <= previewMaxOffset) {
          direction = 1;
          return previewMaxOffset;
        }
        if (next >= 0) {
          direction = -1;
          return 0;
        }
        return next;
      });
    }, 120);
    return () => clearInterval(id);
  }, []);

  const orbitCards = [
    { title: 'CRM', text: 'Leads, histórico e acompanhamento' },
    { title: 'Agenda', text: 'Compromissos, visitas e plantões' },
    { title: 'Fechamentos', text: 'Pipeline, previsão e resultado' },
    { title: 'Diretoria', text: 'Indicadores e visão executiva' },
  ];

  const quickStats = [
    { label: 'Leads no mês', value: '15' },
    { label: 'Tarefas abertas', value: '17' },
    { label: 'Visitas agendadas', value: '4' },
    { label: 'Fechamentos', value: '2' },
  ];

  const previewModules = [
    { title: 'CRM', cta: 'Abrir módulo' },
    { title: 'Tarefas CRM', cta: 'Abrir módulo' },
    { title: 'Fechamentos', cta: 'Abrir módulo' },
    { title: 'Diretoria', cta: 'Abrir módulo' },
  ];

  return (
    <div className="relative min-h-[560px] flex items-center justify-center overflow-hidden rounded-[34px] border border-white/10 shadow-[0_25px_90px_rgba(28,45,73,0.18)]" style={{ background: 'linear-gradient(180deg,#2A4266 0%, #20324E 58%, #1A2B46 100%)' }}>
      <GlowOrb className="w-80 h-80 top-10 right-6" />
      <GlowOrb className="w-72 h-72 bottom-0 left-6" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.22) 1px, transparent 1.2px)', backgroundSize: '26px 26px' }} />

      <div className="absolute inset-x-6 top-6 z-20 rounded-[24px] border border-white/10 bg-[rgba(244,237,226,0.08)] p-4 backdrop-blur-xl">
        <div className="grid grid-cols-4 gap-3">
          {quickStats.map((item, idx) => (
            <motion.div key={item.label} animate={{ y: activeCard === idx ? -3 : 0, opacity: activeCard === idx ? 1 : 0.88 }} className="rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.07)] px-3 py-3">
              <div className="text-[11px] text-white/62">{item.label}</div>
              <div className="mt-1 text-2xl font-semibold text-white">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div style={{ rotate: smoothRotate }} className="absolute w-[360px] h-[360px] rounded-full border border-[rgba(217,161,91,0.32)] border-dashed" />
      <motion.div style={{ rotate: smoothRotate }} className="absolute w-[470px] h-[470px] rounded-full border border-[rgba(255,255,255,0.10)]" />
      <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.45, 0.75, 0.45] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute w-[220px] h-[220px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(217,161,91,0.24), transparent 68%)' }} />

      <div className="absolute left-4 right-4 top-[150px] z-10 rounded-[28px] border border-white/10 bg-[rgba(245,239,232,0.94)] p-3 shadow-[0_18px_60px_rgba(15,23,42,0.18)] overflow-hidden">
        <motion.div animate={{ x: previewOffset }} transition={{ duration: 1.2, ease: 'linear' }} className="flex gap-3 w-[1498px] will-change-transform">
          {[0, 1].map((screen) => (
            <div key={screen} className="w-[742px] shrink-0 rounded-[22px] overflow-hidden border border-slate-200 bg-[#f8f7f4]">
              <div className="flex items-center justify-between gap-4 px-4 py-3 bg-white border-b border-slate-200">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: gold }}>
                    SANTYA • visão do sistema
                  </div>
                  <div className="mt-1 text-lg font-semibold" style={{ color: textDark }}>
                    {screen === 0 ? 'Dashboard comercial' : 'Ritmo e operação'}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {['Início', 'CRM', 'Agenda', 'Fechamentos'].map((item) => (
                    <div key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px]" style={{ color: textMuted }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {screen === 0 ? (
                <div className="p-4" style={{ background: 'linear-gradient(180deg, #f8f7f4 0%, #f3f0ea 100%)' }}>
                  <div className="rounded-[22px] p-4" style={{ background: 'linear-gradient(180deg,#1f3d74 0%, #1b3564 100%)' }}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.24em] text-[#d9a15b]">Equipe comercial</div>
                        <div className="mt-2 text-2xl font-semibold text-white">Bem-vindo, administrador</div>
                        <div className="mt-1 text-sm text-white/72">Dashboard comercial • Perfil: admin</div>
                      </div>
                      <div className="rounded-full px-4 py-2 text-sm font-medium text-[#1b1205]" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }}>Abrir tarefas</div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-3">
                      {quickStats.map((item) => (
                        <div key={item.label} className="rounded-[16px] border border-white/10 bg-white/10 px-3 py-3">
                          <div className="text-[11px] text-white/62">{item.label}</div>
                          <div className="mt-1 text-xl font-semibold text-white">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-[1.2fr_0.95fr] gap-4">
                    <div className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold" style={{ color: textDark }}>Performance do mês</div>
                          <div className="text-xs mt-1" style={{ color: textMuted }}>Referência: Mar</div>
                        </div>
                        <div className="rounded-full px-3 py-1 text-[11px] bg-slate-100" style={{ color: textMuted }}>Equipe comercial</div>
                      </div>
                      <div className="mt-4 grid grid-cols-[0.95fr_1.05fr] gap-4">
                        <div className="rounded-[18px] border border-slate-100 bg-slate-50 p-4 flex items-center justify-center min-h-[124px]">
                          <div className="text-center">
                            <div className="mx-auto relative w-24 h-24 rounded-full border-[10px] border-emerald-400 border-t-emerald-300 flex items-center justify-center text-2xl font-semibold text-emerald-500">
                              100%
                              <div className="absolute -top-3 right-0 text-2xl">🤩</div>
                            </div>
                            <div className="mt-2 text-[11px] uppercase tracking-[0.2em]" style={{ color: textMuted }}>Meta atingida</div>
                          </div>
                        </div>
                        <div className="grid gap-3">
                          {[
                            ['Meta', 'R$ 1,6 mi'],
                            ['Atual', 'R$ 4,2 mi'],
                            ['Gap', 'R$ 0'],
                          ].map(([k, v]) => (
                            <div key={k} className="rounded-[16px] border border-slate-100 bg-slate-50 px-4 py-3">
                              <div className="text-[11px] uppercase tracking-[0.18em]" style={{ color: textMuted }}>
                                {k}
                              </div>
                              <div className="mt-1 text-lg font-semibold" style={{ color: textDark }}>
                                {v}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[20px] border border-slate-200 bg-white p-4">
                        <div className="text-sm font-semibold" style={{ color: textDark }}>Radar do dia</div>
                        <div className="mt-4 flex items-center gap-4">
                          <div className="relative w-24 h-24 shrink-0">
                            <div className="absolute inset-0 rounded-full border-[10px] border-amber-400/90 border-r-blue-500 border-b-emerald-400" />
                            <div className="absolute inset-[14px] rounded-full bg-white flex flex-col items-center justify-center">
                              <div className="text-[10px] uppercase tracking-[0.15em]" style={{ color: textMuted }}>Total</div>
                              <div className="text-2xl font-semibold" style={{ color: textDark }}>36</div>
                            </div>
                          </div>
                          <div className="grid gap-2 w-full">
                            {[
                              ['Tarefas pendentes', '17'],
                              ['Visitas agendadas', '4'],
                              ['Leads do mês', '15'],
                            ].map(([k, v], i) => (
                              <div key={k} className="rounded-[14px] border border-slate-100 bg-slate-50 px-3 py-2 flex items-center justify-between gap-3">
                                <div className="text-sm" style={{ color: textDark }}>{k}</div>
                                <div className="text-xl font-semibold" style={{ color: i === 0 ? '#1d4ed8' : i === 1 ? '#16a34a' : '#d97706' }}>{v}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[20px] border border-slate-200 bg-white p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm font-semibold" style={{ color: textDark }}>Módulos</div>
                          <div className="text-[11px] uppercase tracking-[0.2em]" style={{ color: textMuted }}>Acesso rápido</div>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          {previewModules.map((item) => (
                            <div key={item.title} className="rounded-[16px] border border-slate-100 bg-slate-50 p-3">
                              <div className="font-medium" style={{ color: textDark }}>{item.title}</div>
                              <div className="mt-3 text-sm font-medium" style={{ color: '#2563eb' }}>{item.cta} →</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4" style={{ background: 'linear-gradient(180deg, #f8f7f4 0%, #f3f0ea 100%)' }}>
                  <div className="grid grid-cols-[0.95fr_1.05fr] gap-4">
                    <div className="rounded-[22px] p-4" style={{ background: 'linear-gradient(180deg,#1f3d74 0%, #1b3564 100%)' }}>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.24em] text-[#d9a15b]">Ritmo comercial</div>
                          <div className="mt-2 text-2xl font-semibold text-white">2 fechamentos</div>
                          <div className="mt-1 text-sm text-white/72">Leitura de mar</div>
                        </div>
                        <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white">6 meses</div>
                      </div>
                      <div className="mt-5 rounded-[18px] border border-white/10 bg-white/5 p-4 min-h-[190px] flex flex-col justify-end">
                        <div className="flex items-end gap-3 h-28">
                          {[24, 24, 24, 24, 26, 68].map((h, i) => (
                            <motion.div key={i} animate={{ height: [`${Math.max(18, h - 10)}px`, `${h}px`, `${Math.max(18, h - 6)}px`] }} transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.12 }} className="flex-1 rounded-t-[12px] bg-gradient-to-t from-blue-600 to-blue-300" />
                          ))}
                        </div>
                        <div className="mt-3 grid grid-cols-6 text-[10px] text-white/60 text-center">
                          {['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'].map((m) => (
                            <div key={m}>{m}</div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[20px] border border-slate-200 bg-white p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold" style={{ color: textDark }}>Comparativo</div>
                            <div className="text-xs mt-1" style={{ color: textMuted }}>Venda total do mês</div>
                          </div>
                          <div className="text-2xl font-semibold" style={{ color: textDark }}>R$ 4,2 mi</div>
                        </div>
                        <div className="mt-4 rounded-[18px] border border-slate-100 bg-slate-50 p-4 min-h-[158px] flex flex-col justify-end">
                          <div className="flex items-end gap-3 h-24">
                            {[34, 28, 62].map((h, i) => (
                              <motion.div key={i} animate={{ height: [`${h - 8}px`, `${h}px`, `${h - 5}px`] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.15 }} className="flex-1 rounded-t-[14px] bg-gradient-to-t from-blue-700 to-blue-300" />
                            ))}
                          </div>
                          <div className="mt-3 grid grid-cols-3 text-[10px] text-center" style={{ color: textMuted }}>
                            <div>JAN</div>
                            <div>FEV</div>
                            <div>MAR</div>
                          </div>
                        </div>
                      </div>

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
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <div className="absolute top-3 right-3 flex items-center gap-2 rounded-full border border-slate-200 bg-white/88 px-3 py-1.5 shadow-sm z-20">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="h-2.5 w-10 rounded-full" style={{ background: `linear-gradient(90deg, ${goldSoft}, ${gold})` }} />
          <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: textMuted }}>prévia em movimento</div>
        </div>
      </div>

      <div className="absolute inset-0 p-6 md:p-8 pointer-events-none">
        <div className="grid grid-cols-2 gap-4 h-full">
          {orbitCards.map((item, index) => {
            const positions = ['self-start justify-self-start mt-24', 'self-start justify-self-end mt-16', 'self-end justify-self-start mb-28', 'self-end justify-self-end mb-20'];
            const isActive = activeCard === index;

            return (
              <motion.div key={item.title} animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0], scale: isActive ? 1.03 : 1, opacity: isActive ? 1 : 0.86 }} transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }} className={`${positions[index]} max-w-[220px] rounded-[24px] border p-4 md:p-5 backdrop-blur-xl ${isActive ? 'border-[rgba(217,161,91,0.34)] bg-[rgba(255,248,240,0.16)]' : 'border-white/10 bg-[rgba(255,248,240,0.10)]'}`}>
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

function AutoMegaMenu({ activeKey }: { activeKey: string | null }) {
  if (!activeKey || !(activeKey in megaMenu)) return null;
  const data = megaMenu[activeKey as keyof typeof megaMenu];

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[920px] max-w-[calc(100vw-40px)] rounded-[28px] border border-white/10 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.22)]" style={{ background: 'rgba(245,237,226,0.92)', backdropFilter: 'blur(18px)' }}>
        <div className="grid md:grid-cols-[0.92fr_1.08fr] text-slate-900">
          <div className="p-8 md:p-9 border-r border-slate-200/70">
            <div className="text-xs uppercase tracking-[0.28em]" style={{ color: gold }}>ecossistema santya</div>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-900">{data.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{data.text}</p>
            <Button className="mt-6 rounded-2xl text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('plataforma')}>
              Explorar agora
            </Button>
          </div>
          <div className="p-8 md:p-9 grid sm:grid-cols-2 gap-4">
            {data.links.map((link) => (
              <div key={link} className="rounded-[22px] border border-slate-200/80 bg-white/60 p-5 hover:bg-white transition">
                <div className="text-base font-medium text-slate-900">{link}</div>
                <div className="mt-2 text-sm text-slate-600 leading-6">Apresentação elegante do recurso com linguagem comercial premium.</div>
                <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: gold }}>
                  Saiba mais <ArrowUpRight size={15} />
                </div>
              </div>
            ))}
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
  const [megaOpen, setMegaOpen] = useState<string | null>('plataforma');
  const [resourceActive, setResourceActive] = useState(0);

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: cream }}>
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(184,116,42,0.15), transparent 24%), radial-gradient(circle at 18% 15%, rgba(255,255,255,0.7), transparent 16%), linear-gradient(180deg, #F5EBDD 0%, #E9DFC9 13%, #2A4266 42%, #1A2B46 100%)' }} />

      <header className="sticky top-0 z-50 border-b border-white/20 backdrop-blur-xl bg-[rgba(244,237,226,0.22)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-6 relative">
          <SantyaBrand size="sm" />

          <div className="hidden xl:flex items-center gap-7 text-sm relative" onMouseLeave={() => setMegaOpen(null)}>
            {menuItems.map((item) => (
              <button key={item.key} onMouseEnter={() => setMegaOpen(item.key)} onClick={() => scrollToId(item.key)} className="flex items-center gap-1 transition hover:opacity-80">
                <span style={{ color: textDark }}>{item.label}</span>
                {['plataforma', 'recursos', 'solucoes'].includes(item.key) && <ChevronDown size={15} />}
              </button>
            ))}
            <AutoMegaMenu activeKey={megaOpen} />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="rounded-2xl border-slate-300 bg-white/55 hover:bg-white/80" style={{ color: textDark }} onClick={() => window.open('https://app.santya.com.br', '_blank')}>
              Entrar
            </Button>
            <Button className="rounded-2xl px-5 text-[#1b1205] font-semibold shadow-[0_0_30px_rgba(217,161,91,0.22)]" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('demonstracao')}>
              Solicitar demonstração
            </Button>
          </div>

          <button onClick={() => setMobileOpen((v) => !v)} className="xl:hidden w-11 h-11 rounded-2xl border border-white/20 bg-white/10 flex items-center justify-center">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="xl:hidden border-t border-white/15 bg-[rgba(26,43,70,0.92)] px-4 pb-4">
            <div className="flex flex-col gap-2 pt-4 text-sm text-white/88">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  className="rounded-xl px-3 py-3 hover:bg-white/5 transition text-left"
                  onClick={() => {
                    scrollToId(item.key);
                    setMobileOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-3">
                <Button variant="outline" className="rounded-xl border-white/20 bg-transparent text-white" onClick={() => window.open('https://app.santya.com.br', '_blank')}>
                  Entrar
                </Button>
                <Button className="rounded-xl text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('demonstracao')}>
                  Demonstração
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
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
                  <Button size="lg" className="rounded-2xl px-7 text-[#1b1205] font-semibold text-sm md:text-base" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }} onClick={() => scrollToId('demonstracao')}>
                    {hero.primary}
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-2xl px-7 bg-white/5 border-white/20 text-white hover:bg-white/10" onClick={() => scrollToId(hero.secondary === 'Ver recursos' ? 'recursos' : 'plataforma')}>
                    {hero.secondary}
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

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {completeSystemCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: idx * 0.04 }}>
                  <Card className="group h-full rounded-[28px] border-white/20 bg-[rgba(244,237,226,0.92)] hover:bg-[rgba(255,249,242,0.98)] transition-all duration-500 overflow-hidden backdrop-blur-sm shadow-[0_16px_50px_rgba(22,37,61,0.08)]">
                    <CardContent className="p-6 md:p-7 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110" style={{ background: 'rgba(217,161,91,0.16)', color: goldSoft }}><Icon size={22} /></div>
                      <h3 className="text-xl font-semibold" style={{ color: textDark }}>{item.title}</h3>
                      <p className="mt-4 leading-7 text-sm" style={{ color: textMuted }}>{item.text}</p>
                      <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-medium" style={{ color: goldSoft }}>Explorar recurso <ArrowUpRight size={16} /></div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="recursos" className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20 text-white">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-6 items-stretch">
            <div className="rounded-[32px] border border-white/20 p-7 md:p-10 backdrop-blur-sm shadow-[0_20px_65px_rgba(22,37,61,0.08)]" style={{ background: 'linear-gradient(160deg, rgba(217,161,91,0.20), rgba(244,237,226,0.13), rgba(255,255,255,0.04))' }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/82"><Sparkles size={14} style={{ color: goldSoft }} /> núcleo de valor</div>
              <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-tight text-white">Um núcleo que se mexe e explica o seu sistema do jeito certo.</h2>
              <p className="mt-5 text-white/80 leading-7">Aqui entra aquela mesma sensação de site top que você curtiu: o visual se movimenta sozinho e, ao mesmo tempo, comunica seu produto com clareza comercial.</p>
              <div className="mt-7 grid gap-3">
                {['Operação comercial centralizada', 'Notificações e alertas na hora certa', 'Visão para gestores e diretoria', 'Experiência moderna em PC e celular'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/15 bg-[rgba(22,37,61,0.28)] px-4 py-4 text-white/84 text-sm flex items-center gap-3"><ChevronRight size={16} style={{ color: goldSoft }} /> {item}</div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/15 p-4 md:p-5 shadow-[0_22px_70px_rgba(22,37,61,0.12)]" style={{ background: 'linear-gradient(180deg,#2A4266 0%,#20324E 100%)' }}>
              <div className="grid md:grid-cols-[0.48fr_0.52fr] gap-4 h-full">
                <div className="rounded-[26px] border border-white/15 bg-[rgba(244,237,226,0.10)] p-5 flex flex-col gap-4 backdrop-blur-sm">
                  {featureDetails.map((item, index) => {
                    const Icon = item.icon;
                    const activeItem = resourceActive === index;
                    return (
                      <button key={item.title} onMouseEnter={() => setResourceActive(index)} onClick={() => setResourceActive(index)} className={`rounded-[22px] border text-left transition-all p-4 ${activeItem ? 'border-[rgba(217,161,91,0.45)] bg-[rgba(217,161,91,0.10)]' : 'border-white/12 bg-[rgba(22,37,61,0.20)] hover:bg-white/[0.06]'}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style={{ background: activeItem ? 'rgba(217,161,91,0.16)' : 'rgba(255,255,255,0.06)', color: goldSoft }}><Icon size={18} /></div>
                          <div>
                            <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">{item.eyebrow}</div>
                            <div className="mt-2 font-medium leading-6 text-white">{item.title}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={resourceActive} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.35 }} className="rounded-[26px] border border-white/15 p-7 flex flex-col justify-between backdrop-blur-sm" style={{ background: 'linear-gradient(180deg,rgba(244,237,226,0.12),rgba(244,237,226,0.05))' }}>
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em]" style={{ color: goldSoft }}>{featureDetails[resourceActive].eyebrow}</div>
                      <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{featureDetails[resourceActive].title}</h3>
                      <p className="mt-4 text-white/80 leading-7">{featureDetails[resourceActive].text}</p>
                    </div>
                    <div className="mt-8 grid gap-3">
                      {featureDetails[resourceActive].bullets.map((bullet) => (
                        <div key={bullet} className="rounded-2xl border border-white/15 bg-[rgba(22,37,61,0.22)] px-4 py-3 text-sm text-white/84">{bullet}</div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 text-white">
          <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-6">
            <div className="rounded-[32px] border border-white/15 overflow-hidden p-8 md:p-10 shadow-[0_22px_75px_rgba(22,37,61,0.12)] backdrop-blur-sm" style={{ background: 'linear-gradient(135deg,#2D476D,#20324E)' }}>
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>Notificações inteligentes</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-white">A informação certa, na hora certa.</h2>
              <p className="mt-5 leading-7 max-w-2xl text-white/80">No sistema, a equipe acompanha a operação completa. No WhatsApp, recebe apenas alertas importantes para agir com rapidez e sem excesso de ruído.</p>
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="rounded-[26px] border border-white/15 bg-white/[0.08] p-6">
                  <div className="flex items-center gap-3 text-lg font-semibold text-white"><BellRing size={18} style={{ color: goldSoft }} /> No sistema</div>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/84">
                    <li>Novos leads</li>
                    <li>Tarefas pendentes</li>
                    <li>Agenda do dia</li>
                    <li>Atualizações da operação</li>
                    <li>Alertas internos</li>
                  </ul>
                </div>
                <div className="rounded-[26px] border border-white/15 bg-white/[0.08] p-6">
                  <div className="flex items-center gap-3 text-lg font-semibold text-white"><PhoneCall size={18} style={{ color: goldSoft }} /> No WhatsApp</div>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/84">
                    <li>Eventos relevantes</li>
                    <li>Avisos operacionais estratégicos</li>
                    <li>Lembretes que exigem ação rápida</li>
                    <li>Alertas mais importantes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="rounded-[30px] border border-white/15 bg-[rgba(244,237,226,0.10)] backdrop-blur-sm shadow-[0_16px_55px_rgba(22,37,61,0.12)]">
                <CardContent className="p-8 md:p-9">
                  <div className="text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>Acesso em qualquer lugar</div>
                  <h3 className="mt-4 text-3xl font-semibold text-white">Use no computador ou no celular.</h3>
                  <p className="mt-4 leading-7 text-white/80">Sistema online com acesso pelo navegador e possibilidade de instalação como aplicativo via PWA, sem depender de loja de apps.</p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-4 text-white/84">Experiência leve e moderna</div>
                    <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-4 text-white/84">Acesso rápido para a equipe</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[30px] border border-white/15 bg-[rgba(244,237,226,0.10)] backdrop-blur-sm shadow-[0_16px_55px_rgba(22,37,61,0.12)]">
                <CardContent className="p-8 md:p-9">
                  <div className="text-xs uppercase tracking-[0.3em]" style={{ color: goldSoft }}>Suporte humanizado</div>
                  <h3 className="mt-4 text-3xl font-semibold text-white">Tecnologia com atendimento de verdade.</h3>
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    {[
                      { title: 'Implantação acompanhada', text: 'Ajudamos sua empresa na estruturação inicial.' },
                      { title: 'Suporte humano', text: 'Atendimento próximo, claro e objetivo.' },
                      { title: 'Evolução contínua', text: 'A plataforma cresce junto com a operação.' },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/15 bg-[rgba(22,37,61,0.24)] p-4">
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="mt-2 text-sm leading-6 text-white/76">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              {['Construtoras', 'Imobiliárias', 'Equipes comerciais', 'Operações consultivas', 'Empresas com volume de leads', 'Negócios que precisam de mais controle'].map((sector, idx) => (
                <motion.div key={sector} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: idx * 0.05 }} className="rounded-[24px] border border-slate-200 bg-white/70 p-5 hover:border-[rgba(217,161,91,0.45)] transition">
                  <div className="text-lg font-medium" style={{ color: textDark }}>{sector}</div>
                  <div className="mt-2 text-sm leading-6" style={{ color: textMuted }}>Estrutura comercial com mais disciplina, acompanhamento e segurança para crescer.</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20">
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
                  <Button className="rounded-2xl px-7 text-[#1b1205] font-semibold" style={{ background: `linear-gradient(135deg, ${goldSoft}, ${gold})` }}>Solicitar demonstração</Button>
                  <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10">Falar no WhatsApp</Button>
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-sm font-semibold mb-4" style={{ color: textDark }}>Plataforma</div>
                  <div className="space-y-3 text-sm" style={{ color: textMuted }}>
                    <div>CRM e Leads</div>
                    <div>Tarefas Comerciais</div>
                    <div>Agenda e Compromissos</div>
                    <div>Fechamentos</div>
                    <div>Painel da Diretoria</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-4" style={{ color: textDark }}>Recursos</div>
                  <div className="space-y-3 text-sm" style={{ color: textMuted }}>
                    <div>Notificações no Sistema</div>
                    <div>Alertas no WhatsApp</div>
                    <div>PWA para PC e Celular</div>
                    <div>Suporte Humanizado</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-4" style={{ color: textDark }}>Navegação</div>
                  <div className="space-y-3 text-sm" style={{ color: textMuted }}>
                    <div>Início</div>
                    <div>Plataforma</div>
                    <div>Recursos</div>
                    <div>Demonstração</div>
                    <div>Entrar no sistema</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-4" style={{ color: textDark }}>Contato</div>
                  <div className="space-y-3 text-sm" style={{ color: textMuted }}>
                    <div>WhatsApp comercial</div>
                    <div>contato@santya.com.br</div>
                    <div>Solicitar demonstração</div>
                    <div>Política de privacidade</div>
                    <div>Termos de uso</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
              <div style={{ color: textMuted }}>© 2026 Santya. Todos os direitos reservados.</div>
              <div className="flex flex-wrap items-center gap-5" style={{ color: textMuted }}>
                <span>Política de Privacidade</span>
                <span>Termos de Uso</span>
                <span style={{ color: gold }}>Fale Conosco</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
