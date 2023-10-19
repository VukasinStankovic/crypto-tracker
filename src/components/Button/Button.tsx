import {ButtonProps} from "../../types/types";

function Button({ text, remove, handleOnClick }: ButtonProps) {
    return (
        <button
            onClick={handleOnClick}
            type="button"
            className={`${remove ? 'btn btn-danger' : ' btn btn-info'}`}
        >
            {text}
        </button>
    );
};

export default Button;