import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Dropdown = (props) => {
    const {
        title,
        options,
        renderOption
    } = props

    const [collapsed, setCollapsed] = useState(true)

    const handleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const renderTitle = () => {
        if (typeof title === 'string') {
            return title
        } else {
            return title()
        }
    }

    return (
        <div className={`dropdown-component relative`}>
            <div className="flex cursor-pointer py-2" onClick={handleCollapsed}>
                {renderTitle()}
            </div>
            <div className="content absolute z-10 rounded shadow bg-white py-3 w-full hidden">
                {
                    options.map((option, index) => {
                        return (
                            <div key={index}>
                                {renderOption(option)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    options: PropTypes.array,
    renderOption: PropTypes.func
}

Dropdown.defaultProps = {
    title: '',
    options: [],
    renderOption: (option) => { return option.label }
}

export default Dropdown;