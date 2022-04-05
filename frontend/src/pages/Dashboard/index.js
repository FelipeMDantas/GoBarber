import api from "~/services/api";

export default function Dashboard() {
  console.tron.log("Dashboard/index");
  console.log('API: ' + JSON.stringify(api.defaults.headers));
  api.get("appointments");

  return <h1>Dashboard</h1>;
}
