import './App.css';
import {useState } from 'react';
import explorer from './data/folderData';
import Folder from './components/Folder';
import UseTraverseHook from './hooks/use-traverse-tree';

function App() {

  const [explorerData, setExplorerData] = useState(explorer);

  const {insertNode} = UseTraverseHook();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData,folderId, item, isFolder );

    setExplorerData(finalTree);

  }



  return (
    <div className="app">
      <Folder explorer = {explorerData} handleInsertNode = {handleInsertNode}/>
    </div>
  );
}

export default App;
