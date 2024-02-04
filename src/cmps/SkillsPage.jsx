import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function SkillsPage() {
    // Function to calculate the difference in days between two dates
    const calculateDaysDifference = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();
        const difference = now - start; // This will give difference in milliseconds
        const daysDifference = Math.floor(difference / (1000 * 3600 * 24));
        return daysDifference;
    };

    const data = [
        { name: 'JavaScript', 'Days Since Start': calculateDaysDifference('2023-10-15') },
        { name: 'HTML', 'Days Since Start': calculateDaysDifference('2023-10-15') },
        // Add more data as needed
    ];

    return (
        <section className="skills-page flex align-center justify-center">
            <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Days Since Start" fill="#8884d8" />
            </BarChart>
        </section>
    );
}
