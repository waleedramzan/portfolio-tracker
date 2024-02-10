import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  SvgIcon
} from '@mui/material';

export const OverviewLatestNews = (props) => {
  const { news = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Latest News" />
      <List>
        {news.map((event, index) => {
          const hasDivider = index < news.length - 1;

          return (
            <ListItem
              divider={hasDivider}
              key={event.id}
            >
              <ListItemText
                primary={event.name}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={event.description}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestNews.propTypes = {
  news: PropTypes.array,
  sx: PropTypes.object
};
