import { useAutoAnimate } from "@formkit/auto-animate/react"



export default function useAnimate(){


    const [parent, enableAnimations] = useAutoAnimate({ duration: 500 })


    return {
        parent,
        enableAnimations
    }
}


