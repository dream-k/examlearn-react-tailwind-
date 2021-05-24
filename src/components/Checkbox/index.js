import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Checkbox = (props) => {
    const {
        value,
        onChange
    } = props

    const [checked, setChecked] = useState(value)

    useEffect(() => {
        setChecked(value)
    }, [value])

    const handleChange = (e) => {
        const val = e.target.checked
        setChecked(val)
        onChange(val)
    }
        
    return (
        <label className="checkbox-container">
            <input type="checkbox" checked={checked} onChange={handleChange}/>
            <span className="checkmark"></span>
        </label>
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

Checkbox.defaultProps = {
    checked: true,
    onChange: () => {}
}

export default Checkbox;