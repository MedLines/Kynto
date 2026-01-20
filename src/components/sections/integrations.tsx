"use client";

import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorPointer,
} from "@/components/kibo-ui/cursor";
import { NativeBadge } from "@/components/ui/native-badge";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function Integrations() {
  const [cursorVisible, setCursorVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 800 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-white font-poppins overflow-hidden cursor-none"
      onMouseMove={(e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
    >
      {/* Custom Cursor */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: cursorXSpring,
          y: cursorYSpring,
          zIndex: 50,
          pointerEvents: "none",
        }}
        animate={{
          opacity: cursorVisible ? 1 : 0,
        }}
        initial={{ opacity: 0 }}
        className="hidden md:block"
      >
        <Cursor style={{ color: "#000000" }}>
          <CursorPointer />
          <CursorBody className="font-medium bg-orange-primary text-white">
            <CursorMessage>Sync</CursorMessage>
          </CursorBody>
        </Cursor>
      </motion.div>

      <div className="kynto-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <NativeBadge>Integration</NativeBadge>
            </motion.div>

            <motion.h2
              className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.1] tracking-tight text-kynto-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="italic font-light block">Plays Nice</span>
              <span className="font-bold block">With Your Stack</span>
            </motion.h2>

            <motion.p
              className="mt-6 text-lg md:text-xl text-muted-foreground/80 max-w-md font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Sync payroll data directly to your accounting software and HRIS
            </motion.p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-4 xl:gap-8 mt-12 lg:mt-0 max-w-3xl mx-auto lg:ml-auto lg:max-w-none self-end">
            {/* Row 1 */}
            {/* Row 1 */}
            {/* Slack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="relative w-36 h-36 lg:w-32 lg:h-32 xl:w-44 xl:h-44 bg-[#181818] rounded-full flex items-center justify-center shadow-xl mx-auto">
                <div className="w-20 h-20 xl:w-24 xl:h-24 relative">
                  <Image
                    src="/elements/integration-section/slack.svg"
                    alt="Slack"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
            {/* QuickBooks */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="w-36 h-36 lg:w-32 lg:h-32 xl:w-44 xl:h-44 bg-[#97E59D] rounded-full flex items-center justify-center shadow-lg mx-auto">
                <div className="w-20 h-20 xl:w-24 xl:h-24 relative">
                  <Image
                    src="/elements/integration-section/quicbooks.svg"
                    alt="QuickBooks"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
            {/* Row 2 */}
            {/* BambooHR */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="w-36 h-36 lg:w-32 lg:h-32 xl:w-44 xl:h-44 bg-[#77C126] rounded-full flex items-center justify-center shadow-lg mx-auto">
                <div className="w-20 h-20 xl:w-24 xl:h-24 relative">
                  <Image
                    src="/elements/integration-section/BambooHR.svg"
                    alt="BambooHR"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </motion.div>
            {/* Zapier */}
            <motion.div
              className="md:col-start-2"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="w-36 h-36 lg:w-32 lg:h-32 xl:w-44 xl:h-44 bg-[#FF4F00] rounded-full flex items-center justify-center shadow-lg mx-auto">
                <div className="w-24 h-10 xl:w-28 xl:h-12 relative">
                  <Image
                    src="/elements/integration-section/zapier-logo.svg"
                    alt="Zapier"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </motion.div>
            {/* 12+ Apps */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="w-36 h-36 lg:w-32 lg:h-32 xl:w-44 xl:h-44 rounded-full flex flex-col items-center justify-center shadow-2xl text-white border border-gray-800 relative overflow-hidden mx-auto">
                {/* Background Image */}
                <Image
                  src="/elements/integration-section/background-image.png"
                  alt="Background"
                  fill
                  className="object-cover absolute inset-0 z-0 opacity-80"
                />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                <div className="relative z-20 flex flex-col items-center">
                  <span className="text-3xl font-bold">12+</span>
                  <span className="text-md uppercase tracking-wider text-gray-300 mt-1 font-bold">
                    Apps
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
