import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './imagepage.css'

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImagePage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [image_name, setImageName] = React.useState("");
  const [clientID, setClientID] = React.useState("Rn9i7o2QATARjgPD-J94ERtOBWxT99rItTN4Jne7V70");
  const [ images, setImages ] = React.useState([])
  const [page, setPage] = React.useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeText = (event) => {
      const url = "https://api.unsplash.com/search/photos?page=" + page + "&query=" + image_name +"&client_id=" + clientID
      axios.get(url).then((response) => {
          console.log(response)
          setImages(response.data.results)
      })
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{marginTop: '50px', marginLeft: '100px'}}>
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        {/************* Header **************/}
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <div className="image-page-main-div" style={{display: "flex", flexDirection: 'row' }}>
            <InputBase
                className={classes.input}
                placeholder="Search for Image on Unsplash"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={image_name}
                onChange={event => setImageName(event.target.value) }
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleChangeText}>
                <SearchIcon />
            </IconButton>
        </div>

        <div className="images-from-unsplash">
            {images.map(photo => {
                console.log("photo = ", photo)
                if(photo.width > photo.height){
                    return (<img src={photo.urls.small} className={photo.height > photo.width ? "inner-image portrait" : "inner-image landscape" } />)
                }
            })}
        </div>
        <Button autoFocus color="inherit" onClick={()=> {
            setPage(page + 1)
            handleChangeText()
        }}>
            More Images
        </Button>
      </Dialog>
    </div>
  );
}