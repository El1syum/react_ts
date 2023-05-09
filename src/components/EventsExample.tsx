import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState('')
    const [isDrag, setIsDrag] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }

    return (
        <div>
            <input value={value} onChange={onChange} type="text" placeholder='Упр'/>
            <input ref={inputRef} type="text" placeholder='Не упр'/>
            <button onClick={onClick}>dadas</button>
            <div onDrag={onDrag} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div
                onDrop={onDrop}
                onDragLeave={onDragLeave}
                onDragOver={onDragOver}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 20}}
            ></div>
        </div>
    );
};

export default EventsExample;