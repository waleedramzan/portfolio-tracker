import PropTypes from 'prop-types';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon
} from '@mui/material';
import { Chart } from 'src/components/chart';

const useChartOptions = () => {

  return {
    chart: {
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2023-09-19T00:00:00.000Z",
        "2023-09-19T01:30:00.000Z",
        "2023-09-19T02:30:00.000Z", 
        "2023-09-19T03:30:00.000Z",
        "2023-09-19T04:30:00.000Z", "2023-09-19T05:30:00.000Z", "2023-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }
};

export const OverviewPrice = (props) => {
  const { chartSeries, sx } = props;
  const chartOptions = useChartOptions();

  return (
    <Card sx={sx}>
      <CardHeader
        action={(
          <Button
            color="inherit"
            size="small"
            startIcon={(
              <SvgIcon fontSize="small">
                <ArrowPathIcon />
              </SvgIcon>
            )}
          >
            Sync
          </Button>
        )}
        title="Price"
      />
      <CardContent>
        <Chart
          height={350}
          options={chartOptions}
          series={chartSeries}
          type="area"
          width="100%"
        />
      </CardContent>
      <Divider />
    </Card>
  );
};

OverviewPrice.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object
};
