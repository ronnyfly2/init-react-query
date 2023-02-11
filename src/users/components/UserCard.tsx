import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { User } from '../interfaces';

interface Props {
  user: User;
}

export const UserCard: FC<Props> = ({ user }) =>{

  return (
    <Card sx={{ maxWidth: 345, mb: 4 }}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={user.avatar} />
        }
        title={`${user.first_name} ${user.second_name}`}
        subheader={`${user.email}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={user.avatar}
        alt="Paella dish"
      />
    </Card>
  );
}

export default UserCard