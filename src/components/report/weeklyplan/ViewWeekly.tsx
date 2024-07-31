import React from 'react';
import { useParams } from 'react-router-dom';
import ViewWeeklyUnderTen from './ViewWeeklyUnderTen';
import ViewWeeklyOverOne from './ViewWeeklyOverOne';

const ViewWeekly: React.FC = () => {
    const { pid, selectedOption } = useParams<{ pid: string; selectedOption: string }>();

    // ตรวจสอบว่า pid และ selectedOption มีค่าเป็น string
    if (!pid || !selectedOption) {
        return <div>Invalid parameters</div>;
    }

    switch (selectedOption) {
        case '週 案 と 保 育 日 誌（未満児)':
            return <ViewWeeklyUnderTen pid={pid} selectedOption={selectedOption} />;
        case '週 案 と 保 育 日 誌（以上児)':
            return <ViewWeeklyOverOne pid={pid} selectedOption={selectedOption} />;
        default:
            return <div>No matching plan found</div>;
    }
};

export default ViewWeekly;
