import React from 'react';
import { useParams } from 'react-router-dom';
import EditWeeklyUnderTen from './EditWeeklyUnderTen';
import EditWeeklyOverOne from './EditWeeklyOverOne';

const EditWeekly: React.FC = () => {
    const { pid, selectedOption } = useParams<{ pid: string; selectedOption: string }>();

    // ตรวจสอบว่า pid และ selectedOption มีค่าเป็น string
    if (!pid || !selectedOption) {
        return <div>Invalid parameters</div>;
    }

    switch (selectedOption) {
        case '週 案 と 保 育 日 誌（未満児)':
            return <EditWeeklyUnderTen pid={pid} selectedOption={selectedOption} />;
        case '週 案 と 保 育 日 誌（以上児)':
            return <EditWeeklyOverOne pid={pid} selectedOption={selectedOption} />;
        default:
            return <div>No matching plan found</div>;
    }
};

export default EditWeekly;
