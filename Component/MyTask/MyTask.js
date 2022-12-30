import { MdFileDownloadDone } from 'react-icons/md';
import { AiTwotoneEdit } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri'
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';


const MyTask = ({ t, refetch }) => {
    const { task, image, _id } = t;

    // Delete Task 
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/addTask/${t._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.success) {
                        toast.success(` Successfully Deleted`)
                        refetch()
                    }
                })
        }

    }

    return (
        <>
            <div className="lg:px-96 lg:ml-28 mb-5">


                <div>
                    <div className="w-full p-2 bg-white border border-gray-200 rounded-lg shadow-md sm:p-10 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="space-y-6" action="#">
                            {/* content  */}
                            <div className="flex justify-between">
                                <img className="w-24 h-20 rounded" src={image} alt="Default avatar"></img>

                                <p className="pl-2 bg-gray-50 flex  items-center">{task}</p>

                                {/* buttons  */}
                                <div className="p-2 flex justify-center items-center">

                                    <Link href="/completed_task" className="bg-green-400 font-medium p-2 rounded-lg flex justify-center items-center"><MdFileDownloadDone></MdFileDownloadDone>complete</Link>

                                    {/* DropDown  */}


                                    <button className="text-xl  font-bold p-2 rounded-lg flex justify-center items-center"><AiTwotoneEdit></AiTwotoneEdit></button>

                                    <button onClick={() => handleDelete(_id)} className="text-xl text-red-600  font-bold p-2 rounded-lg flex justify-center items-center"><RiDeleteBinFill></RiDeleteBinFill></button>
                                    <Toaster />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default MyTask;