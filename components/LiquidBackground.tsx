
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const LiquidBackground: React.FC = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for fluid parallax movement
  const springConfig = { damping: 30, stiffness: 90, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform for different parallax depths
  const parallax1X = useTransform(smoothX, [0, 1], [-60, 60]);
  const parallax1Y = useTransform(smoothY, [0, 1], [-60, 60]);
  const parallax2X = useTransform(smoothX, [0, 1], [80, -80]);
  const parallax2Y = useTransform(smoothY, [0, 1], [60, -60]);
  const parallax3X = useTransform(smoothX, [0, 1], [-120, 120]);
  const parallax3Y = useTransform(smoothY, [0, 1], [-100, 100]);
  const parallax4X = useTransform(smoothX, [0, 1], [40, -40]);
  const parallax4Y = useTransform(smoothY, [0, 1], [80, -80]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/30" />

      {/* Main 3D Sphere - Center with glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ x: parallax1X, y: parallax1Y }}
      >
        <motion.div
          className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
          animate={{
            scale: [1, 1.05, 0.98, 1],
            rotate: [0, 5, -3, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/20 via-transparent to-amber-100/10 blur-[80px]" />

          {/* Main sphere with 3D gradient */}
          <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 shadow-[inset_-40px_-40px_80px_rgba(251,191,36,0.15),inset_40px_40px_80px_rgba(255,255,255,0.9)]" />

          {/* Highlight on sphere */}
          <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-white/70 blur-[30px]" />

          {/* Inner depth shadow */}
          <div className="absolute bottom-[25%] right-[25%] w-[40%] h-[40%] rounded-full bg-amber-200/20 blur-[40px]" />
        </motion.div>
      </motion.div>

      {/* Floating Orb 1 - Top Right */}
      <motion.div
        className="absolute -top-20 -right-20 md:top-[5%] md:right-[10%]"
        style={{ x: parallax2X, y: parallax2Y }}
      >
        <motion.div
          className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] relative"
          animate={{
            y: [0, -30, 20, 0],
            x: [0, 20, -15, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          {/* Orb glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/40 via-slate-100/30 to-transparent blur-[60px]" />

          {/* Orb body */}
          <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-white via-blue-50/50 to-slate-100/40 shadow-[inset_-25px_-25px_50px_rgba(100,150,200,0.1),inset_25px_25px_50px_rgba(255,255,255,0.8)]" />

          {/* Orb highlight */}
          <div className="absolute top-[15%] left-[20%] w-[25%] h-[25%] rounded-full bg-white/80 blur-[20px]" />
        </motion.div>
      </motion.div>

      {/* Floating Orb 2 - Bottom Left */}
      <motion.div
        className="absolute -bottom-32 -left-32 md:bottom-[5%] md:left-[5%]"
        style={{ x: parallax3X, y: parallax3Y }}
      >
        <motion.div
          className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] relative"
          animate={{
            y: [0, 40, -25, 0],
            x: [0, -30, 20, 0],
            scale: [1, 0.92, 1.06, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          {/* Orb glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-100/50 via-orange-50/30 to-transparent blur-[70px]" />

          {/* Orb body */}
          <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-white via-amber-50/60 to-orange-50/30 shadow-[inset_-30px_-30px_60px_rgba(251,191,36,0.15),inset_30px_30px_60px_rgba(255,255,255,0.85)]" />

          {/* Orb highlight */}
          <div className="absolute top-[18%] left-[15%] w-[28%] h-[28%] rounded-full bg-white/75 blur-[25px]" />
        </motion.div>
      </motion.div>

      {/* Small accent orb - Top Left */}
      <motion.div
        className="absolute top-[15%] left-[15%] hidden md:block"
        style={{ x: parallax4X, y: parallax4Y }}
      >
        <motion.div
          className="w-[150px] h-[150px] relative"
          animate={{
            y: [0, -20, 15, 0],
            x: [0, 15, -10, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 10, -5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-50/40 via-teal-50/20 to-transparent blur-[40px]" />
          <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/20 shadow-[inset_-15px_-15px_30px_rgba(100,200,180,0.1),inset_15px_15px_30px_rgba(255,255,255,0.9)]" />
          <div className="absolute top-[20%] left-[25%] w-[20%] h-[20%] rounded-full bg-white/80 blur-[12px]" />
        </motion.div>
      </motion.div>

      {/* Small accent orb - Bottom Right */}
      <motion.div
        className="absolute bottom-[20%] right-[12%] hidden md:block"
        style={{ x: parallax2X, y: parallax1Y }}
      >
        <motion.div
          className="w-[120px] h-[120px] relative"
          animate={{
            y: [0, 25, -18, 0],
            x: [0, -12, 18, 0],
            scale: [1, 0.88, 1.12, 1],
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-50/30 via-pink-50/20 to-transparent blur-[35px]" />
          <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-white via-rose-50/30 to-pink-50/15 shadow-[inset_-12px_-12px_24px_rgba(200,100,150,0.08),inset_12px_12px_24px_rgba(255,255,255,0.9)]" />
          <div className="absolute top-[22%] left-[20%] w-[22%] h-[22%] rounded-full bg-white/85 blur-[10px]" />
        </motion.div>
      </motion.div>

      {/* Floating glass-like particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/40 backdrop-blur-sm shadow-sm hidden md:block"
          style={{
            width: 8 + i * 4,
            height: 8 + i * 4,
            top: `${15 + i * 12}%`,
            left: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20 - i * 5, 15 + i * 3, 0],
            x: [0, 10 + i * 2, -8 - i * 2, 0],
            opacity: [0.4, 0.7, 0.3, 0.4],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Subtle mesh gradient overlay for depth */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(100,150,200,0.08)_0%,transparent_40%)]" />

      {/* Noise texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
    </div>
  );
};

export default LiquidBackground;
