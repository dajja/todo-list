import { useEffect, useState } from "react";
import axios from 'axios';

interface DataProps {
    id: number,
    title: string,
    description: string,
    completed: boolean
}
const List = () => {
    const [data, setData] = useState<DataProps[]>([]);
    console.log(data);
    useEffect(() => {
        axios.get("http://localhost:3000/list")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div className="mx-80 text-center">
            {data.map((item, i) => (
                <div key={i}>
                    <div className="flex justify-between my-1 bg-yellow-200 px-5 py-2 rounded-lg">
                        <div className="">
                            <div className="text-3xl font-semibold">{item.title}</div>
                            <div className="text-start text-sm">{item.description}</div>
                        </div>
                        <div className="flex ">
                            <button className="px-5 py-1 mx-1 border-2 m-auto hover:bg-red-600 hover:text-white"><i className="fa-solid fa-trash-can"></i></button>
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