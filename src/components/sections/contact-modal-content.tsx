"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeButton } from "@/components/ui/native-button";
import { Textarea } from "@/components/ui/textarea";

export function ContactModalContent() {
  return (
    <div className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16 justify-center">
      <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-none tracking-[-0.03em]">
          Get in Touch
        </h2>
        <p className="text-base sm:text-lg text-white/70 max-w-lg mt-4">
          We'd love to hear from you. Fill out the form and we'll get back to
          you as soon as possible.
        </p>
      </div>

      <div className="flex-1 w-full bg-card-black/50 p-6 rounded-2xl border border-white/10">
        <form className="space-y-4 sm:space-y-5">
          <div>
            <Label
              htmlFor="name"
              className="block text-[10px] font-normal text-white/70 mb-2 tracking-[0.5px] uppercase"
            >
              FULL NAME *
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-primary/50 transition-all text-sm h-10"
            />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="block text-[10px] font-normal text-white/70 mb-2 tracking-[0.5px] uppercase"
            >
              EMAIL *
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-primary/50 transition-all text-sm h-10"
            />
          </div>

          <div>
            <Label
              htmlFor="message"
              className="block text-[10px] font-normal text-white/70 mb-2 tracking-[0.5px] uppercase"
            >
              MESSAGE
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="How can we help?"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-primary/50 transition-all resize-none text-sm"
            />
          </div>

          <NativeButton
            type="submit"
            containerClassName="w-full mt-4"
            className="w-full rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors tracking-[-0.03em] h-10 border-none justify-center text-sm"
          >
            Send Message
          </NativeButton>
        </form>
      </div>
    </div>
  );
}
