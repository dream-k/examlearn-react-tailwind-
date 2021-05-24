import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { IconCollapseArrow } from '../../assets/icons'
import './style.scss'

const Collapse = (props) => {
    const {
        title,
        content
    } = props

    const [collapsed, setCollapsed] = useState(true)

    const handleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={'collapse-component ' + (collapsed ? 'expand' : 'collapse')}>
            <div className="flex cursor-pointer py-2" onClick={handleCollapsed}>
                <p className={"font-semibold flex-1 " + (collapsed ? 'text-brand-text' : 'text-brand-blue')}>{title}</p>
                <IconCollapseArrow className="collapse-icon"/>
            </div>
            <div className="pr-10 content">
                <p className="text-gray-70">
                    {content}
                </p>
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string 
}

Collapse.defaultProps = {
    title: '',
    content: '' 
}

export default Collapse;