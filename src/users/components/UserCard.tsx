import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

import { User } from '../interfaces';

interface Props {
  user: User;
}

export const UserCard: FC<Props> = ({ user }) =>{

  return (
    <Card sx={{ maxWidth: 345, mb: 4 }}>
      <CardHeader
        avatar={
          <Avatar alt={user.first_name} src={user.avatar} />
        }
        title={`${user.first_name} ${user.second_name}`}
        subheader={`${user.email}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={user.avatar}
        alt={user.first_name}
      />
      <CardActions disableSpacing>
        <Button size="small" >Edit</Button>
        <Button size="small" color="error">Delete</Button>
    </CardActions>
    </Card>
  );
}

export default UserCard