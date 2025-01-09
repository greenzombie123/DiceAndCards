import React from "react"

interface SliderItemProps {
    children:React.ReactElement
}

const SliderItem = (props:SliderItemProps)=>{
    const {children} = props
    
    
    return <div className="sliderItem">
        {children}
    </div>
}

export default SliderItem 