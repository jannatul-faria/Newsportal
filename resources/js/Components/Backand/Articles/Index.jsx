export default function Index() {
    return (
        <>
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                টাইটেল
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ক্যাটেগরি
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                তারিখ
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                স্ট্যাটাস
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                অ্যাকশন
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Example rows */}
                        <tr>
                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">
                                    বাংলাদেশের ইতিহাস
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                    ইতিহাস
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                    ১২ মে, ২০২৩
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    প্রকাশিত
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium">
                                <a
                                    href="#"
                                    className="text-green-600 hover:text-green-900 mr-3"
                                >
                                    সম্পাদনা
                                </a>
                                <a
                                    href="#"
                                    className="text-red-600 hover:text-red-900"
                                >
                                    মুছে ফেলা
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">
                                    আধুনিক প্রযুক্তির বিশ্ব
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                    প্রযুক্তি
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                    ১০ মে, ২০২৩
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    মুলতুবি
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium">
                                <a
                                    href="#"
                                    className="text-green-600 hover:text-green-900 mr-3"
                                >
                                    সম্পাদনা
                                </a>
                                <a
                                    href="#"
                                    className="text-red-600 hover:text-red-900"
                                >
                                    মুছে ফেলা
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">
                                    খেলাধুলার最新 তথ্য
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                    খেলাধুলা
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                    ৮ মে, ২০২৩
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    প্রকাশিত
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium">
                                <a
                                    href="#"
                                    className="text-green-600 hover:text-green-900 mr-3"
                                >
                                    সম্পাদনা
                                </a>
                                <a
                                    href="#"
                                    className="text-red-600 hover:text-red-900"
                                >
                                    মুছে ফেলা
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-4 rounded-lg shadow">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            দেখানো হচ্ছে <span className="font-medium">1</span>{" "}
                            থেকে <span className="font-medium">3</span> পর্যন্ত
                            of <span className="font-medium">125</span> ফলাফল
                        </p>
                    </div>
                    <div>
                        <nav
                            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                            aria-label="Pagination"
                        >
                            <a
                                href="#"
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Previous</span>
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                {" "}
                                1{" "}
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                {" "}
                                2{" "}
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                {" "}
                                3{" "}
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
