import React, {FC} from "react";
import ContentLoader from 'react-content-loader'
import '../pizzasBlock/pizzasBlock.scss'

const PizzaSkeleton:FC = () => (
    <ContentLoader
        className='pizzasBlock'
        speed={2}
        width={280}
        height={460.5}
        viewBox="0 0 280 460.5"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="133" cy="133" r="113" />
        <rect x="474" y="523" rx="0" ry="0" width="224" height="36" />
        <rect x="532" y="515" rx="0" ry="0" width="8" height="66" />
        <rect x="2" y="257" rx="10" ry="10" width="266" height="21" />
        <rect x="2" y="299" rx="10" ry="10" width="266" height="95" />
        <rect x="9" y="415" rx="10" ry="10" width="82" height="26" />
        <rect x="117" y="408" rx="30" ry="30" width="148" height="38" />
    </ContentLoader>
)

export default PizzaSkeleton