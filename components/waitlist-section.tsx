"use client";

import { useEffect } from "react";

export function WaitlistSection() {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    
    const loadTally = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof (window as any).Tally !== "undefined") {
      loadTally();
    } else if (d.querySelector(`script[src="${w}"]`) === null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = loadTally;
      s.onerror = loadTally;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
          Se de los primeros en usar GeneraDocs
        </h2>

        <p className="text-muted-foreground mb-8">
          Unete a nuestra lista de espera y obten acceso anticipado gratuito.
        </p>

        <div className="max-w-md mx-auto">
          <iframe
            data-tally-src="https://tally.so/embed/Zj222V?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="350"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="GeneraDocs - Lista de Espera"
            className="bg-transparent"
          />
        </div>

        <p className="mt-6 text-sm text-foreground font-medium">
          <span className="mr-1">🚀</span> Ya son <span className="text-primary font-bold">47</span> emprendedores esperando
        </p>

        <p className="mt-3 text-xs text-muted-foreground">
          Sin spam. Solo te avisaremos cuando este listo.
        </p>
      </div>
    </section>
  );
}
