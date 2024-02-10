import PropTypes from 'prop-types';
import EyeIcon from '@heroicons/react/24/solid/EyeIcon';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  SvgIcon,
  CardContent,
  Typography
} from '@mui/material';

export const OverviewCompanyProfile = (props) => {
  const { company = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Company Profile" />
      <CardContent>
        <Typography component="div" display='flex' justifyContent={'space-between'} py={1}>
          <Typography component="div" fontWeight='bold'>Company</Typography>
          <Typography component="div">{company.name}</Typography>
        </Typography>
        <Typography component="div" display='flex' justifyContent={'space-between'} py={1}>
          <Typography component="div" fontWeight='bold'>Industry </Typography>
          <Typography component="div">{company.industry}</Typography>
        </Typography>
        <Typography component="div" display='flex' justifyContent={'space-between'} py={1}>
          <Typography component="div" fontWeight='bold'>Employees </Typography>
          <Typography component="div">{company.employees}</Typography>
        </Typography>
        <Typography component="div" display='flex' justifyContent={'space-between'} py={1}>
          <Typography component="div" fontWeight='bold'>Sector </Typography>
          <Typography component="div">{company.sector}</Typography>
        </Typography>
      </CardContent>
      <Divider />
    </Card>
  );
};

OverviewCompanyProfile.prototype = {
  company: PropTypes.object,
  sx: PropTypes.object
};
