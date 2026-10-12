import Barra from "./Barra"

interface ForcaSenhaProps{
    forca: number
}


export default function(props: ForcaSenhaProps){

    return(
        <div className="flex text-xl items-center">
            <span className="font-bold">Força da senha:</span>
            <Barra corFundo={props.forca===3?"bg-green-500":(props.forca===2 ? "bg-yellow-500": "bg-red-500")}/>
            <Barra corFundo={props.forca===3?"bg-green-500":(props.forca===2 ? "bg-yellow-500": "")}/>
            <Barra corFundo={props.forca===3?"bg-green-500":""}/>
           
        </div>
    )
}