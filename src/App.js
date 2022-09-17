import { useState } from 'react';
import './App.css';

function App() {
  const [inputval, setinputval] = useState("")
  const [item, setitem] = useState([])
  const [updatetodo, setupdatetodo] = useState("")
  const [num, setnum] = useState("")
  const add = () => {
    if (!inputval) {

    } else {

      setitem([inputval,...item])
      setinputval('')
      setupdatetodo(inputval)
    }
  }
  const del = (id) => {
    item.splice(id, 1)
    setitem([...item])
  }
  const edit = (id) => {
    setnum(id)
    // setitem([...item])
    // console.log(item)
  }
  const update = (id) => {
    setnum('')
    item.splice(id, 1, updatetodo)
    setitem([...item])
  }
  const delall = () => {
    setitem([])
  }
  return (
    <>
      <div className="main-div">
        <div className="content-div">
          <div className="top">
            <input type="text" value={inputval} onChange={(e) => { setinputval(e.target.value) }} autoFocus={true} className="data-input" />
            <div className="btns">
            <button onClick={add} className="add-btn">add</button>
            <button onClick={delall} className="del-all-btn">delete all</button>
            </div>
          </div>
          <div className="display">
          {
          item.map((e, i) => {
            return (
              num === i ? (<div key={i} className="update-div">
                <div className="u-f-div">
                <input type="text" className="update-input" value={updatetodo} onChange={(e) => { setupdatetodo(e.target.value) }} autoFocus={true} />
                </div>
                <div className="u-s-div">
                <button onClick={() => update(i)} className="update-btn">update</button>
                </div>
              </div>) : (<div key={i} className="item-area">
              <div className="f-div">
                <p>{e}</p>
              </div>
              <div className="s-div">
                <button onClick={() => del(i)} className="del-btn">delete</button>
              </div>
              <div className="t-div">
                <button onClick={() => edit(i)} className="edit-btn">edit</button>
              </div>
              </div>)
            )
          })
        }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
