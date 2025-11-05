import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Grid,
    Typography,
    Button,
    TextField,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Tooltip,
    Card,
    CardContent
} from '@mui/material';
import ContentMain from '../../content/Content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CheckCircle, Person, ExpandMore, Info } from '@mui/icons-material';

interface ViewMonthlyOneTwoProps {
    pid: string;
    selectedOption: string;
}

interface Data {
    FacilityDirector: string;
    Chief: string;
    daily: string;
    education: string;
}

function createData(
    FacilityDirector: string,
    Chief: string,
    daily: string,
    education: string,
): Data {
    return { FacilityDirector, Chief, daily, education };
}

const initialRows: Data[] = [
    createData('濃部　圭子', '渡部　史朗', '6.0', '24'),
    createData('Ice cream sandwich', '237', '9.0', '37'),
    createData('Eclair', '262', '16.0', '24'),
];

// Sample data for view mode
const sampleData = {
    goals: {
        nursing: '健康で安全な生活環境を整え、一人ひとりの子どもの発達段階に応じた適切な援助を行う。基本的な生活習慣の形成を支援し、情緒の安定を図る。',
        education: '感覚や運動機能の発達を促し、身近な環境に興味・関心を持てるような経験を提供する。言葉の発達を促し、人との関わりの基礎を築く。'
    },
    familyCommunity: '保護者との日々のコミュニケーションを大切にし、家庭での様子や成長を共有する。地域の子育て支援センターとの連携を図り、保護者同士の交流の場を提供する。定期的な懇談会や参観日を通じて、保育の方針や子どもの成長を共有する。',
    events: [
        { day: '15', dayOfWeek: '土', eventName: '親子ふれあい会' },
        { day: '20', dayOfWeek: '木', eventName: '健康診断' },
        { day: '25', dayOfWeek: '火', eventName: '避難訓練' },
        { day: '30', dayOfWeek: '日', eventName: '誕生会' }
    ],
    environment: '安全で清潔な環境を整備し、月齢に応じた玩具や教材を準備する。室温や湿度を適切に管理し、感染症予防に努める。子どもが落ち着いて過ごせるよう、静かで温かい雰囲気づくりを心がける。個別の睡眠スペースを確保し、安心して休息できる環境を提供する。',
    lifeAndPlay: '一人ひとりの生活リズムを大切にし、授乳、離乳食、睡眠などの基本的な生活習慣の確立を支援する。月齢に応じた遊びを提供し、感覚遊びや運動遊びを通じて発達を促す。保育者との愛着関係を深め、情緒の安定を図る。',
    healthSafety: '毎日の健康チェックを実施し、体調の変化に注意を払う。清潔な環境を保持し、感染症予防対策を徹底する。アレルギー対応や個別の健康管理を適切に行う。',
    management: '職員間の連携を密にし、情報共有を徹底する。保護者との連絡を密に取り、信頼関係を築く。研修参加により専門性の向上を図る。',
    evaluation: '月末に振り返りを行い、目標達成度を評価する。保護者からの意見や要望を収集し、保育の改善に活かす。次月の計画立案に向けた課題を明確にする。'
};

const childrenData = [
    {
        id: 1,
        name: '田中　花音',
        age: '8ヶ月',
        lifestyle: 'ハイハイが活発になり、つかまり立ちを始めている。離乳食は中期に進み、手づかみ食べに興味を示している。人見知りが始まり、保育者への愛着が深まっている。',
        interaction: '安心できる環境を整え、ゆったりとした関わりを心がける。発達段階に応じた玩具を提供し、探索活動を見守る。離乳食の進め方を保護者と連携して行う。'
    },
    {
        id: 2,
        name: '佐藤　蓮',
        age: '5ヶ月',
        lifestyle: '首がしっかりと座り、寝返りができるようになった。離乳食を開始し、スプーンに慣れてきている。笑顔が増え、声を出して遊ぶことが多くなった。',
        interaction: 'うつ伏せ遊びを取り入れ、首や背中の筋力発達を促す。離乳食は一さじずつゆっくりと進める。たくさん話しかけ、応答的な関わりを大切にする。'
    },
    {
        id: 3,
        name: '山田　さくら',
        age: '10ヶ月',
        lifestyle: 'つかまり立ちが安定し、伝い歩きを始めている。離乳食は後期に進み、手づかみ食べを楽しんでいる。言葉の理解が進み、簡単な指示に応じることができる。',
        interaction: '安全な環境で自由に動き回れるようにする。食事の自立を促しながら、適切な介助を行う。言葉かけを増やし、コミュニケーションの基礎を育む。'
    }
];


