type Props = {
    book:Book,
    onSave:(book:FormData)=>void 
}

const Form:React.FC<Props> = ()=>{
    return <>
        <p>
            <label>title:</label>
            <input type="text" />
        </p>
        <p>
            <label>file:</label>
            <input type="file" />
        </p>
        <p>
            <input type="submit" name="save" id="save" />
        </p>
    </>
}

export default Form;