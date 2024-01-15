import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import './ContentPage.css'
import { FileViewer } from "../components/FileViewer";

export function Content() {
    const [allFiles, setAllFiles] = useState([])
    const [render, setRender] = useState(false)
    const [name, setName] = useState('')
    function handleOnChange(f) {
        setAllFiles([...allFiles, f])
    }
    function publish(e) {
        e.preventDefault()
        const content = {
            name: name,
            files: allFiles
        }
        console.log(content)
    }

    return <main>
        <form className="content">
            <div className="top">
                <img src="https://ethereum.org/assets/svgs/eth-diamond-purple.svg" alt="Page icon" height="50px"/>
                <input type="text" onChange={e => setName(e.target.value)} value={name} />
            </div>
            <div className="files">
                <FileUploader handleChange={handleOnChange} name="file" />
                <FileViewer files={allFiles} setFiles={setAllFiles}></FileViewer>
            </div>

            <button type="submit" className="publish-button" onClick={publish}>Publish</button>
        </form>
    </main>
}
