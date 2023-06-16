import React from "react";


function Order (props) {
    const { name } = props.values;
    const { submit } = props

    const onChange = (event) => {
        const {type, value, name, checked} = event.target;
        submit(name, type === "checkbox" ? checked : value);
    }
    return (
        <div>
            <form id="pizza-form">
                <label>
                    Name:
                    <input
                    type="text"
                    id="name-input"
                    value={name}
                    onChange={onChange}
                    
                    />
                </label>
            </form>
        </div>
    )
}

export default Order;