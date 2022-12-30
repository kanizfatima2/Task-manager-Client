import { useContext, useEffect, useState } from "react";
import MyTask from "../Component/MyTask/MyTask";
import { AuthContext } from "../AuthProvider/Authprovider";

const my_task = () => {


    return (
        <div>
            <MyTask></MyTask>

        </div>
    );
};

export default my_task;