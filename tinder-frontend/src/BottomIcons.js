import React from 'react'
import "./BottomIcons.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
function BottomIcons() {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon className="replay"></ReplayIcon>
            </IconButton>
            <IconButton>
                <CloseIcon className="left">

                </CloseIcon>
            </IconButton>
            <IconButton>
                <StarIcon className="favourite">

                </StarIcon>
            </IconButton>
            <IconButton>
                <FavoriteIcon className="right"></FavoriteIcon>
            </IconButton>
            <IconButton>
                <FlashOnIcon className="light"></FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default BottomIcons
