"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  depth: number;
  color: "gold" | "orange";
};

export default function PortfolioShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = motion.matches;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    let raf = 0;
    let active = true;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = bounds.width;
      height = bounds.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 640 ? 34 : 76;

      particles = Array.from({ length: count }, (_, i) => {
        const depth = 0.25 + Math.random() * 0.75;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.345 * depth,
          vy: (Math.random() - 0.5) * 0.285 * depth,
          radius: 0.6 + depth * 1.15,
          depth,
          color: i % 4 === 0 ? "orange" : "gold",
        };
      });

      render();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(
        width * 0.5, height * 0.48, 0,
        width * 0.5, height * 0.48, width * 0.56
      );
      glow.addColorStop(0, "rgba(255,200,40,0.049)");
      glow.addColorStop(0.5, "rgba(241,90,36,0.0224)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const maxDistance = width < 640 ? 95 : 145;

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance < maxDistance) {
            const alpha =
              (1 - distance / maxDistance) *
              0.119 *
              Math.min(a.depth, b.depth);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,200,40,${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p, i) => {
        const pulse = 0.85 + Math.sin(frame * 0.012 + i) * 0.15;
        const rgb = p.color === "gold" ? "255,200,40" : "241,90,36";
        const alpha = (0.196 + p.depth * 0.266) * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${alpha})`;
        ctx.fill();

        if (i % 9 === 0) {
          const halo = ctx.createRadialGradient(
            p.x, p.y, 0, p.x, p.y, 17
          );
          halo.addColorStop(0, `rgba(${rgb},0.091)`);
          halo.addColorStop(1, `rgba(${rgb},0)`);
          ctx.fillStyle = halo;
          ctx.fillRect(p.x - 17, p.y - 17, 34, 34);
        }
      });
    };

    const animate = () => {
      if (!active) return;

      frame++;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      });

      render();
      raf = requestAnimationFrame(animate);
    };

    const handleMotion = () => {
      reduced = motion.matches;
      cancelAnimationFrame(raf);
      if (reduced) {
        render();
      } else {
        raf = requestAnimationFrame(animate);
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    if (!reduced) {
      raf = requestAnimationFrame(animate);
    }

    motion.addEventListener("change", handleMotion);

    return () => {
      active = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      motion.removeEventListener("change", handleMotion);
    };
  }, []);

  return (
    <section
      dir="rtl"
      aria-label="نمونه کارهای طراحی سایت لاول‌کد"
      className="relative mb-16 w-full overflow-visible md:mb-24"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 h-[550px] w-full"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 h-[550px] w-full bg-gradient-to-b from-transparent via-transparent to-[#030712]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-[360px] z-0 h-[190px] w-full bg-[linear-gradient(to_bottom,transparent,rgba(3,7,18,0.55)_55%,#030712)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 h-[550px] w-full bg-[radial-gradient(ellipse_at_center,rgba(10,13,21,0.60)_0%,rgba(10,13,21,0.12)_75%,transparent_100%)]"
      />

      <div className="pointer-events-none relative z-10 -top-[100px] flex h-[300px] w-full items-center justify-center overflow-hidden bg-transparent md:h-[400px]">
        <div className="relative z-10 flex -translate-y-[50px] flex-col items-center justify-center px-5 text-center">
          <h1 className="font-cinema text-3xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] md:text-5xl lg:text-6xl">
            نمونه کارهای طراحی سایت{" "}
            <span className="gradient-orange bg-clip-text text-transparent">
              لاول کد
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
