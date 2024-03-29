import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="217" y="108" rx="0" ry="0" width="1" height="0" />
            <circle cx="139" cy="143" r="119" />
            <rect x="3" y="277" rx="6" ry="6" width="291" height="26" />
            <rect x="3" y="314" rx="6" ry="6" width="280" height="84" />
            <rect x="3" y="419" rx="6" ry="6" width="91" height="31" />
            <rect x="138" y="409" rx="27" ry="27" width="137" height="49" />
        </ContentLoader>
    )
}

export default LoadingBlock
