import { useEffect, useState } from 'react';
import { content as bundled, type SiteContent } from '@edu-dt/content';

export type ContentSource = 'loading' | 'api' | 'bundled';

/** Loads the content from the local API; if it is not running, falls back to the bundled copy. */
export function useContent(): { content: SiteContent; source: ContentSource } {
  const [content, setContent] = useState<SiteContent>(bundled);
  const [source, setSource] = useState<ContentSource>('loading');

  useEffect(() => {
    const ctrl = new AbortController();
    fetch('/api/content', { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json() as Promise<SiteContent>;
      })
      .then((data) => {
        setContent(data);
        setSource('api');
      })
      .catch((err: unknown) => {
        if ((err as { name?: string }).name === 'AbortError') return;
        setSource('bundled');
      });
    return () => ctrl.abort();
  }, []);

  return { content, source };
}
