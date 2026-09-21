import { useEffect, useRef, useState } from 'react';

interface TerminalLine {
  type: 'prompt' | 'output' | 'blank' | 'comment';
  text: string;
  delay: number;
}

const terminalScript: TerminalLine[] = [
  { type: 'prompt', text: 'whoami', delay: 200 },
  { type: 'blank', text: '', delay: 100 },
  { type: 'output', text: 'Abhiram N', delay: 0 },
  { type: 'output', text: 'MERN Stack Developer', delay: 0 },
  { type: 'blank', text: '', delay: 300 },
  { type: 'prompt', text: 'stack', delay: 0 },
  { type: 'blank', text: '', delay: 100 },
  { type: 'output', text: 'JavaScript  TypeScript', delay: 0 },
  { type: 'output', text: 'React       Node.js', delay: 0 },
  { type: 'output', text: 'Express     MongoDB', delay: 0 },
  { type: 'blank', text: '', delay: 300 },
  { type: 'prompt', text: 'focus', delay: 0 },
  { type: 'blank', text: '', delay: 100 },
  { type: 'output', text: 'Scalable Applications', delay: 0 },
  { type: 'output', text: 'Clean Architecture', delay: 0 },
  { type: 'output', text: 'Real-Time Systems', delay: 0 },
  { type: 'blank', text: '', delay: 200 },
];

export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisibleLines(terminalScript);
      return;
    }

    let cumulativeDelay = 400;

    terminalScript.forEach((line, i) => {
      const lineDelay = i === 0 ? line.delay : cumulativeDelay;
      cumulativeDelay += line.delay + (line.type === 'prompt' ? 300 : line.type === 'blank' ? 80 : 100);

      timeoutRef.current = setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
        // Auto-scroll
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, lineDelay);
    });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="Terminal showing Abhiram's profile information"
    >
      {/* Window Chrome */}
      <div className="terminal-chrome">
        <div className="terminal-dot bg-red-500/70" />
        <div className="terminal-dot bg-yellow-500/70" />
        <div className="terminal-dot bg-green-500/70" />
        <span className="ml-2 font-mono text-xs text-terminal-muted">abhiram@dev: ~</span>
      </div>

      {/* Terminal Body */}
      <div
        ref={containerRef}
        className="bg-[#0d1520] border border-terminal-border border-t-0 rounded-b-lg p-4 font-mono text-sm overflow-y-auto"
        style={{ minHeight: '280px', maxHeight: '320px' }}
        aria-live="polite"
        aria-atomic="false"
      >
        {visibleLines.map((line, i) => (
          <div
            key={i}
            className="terminal-line-appear leading-relaxed"
            style={{ animationDelay: `${i * 20}ms` }}
          >
            {line.type === 'prompt' ? (
              <div className="flex items-center gap-1">
                <span className="text-terminal-green select-none">abhiram@dev</span>
                <span className="text-terminal-muted select-none">:~$</span>
                <span className="text-terminal-text ml-1">{line.text}</span>
              </div>
            ) : line.type === 'blank' ? (
              <div className="h-2" />
            ) : (
              <div className="text-terminal-muted pl-2 tracking-wide">{line.text}</div>
            )}
          </div>
        ))}

        {/* Live cursor */}
        {visibleLines.length < terminalScript.length ? (
          <div className="flex items-center gap-1 mt-1">
            <span className="text-terminal-green select-none">abhiram@dev</span>
            <span className="text-terminal-muted select-none">:~$</span>
            <span className="cursor-blink ml-1" aria-hidden="true" />
          </div>
        ) : (
          <div className="flex items-center gap-1 mt-2">
            <span className="text-terminal-green select-none">abhiram@dev</span>
            <span className="text-terminal-muted select-none">:~$</span>
            <span className="cursor-blink ml-1" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
}
