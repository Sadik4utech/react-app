import Layout from "./components/Layout"
import { tasks, meetings, leaves, workloads } from './constants'
import Task from "./components/Task"
import Cards from "./components/Cards"

const App = () => {

  return <Layout>
    <div className="grid grid-cols-2 p-5">
      
      <Task tasks={tasks} />

      <Cards meetings={meetings} leaves={leaves} workload={workloads} />
      
    </div>
  </Layout>
}

export default App