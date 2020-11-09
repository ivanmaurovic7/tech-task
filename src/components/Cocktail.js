import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default ({classes, item}) => {
    const [likes, setLikes] = useState(0)

    const incrementLikes = () => setLikes(likes+1)
    
    return (
        <Card className={classes.root}>
            <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                Dr
                </Avatar>
            }
            title={item.strDrink}
            subheader={`ID: ${item.idDrink}`}
            />
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={incrementLikes}>
                <FavoriteIcon />
            </IconButton>
            <span>{likes}</span>
            </CardActions>
        </Card>
    )
}