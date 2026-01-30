const Page = () => {
    return (
        <div id="classes" className="tab-content space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg">My Assigned Classes</h3>
                        <p className="text-sm text-gray-500">Classes you teach this term</p>
                    </div>
                    <div className="flex gap-2">
                        <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5">
                            <option>All Subjects</option>
                            <option>Mathematics</option>
                            <option>Further Mathematics</option>
                            <option>Basic Science</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">JSS 2A</h4>
                                <p className="text-sm text-gray-500">Junior Secondary 2</p>
                            </div>
                            <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">Class Teacher</span>
                        </div>
                        <div className="space-y-3 mb-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Total Students</span>
                                <span className="font-semibold text-gray-900">42</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Subject</span>
                                <span className="font-semibold text-gray-900">Mathematics</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Weekly Periods</span>
                                <span className="font-semibold text-gray-900">5 Periods</span>
                            </div>
                        </div>
                        <button className="w-full py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 font-medium text-sm transition-colors">View Class Details</button>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">JSS 3C</h4>
                                <p className="text-sm text-gray-500">Junior Secondary 3</p>
                            </div>
                        </div>
                        <div className="space-y-3 mb-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Total Students</span>
                                <span className="font-semibold text-gray-900">40</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Subject</span>
                                <span className="font-semibold text-gray-900">Mathematics</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Weekly Periods</span>
                                <span className="font-semibold text-gray-900">5 Periods</span>
                            </div>
                        </div>
                        <button className="w-full py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 font-medium text-sm transition-colors">View Class Details</button>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">SS 1B</h4>
                                <p className="text-sm text-gray-500">Senior Secondary 1</p>
                            </div>
                        </div>
                        <div className="space-y-3 mb-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Total Students</span>
                                <span className="font-semibold text-gray-900">35</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Subject</span>
                                <span className="font-semibold text-gray-900">Mathematics</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Weekly Periods</span>
                                <span className="font-semibold text-gray-900">4 Periods</span>
                            </div>
                        </div>
                        <button className="w-full py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 font-medium text-sm transition-colors">View Class Details</button>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">SS 2B</h4>
                                <p className="text-sm text-gray-500">Senior Secondary 2</p>
                            </div>
                        </div>
                        <div className="space-y-3 mb-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Total Students</span>
                                <span className="font-semibold text-gray-900">38</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Subject</span>
                                <span className="font-semibold text-gray-900">Further Maths</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Weekly Periods</span>
                                <span className="font-semibold text-gray-900">3 Periods</span>
                            </div>
                        </div>
                        <button className="w-full py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 font-medium text-sm transition-colors">View Class Details</button>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">SS 3A</h4>
                                <p className="text-sm text-gray-500">Senior Secondary 3</p>
                            </div>
                        </div>
                        <div className="space-y-3 mb-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Total Students</span>
                                <span className="font-semibold text-gray-900">32</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Subject</span>
                                <span className="font-semibold text-gray-900">Further Maths</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Weekly Periods</span>
                                <span className="font-semibold text-gray-900">3 Periods</span>
                            </div>
                        </div>
                        <button className="w-full py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 font-medium text-sm transition-colors">View Class Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page