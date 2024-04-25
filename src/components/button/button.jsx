
import  PropTypes from "prop-types"

export function Button({label, onClick, disabled, size, ...rest }) {
    const buttons = {
        xl: (<button disabled={disabled} onClick={onClick} {...rest}>{label}xl</button>),
        sm: (<button disabled={disabled} onClick={onClick} {...rest}>{label}sm</button>),
        xxl: (<button disabled={disabled} onClick={onClick} {...rest}>{label}xxl</button>),
        lg: (<button disabled={disabled} onClick={onClick} {...rest}>{label} lg</button>)
    }
    console.log(typeof buttons[size])
  return (
    <>
   {buttons[size] || "" } 
    </>
  )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "xxl", "lg", "xl"]),
}
