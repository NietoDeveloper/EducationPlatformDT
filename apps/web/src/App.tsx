import type { StatusItem } from '@edu-dt/content';
import LiveDemo from './components/LiveDemo';
import Section from './components/Section';
import { useContent } from './useContent';

const STATUS_LABEL: Record<StatusItem['status'], { text: string; cls: string }> = {
  available: { text: 'Disponible', cls: 'border-ok/40 text-ok' },
  'in-progress': { text: 'En construcción', cls: 'border-gold/40 text-gold' },
  roadmap: { text: 'Hoja de ruta', cls: 'border-zinc-600 text-zinc-400' },
  target: { text: 'Objetivo', cls: 'border-sky-400/40 text-sky-300' },
};

const PHASE_LABEL = { v1: 'Versión 1', next: 'Después', later: 'Más adelante' } as const;

export default function App() {
  const { content: c, source } = useContent
  return (Name="hover:text-gold">Demo</a>
            <a href="#planes" className="hover:text-gold">Planes</a>
            <a href="#estado" clas

      <Section id="demo" title="Pruébalo tú mismo" sub="Guarda una nota como profesor y mira cómo la ven el estudiante y el acudiente.">
        <LiveDemo />
      </Section>
-9 flex-none place-items-center rounded-full bg-gold font-extrabold text-black">{i + 1}</span>
              <div>
            </li>2 lg:grid-cols-3">
          {c.roles.map((r) => (
            <div key={r.id} className="rounded-2xl border border-line bg-surface p-6">
              <div className="text-3xl">{r.icon}</div>
              <h3 className="my-2 text-lg font-bold text-white">{r.title}</h3>
              <p className="text-zinc-500">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="modulos" title="Qué incluye" sub="Empezamos por lo académico y crecemos por etapas.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.modules.map((m) => (
            <div key={m.title} className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex items-start justify-between">
                <span className="text-3xl">{m.icon}</span>
                <span className="rounded-full border border-line px-2 py-0.5 text-xs text-zinc-400">{PHASE_LABEL[m.phase]}</span>
              </div>
              <h3 className="my-2 text-lg font-bold text-white">{m.title}</h3>
              <p className="text-zinc-500">{m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="planes" title="Planes" sub="Una tarifa única de configuración más una suscripción anual por estudiante activo.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.plans.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl border bg-surface p-6 ${p.highlight ? 'border-gold' : 'border-line'}`}
            >
              <h3 className="text-lg font-bold text-white">{p.name}</h3>
              <p className="mb-3 text-sm text-zinc-500">{p.audience}</p>
              <p className="mb-2 font-mono text-sm font-bold text-gold">{p.price}</p>
              <p className="text-sm text-zinc-500">{p.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-zinc-500">{c.planNotice}</p>
      </Section>

      <Section id="tecnologia" title="Tecnología" sub="Las mismas herramientas de ingeniería del resto de productos de Software DT.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.tech.map((g) => (
            <div key={g.title} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-gold">{g.title}</h3>
              <ul className="space-y-1 text-zinc-300">
                {g.items.map((i) => (<li key={i}>{i}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="mercado" title="El mercado" sub="Estas son otras plataformas que usan hoy los colegios. No comparamos precios de terceros hasta verificarlos en su fuente.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.peers.map((p) => (
            <li key={p.name} className="rounded-xl border border-line bg-surface px-5 py-4">
              <b className="text-white">{p.name}</b>
              <span className="block text-sm text-zinc-500">{p.kind}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="estado" title="Estado honesto" sub="Qué existe hoy, qué se está construyendo y qué es solo un objetivo.">
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-surface text-zinc-400">
              <tr><th className="p-4">Elemento</th><th className="p-4">Estado</th><th className="p-4">Nota</th></tr>
            </thead>
            <tbody>
              {c.status.map((s) => (
                <tr key={s.item} className="border-t border-line">
                  <td className="p-4 text-white">{s.item}</td>
                  <td className="p-4">
                    <span className={`whitespace-nowrap rounded-full border px-2 py-0.5 text-xs ${STATUS_LABEL[s.status].cls}`}>
                      {STATUS_LABEL[s.status].text}
                    </span>
                  </td>
                  <td className="p-4 text-zinc-500">{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="ruta" title="Hacia dónde vamos" sub="Empezamos por Colombia y diseñamos para toda Latinoamérica.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {c.roadmap.map((r) => (
            <div key={r.phase} className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-xs text-gold">Fase {r.phase}</p>
              <h3 className="my-1 font-bold text-white">{r.title}</h3>
              <p className="text-sm text-zinc-500">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="faq" title="Preguntas frecuentes">
        <div className="space-y-3">
          {c.faq.map((f) => (
            <details key={f.q} className="rounded-xl border border-line bg-surface p-5">
              <summary className="cursor-pointer font-bold text-white">{f.q}</summary>
              <p className="mt-3 text-zinc-500">{f.a}</p>
            </det