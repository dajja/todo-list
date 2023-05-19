import axios from "axios";
interface PropsType {
    data: any[],
    setTogle: React.Dispatch<React.SetStateAction<boolean>>,
    togle: boolean
}
const List = (props: PropsType) => {
    const { data, togle, setTogle } = props;
    const deleteTask = (e: number) => {
        axios.delete("http://localhost:3000/list/" + e)
            .then(res => setTogle(!togle))
            .catch(err => console.log(err));
    }
    return (
        <div className="mx-80 text-center">
            {data.length > 0 && data.map((item, i) => (
                <div key={i}>
                    <div className="flex justify-between my-1 bg-yellow-200 px-5 py-2 rounded-lg">
                        <div className="">
                            <div className="text-3xl font-semibold">{item.title}</div>
                            <div className="text-start text-sm">{item.description}</div>
                        </div>
                        <div className="flex">
                            <button className="px-5 py-1 mx-1 border-2 m-auto hover:bg-red-600 hover:text-white" onClick={() => deleteTask(item.id)}><i className="fa-solid fa-trash-can"></i></button>
                            <button className="px-5 py-1 mx-1 border-2 m-auto"><i className="fa-solid fa-pen-to-square"></i></button>
                            <button className="px-5 py-1 mx-1 border-2 m-auto hover:bg-green-600">Complete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default List;