const ViewMonthlyOneTwo: React.FC<ViewMonthlyOneTwoProps> = () => {
    const { pid, selectedOption } = useParams<{ pid: string; selectedOption: string }>();
    const storedData = JSON.parse(sessionStorage.getItem('monthlyData1_2') || '[]');
    const item = storedData.find((data: any) => data.pid === pid && data.selectedOption === selectedOption);

    const [expandedSections, setExpandedSections] = useState({
        basic: true,
        development: true,
        additional: true
    });

    const toggleSection = (section: 'basic' | 'development' | 'additional') => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    if (!item) {
        return <Typography variant="h6">No data found</Typography>;
    }

    const options = [
        '月指導計画 0 歳児',
        '月指導計画 1・2 歳児',
        '月指導計画 3・4・5 歳児'
    ];

    return (
        <ContentMain className="flex flex-col min-h-screen">
            <Grid item xs={9} sm={7} md={5} lg={2.5} className='text-start pt-5 pl-3'>
                <FormControl size='small'>
                    <InputLabel id="selected-option-label">年間指導計画を選択する</InputLabel>
                    <Select
                        labelId="selected-option-label"
                        value={selectedOption}
                        sx={{ minWidth: 250, backgroundColor: '#F5F5F5' }}
                        readOnly
                        label="年間指導計画を選択する"
                    >
                        {options.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid className="pt-5 text-start px-3">
                {/* Staff Information */}
                <Card elevation={2} sx={{ mb: 3 }}>
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold" color="secondary" sx={{ mb: 2 }}>
                            担当職員情報
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography sx={{ fontSize: 14, minWidth: 60 }}>
                                        施設長:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                                        濃部　圭子
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography sx={{ fontSize: 14, minWidth: 40 }}>
                                        主任:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                                        渡部　史朗
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography sx={{ fontSize: 14, minWidth: 40 }}>
                                        担任:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                                        中川　康嘉
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                {/* Section 1: Basic Information */}
                <Accordion expanded={expandedSections.basic} onChange={() => toggleSection('basic')} sx={{ border: '2px solid #ff9800', mb: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography fontWeight="600">เป้าหมายประจำปี (1-2歳)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                            ねらい (เป้าหมาย)
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="養護"
                                    value={sampleData.goals.nursing}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            backgroundColor: '#f9f9f9'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="教育"
                                    value={sampleData.goals.education}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            backgroundColor: '#f9f9f9'
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            {/* Left side - Family/Community Cooperation */}
                            <Grid item xs={12} md={8}>
                                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                                    家庭・地域との連携 (การร่วมมือกับครอบครัวและชุมชน)
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
                                    label="家庭・地域との連携"
                                    value={sampleData.familyCommunity}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            backgroundColor: '#f9f9f9'
                                        }
                                    }}
                                />
                            </Grid>
                            
                            {/* Right side - Events */}
                            <Grid item xs={12} md={4}>
                                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                                    行事 (กิจกรรม)
                                </Typography>
                                {sampleData.events.map((event, index) => (
                                    <Grid container spacing={0.5} sx={{ mt: index === 0 ? 0 : 1 }} key={index}>
                                        <Grid item xs={3}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                margin="dense"
                                                label="日"
                                                value={event.day}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: 30,
                                                        fontSize: '0.75rem',
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontSize: '0.7rem',
                                                        transform: 'translate(14px, 8px) scale(1)',
                                                        '&.Mui-focused, &.MuiFormLabel-filled': {
                                                            transform: 'translate(14px, -6px) scale(0.75)',
                                                        }
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        padding: '4px 8px',
                                                        fontSize: '0.75rem',
                                                        textAlign: 'center',
                                                        backgroundColor: '#f9f9f9'
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                margin="dense"
                                                label="曜"
                                                value={event.dayOfWeek}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: 30,
                                                        fontSize: '0.75rem',
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontSize: '0.7rem',
                                                        transform: 'translate(14px, 8px) scale(1)',
                                                        '&.Mui-focused, &.MuiFormLabel-filled': {
                                                            transform: 'translate(14px, -6px) scale(0.75)',
                                                        }
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        padding: '4px 8px',
                                                        fontSize: '0.75rem',
                                                        textAlign: 'center',
                                                        backgroundColor: '#f9f9f9'
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                margin="dense"
                                                label="行事名"
                                                value={event.eventName}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: 30,
                                                        fontSize: '0.75rem',
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontSize: '0.7rem',
                                                        transform: 'translate(14px, 8px) scale(1)',
                                                        '&.Mui-focused, &.MuiFormLabel-filled': {
                                                            transform: 'translate(14px, -6px) scale(0.75)',
                                                        }
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        padding: '4px 8px',
                                                        fontSize: '0.75rem',
                                                        backgroundColor: '#f9f9f9'
                                                    }
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                

                {/* Section 2: Development */}
                <Accordion expanded={expandedSections.development} onChange={() => toggleSection('development')} sx={{ mt: 3, border: '2px solid #9c27b0' }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Person color="secondary" />
                            <Typography variant="h6" fontWeight="600">
                                子どもとの関わり方(保育士等の育みたい内容)
                            </Typography>
                            <Tooltip title="保育士等の育みたい内容">
                                <Info color="info" />
                            </Tooltip>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} md={6}>
                                <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                                    ねらい (เป้าหมาย)
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={8}
                                    label="ねらい (เป้าหมาย)"
                                    value={item.emotional_comfort1 || ''}
                                    InputProps={{ readOnly: true }}
                                    sx={{ backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                                    子どもとの関わり方 （保育士等の育みたい内容）
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={8}
                                    label="健康・人間関係・環境・言葉・表現"
                                    value={item.health_human2 || ''}
                                    InputProps={{ readOnly: true }}
                                    sx={{ backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} md={6}>
                                <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                                    ねらい (เป้าหมาย)
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={8}
                                    label="ねらい (เป้าหมาย)"
                                    value={item.emotional_comfort1 || ''}
                                    InputProps={{ readOnly: true }}
                                    sx={{ backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                                    子どもとの関わり方 （保育士等の育みたい内容）
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={8}
                                    label="健康・人間関係・環境・言葉・表現"
                                    value={item.health_human2 || ''}
                                    InputProps={{ readOnly: true }}
                                    sx={{ backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}  sx={{ mt: 1 }} >
                            <Grid item xs={12} md={4}>
                                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                                    環境づくり (การจัดสภาพแวดล้อม)
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={12}
                                    label="環境づくり (การจัดสภาพแวดล้อม)"
                                    value={item.emotional_comfort2 || ''}
                                    InputProps={{ readOnly: true }}
                                    sx={{ backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                                    予想される子どもの活動 (กิจกรรมที่คาดหวัง)
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={12}
                                    label="予想される子どもの活動 (กิจกรรมที่คาดหวัง)"
                                    value={item.health_human3 || ''}
                                    InputProps={{ readOnly: true }}
                                    sx={{ backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                                    配慮・援助 (การดูแลและช่วยเหลือ)
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={12}
                                    label="配慮・援助 (การดูแลและช่วยเหลือ)"
                                    value={item.individual_correspondence || ''}
                                    InputProps={{ readOnly: true }}
                                    sx={{ backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                {/* Section 3: Additional Details */}
                <Accordion expanded={expandedSections.additional} onChange={() => toggleSection('additional')} sx={{ mt: 3, border: '2px solid #4caf50' }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <CheckCircle color="success" />
                            <Typography variant="h6" fontWeight="600">
                                その他の情報
                            </Typography>
                            <Tooltip title="追加情報">
                                <Info color="info" />
                            </Tooltip>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} md={4}>
                                <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                                    個　別　対　応 (การตอบสนองรายบุคคล)
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
                                    label="個　別　対　応 (การตอบสนองรายบุคคล)"
                                    value={item.daily_life || ''}
                                    InputProps={{ readOnly: true }}
                                    sx={{ backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                                    組　　運　　営(การจัดการกลุ่ม)
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
                                    label="組　　運　　営(การจัดการกลุ่ม)"
                                    value={item.health_safety1 || ''}
                                    InputProps={{ readOnly: true }}
                                    sx={{ backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                                    評　価・反　省 (การประเมินและการทบทวน)
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
                                    label="評　価・反　省 (การประเมินและการทบทวน)"
                                    value={item.group_management || ''}
                                    InputProps={{ readOnly: true }}
                                    sx={{ backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <div className="mt-auto">
                <Grid container justifyContent="center" spacing={2} className='pt-12 pb-5'>
                    <Grid item>
                        <Button variant="contained" href="/report/monthlyplan" size='medium' startIcon={<ArrowBackIcon />} color="warning">
                            <Typography component="div" style={{ color: 'white' }}>
                                戻る
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </ContentMain>
    );
};

export default ViewMonthlyOneTwo;