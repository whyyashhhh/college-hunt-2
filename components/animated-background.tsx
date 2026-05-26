"use client";

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_22%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_24%),linear-gradient(180deg,rgba(9,9,11,0.98),rgba(3,7,18,0.96))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-8rem] top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -18, 0], y: [0, 24, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-8rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-violet-500/18 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, 16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-7rem] left-[20%] h-[20rem] w-[20rem] rounded-full bg-blue-500/14 blur-3xl"
      />
    </div>
  );
}
