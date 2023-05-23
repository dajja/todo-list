export type DataProps = {
    id: number,
    title: string,
    description: string,
    completed: boolean
}
export type PropsType = {
    setTogle: React.Dispatch<React.SetStateAction<boolean>>,
    togle: boolean
}