import React from 'react'
import video1 from '../../../../public/Videos/MyDr24.mp4'
import video2 from '../../../../public/Videos/MyDr24 (2).mp4'
import video3 from '../../../../public/Videos/MyDr24 (3).mp4'
import video4 from '../../../../public/Videos/MyDr24 (4).mp4'
import video5 from '../../../../public/Videos/MyDr24 (5).mp4'
import video6 from '../../../../public/Videos/MyDr24 (6).mp4'
import video7 from '../../../../public/Videos/MyDr24 (7).mp4'
import video8 from '../../../../public/Videos/MyDr24 (8).mp4'
export default function FirstAid() {
    return (
        <>
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10 mt-20 " style={{ color: '#0865AD' }}>
                Delayed and Inadequate First Aid
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">

                <div className="group cursor-pointer relative">
                    <video
                        src={video1}
                        autoPlay
                        loop
                        muted
                        className="w-30 h-88 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    ></video>
                </div>


                <div className="group cursor-pointer relative">
                <video
                        src={video2}
                        autoPlay
                        loop
                        muted
                        className="w-30 h-88 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    ></video>
                    
                </div>

                <div className="group cursor-pointer relative">
                <video
                        src={video3}
                        autoPlay
                        loop
                        muted
                        className="w-30 h-88 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    ></video>
                
                </div>

                <div className="group cursor-pointer relative">
                <video
                        src={video4}
                        autoPlay
                        loop
                        muted
                        className="w-30 h-88 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    ></video>
                  
                </div>

                <div className="group cursor-pointer relative">
                <video
                        src={video5}
                        autoPlay
                        loop
                        muted
                        className="w-30 h-88 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    ></video>
                 
                </div>

                <div className="group cursor-pointer relative">
                <video
                        src={video6}
                        autoPlay
                        loop
                        muted
                        className="w-30 h-88 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    ></video>
                  
                </div>

                <div className="group cursor-pointer relative">
                <video
                        src={video7}
                        autoPlay
                        loop
                        muted
                        className="w-30 h-88 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    ></video>
                
                </div>

                <div className="group cursor-pointer relative">
                <video
                        src={video8}
                        autoPlay
                        loop
                        muted
                        className="w-30 h-88 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    ></video>
                </div>

                {/* <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>

                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxyaXZlcnxlbnwwfDB8fHwxNjk0MDk5ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>

                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1498855926480-d98e83099315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxyaXZlcnxlbnwwfDB8fHwxNjk0MDk5ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div>

                <div className="group cursor-pointer relative">
                    <img
                        src="https://images.unsplash.com/photo-1502754400466-c87ff3039da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8cml2ZXJ8ZW58MHwwfHx8MTY5NDA5OTg4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                            View
                        </button>
                    </div>
                </div> */}



            </div>
        </>

    )
}
