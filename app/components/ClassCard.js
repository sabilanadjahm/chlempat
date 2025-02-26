// app/components/ClassCard.js
import ProfileImage from "./ProfileImage";

export default function ClassCard({ className, students, bgColor }) {
  return (
    <div className={`rounded-2xl shadow-xl p-6 w-full max-w-md mx-auto text-center ${bgColor}`}>
      <h2 className="text-2xl font-bold text-white mb-4">{className}</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {students.map((student, index) => (
          <ProfileImage key={index} src={student.image} alt={student.name} />
        ))}
      </div>
    </div>
  );
}
