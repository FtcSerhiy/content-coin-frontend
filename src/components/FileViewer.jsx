import './FileViewer.css'
import fileTxt from '../assets/file-txt.svg'
import deleteIcon from '../assets/delete.svg'

let nextId = 0;

export function FileViewer({ files, setFiles }) {
    function deleteFile(id) {
        
    }

    if (files.length !== 0) {
        return <ul>
            {files.map(f => <li key={files.indexOf(f)}>
                <div className="file-preview">
                    <img src={fileTxt} alt="Txt file icon" height="20"/>
                    <span>{f.name}</span>
                    <DeleteIcon files={files} name={f.name} set={setFiles}></DeleteIcon>
                </div>
            </li>)}
        </ul>
    }
}

function DeleteIcon({ files, set, name }) {
    function onDeleteIcon(e) {
        console.log('delete')
        set(files.filter(f =>
            f.name === name
        ))
    }

    return <img onClick={onDeleteIcon} src={deleteIcon} height="20" />
}
