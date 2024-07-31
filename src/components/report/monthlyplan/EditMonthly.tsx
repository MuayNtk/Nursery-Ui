import React from 'react';
import { useParams } from 'react-router-dom';
import EditMonthlyZero from './EditMonthlyZero';
import EditMonthlyOneTwo from './EditMonthlyOneTwo';
import EditMonthlyThreeYearsAbove from './EditMonthlyThreeYearsAbove';

const EditMonthly: React.FC = () => {
    const { pid, selectedOption } = useParams<{ pid: string; selectedOption: string }>();

    // ตรวจสอบว่า pid และ selectedOption มีค่าเป็น string
    if (!pid || !selectedOption) {
        return <div>Invalid parameters</div>;
    }

    switch (selectedOption) {
        case '月指導計画 0 歳児':
            return <EditMonthlyZero pid={pid} selectedOption={selectedOption} />;
        case '月指導計画 1・2 歳児':
            return <EditMonthlyOneTwo pid={pid} selectedOption={selectedOption} />;
        case '月指導計画 3・4・5 歳児':
            return <EditMonthlyThreeYearsAbove pid={pid} selectedOption={selectedOption} />;
        default:
            return <div>No matching plan found</div>;
    }
};

export default EditMonthly;
