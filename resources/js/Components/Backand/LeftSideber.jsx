import { Link } from "@inertiajs/react";

export default function LeftSidebar() {
    return (
        <>
            <div className="w-64 bg-white text-gray-800 shadow-lg">
                <div className="p-2 border-b border-gray-200">
                    <div className="text-xl font-bold text-center text-green-600">
                        Magnews2 Admin
                    </div>
                </div>
                <ul className="p-4 space-y-2">
                    <li>
                        <Link
                            href="#"
                            className="flex items-center p-3 text-gray-700 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293-.293a1 1 0 000-1.414l-7-7z" />
                            </svg>
                            Dashboard
                        </Link>
                    </li>

                    {/* Users Table */}
                    <li>
                        <Link
                            href="#"
                            className="flex items-center p-3 text-gray-700 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.897 3.897 0 0016 10a5 5 0 00-3-4.577V7.5a3 3 0 01-3 3h-2a3 3 0 01-3-3V5.423A5 5 0 004 10a3.898 3.898 0 002.75 2.094A5.976 5.976 0 004 15v3h12z" />
                            </svg>
                            User
                        </Link>
                    </li>

                    {/* Articles Table */}
                    <li>
                        <Link
                            href="#"
                            className="flex items-center p-3 text-gray-700 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm4 3h8a1 1 0 000-2H6a1 1 0 000 2zm0 4h8a1 1 0 000-2H6a1 1 0 000 2z" />
                            </svg>
                            Article
                        </Link>
                    </li>

                    {/* Categories Table */}
                    <li>
                        <Link
                            href="#"
                            className="flex items-center p-3 text-gray-700 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM7 11a1 1 0 100 2h6a1 1 0 100-2H7z" />
                            </svg>
                            Categories
                        </Link>
                    </li>

                    {/* Tags Table */}
                    <li>
                        <Link
                            href="#"
                            className="flex items-center p-3 text-gray-700 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L6 14.586V7a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 14.586V7a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Tags
                        </Link>
                    </li>

                    {/* Comments Table */}
                    <li>
                        <Link
                            href="#"
                            className="flex items-center p-3 text-gray-700 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                                <path d="M10 11a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zM10 6a1 1 0 100-2 1 1 0 000 2z" />
                            </svg>
                            Comments
                        </Link>
                    </li>

                    {/* Advertisements Table */}
                    <li>
                        <Link
                            href="#"
                            className="flex items-center p-3 text-gray-700 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5z" />
                            </svg>
                            Advertisements
                        </Link>
                    </li>

                    {/* Newsletters Table */}
                    <li>
                        <Link
                            href="#"
                            className="flex items-center p-3 text-gray-700 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                    fillRule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Newsletters
                        </Link>
                    </li>

                    {/* Settings Table */}
                    <li>
                        <Link
                            href="#"
                            className="flex items-center p-3 text-gray-700 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
