
type NewComponentType = {
    students: Array<StudentType>
}
type StudentType = {
    id: number
    name: string
    age: number
}

type CarsType = {
    cars: TopCarsType[]
    
}
type TopCarsType = {
    manufacturer: string
    model: string
}




export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((s: StudentType,index: number) =>
                <li key={s.id}>
                    <span>{s.name}</span>
                    <span> age:{s.age}</span>
                </li>)}
        </ul>
    )
}

export const Cars = (props: CarsType) => {
    return (
        <table>
            <tr >
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            {props.cars.map((c: TopCarsType, index: number) =>
                <tr key={index}>
                    <td>{c.manufacturer}</td>
                    <td>{c.model}</td>
                </tr>
            )}

        </table>
    )
}




