import { IconCopy } from "@tabler/icons-react"
import { useState } from "react"

interface ExibeSenhaprops{
    senha: string

}


export default function(props: ExibeSenhaprops){
    const [mostrarAviso,setMostrarAviso] = useState(false)





    const copiar = () => {
        navigator.clipboard.writeText(props.senha)
        setMostrarAviso(true);
        setTimeout(()=>{
            setMostrarAviso(false)
        },2000)
    }
    return(
        <div className="mt-3">
            {props.senha.trim() === "" ? "" :
                <>
                    <span className="font-bold text-lg">Senha Gerada:</span>
                    <div className={`
                        p-2 border bg-gray-100 rounded text-slate-700 flex justify-between
                        `}>
                        {props.senha}
                        <IconCopy className="hover:text-blue-500 cursor-pointer" onClick={copiar}/>
                    </div>
                </>
            
            
            }
            {mostrarAviso && <p className="mt-2 text-blue-500 text-center">Senha copiada para aréa de trasnferência</p>}
        </div>
    )
}