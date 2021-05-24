import PropTypes from "prop-types";
import "./style.scss";

const Radio = (props) => {
    const { selected, onChange, text, value } = props

    return (
      <div
        className="flex items-center cursor-pointer select-none"
        onClick={() => {
          onChange(value);
        }}
      >
        <div
          className={`w-6 h-6 border-2 flex items-center justify-center mr-3 rounded-full radio-outer-circle ${value !== selected ? "border-gray-5" : "border-brand-blue"}`}
        >
          <div
            className={`rounded-full bg-brand-blue radio-inner-circle ${value !== selected ?
              "w-0 h-0" : "w-3 h-3"}`}
          />
        </div>
        <div className="text-gray-70">{text}</div>
      </div>
    );
}

Radio.propTypes = {
  text: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
}

export default Radio
