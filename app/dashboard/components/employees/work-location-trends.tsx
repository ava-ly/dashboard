'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'Jan', office: 82, wfh: 44 },
  { month: 'Feb', office: 80, wfh: 40 },
  { month: 'Mar', office: 83, wfh: 42 },
  { month: 'Apr', office: 50, wfh: 50 },
  { month: 'May', office: 40, wfh: 60 },
  { month: 'Jun', office: 60, wfh: 40 },
  { month: 'Jul', office: 55, wfh: 55 },
  { month: 'Aug', office: 49, wfh: 61 },
  { month: 'Sep', office: 44, wfh: 70 },
  { month: 'Oct', office: 73, wfh: 50 },
  { month: 'Nov', office: 45, wfh: 80 },
  { month: 'Dec', office: 65, wfh: 75 },
];

const chartConfig = {
  office: {
    label: 'Work from office',
    color: '#ec4899',
  },
  wfh: {
    label: 'Work from home',
    color: '#6b7280',
  },
} satisfies ChartConfig;

export default function WorkLocationTrends() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={true}
          tickMargin={10}
          axisLine={true}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis stroke="#888888" fontSize={12} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="office"
          stackId="a"
          fill="var(--color-office)"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="wfh"
          stackId="a"
          fill="var(--color-wfh)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
