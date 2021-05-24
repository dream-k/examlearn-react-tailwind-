import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    IconCheck,
    IconClose
} from '../../assets/icons'

const Input = (props) => {
    const {
        label,
        value,
        type,
        placeholder,
        validators,
        onChange,
        onValidChange
    } = props

    const [validationError, setValidationError] = useState(null)
    const [inputValue, setInputValue] = useState(value)
    const [valid, setValid] = useState(null)

    const handleChange = (e) => {
        setInputValue(e.target.value)
        onChange(e.target.value)
    }

    const checkValidation = () => {
        if (validators.length) {
            for (let i = 0; i < validators.length; i++) {
                const validator = validators[i]
                if (!validator.check(inputValue)) {
                    setValidationError(validator)
                    setValid(false)
                    onValidChange(false)
                    return
                }
            }
    
            setValidationError(null)
            setValid(true)
            onValidChange(true)
        }
    }
        
    return (
        <div className="relative">
            <div className="flex items-center mb-1">
                <label className="block text-xs font-semibold text-gray-70">{label}</label>
                {valid === false && (<p id="error" className="text-error ml-4">{validationError.msg}</p>)}
            </div>
            {type === 'textarea' ? (
                <textarea placeholder={placeholder} className={"border-2 rounded p-2 w-full focus:outline-none " + (valid === null ? "border-brand-bg bg-white" : (valid === true ? "border-success bg-green-100" : "border-error bg-red-100"))} value={inputValue} onChange={handleChange} onBlur={checkValidation}/>
            ) : (
                <input type={type} placeholder={placeholder} className={"border-2 rounded p-2 w-full focus:outline-none " + (valid === null ? "border-brand-bg bg-white" : (valid === true ? "border-success bg-green-100" : "border-error bg-red-100"))} value={inputValue} onChange={handleChange} onBlur={checkValidation}/>
            )}
            {valid !== null && (
                <div className={"absolute h-5 w-5 rounded-full flex items-center justify-center " + (valid === true ? "bg-success" : "bg-error")} style={{bottom: '12px', right: '12px'}}>
                    {valid === true ? (<IconCheck />) : (<IconClose />)}
                </div>
            )}
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    type: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    onChange: PropTypes.func,
    onValidChange: PropTypes.func
}

Input.defaultProps = {
    label: null,
    value: '',
    type: 'text',
    placeholder: '',
    validators: [],
    onChange: () => {},
    onValidChange: () => {}
}

export default Input;
