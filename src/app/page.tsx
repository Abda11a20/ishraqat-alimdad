"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

const address = "المملكة العربية السعودية، ينبع، حي الحدائق، طريق الملك عبدالعزيز";

export default function Home() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div className="landing-page">
      <div className={`scene${reduceMotion ? " scene-static" : ""}`} aria-hidden="true">
        {!reduceMotion && (
          <video
            className="scene-video scene-video-fill"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            tabIndex={-1}
          >
            <source src="/videos/ishraqat-alimdad.mp4" type="video/mp4" />
          </video>
        )}
        {!reduceMotion && (
          <video
            className="scene-video scene-video-main"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
          >
            <source src="/videos/ishraqat-alimdad.mp4" type="video/mp4" />
          </video>
        )}
        <div className="scene-shade" />
      </div>

      <main id="main" className="hero-content">
        <div className="hero-copy">
          <h1>إشراقة الإمداد</h1>
          <address className="hero-address">
            <MapPin aria-hidden="true" />
            <span>{address}</span>
          </address>
          <div className="gold-accent" aria-hidden="true" />

          <nav className="contact-actions" aria-label="قنوات التواصل">
            <a className="contact-button phone-button" href="tel:+966569509879">
              <Phone aria-hidden="true" />
              <span className="contact-label">اتصال مباشر</span>
            </a>
            <a
              className="contact-button whatsapp-button"
              href="https://wa.me/966569509879"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              <span className="contact-label">واتساب</span>
            </a>
            <a className="contact-button email-button" href="mailto:ashraqat.alimdad@outlook.com">
              <Mail aria-hidden="true" />
              <span className="contact-label">البريد الإلكتروني</span>
            </a>
          </nav>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-details">
          <div className="footer-address">
            <MapPin aria-hidden="true" />
            <span>{address}</span>
          </div>
          <a href="tel:+966569509879" dir="ltr">
            <Phone aria-hidden="true" />
            <span>+966 569509879</span>
          </a>
          <a href="https://wa.me/966569509879" target="_blank" rel="noopener noreferrer" dir="ltr">
            <MessageCircle aria-hidden="true" />
            <span>+966 569509879</span>
          </a>
          <a href="mailto:ashraqat.alimdad@outlook.com" dir="ltr">
            <Mail aria-hidden="true" />
            <span>ashraqat.alimdad@outlook.com</span>
          </a>
        </div>
        <div className="designer-credit">
          <span>تم تصميم الموقع بواسطة <strong>أحمد</strong></span>
          <a
            className="designer-whatsapp"
            href="https://wa.me/201016864615"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="افتح محادثة واتساب مع مصمم الموقع أحمد"
          >
            <MessageCircle aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}
