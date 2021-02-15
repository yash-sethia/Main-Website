import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import autosize from "autosize";
import './editor.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';


// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';


class EditorPage extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            data: ""
        }
    }

        
    componentDidMount() {
        this.textarea.focus();
        autosize(this.textarea);
    }

    render() {
        const config={
            placeholder: "Show your magic! (PS: Select the text to format it)",
            disableNativeSpellChecker: false,
            toolbar: [ 'bold', 'italic', 'underline', 'strikethrough', 'link', 'blockQuote', 'undo', 'redo', 'numberedList', 'bulletedList' ]
        }
        BalloonEditor.defaultConfig = config
        return (
            <div>
                <div className="buttons-on-editor-page">
                    <Button variant="info" className="back-button"> 
                        Back to Dashboard 
                    </Button>
                    <Button variant="info" className="publish-button"> 
                        Publish :) 
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
                        value={this.state.questionDislike}
                        onChange={this.handleChange}
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
                    <div>{this.state.data}</div>
            </div>
        );
    }
}

export default EditorPage;