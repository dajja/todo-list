import '../App.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
interface DataProps {
    id?: number,
    title: string,
    description: string,
    completed?: boolean
}
const Update = () => {
    const [selectedData, setSelectedData] = useState<DataProps>({ title: '', description: '' });
    const { id } = useParams();
    const navigate = useNavigate();
    const handleSubmit = (e : any) => {
        e.preventDefault();
        axios.put("http://localhost:3000/list/" + id, selectedData)
        .then(res => {
            console.log(res);
            alert("Successfully");
            navigate("/");
        })
        .catch(err => console.log(err));
    }
    useEffect(() => {
        axios.get("http://localhost:3000/list/" + id)
            .then((res) => {
                setSelectedData(res.data);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <div className="part-1">
                <div className='text-xl font-bold'>Update</div>
                <div className="bg-zinc-400 py-5 px-3">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name task</label> <br />
                        <input type="text" name="name" className="p-1 focus:outline-none" value={selectedData.title} onChange={e => setSelectedData({...selectedData, title : e.target.value})}/>  <br />
                        <label htmlFor="description">Description</label> <br />
                        <input type="text" name="description" className="w-full p-1 focus:outline-none" value={selectedData.description} onChange={e => setSelectedData({...selectedData, description : e.target.value})}/>  <br />
                        <button type="submit" className="mt-5 bg-white hover:bg-black hover:text-white">Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Update;
