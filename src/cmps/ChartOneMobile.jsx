import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';


export function ChartOneMobile() {

    const chartSetting = {
        xAxis: [{ label: 'Skills' }],
        width: 400,
        height: 500,
        // margin: { left: 50, top: 20, right: 20, bottom: 30 }, // Adjust the left margin
    };
    const dataset = [
        {
            seoul: 90,
            'Programming Language': 'JavaScript',
        },
        {
            seoul: 100,
            'Programming Language': 'HTML',
        },
        {
            seoul: 100,
            'Programming Language': 'CSS/SASS',
        },
        {
            seoul: 90,
            'Programming Language': 'React',
        },
        {
            seoul: 70,
            'Programming Language': 'Vue',
        },
        {
            seoul: 70,
            'Programming Language': 'Angular',
        },
        {
            seoul: 90,
            'Programming Language': 'MongoDB',
        },
        {
            seoul: 90,
            'Programming Language': 'NodeJS',
        },
        {
            seoul: 70,
            'Programming Language': 'Python',
        },
    ];

    const valueFormatter = (value) => `${value}%`;

    return (
        <BarChart
            dataset={dataset}
            yAxis={[{
                scaleType: 'band',
                dataKey: 'Programming Language',
                style: {
                    fontSize: '12px',
                    width: '100px',
                }
            }]}
            series={[{ dataKey: 'seoul', label: 'Level', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
        />
    );
}
