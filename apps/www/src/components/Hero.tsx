import { Link } from "react-router-dom";
import "./Hero.css";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  backgroundVideo?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaInternal?: boolean;
  compact?: boolean;
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  ctaText,
  ctaHref,
  ctaInternal,
  compact,
}: HeroProps) {
  return (
    <section
      className={"hero" + (compact ? " hero--compact" : "")}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {backgroundVideo && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={backgroundImage}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      <div className="hero-overlay" />
      <div className="hero-content container">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctaText && ctaHref && (
          ctaInternal ? (
            <Link to={ctaHref} className="btn btn-gold hero-cta">
              {ctaText}
            </Link>
          ) : (
            <a href={ctaHref} className="btn btn-gold hero-cta">
              {ctaText}
            </a>
          )
        )}
      </div>
    </section>
  );
}
