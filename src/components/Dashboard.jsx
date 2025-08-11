import { useState } from "react";
import {
  FileText,
  Users,
  TrendingUp,
  Plus,
  Search,
  Eye,
  Edit3,
  Trash2,
  Calendar,
  Star,
  MoreVertical,
} from "lucide-react";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentCVs, setRecentCVs] = useState([
    {
      id: 1,
      name: "Senior Developer CV",
      status: "Active",
      updated: "2 hours ago",
      views: 45,
    },
    {
      id: 2,
      name: "Product Manager CV",
      status: "Draft",
      updated: "1 day ago",
      views: 23,
    },
    {
      id: 3,
      name: "UX Designer CV",
      status: "Active",
      updated: "3 days ago",
      views: 67,
    },
    {
      id: 4,
      name: "Marketing Specialist CV",
      status: "Active",
      updated: "5 days ago",
      views: 34,
    },
  ]);

  const stats = [
    {
      title: "Total CVs",
      value: recentCVs.length.toString(),
      change: "+12%",
      icon: FileText,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Active CVs",
      value: recentCVs.filter((cv) => cv.status === "Active").length.toString(),
      change: "+8%",
      icon: Eye,
      color: "text-green-600 bg-green-50",
    },
    {
      title: "Profile Views",
      value: recentCVs.reduce((acc, cv) => acc + cv.views, 0).toLocaleString(),
      change: "+23%",
      icon: TrendingUp,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Applications",
      value: "89",
      change: "+15%",
      icon: Users,
      color: "text-orange-600 bg-orange-50",
    },
  ];

  // Handlers
  const handleView = (cv) => {
    alert(
      `Viewing CV:\n\nName: ${cv.name}\nStatus: ${cv.status}\nUpdated: ${cv.updated}\nViews: ${cv.views}`
    );
    // Replace with navigation or modal logic as needed
  };

  const handleEdit = (cv) => {
    alert(`Editing CV: ${cv.name}`);
    // Replace with navigation to edit page or modal logic as needed
  };

  const handleDelete = (cvId) => {
    if (window.confirm("Are you sure you want to delete this CV?")) {
      setRecentCVs((prev) => prev.filter((cv) => cv.id !== cvId));
    }
  };

  // Filter CVs by search
  const filteredCVs = recentCVs.filter((cv) =>
    cv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                CV Management Dashboard
              </h1>
              <p className="text-gray-600">
                Manage your professional profiles with secure CRUD operations
                and seamless API integration.
              </p>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Create New CV
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${stat.color.split(" ")[1]}`}>
                    <Icon className={`w-5 h-5 ${stat.color.split(" ")[0]}`} />
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent CVs */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent CVs
                </h2>
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search CVs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="divide-y">
              {filteredCVs.map((cv) => (
                <div
                  key={cv.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{cv.name}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              cv.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {cv.status}
                          </span>
                          <span className="text-sm text-gray-500">
                            {cv.updated}
                          </span>
                          <span className="text-sm text-gray-500">
                            {cv.views} views
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                        onClick={() => handleView(cv)}
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                        onClick={() => handleEdit(cv)}
                        title="Edit"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                        onClick={() => handleDelete(cv.id)}
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {filteredCVs.length === 0 && (
                <div className="p-4 text-center text-gray-500">
                  No CVs found.
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Plus className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Create New CV</p>
                    <p className="text-sm text-gray-500">
                      Start with a template
                    </p>
                  </div>
                </button>

                <button className="w-full flex items-center p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Schedule Review</p>
                    <p className="text-sm text-gray-500">Plan CV updates</p>
                  </div>
                </button>

                <button className="w-full flex items-center p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Star className="w-5 h-5 text-yellow-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Premium Features
                    </p>
                    <p className="text-sm text-gray-500">
                      Unlock advanced tools
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      CV "Senior Developer" updated
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      New profile view received
                    </p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      CV "Designer" published
                    </p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
