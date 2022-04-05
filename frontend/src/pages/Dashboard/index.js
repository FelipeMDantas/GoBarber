import api from "~/services/api";

export default function Dashboard() {
  console.tron.log('Dashboard/index')
  api.get("appointments");

  return (
    <h1>Dashboard</h1>
  )
}
