import type { Meeting, Leave, WorkLoad } from '../constants'
import { FiFilter, FiPlus } from 'react-icons/fi'
import Chart from "./Chart"

type Prop = {
    meetings: Meeting[],
    leaves: Leave[],
    workload: WorkLoad[]
}

const Cards = ( {meetings, leaves, workload} : Prop ) => {
  return (
    <div className="col-span-1 px-5 flex gap-x-4 max-h-[84vh] overflow-y-auto">

        {/* ========= Left ========= */}
        <div className="w-1/2">

            {/* ========= Meeting Card ========= */}
          <div className="bg-gray-100/60 p-4 rounded mb-4 max-h-[85vh] min-h-[40vh] overflow-y-auto">
            <div className="w-full flex justify-between">
              <h2 className="text-2xl flex justify-center items-center gap-2 max-w-max font-semibold">MEETING <FiFilter /></h2>
              <button className="bg-blue-400 px-4 rounded font-bold flex justify-center items-center"> <FiPlus className="text-white" /> </button>
            </div>
            <div className="">
              { new Date().toLocaleDateString('en-IN', { month: 'long', day: '2-digit', year: 'numeric' }) }
            </div>
            <div className="">
              {meetings.map((meeting, index) => {
                return <div key={index} className="flex justify-between items-center mt-4">
                  <div className="flex gap-x-3">
                    <div className="">
                      <img className="relative z-30 inline object-cover w-10 h-10 border-2 border-white rounded-full" src={meeting.avatar} alt="Profile image"/>
                    </div>
                    <div className="">
                      <p className="font-semibold">{meeting.name}</p>
                      <p className="text-sm">{meeting.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} </p>
                    </div>
                  </div>
                </div>
              }
              )}
            </div>
          </div>

            {/* ========= Leaves Card ========= */}
          <div className="bg-gray-100/60 p-4 rounded mb-4 max-h-[85vh] min-h-[20vh] overflow-y-auto">
            <div className="w-full flex justify-between">
              <h2 className="text-2xl font-semibold">LEAVE</h2>
              <button className="bg-blue-400 px-4 rounded font-bold flex justify-center items-center"> <FiPlus /> </button>
            </div>
            <div className="">
              { new Date().toLocaleDateString('en-IN', { month: 'long', day: '2-digit', year: 'numeric' }) }
            </div>
            <div className="mt-3">
              <table className="w-full">
                <tbody className="text-[0.85rem]">
                  {
                    leaves.map((leave) => <tr className="text-left" key={leave.id}>
                      <th className="py-1.5"> {leave.name} </th>
                      <td className="py-1.5"> <p className=""> {leave.role} </p> </td>
                      <td className="py-1.5"> <p className=""> {leave.half ? 'Half' : 'Full'} day </p> </td>
                      <td className="py-1.5"> <p className=""> {leave.date.toLocaleDateString('en-IN', {})} </p> </td>
                    </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
          
          {/* ========= Workload Card ========= */}
          <div className="bg-gray-100/60 p-4 rounded mb-4 max-h-[85vh] min-h-[25vh] overflow-y-auto">
            <div className="w-full">
              <h2 className="text-2xl flex justify-center items-center gap-2 max-w-max font-semibold">WORKLOAD </h2>
            </div>
            <div className="">
              { new Date().toLocaleDateString('en-IN', { month: 'long', day: '2-digit', year: 'numeric' }) }
            </div>
            <div className="mt-3">
              <Chart workload={workload} />
            </div>
            
          </div>
        </div>


        {/* =========  Right ========= */}
        <div className="w-1/2">

            {/* ========= TODO List Card ========= */}
          <div className="bg-gray-100/60 p-4 rounded mb-4 max-h-[85vh] min-h-[69vh] overflow-y-auto">
            <h2 className="text-2xl flex justify-center items-center gap-2 max-w-max font-semibold">TODO LIST <FiFilter /></h2>
          </div>

            {/* ========= Notifications Card ========= */}
          <div className="bg-gray-100/60 p-4 rounded mb-4 max-h-[85vh] min-h-[20vh] overflow-y-auto">
            <h2 className="text-2xl flex justify-center items-center gap-2 max-w-max font-semibold">NOTIFICATIONS</h2>
          </div>

        </div>
      </div>
  )
}

export default Cards