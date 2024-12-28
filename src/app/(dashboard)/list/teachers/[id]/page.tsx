import Image from "next/image";

const SingleTeacherPage = () => {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row text-black">
            {/* left */}
            <div className="w-full xl:w-2/3">
            {/* top */}
            <div className="flex flex-col lg:flex-row gap-4">
            {/* user info card */}
            <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
                <div className="w-1/3">
                    <Image 
                    src="/fotoGuru.jpg" 
                    alt="" width={144} 
                    height={144} 
                    className="w-36 h-36 rounded-full object-cover"/>
                </div>
                <div className="w-2/3 flex flex-col justify-between gap-4">
                    <h1 className="text-xl font-semibold">Andi</h1>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                            <Image src="/blood.png" alt="" width={14} height={14}/>
                            <span>O</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                            <Image src="/date.png" alt="" width={14} height={14}/>
                            <span>October 2004</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                            <Image src="/mail.png" alt="" width={14} height={14}/>
                            <span>user@hellow.com</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                            <Image src="/phone.png" alt="" width={14} height={14}/>
                            <span>+62 999 999 000</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* small card */}
            <div className="flex-1 flex gap-4 justify-between flex-wrap">
                {/* card */}
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:[48%]">
                    <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">90%</h1>
                        <span className="text-sm text-gray-400">Attendance</span>
                    </div>
                </div>
                {/* card */}
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:[48%]">
                    <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">2</h1>
                        <span className="text-sm text-gray-400">Branches</span>
                    </div>
                </div>
                {/* card */}
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:[48%]">
                    <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">6</h1>
                        <span className="text-sm text-gray-400">Lessons</span>
                    </div>
                </div>
                {/* card */}
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:[48%]">
                    <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">6</h1>
                        <span className="text-sm text-gray-400">Classes</span>
                    </div>
                </div>
            </div>
            </div>
            {/* bottom */}
            <div className=""></div>
            </div>
            {/* right */}
            <div className="w-full xl:w-1/3"></div>
        </div>
    )
}

export default SingleTeacherPage;