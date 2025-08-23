import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import '@/Components/Backand/LeftSideber'
import LeftSidebar from '@/Components/Backand/LeftSideber';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            
            <div className="flex min-h-screen bg-gray-100">
                {/* --- Left Sidebar (Updated to match Magnews2 theme) --- */}
               <LeftSidebar/>
                
                {/* --- Right Content Area (Updated styling) --- */}
                <div className="flex-1 p-8">
                    <div className="mb-6 flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-800">আর্টিক্যাল তালিকা</h2>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
                            নতুন আর্টিক্যাল
                        </button>
                    </div>
                    
                    {/* Stats Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">মোট আর্টিক্যাল</p>
                                    <p className="text-2xl font-bold">১২৫</p>
                                </div>
                                <div className="bg-green-100 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">প্রকাশিত</p>
                                    <p className="text-2xl font-bold">৯৮</p>
                                </div>
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">মোট ব্যবহারকারী</p>
                                    <p className="text-2xl font-bold">৫৬২</p>
                                </div>
                                <div className="bg-yellow-100 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">মন্তব্য</p>
                                    <p className="text-2xl font-bold">২,৪৮৯</p>
                                </div>
                                <div className="bg-red-100 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  
                  
                </div>
            </div>
        </AuthenticatedLayout>
    );
}