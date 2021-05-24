import PropTypes from 'prop-types'

const Progress = (props) => {
    const { className, percentClassName, percent, progressValue } = props

    return (
        <div className={`relative w-full ${className}`}>
            <div className={`absolute left-0 top-0 h-full flex items-center ${percentClassName}`} style={{width: percent + '%'}}>
                <p className="flex-1">{progressValue}</p>
            </div>
        </div>
    )
}

Progress.propTypes = {
    className: PropTypes.string,
    percentClassName: PropTypes.string,
    percent: PropTypes.number,
    progressValue: PropTypes.string
}

Progress.defaultProps = {
    className: 'bg-gray-10 h-8 rounded overflow-hidden',
    percentClassName: 'bg-brand-blue',
    percent: 50,
    progressValue: ''
}

export default Progress