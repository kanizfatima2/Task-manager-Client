
import { FaRegCommentDots } from 'react-icons/fa'
import { MdOutlineRemoveDone } from 'react-icons/md'

const CompletedTask = () => {

    return (
        <><h5 className="text-xl font-medium text-gray-900 dark:text-white text-center mt-16 mb-5">My Completed Task</h5>
            <div className="lg:px-96 lg:ml-28">


                <div>
                    <div className="w-full p-2 bg-white border border-gray-200 rounded-lg shadow-md sm:p-10 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="space-y-6" action="#">
                            {/* content  */}
                            <div className="flex justify-between">
                                <img className="w-24 h-20 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcLJjW4q3WawvgG5l1h-DWsZI0SuMEUgeRg&usqp=CAU" alt="Default avatar"></img>

                                <p className="pl-2 bg-gray-50 flex  items-center">{task}</p>

                                {/* buttons  */}
                                <div className="p-2 flex justify-center items-center">

                                    <button className="bg-red-400 font-medium text-xl p-2 rounded-lg flex justify-center items-center"><MdOutlineRemoveDone></MdOutlineRemoveDone></button>

                                    {/* DropDown  */}


                                    <button className="text-xl bg-blue-200 font-bold p-2 rounded-lg flex justify-center items-center ml-2"><FaRegCommentDots></FaRegCommentDots></button>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default CompletedTask;