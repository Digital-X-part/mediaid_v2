
'use client'

import { ToggleContext } from "@/provider/contextProvider"
import { useContext } from "react"

function FlashButton({ item }) {
    const { data, setData } = useContext(ToggleContext)

    return (
        <button
            // onClick={()=>setData(s=>s)}  
            className="uppercase text-xs border w-full py-0.5 font-sans my-1 border-yellow-300 text-neutral-800 ">
            Add to cart
        </button>
    )
}

export default FlashButton