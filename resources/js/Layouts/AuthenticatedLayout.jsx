import Navbar from '@/Components/Dashboard/Navbar';

import Sidebar from '@/Components/Dashboard/Sidebar';

export default function Authenticated({ user, header, children }) {
    return (
        <div className="bg-gray-50 dark:bg-slate-900">
            <Sidebar />
            <div className="w-full lg:pl-64">
                <Navbar />
                <div className="p-4 min-h-screen">
                    {children}
                </div>
            </div>
        </div>
    );
}
