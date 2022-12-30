import { useContext } from "react";
import MyTask from "../Component/MyTask/MyTask";
import { AuthContext } from "../AuthProvider/Authprovider";
import { useQuery } from '@tanstack/react-query';

const my_task = () => {
    const { user } = useContext(AuthContext)

    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/addTask?email=${user?.email}`)
                const data = await res.json();
                return data.data;

            }
            catch (error) {

            }
        }
    })
    console.log(tasks)
    return (
        <div>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center mt-16 mb-5">My Task</h5>
            {
                tasks?.map(t => <MyTask key={t._id} t={t} refetch={refetch}></MyTask>)
            }

        </div>
    );
};

export default my_task;