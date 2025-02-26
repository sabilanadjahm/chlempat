// app/page.js
import ClassCard from "./components/ClassCard";

export default function Home() {
  const classes = [
    {
      name: "Kelas SI",
      bgColor: "bg-pink-400",
      students: [
        { name: "Baekhyun", image: "/images/baek.jpg" },
        { name: "Ghiselle", image: "/images/gisel.jpg" },
        { name: "Irene", image: "/images/irene.jpg" },
        { name: "Joy", image: "/images/joy.jpg" },
        { name: "Kai", image: "/images/kai.jpg" },
      ],
    },
    {
      name: "Kelas KA",
      bgColor: "bg-blue-400",
      students: [
        { name: "Karina", image: "/images/karina.jpg" },
        { name: "Ningning", image: "/images/ningning.jpg" },
        { name: "Seulgi", image: "/images/seulgi.jpg" },
        { name: "Taeyeon", image: "/images/taeyeon.jpg" },
        { name: "Hyeonsuk", image: "/images/ucuk.jpg" },
      ],
    },
    {
      name: "Kelas BD",
      bgColor: "bg-green-400",
      students: [
        { name: "Wendy", image: "/images/wendy.jpg" },
        { name: "Winter", image: "/images/winter.jpg" },
        { name: "Woyeong", image: "/images/woyeong.jpg" },
        { name: "Chanyeol", image: "/images/yeol.jpg" },
        { name: "Yeri", image: "/images/yeri.jpg" },
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-yellow-300 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">✨ Teman Terbaik di Setiap Kelas ✨</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls, index) => (
          <ClassCard key={index} className={cls.name} students={cls.students} bgColor={cls.bgColor} />
        ))}
      </div>
    </main>
  );
}
