'use client';

import { useTranslations } from 'next-intl';
import { SectionKicker } from '../primitives/SectionKicker';
import { ScrollReveal } from '../motion/ScrollReveal';

export interface PartnerItem {
  groupKey: string;
  name: string;
  logoType?: string | null;
  logoFilename?: string | null;
  id?: string | null;
}

export interface PartnersSectionProps {
  partners?: PartnerItem[];
}

export function PartnersSection({}: PartnersSectionProps) {
  const t = useTranslations('home');

  const descriptiveTiles = [
    {
      num: '01',
      title: t('infraTile1Title'),
      desc: t('infraTile1Desc'),
      badge: 'Aggregated Liquidity',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#00B050]"
          aria-hidden="true"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <path d="M19 15V9h-6" />
        </svg>
      ),
    },
    {
      num: '02',
      title: t('infraTile2Title'),
      desc: t('infraTile2Desc'),
      badge: 'Tier-1 Segregation',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#00B050]"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      num: '03',
      title: t('infraTile3Title'),
      desc: t('infraTile3Desc'),
      badge: '24/7 Automated Oversight',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#00B050]"
          aria-hidden="true"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      num: '04',
      title: t('infraTile4Title'),
      desc: t('infraTile4Desc'),
      badge: 'Distributed Engines · 99.99% Uptime',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#00B050]"
          aria-hidden="true"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-transparent px-5 py-12 xl:py-16">
      <div className="mx-auto max-w-[390px] md:max-w-2xl xl:max-w-[1200px]">
        <ScrollReveal>
          <div className="mb-8 xl:mb-12">
            <SectionKicker className="mb-3">{t('partnersKicker')}</SectionKicker>
            <h2 className="text-foreground text-headline mb-3 max-w-[24ch] text-balance font-sans font-bold">
              {t('partnersHeading')}
            </h2>
            <p className="text-muted text-lead max-w-[56ch]">{t('partnersSubtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {descriptiveTiles.map((tile, idx) => (
            <ScrollReveal key={tile.num} index={idx}>
              <div className="border-border/80 group relative flex h-full flex-col justify-between rounded-[20px] border bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00B050]/50 hover:shadow-[0_12px_30px_rgba(0,176,80,0.08)] dark:border-white/[0.08] dark:bg-[#161922] dark:shadow-none dark:hover:border-[#00B050]/40">
                <div>
                  {/* Top row: Counter & Icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#00B050]">
                      {tile.num}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B050]/10 transition-colors duration-300 group-hover:bg-[#00B050]/20">
                      {tile.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-foreground font-sans text-[17px] font-bold leading-snug transition-colors group-hover:text-[#00B050] xl:text-[19px]">
                    {tile.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-muted mt-2.5 text-[13px] leading-[1.65] xl:text-[14px]">
                    {tile.desc}
                  </p>
                </div>

                {/* Bottom accent tag */}
                <div className="border-border/60 mt-6 border-t pt-4 dark:border-white/[0.06]">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-[1px] text-slate-500 dark:text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00B050]" />
                    {tile.badge}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
