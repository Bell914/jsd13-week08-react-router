import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6]">
      <Navbar />
      <main className="p-8 flex flex-col max-w-4xl mx-auto w-full flex-1">
        <Outlet />
      </main>
    </div>
  );
}