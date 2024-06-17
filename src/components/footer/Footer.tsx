import React from 'react';

const Footer: React.FC = () => {
    return (
       
    // <footer className="bottom-0 w-full  bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <footer className=" overflow-y-auto text-sky-900 py-2 bottom-0 md:ml-56 flex justify-center">
        <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
    </footer>

    
    

       
    );
};

export default Footer;
