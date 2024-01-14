import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import './ContentPage.css'

export function Content() {
    const [file, setFile] = useState([])
    const [preview, setPreview] = useState()
    const [fileType, setFileType] = useState('none')
    function handleOnChange(f) {
        setFile(f);
      
        const file = new FileReader;
      
        file.onload = function() {
          setPreview(file.result);
        }
      
        file.readAsDataURL(f)
        setFileType(f.type)
    }

    return <main>
        <div className="content">
            <div className="top">
                <img src="https://ethereum.org/assets/svgs/eth-diamond-purple.svg" alt="Page icon" height="50px"/>
                <input type="text" />
            </div>
            <div className="files">
                <FileUploader handleChange={handleOnChange} name="file" />
                <RenderFiles file={preview} ext={fileType}></RenderFiles>
            </div>
        </div>
    </main>
}

function RenderFiles(props) {
    switch (props.ext) {
        case 'video':
            return <video src={props.file}></video>
        case 'image/svg+xml' || 'image/jpeg' || 'image/png':
            return <img src={props.file.toString()} alt="Upload preview" />
        case 'none':
            return <p></p>
    }
}