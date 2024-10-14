'use client';

import { Pie, PieChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  {
    name: 'Delta',
    value: 55,
    fill: '#84cc16',
  },
  {
    name: 'Alpha',
    value: 34,
    fill: '#3b82f6',
  },
  {
    name: 'Canary',
    value: 11,
    fill: '#f97316',
  },
];

const chartConfig = {
  Delta: {
    label: 'Delta',
    color: 'hsl(var(--chart-3))',
  },
  Alpha: {
    label: 'Alpha',
    color: 'hsl(var(--chart-1))',
  },
  Canary: {
    label: 'Canary',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export default function TeamsChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[200px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie data={chartData} dataKey="value" nameKey="name" />
      </PieChart>
    </ChartContainer>
  );
}
