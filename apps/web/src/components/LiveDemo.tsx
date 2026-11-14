import { useState } from 'react';
import { bandFor } from '@edu-dt/content';
import { DEMO_STUDENTS, useDemo } from '../demoStore';

const BAND_STYLE: Record<string, string> = {
  Bajo: 'text-red-400 border-red-400/40',
  Básico: 'text-amber-300 border-amber-300/40',
  Alto: 'text-sky-300 border-sky-300/40',
  Superior: 'text-ok border-ok/40',
};

export default function LiveDemo() {
  const { grades, lastChanged, log, error, save, reset } = useDemo();
  const [studentId, setStudentId] = useState(DEMO_STUDENTS[0]!.id);
  const [value, setValue] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (save(studentId, value)) setValue('');
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {/* Profesor */}
      <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-6" aria-label="Vista del profesor">
        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-gold">👩‍🏫 Profesor · Matemáticas</p>
        <h3 className="mb-5 text-lg font-bold text-white">Cargar una nota</h3>

        <label htmlFor="student" className="mb-1 block text-sm text-zinc-400">Estudiante</label>
        <select
          id="student"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="mb-4 w-full rounded-lg border border-line bg-black px-3 py-3 text-white focus:border-gold focus:outline-none"
        >
          {DEMO_STUDENTS.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <label htmlFor="grade" className="mb-1 block text-sm text-zinc-400">Nota (1,0 a 5,0)</label>
        <input
          id="grade"
          inputMode="decimal"
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="4,5"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'grade-error' : undefined}
          className="mb-2 w-full rounded-lg border border-line bg-black px-3 py-3 font-mono text-white focus:border-gold focus:outline-none"
        />
        {error && (
          <p id="grade-error" role="alert" className="mb-2 text-sm text-red-400">{error}</p>
        )}

        <div className="mt-4 flex gap-3">
          <button type="submit" className="rounded-lg bg-gold px-5 py-3 font-bold text-black hover:brightness-110">
            Guardar nota
          </button>
          <button type="button" onClick={reset} className="rounded-lg border border-line px-4 py-3 text-zinc-400 hover:text-white">
            Reiniciar
          </button>
        </div>
      </form>

      {/* Estudiante / acudiente */}
      <div className="rounded-2xl border border-line bg-surface p-6" aria-label="Vista del estudiante y el acudiente">
        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-ok">🎒 Estudiante · 👨‍👩‍👧 Acudiente</p>
        <h3 className="mb-5 text-lg font-bold text-white">Lo que ven, al instante</h3>

        <ul className="space-y-3" aria-live="polite">
          {DEMO_STUDENTS.map((s) => {
            const g = grades[s.id];
            const flashing = lastChanged?.studentId === s.id;
            const band = g === undefined ? null : bandFor(g);
            return (
              <li
                key={s.id + (flashing ? `-${lastChanged?.n}` : '')}
                className={`flex items-center justify-between rounded-xl border border-line bg-black px-4 py-3 ${flashing ? 'flash-ok' : ''}`}
              >
                <span className="text-white">{s.name}</span>
                {g === undefined ? (
                  <span className="text-sm text-zinc-600">sin nota</span>
                ) : (
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xl font-bold text-white">{g.toFixed(1)}</span>
                    <span className={`rounded-full border px-2 py-0.5 text-xs ${BAND_STYLE[band!]}`}>{band}</span>
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-5 border-t border-line pt-4">
          <p className="mb-2 text-xs uppercase tracking-widest text-zinc-500">Últimos movimientos</p>
          {log.length === 0 ? (
            <p className="text-sm text-zinc-600">Aún no hay movimientos.</p>
          ) : (
            <ul className="space-y-1 font-mono text-xs text-zinc-400">
              {log.map((e) => (
                <li key={e.id}>
                  {e.at} · {DEMO_STUDENTS.find((s) => s.id === e.studentId)?.name} → {e.value.toFixed(1)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <p className="text-center text-xs text-zinc-500 md:col-span-2">
        Demostración simulada en tu navegador. No usa servidor ni datos reales: solo ilustra la idea de notas en vivo.
      </p>
    </div>
  );
}
