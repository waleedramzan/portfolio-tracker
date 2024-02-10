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
} from '@mui/material';

export const OverviewCompanies = (props) => {
  const { companies = [], sx, handleClick } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Companies" />
      <Box sx={{ minWidth: 400 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Price
              </TableCell>
              <TableCell>
                View
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((company) => {
              return (
                <TableRow
                  hover
                  key={company.id}
                >
                  <TableCell>
                    {company.name}
                  </TableCell>
                  <TableCell>
                    {company.price}
                  </TableCell>
                  <TableCell>
                    <Button
                      color="inherit"
                      size="small"
                      variant="text"
                      onClick={() => handleClick(company.name)}
                    >
                      <SvgIcon fontSize="small">
                        <EyeIcon />
                      </SvgIcon>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
    </Card>
  );
};

OverviewCompanies.prototype = {
  companies: PropTypes.array,
  sx: PropTypes.object
};
