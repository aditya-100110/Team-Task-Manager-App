import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import DashboardLayout from "../../components/DashboardLayout"
import axiosInstance from "../../utils/axioInstance"
import moment from "moment"
import { useNavigate } from "react-router-dom"
import RecentTasks from "../../components/RecentTasks"
import CustomPieChart from "../../components/CustomPieChart"
import CustomBarChart from "../../components/CustomBarChart"

const COLORS = ["#FF6384", "#36A2EB", "#72bf6a"]

const Dashboard = () => {
  const navigate = useNavigate()

  const { currentUser } = useSelector((state) => state.user)

  const [dashboardData, setDashboardData] = useState([])
  const [pieChartData, setPieChartData] = useState([])
  const [barChartData, setBarChartData] = useState([])

  // prepare data for pie chart
  const prepareChartData = (data) => {
    const taskDistribution = data?.taskDistribution || {}
    const taskPriorityLevels = data?.taskPriorityLevel || {}

    const taskDistributionData = [
      { status: "Pending", count: taskDistribution?.Pending || 0 },
      { status: "In Progress", count: taskDistribution?.InProgress || 0 },
      { status: "Completed", count: taskDistribution?.Completed || 0 },
    ]

    setPieChartData(taskDistributionData)

    const priorityLevelData = [
      { priority: "Low", count: taskPriorityLevels?.Low || 0 },
      { priority: "Medium", count: taskPriorityLevels?.Medium || 0 },
      { priority: "High", count: taskPriorityLevels?.High || 0 },
    ]

    setBarChartData(priorityLevelData)
  }

  const getDashboardData = async () => {
    try {
      const response = await axiosInstance.get("/tasks/dashboard-data")

      if (response.data) {
        setDashboardData(response.data)
        prepareChartData(response.data?.charts || null)
      }
    } catch (error) {
      console.log("Error fetching dashboard data: ", error)
    }
  }

  useEffect(() => {
    getDashboardData()

    return () => {}
  }, [])

  return (
    
<DashboardLayout activeMenu={"Dashboard"}>
  <div className="p-6 space-y-6" >
    
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-zinc-900 via-violet-900 to-indigo-900 rounded-2xl p-8 shadow-2xl border border-zinc-800 text-white">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
        {/* Left Content */}
        <div>
          <p className="text-violet-400 text-sm uppercase tracking-widest font-semibold">
            Productivity Dashboard
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Welcome back, {currentUser?.name} 
          </h2>

          <p className="text-zinc-300 mt-3 text-sm md:text-base">
            Stay focused, manage tasks efficiently, and boost your productivity.
          </p>

          <p className="text-zinc-400 mt-2 text-sm">
            {moment().format("dddd, Do MMMM YYYY")}
          </p>
        </div>

        {/* Right Button */}
        <div>
          <button
            className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:scale-105"
            onClick={() => navigate("/admin/create-task")}
          >
            + Create New Task
          </button>
        </div>

      </div>
    </div>




        {dashboardData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="text-gray-500 text-sm font-medium">Total Tasks</h3>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {dashboardData?.charts?.taskDistribution?.All || 0}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
              <h3 className="text-gray-500 text-sm font-medium">
                Pending Tasks
              </h3>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {dashboardData?.charts?.taskDistribution?.Pending || 0}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <h3 className="text-gray-500 text-sm font-medium">
                In Progress Tasks
              </h3>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {dashboardData?.charts?.taskDistribution?.InProgress || 0}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <h3 className="text-gray-500 text-sm font-medium">
                Completed Tasks
              </h3>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {dashboardData?.charts?.taskDistribution?.Completed || 0}
              </p>
            </div>
          </div>
        )}

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 " >
          <div className="bg-white p-6 rounded-xl  ">
            <h3 className="text-lg font-semibold text-gray-800 mb-0 w-50 ">
              Task Distribution
            </h3>

            <div className="h-64 ">
              <CustomPieChart
                data={pieChartData}
                label="Total Balance"
                colors={COLORS}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Task Priority Levels
            </h3>

            <div className="h-64">
              <CustomBarChart data={barChartData} />
            </div>
          </div>
        </div>

        {/* Recent Task Section */}
        <RecentTasks className="mt-6" tasks={dashboardData?.recentTasks} />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
