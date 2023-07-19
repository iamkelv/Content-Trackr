import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Mon',
    uv: 590,
    pv: 800,
    Likes: 1400,
  },
  {
    name: 'Tue',
    uv: 868,
    pv: 967,
    Likes: 1506,
  },
  {
    name: 'Wed.',
    uv: 1397,
    pv: 1098,
    Likes: 989,
  },
  {
    name: 'Thur.',
    uv: 1480,
    pv: 1200,
    Likes: 1228,
  },
  {
    name: 'Fri.',
    uv: 1520,
    pv: 1108,
    Likes: 1100,
  },
  {
    name: 'Sat.',
    uv: 1400,
    pv: 680,
    Likes: 1700,
  },
  {
    name: 'Sun.',
    uv: 1400,
    pv: 680,
    Likes: 1700,
  },
]

function Chart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="name"
          label={{ position: 'insideBottomRight', offset: 0 }}
          scale="band"
        />
        <YAxis label={{ angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Likes" fill="#C540BF" stroke="#C540BF" />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default Chart
