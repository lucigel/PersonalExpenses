import Card from "../components/common/Card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <p className="text-sm text-slate-500">Users</p>
          <p className="text-2xl font-bold">1,245</p>
        </Card>

        <Card className="bg-blue-50">
          <p className="text-sm text-slate-500">Orders</p>
          <p className="text-2xl font-bold">320</p>
        </Card>

        <Card shadow={false} padding="sm">
          <p className="text-sm text-slate-500">Revenue</p>
          <p className="text-2xl font-bold">$12,430</p>
        </Card>
      </div>
    </div>
  );
}
