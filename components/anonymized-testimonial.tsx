"use client"

interface AnonymizedTestimonialProps {
  imageSrc: string
  alt: string
  blurAreas: Array<{
    top: string
    left: string
    width: string
    height: string
  }>
}

export function AnonymizedTestimonial({ imageSrc, alt, blurAreas }: AnonymizedTestimonialProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full rounded-lg shadow-sm"
      />
      {blurAreas.map((area, index) => (
        <div
          key={index}
          className="absolute bg-background/80 backdrop-blur-sm rounded"
          style={{
            top: area.top,
            left: area.left,
            width: area.width,
            height: area.height,
          }}
        />
      ))}
    </div>
  )
}
