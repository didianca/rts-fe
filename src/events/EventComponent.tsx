const EventComponent: React.FunctionComponent = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event.clientX)
    }

    return <div>
        <input onChange={onChange}/>
        <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
}

export default EventComponent;