import { MdFileDownloadDone } from 'react-icons/md';

import { AiTwotoneEdit } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri'


const MyTask = () => {
    return (
        <><h5 className="text-xl font-medium text-gray-900 dark:text-white text-center mt-16 mb-5">My Task</h5>
            <div className="lg:px-96 lg:ml-28">


                <div>
                    <div className="w-full p-2 bg-white border border-gray-200 rounded-lg shadow-md sm:p-10 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="space-y-6" action="#">
                            {/* content  */}
                            <div className="flex justify-between">
                                <img className="w-24 h-20 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcLJjW4q3WawvgG5l1h-DWsZI0SuMEUgeRg&usqp=CAU" alt="Default avatar"></img>

                                <p className="pl-2 bg-gray-50 flex  items-center">An image is a visual representation of something!</p>

                                {/* buttons  */}
                                <div className="p-2 flex justify-center items-center">

                                    <button className="bg-green-400 font-medium p-2 rounded-lg flex justify-center items-center"><MdFileDownloadDone></MdFileDownloadDone>complete</button>

                                    {/* DropDown  */}


                                    <button className="text-xl  font-bold p-2 rounded-lg flex justify-center items-center"><AiTwotoneEdit></AiTwotoneEdit></button>

                                    <button className="text-xl text-red-600  font-bold p-2 rounded-lg flex justify-center items-center"><RiDeleteBinFill></RiDeleteBinFill></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default MyTask;