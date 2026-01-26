const Pagination = () => {
    return (

        <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Showing 1 to 6 of 1,248 students</p>
                <div className="flex items-center gap-2">
                    <button className="px-3 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
                    <button className="px-3 py-2 text-sm text-white bg-blue-600 rounded-lg">1</button>
                    <button className="px-3 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                    <button className="px-3 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                    <button className="px-3 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Pagination;