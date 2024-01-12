
function Testimonial() {
    return (
        <div>
          <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500 ">clients</span> say
        </h1>

        {/* <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
            alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p> */}

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                A perfect health care center one should go if u have any health issues, the treatment are satisfactory and homely care.A big thanks to all staffs and cleaning team.
                     <br/>
                     <br/>
                     </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k00ibnFvQaMvvSRBY3ZBpT3Cit1hn9ztHw&usqp=CAU" alt=""/>
                    
                    <div className="mx-4">
                        <h1 className="font-semibold text-blue-500">Kriti verma</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-300">Social Media Influencers </span>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                Very good service , User frindly Webapp ,Lab agents are very cooperative, Reports on time  .
                </p>
                <br/>
                <br/>
                <br/>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://media.istockphoto.com/id/628330148/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=3HlVTzZA4mFWonZtxu7xCYamgLxcb8zE3YMU9AGYXAc=" alt=""/>
                    
                    <div className="mx-4">
                        <h1 className="font-semibold text-blue-500">Ankit Singh</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-300">Marketing Manager at Stech</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </div>
    )
}

export default Testimonial