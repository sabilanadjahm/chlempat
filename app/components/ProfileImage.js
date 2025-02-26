// app/components/ProfileImage.js
export default function ProfileImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
    />
  );
}
