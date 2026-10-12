
export interface inputsProps{
    id: string 
    valor: boolean
    label: string
    onChange: () => void
}




export default function InputCaractere(props: inputsProps){
    const id = `checkbox-${props.id}`
    return(
        
        <div className='flex text-xl gap-2'>
            <input type="checkbox" checked={props.valor} onChange={props.onChange} id={id}   />
            <label htmlFor={id}>{props.label}</label>

        </div>
    )
}

