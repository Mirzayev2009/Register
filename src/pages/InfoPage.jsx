
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function InfoPage() {
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-cream text-text-primary font-body px-3 py-2">
      <div className="max-w-lg mx-auto">

        {/* Time Announcement */}
        <div className="bg-[#f5f1e8] px-6 py-4 mb-2 flex items-center justify-center space-x-4 rounded-lg shadow-sm">
          <div className="w-5 h-5 text-red-600">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M9,2A3,3 0 0,1 12,5A3,3 0 0,1 9,8A3,3 0 0,1 6,5A3,3 0 0,1 9,2M9,10.5C11.33,10.5 15,11.67 15,14V16.5H3V14C3,11.67 6.67,10.5 9,10.5Z" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-lg font-body font-semibold text-red-600">Masterklass boshlanishi vaqti:</p>
            <p className="text-lg font-heading font-bold text-red-600">20-21-Avgust 20:00 da</p>
          </div>
          <div className="w-5 h-5 text-red-600">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M9,2A3,3 0 0,1 12,5A3,3 0 0,1 9,8A3,3 0 0,1 6,5A3,3 0 0,1 9,2M9,10.5C11.33,10.5 15,11.67 15,14V16.5H3V14C3,11.67 6.67,10.5 9,10.5Z" />
            </svg>
          </div>
        </div>

        {/* Masterclass Topic Title */}
        <div className="px-4  text-center">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-800">
       
            <span className="block text-xl sm:text-2xl md:text-3xl">TIKUVCHILIKKA ILK</span>
            <span className="block text-xl sm:text-2xl md:text-3xl">PROFESSIONAL QADAM</span>
          </h1>
        </div>

        {/* Speaker Image */}
        <div className="px-2  flex justify-center">
          <div className="w-58 h-65  overflow-hidden ">
            <img
              src="/codewear.PNG"
              alt="Samandar Ulmasov"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Speaker Info Overlay */}
        <div className="px-4 mb-1 position-relative top-20">
          <div className="text-center bg-white bg-opacity-80 p-1 mx-4 rounded-tl-3xl rounded-br-3xl shadow-lg font-body">
            <h2 className="font-heading text-2xl font-bold mb-1 text-gray-800">Samandar Ulmasov</h2>
            <p className="text-lg font-semibold text-gray-700">20 Yillik tajriba</p>
            <p className="text-lg font-semibold text-gray-700">Tikuvchi Modelyer Ustoz</p>
          </div>
        </div>

        {/* Registration Button */}
        <div className="px-4 mb-12">
          <Button
            onClick={handleRegistration}
            className="w-full h-20 bg-red-600 hover:bg-red-700 text-white rounded-tl-lg rounded-br-lg font-semibold text-lg shadow-lg transition-colors duration-200"
          >
            Bepul ro'yxatdan o'tish
          </Button>
        </div>

        {/* Students Group Photo */}
        <div className=" mb-6 rounded-tl-lg rounded-br-lg overflow-hidden shadow-sm">
          <img
            src="/code.1.jpg"
            alt="Students group"
            className="w-full h-58 object-cover"
          />
        </div>

        {/* Student Count */}
        <div className="px-4 mb-8">
          <div className="text-center bg-white p-5 rounded-tl-lg rounded-br-lg shadow-sm font-body font-semibold text-gray-800 text-lg">
            1,000 dan ziyod oflayn va onlayn shogirdlar
          </div>
        </div>

        {/* Content Card */}
        <div className="px-4 space-y-6 mb-6">
          <div className="bg-white rounded-tl-xl rounded-br-xl overflow-hidden shadow-sm">
            <img
              src="/code.2.jpg"
              alt="Educational materials"
              className="w-full h-58 object-cover"
            />
          </div>
        </div>

        <div className="px-4 mb-10">
          <div className="text-center bg-white p-5 rounded-tl-xl rounded-br-xl shadow-sm font-body font-semibold text-gray-800 text-lg">
            Samandar Ulmasov brendi va maktabi asoschisi
          </div>
        </div>

        {/* Final Registration Button */}
        <div className="px-4 pb-8">
          <Button
            onClick={handleRegistration}
            className="w-full bg-red-600 hover:bg-red-700 h-20 text-white py-4 px-6 rounded-tl-lg rounded-br-lg font-semibold text-lg shadow-lg transition-colors duration-200"
          >
            Masterklassga ro'yxatdan o'tish
          </Button>
        </div>
      </div>
    </div>
  );
}
