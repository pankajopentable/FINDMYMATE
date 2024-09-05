import { useParams } from "react-router-dom";

const List:React.FC = ()=>{
    const {id} = useParams<{id:string}>();
    const {name} = useParams<{name:string}>();
    // console.log(params);
    return <p>
        List Page{ id } {name}
    </p>
}

export default List;