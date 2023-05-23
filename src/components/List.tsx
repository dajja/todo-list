import axios from "axios";
import { useNavigate } from 'react-router-dom';
interface PropsType {
    data: any[],
    setTogle: React.Dispatch<React.SetStateAction<boolean>>,
    togle: boolean
}
interface DataProps {
    id: number,
    title: string,
    description: string,
    completed: boolean
}
const List = (props: PropsType) => {
    const { data, togle, setTogle } = props;
    const navigate = useNavigate();
    const deleteTask = (e: number) => {
        axios.delete("http://localhost:3000/list/" + e)
            .then(res => {
                setTogle(!togle);
                console.log(res);
            })
            .catch(err => console.log(err));
    }
    const endTask = (item: DataProps) => {
        axios.put(`http://localhost:3000/list/${item.id}`, {
            title: item.title,
            description: item.description,
            completed: !item.completed,
            id: item.id
        })
            .then((res) => {
                setTogle(!togle);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="mx-80 text-center">
            {data.length > 0 && data.map((item, i) => (
                <div key={i}>
                    <div style={item.completed ? { backgroundColor: "silver" } : {}} className="flex justify-between my-1 bg-yellow-200 px-5 py-2 rounded-lg">
                        <div style={item.completed ? { textDecoration: "line-through" } : {}}>
                            <div className="text-3xl font-semibold">{item.title}</div>
                            <div className="text-start text-sm">{item.description}</div>
                        </div>
                        <div className="flex">
                            <button className="px-5 py-1 mx-1 border-2 m-auto hover:bg-red-600 hover:text-white" onClick={() => deleteTask(item.id)}><i className="fa-solid fa-trash-can"></i></button>
                            <button style={item.completed ? { display: "none" } : {}} className="px-5 py-1 mx-1 border-2 m-auto" onClick={() => navigate(`/${item.id}`)}><i className="fa-solid fa-pen-to-square"></i></button>
                            <button style={item.completed ? { backgroundColor: "green" } : {}} className="px-5 py-1 mx-1 border-2 m-auto hover:bg-green-600 " onClick={() => endTask(item)}>{item.completed ? "Completed" : "Complete"}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default List;