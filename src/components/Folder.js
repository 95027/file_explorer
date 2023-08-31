import { useState } from "react";

const Folder = ({explorer, handleInsertNode}) => {
    // windows + semicolan for emojis
    const [expand, setExpand] = useState(true);
    const [showInput, setShowInput] = useState({
        visible : false,
        isFolder : null
    })
    
    // new file or folder
    const handleNewFolder = (e,isFolder) => {
        e.stopPropagation();
        setExpand(false);
        setShowInput({
            visible : true,
            isFolder
        })
    }

    // create new folder
    const newFolder = (e) => {
        if(e.keyCode === 13 && e.target.value){
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setShowInput({...showInput, visible : false});
        }
    }

    if(explorer.isFolder){

    return (
    <div>
        <div className="folder">
            <span  onClick={() => setExpand(!expand)}>📁 {explorer.name}</span>
            <div>
                <button onClick={(e)=> handleNewFolder(e, true)}>folder +</button>
                <button onClick={(e) => handleNewFolder(e, false)}>file +</button>
            </div>
        </div>
        <div className={`${expand ? "d-none" : null} pl-20`}>
            {
                showInput.visible && (
                    <div>
                        <span>{showInput.isFolder ? "📁" : "📄"}</span>
                        <input type="text" autoFocus onBlur={() => setShowInput({...showInput, visible : false})} onKeyDown={newFolder}/>
                    </div>
                )
            }
            {
                explorer.items.map(item => {
                    return (
                        <Folder key={item.id} explorer={item} handleInsertNode={handleInsertNode} />
                        )
                })
            }
        </div>
    </div>
    )
    }else{
        return (
            <span className="file">📄{explorer.name}</span>
        )
    }
}

export default Folder