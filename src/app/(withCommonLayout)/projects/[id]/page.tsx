import ProjectHeroImg from "@/assets/projects/project2.png"
import ProjectDetails from "@/components/section/ProjectDetails"

const page = () => {
  return (
    <div>
      {/* ----------- Single Project's Hero Section ----------- */}
      <div style={{ backgroundImage: `url(${ProjectHeroImg.src})` }} className="w-full text-center min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Your Ultimate Foodie Destination</h2>
      </div>

      <div>
        <ProjectDetails />
      </div>

    </div>
  )
}

export default page