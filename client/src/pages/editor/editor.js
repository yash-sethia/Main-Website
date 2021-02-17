import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import autosize from "autosize";
import '../../Css/editor/editor.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from "@material-ui/core/styles"
import { Alert, AlertTitle } from '@material-ui/lab';

import QuestionBox from '../task-page/Mainbody-TaskPage/QuestionBox'
import '../../Css/task-page/QuestionBox.css'


import axios from 'axios';



const styles = (theme) => ({
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
    },
    root: {
        width: '100%',
        '& > * + *': {
        marginTop: theme.spacing(2),
        },
      },
  });

  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });





class Editor extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            data: "",
            open: false,
            image_name: "",
            clientID: "Rn9i7o2QATARjgPD-J94ERtOBWxT99rItTN4Jne7V70",
            images: [],
            page: 1,
            selectedImageID: "",
            creator: "",
            thumbnail: "",
            noImages: false,

            promptOpen: false,
            questionTitle: "",
            questionData: "",
            taskId: "5ff34a384be01834281ba64e"
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleImageName = this.handleImageName.bind(this);
        this.handleImages = this.handleImages.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.handleImageID = this.handleImageID.bind(this);
        this.handleCreator = this.handleCreator.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSelectedImage = this.handleSelectedImage.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);

        this.handlePromptOpen = this.handlePromptOpen.bind(this);
        this.handleClickPromptOpen = this.handleClickPromptOpen.bind(this);
        this.handleClickPromptClose = this.handleClickPromptClose.bind(this);
    }


    componentDidMount() {
        this.textarea.focus();
        autosize(this.textarea);
        axios.get('/api/tasks/' + this.state.taskId).then(res => {
            this.setState({
              questionTitle: res.data.taskData.taskName,
              questionData: res.data.taskData.taskDesc             // Check the name of this field
            })
          })
          console.log("Question : ", this.state.QuestionData);
    }

    handleOpen(val) {
        this.setState({open: val})
    }

    handlePromptOpen(val) {
        this.setState({promptOpen: val});
    }

    handleImageName(name) {
        this.setState({image_name: name});
    }

    handleImages(imagesArray) {
        if(imagesArray.length > 0) {
            this.setState({noImages : false})
        }
        this.setState({images : imagesArray});
    }

    handlePage(p) {
        this.setState({page : p})
    }

    handleImageID(str) {
        this.setState({selectedImageID : str});
    }

    handleCreator(name) {
        this.setState({creator: name});
    }

    handleClickOpen = () => {
        this.handleOpen(true);
      };
    
    handleClose = () => {
        this.handleOpen(false);
    };

    handleClickPromptOpen() {
        console.log("Open called!")
        this.handlePromptOpen(true);
    };

    handleClickPromptClose() {
        console.log("Closed called :)")
        this.handlePromptOpen(false);
    };

    
    handleChangeText = (event) => {
        const url = "https://api.unsplash.com/search/photos?page=" + this.state.page + "&query=" + this.state.image_name +"&client_id=" + this.state.clientID
        axios.get(url).then((response) => {
            // console.log(response)
            this.handleImages(response.data.results)
        })

        if(this.state.images.length == 0) {
            this.setState({noImages : true})
        }
    }
    
    handleSelectedImage = (id) => {
        if(id == this.state.selectedImageID) {
          this.handleImageID("");
          this.handleCreator("");
          this.setState({thumbnail: ""})
        }
        else {
          this.handleImageID(id);
          for(var i = 0; i < this.state.images.length; i++) {
            if(this.state.images[i].id == id){
              this.handleCreator(String(this.state.images[i].user.first_name) + " " + String(this.state.images[i].user.last_name));
              this.setState({thumbnail: this.state.images[i].urls.regular});
              break;
            }
          }
          console.log("Creator is : ", this.state.creator)
        }
    
    }

    handleChangeTitle(event) {
        this.setState({title : event.target.value})
    } 

    handlePublish() {
        const articleID = "5fff3d9de46eff5f282c6b3e-5ff34a384be01834281ba64e"
        const article = {
            "articleID": articleID,
            "articleTitle": this.state.title,
            "articleContent": this.state.data,
            "articleImages": this.state.thumbnail,
        }
        console.log("the created article is : ", article)
        axios.post('/api/articles/add', article)
            .then(window.location = "/")
            .catch(res => res.data);
    }



    render() {

        
        const classes = this.props.classes;

        // console.log("classes is : ")

        const config={
            placeholder: "Show your magic! (PS: Select the text to format it)",
            disableNativeSpellChecker: false,
            toolbar: [ 'bold', 'italic', 'underline', 'strikethrough', 'link', 'blockQuote', 'undo', 'redo', 'numberedList', 'bulletedList' ]
        }
        BalloonEditor.defaultConfig = config
        

        var images_array;
        if(this.state.noImages == false) {
            images_array = this.state.images.map(photo => {
                // console.log("photo = ", photo)
                    return (<img src={photo.urls.small} className = {this.state.selectedImageID == photo.id ? "img-selected" : "img"}  onClick= {() => this.handleSelectedImage(photo.id)} />)
            })
        }
        else {
            images_array = (
                <div className={classes.root}>
                    <Alert severity="error">
                        <AlertTitle><strong>Sorry you'll have to Try Again</strong></AlertTitle>
                        No image with that keyword found :(
                    </Alert>
                </div>
                // <Message negative>
                //     <Message.Header>We're sorry we can't apply that discount</Message.Header>
                //     <p>That offer has expired</p>
                // </Message>
            );
        }

        return (
            <div>


                <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
                    {/************* Header **************/}
                    <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                        <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Thumbnail
                        </Typography>
                        <Button autoFocus color="inherit" onClick={this.handlePublish}>
                            Publish :)
                        </Button>
                    </Toolbar>
                    </AppBar>

                    <div className="image-page-main-div" style={{display: "flex", flexDirection: 'row' }}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search for Image on Unsplash"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            value={this.state.image_name}
                            onChange={event => this.handleImageName(event.target.value) }
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={this.handleChangeText}>
                            <SearchIcon />
                        </IconButton>
                    </div>

                    <div className = {this.state.noImages ? "error" : "images-from-unsplash"}>
                        {images_array}
                    </div>
                    <Button autoFocus color="inherit" style={{display: this.state.images.length != 0 ? "initial" : "none"}} onClick={()=> {
                        this.handlePage((this.state.page + 1) % 5)
                        this.handleChangeText()
                    }}>
                        More Images...
                    </Button>
                </Dialog>


                <Dialog fullScreen open={this.state.promptOpen} onClose={this.handleClickPromptClose} TransitionComponent={Transition}>
                    {/************* Header **************/}
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={() => this.handleClickPromptClose()} aria-label="close">
                            <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Task
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <QuestionBox QuestionHeading={this.state.questionTitle} QuestionText={this.state.questionData} />
                </Dialog>
                


                <div className="buttons-on-editor-page">
                    <Button variant="info" className="back-button" onClick={() => {window.location = "/"}}> 
                        Back to the Dashboard 
                    </Button>

                    <Button variant="info" className="back-button" onClick={() => this.handleClickPromptOpen(!this.state.promptOpen)}> 
                        Prompt 
                    </Button>

                    <Button variant="info" className="back-button" onClick={() => this.handleOpen(!this.state.open)} > 
                        Select Thumbnail!
                    </Button>
                </div>

                <div className="editor-page">
                    <textarea
                        className="text-box"
                        // style={style}
                        minLength = "300" 
                        spellCheck="true"
                        ref={c => (this.textarea = c)}
                        placeholder="Title..."
                        rows={1}
                        value={this.state.title}
                        onChange={event => this.handleChangeTitle(event)}
                    />

                    <CKEditor
                        editor={ BalloonEditor }
                        style={{
                            'outline': 'none',
                            'font-size': '15px',
                            'color': '#333333',
                            'overflow': 'auto',
                            'border': 'none',
                            'width' : '80vw',
                            'margin-left': '20vw'
                        }}
                        data = {this.state.data}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            this.setState({data : editor.getData()})
                            const data = this.state.data;
                            console.log( "DATA : " ,{ event, editor, data } );
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />

                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Editor);