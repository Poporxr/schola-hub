const WeeklyTimetable = () => {
    return (
        <>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900">Weekly Timetable</h2>
                    <p className="text-sm text-gray-500">Class schedule for the current week</p>
                </div>

                <div className="overflow-x-auto">
                    <div className="p-4 sm:p-6">
                        <div className="grid grid-cols-6 gap-3 sm:gap-4 min-w-max">
                            {/* Time Column */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="h-10 sm:h-12 flex items-center justify-center font-semibold text-xs sm:text-sm text-gray-900">Time</div>
                                <div className="h-16 sm:h-20 flex items-center justify-center text-xs text-gray-500 font-medium">9:00 AM</div>
                                <div className="h-16 sm:h-20 flex items-center justify-center text-xs text-gray-500 font-medium">10:30 AM</div>
                                <div className="h-16 sm:h-20 flex items-center justify-center text-xs text-gray-500 font-medium">12:00 PM</div>
                                <div className="h-16 sm:h-20 flex items-center justify-center text-xs text-gray-500 font-medium">1:30 PM</div>
                                <div className="h-16 sm:h-20 flex items-center justify-center text-xs text-gray-500 font-medium">3:00 PM</div>
                            </div>

                            {/* Monday */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="h-10 sm:h-12 flex items-center justify-center font-semibold text-xs sm:text-sm text-gray-900 bg-gray-50 rounded-lg">Mon</div>
                                <div className="h-16 sm:h-20 bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-blue-900 truncate">Math</p>
                                    <p className="text-xs text-blue-600 truncate hidden sm:block">Ms. Lee</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-purple-50 border border-purple-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-purple-900 truncate">Science</p>
                                    <p className="text-xs text-purple-600 truncate hidden sm:block">Dr. Chen</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3 flex items-center justify-center">
                                    <p className="text-xs text-gray-500 font-medium">Lunch</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-green-900 truncate">English</p>
                                    <p className="text-xs text-green-600 truncate hidden sm:block">Ms. Johnson</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-red-50 border border-red-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-red-900 truncate">PE</p>
                                    <p className="text-xs text-red-600 truncate hidden sm:block">Mr. Wilson</p>
                                </div>
                            </div>

                            {/* Tuesday */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="h-10 sm:h-12 flex items-center justify-center font-semibold text-xs sm:text-sm text-gray-900 bg-gray-50 rounded-lg">Tue</div>
                                <div className="h-16 sm:h-20 bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-green-900 truncate">English</p>
                                    <p className="text-xs text-green-600 truncate hidden sm:block">Ms. Johnson</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-orange-50 border border-orange-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-orange-900 truncate">Social</p>
                                    <p className="text-xs text-orange-600 truncate hidden sm:block">Mr. Thompson</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3 flex items-center justify-center">
                                    <p className="text-xs text-gray-500 font-medium">Lunch</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-blue-900 truncate">Math</p>
                                    <p className="text-xs text-blue-600 truncate hidden sm:block">Ms. Lee</p>
                                </div>
                                <div className="h-16 sm:h-20"></div>
                            </div>

                            {/* Wednesday */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="h-10 sm:h-12 flex items-center justify-center font-semibold text-xs sm:text-sm text-gray-900 bg-gray-50 rounded-lg">Wed</div>
                                <div className="h-16 sm:h-20 bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-blue-900 truncate">Math</p>
                                    <p className="text-xs text-blue-600 truncate hidden sm:block">Ms. Lee</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-purple-50 border border-purple-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-purple-900 truncate">Science</p>
                                    <p className="text-xs text-purple-600 truncate hidden sm:block">Dr. Chen</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3 flex items-center justify-center">
                                    <p className="text-xs text-gray-500 font-medium">Lunch</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-pink-50 border border-pink-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-pink-900 truncate">Art</p>
                                    <p className="text-xs text-pink-600 truncate hidden sm:block">Ms. Rodriguez</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-red-50 border border-red-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-red-900 truncate">PE</p>
                                    <p className="text-xs text-red-600 truncate hidden sm:block">Mr. Wilson</p>
                                </div>
                            </div>

                            {/* Thursday */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="h-10 sm:h-12 flex items-center justify-center font-semibold text-xs sm:text-sm text-gray-900 bg-gray-50 rounded-lg">Thu</div>
                                <div className="h-16 sm:h-20 bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-green-900 truncate">English</p>
                                    <p className="text-xs text-green-600 truncate hidden sm:block">Ms. Johnson</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-orange-50 border border-orange-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-orange-900 truncate">Social</p>
                                    <p className="text-xs text-orange-600 truncate hidden sm:block">Mr. Thompson</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3 flex items-center justify-center">
                                    <p className="text-xs text-gray-500 font-medium">Lunch</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-pink-50 border border-pink-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-pink-900 truncate">Art</p>
                                    <p className="text-xs text-pink-600 truncate hidden sm:block">Ms. Rodriguez</p>
                                </div>
                                <div className="h-16 sm:h-20"></div>
                            </div>

                            {/* Friday */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="h-10 sm:h-12 flex items-center justify-center font-semibold text-xs sm:text-sm text-gray-900 bg-gray-50 rounded-lg">Fri</div>
                                <div className="h-16 sm:h-20 bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-blue-900 truncate">Math</p>
                                    <p className="text-xs text-blue-600 truncate hidden sm:block">Ms. Lee</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-purple-50 border border-purple-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-purple-900 truncate">Science</p>
                                    <p className="text-xs text-purple-600 truncate hidden sm:block">Dr. Chen</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3 flex items-center justify-center">
                                    <p className="text-xs text-gray-500 font-medium">Lunch</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-orange-50 border border-orange-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-orange-900 truncate">Social</p>
                                    <p className="text-xs text-orange-600 truncate hidden sm:block">Mr. Thompson</p>
                                </div>
                                <div className="h-16 sm:h-20 bg-red-50 border border-red-200 rounded-lg p-2 sm:p-3 flex flex-col justify-center">
                                    <p className="text-xs font-semibold text-red-900 truncate">PE</p>
                                    <p className="text-xs text-red-600 truncate hidden sm:block">Mr. Wilson</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeeklyTimetable;