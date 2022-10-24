import React, {useState} from 'react'

const TodoList = ({
    item,
    btnDel,
    btnToggle,
    btnChange,
    btnAfterChange,
}) => {
    const [val, setVal] = useState('')
    const keyPress = (e) => e.key === 'Enter' ? btnAfterChange(item.id, val) : ''

    return (
        <>
            {item.change
                ?
                <div>
                    <input
                        type="text"
                        value={val}
                        placeholder={item.text}
                        onChange={(e) => setVal(e.target.value)}
                        onKeyPress={(e) => keyPress(e)}
                            />
                    <button onClick={() => btnAfterChange(item.id, val )}>Change</button>
                </div>
                :
                <div key={item.id}>
                    <span onClick={() => btnToggle(item.id)}>
                        {
                            (item.complete ? <del>{item.text}</del> : item.text)
                        }
                    </span>
                    <button onClick={() => btnChange(item.id)}>Change</button>
                    <button disabled={item.complete ? false : true} onClick={() => btnDel(item.id)}>X</button>
                </div>
            }
        </>
    )
}


export default TodoList;