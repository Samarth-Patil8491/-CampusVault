import {
    Paper,
    Typography
} from "@mui/material";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";

const data=[
    {name:"Notes",value:40},
    {name:"Departments",value:25},
    {name:"Uploads",value:20},
    {name:"Downloads",value:15}
];

const colors=[
    "#2563EB",
    "#16A34A",
    "#F97316",
    "#9333EA"
];

function DashboardChart(){

    return(

        <Paper
            sx={{
                p:3,
                borderRadius:4,
                height:"100%"
            }}
        >

            <Typography
                variant="h6"
                fontWeight={700}
                mb={2}
            >
                Overview
            </Typography>

            <ResponsiveContainer
                width="100%"
                height={280}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={90}
                    >

                        {data.map((entry,index)=>(

                            <Cell
                                key={index}
                                fill={colors[index]}
                            />

                        ))}

                    </Pie>

                </PieChart>

            </ResponsiveContainer>

        </Paper>

    )

}

export default DashboardChart;