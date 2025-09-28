"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./button";

interface AnnouncementBannerProps {
  message: string;
  href?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function AnnouncementBanner({
  message,
  href,
  ctaText = "Get Started",
  ctaHref = "/pricing",
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem("announcement-banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcement-banner-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full bg-blue-600 text-white py-3 px-4 relative z-50"
        >
          <div className="container mx-auto flex items-center justify-between gap-4">
            {/* Message and CTA Button */}
            <div className="flex-1 flex items-center gap-4 min-w-0">
              <div className="flex-1 text-center md:text-left">
                {href ? (
                  <Link
                    href={href}
                    className="hover:underline font-medium"
                  >
                    {message}
                  </Link>
                ) : (
                  <span className="font-medium">{message}</span>
                )}
              </div>
              {ctaHref && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap"
                  asChild
                >
                  <Link href={ctaHref}>
                    {ctaText}
                  </Link>
                </Button>
              )}
            </div>

            {/* Dismiss Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDismiss}
              className="text-white hover:bg-blue-700 h-8 w-8 shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
