import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
  activity: Activity;
  cancelSelectActivity: () => void;
};

export default function ActivityDetail({ activity, cancelSelectActivity }: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia component={"img"} src={`/images/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ fontWeight: "light" }} variant="subtitle1">
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardContent>
        <Button color="primary">Edit</Button>
        <Button onClick={cancelSelectActivity} color="inherit">
          Cancel
        </Button>
      </CardContent>
    </Card>
  );
}
