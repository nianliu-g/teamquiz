import * as React from "react";
import * as PropTypes from "prop-types";

interface Props {
    index: number
    name: string
    label: string
    onChange: (newQuestion: string, index: number) => void
    placeholder: string
    value: string
    error: string
}

const QuestionInput = ({index, name, label, onChange, placeholder, value, error}: Props) => {
    let wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " " + "has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {onChange(e.currentTarget.value, index)}}
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

export default QuestionInput;
