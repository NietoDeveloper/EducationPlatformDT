import type { ReactNode } from 'react';

export default function Section(props: { id: string; title: string; sub?: string; children: ReactNode }) {
  return (
    <section id={props.id} className="border-t border-line py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="mb-2 text-3xl font-extrabold text-gold">{props.title}</h2>
        {props.sub && <p className="mb-9 max-w-2xl text-zinc-500">{props.sub}</p>}
        {!props.sub && <div className="mb-9" />}
        {props.children}
      </div>
    </section>
  );
}
