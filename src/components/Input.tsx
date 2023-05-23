import { useState, useRef } from "react";
import axios from "axios";
interface DataProps {
    id?: number,
    title: string,
    description: string,
    completed: boolean
}
interface PropsType {
    setTogle: React.Dispatch<React.SetStateAction<boolean>>,
    togle: boolean
}
const Input = (props: PropsType) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const { setTogle, togle } = props;
    const [newData, setNewData] = useState<DataProps>({ title: '', description: '', completed: false });
    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post("http://localhost:3000/list", newData)
            .then(res => {
                console.log(res);
                setTogle(!togle);
                titleRef.current!.value = "";
                descriptionRef.current!.value = "";
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <div className="bg-zinc-400 py-5 px-3">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name task</label> <br />
                    <input ref={titleRef} type="text" name="name" className="p-1 focus:outline-none" onChange={e => setNewData({ ...newData, title: e.target.value })} />  <br />
                    <label htmlFor="description">Description</label> <br />
                    <input ref={descriptionRef} type="text" name="description" className="w-full p-1 focus:outline-none" onChange={e => setNewData({ ...newData, description: e.target.value })} />  <br />
                    <button type="submit" className="mt-5 bg-white hover:bg-black hover:text-white">Add to do</button>
                </form>
            </div>
        </>
    )
}
export default Input;