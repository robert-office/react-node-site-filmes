import UserFoto from "../../assets/images/examplePerfil.jpg"

export default function ReviewCard() {
  return (
    <figure className="relative bg-gray-100 rounded-xl p-8" style={{minWidth: '300px', maxWidth: '300px'}}>
      <img
        className="w-32 h-32 rounded-full mx-auto object-center object-cover"
        src={UserFoto}
        alt="imageUser"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-indigo-600">Sarah Dayan</div>
          <div className="text-gray-500">Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  );
}
