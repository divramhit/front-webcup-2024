"use client"
import Transition from "@/components/PPTransition/PPTransition"

const MainTemplate = ({ children }) => {
    return (
        <div>
            <Transition>
                {children}
            </Transition>
        </div>
    )
}

export default MainTemplate;