
type NewComponentType = {
    students: Array<StudentType>
}
type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map(s =>
                <li key={s.id}>
                    <span>{s.name}</span>
                    <span> age:{s.age}</span>
                </li>)}
        </ul>
    )
}