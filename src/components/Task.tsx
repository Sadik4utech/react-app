import type { Task as TaskType } from '../constants'
import { FiFilter, FiPlus } from 'react-icons/fi'
import  { BiPencil, BiCommentEdit } from 'react-icons/bi'
import  { AiOutlineDownCircle } from 'react-icons/ai'

const Task = ( {tasks} : {tasks: TaskType[]} ) => {
    
    return (
        <div className="col-span-1 bg-gray-100/60 p-4 rounded mb-4 max-h-[82vh] overflow-y-auto">
            <div className="w-full flex justify-between">
                <h2 className="text-2xl flex justify-center items-center gap-2 max-w-max font-semibold">TASKS <FiFilter /></h2>
                <button className="bg-blue-400 px-4 rounded font-bold flex justify-center items-center"> <FiPlus /> </button>
            </div>

            <table className="w-full mt-8">
                <thead>
                    <tr className="text-left">
                        <th></th>
                        <th className="px-1 py-1.5">Project</th>
                        <th className="px-1 py-1.5">Due Date</th>
                        <th className="px-1 py-1.5">Task</th>
                        <th className="px-1 py-1.5">Status</th>
                        <th className="px-1 py-1.5">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((task, index) => {
                        return <tr key={index} className="!mt-2">
                            <td className="px-2 py-1.5">
                                <div className="w-10 h-10">
                                    <img className="relative z-30 inline object-cover max-w-full border-2 border-white rounded-full" src={task.avatar} alt="Profile image" />
                                </div>
                            </td>
                            <td className="px-2 py-1.5 min-w-min"> Project{index + 1} </td>
                            <td className="px-2 py-1.5"> {task.dueDate}</td>
                            <td className="px-2 py-1.5">
                                <p className="line-clamp-1">{task.task}</p>
                            </td>
                            <td className="px-2 py-1.5">{task.status}</td>
                            <td className="px-2 py-1.5 h-full">
                                <div className="flex justify-center items-center min-w-min my-auto">
                                    <button className="px-2 rounded-full mr-2"> <BiPencil /> </button>
                                    <button className="px-2 rounded-full"> <BiCommentEdit /> </button>
                                    <button className="px-2 rounded-full ml-2"> <AiOutlineDownCircle /> </button>
                                </div>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Task