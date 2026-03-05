import Image from "next/image"

interface PageBannerProps {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

export function PageBanner({ title, subtitle, imageSrc, imageAlt }: PageBannerProps) {
  return (
    <section className="relative flex h-72 items-center justify-center overflow-hidden md:h-80">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        quality={75}
      />
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-3 font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-base text-primary-foreground/70 md:text-lg text-pretty">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
