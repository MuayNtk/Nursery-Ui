
export default function Loading() {
      return (
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 md:ml-72 mt-2 md:mr-2 mb-2 min-h-screen flex items-center justify-center">
                  <div className="flex space-x-2 animate-pulse">
                        <div className="w-3 h-3  bg-sky-800 rounded-full"></div>
                        <div className="w-3 h-3  bg-sky-600 rounded-full"></div>
                        <div className="w-3 h-3  bg-sky-500 rounded-full"></div>
                  </div>
            </div>
      );
    }