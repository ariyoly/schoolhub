import Announcements from "@/components/Announcements"
import BigCalender from "@/components/BigCalender"
import EventCalender from "@/components/EventCalender"

const StudentPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col xl:flex-row text-black">
            {/* left */}
            <div className="w-full xl:w-2/3">
                <div className="h-full bg-white p-4 rounded-md">
                    <h1 className="font-semibold text-xl">Schedule (R3F)</h1>
                    <BigCalender/>
                </div>
            </div>
            {/* right */}
            <div className="w-full xl:w-1/3 flex flex-col gap-8">
                    <EventCalender/> 
                    <Announcements/>
                </div>
        </div>
    )
}

export default StudentPage