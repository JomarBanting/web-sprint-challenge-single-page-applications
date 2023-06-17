import React from "react";


function Order (props) {
    const { name, size, topping1, topping2, topping3, topping4, special} = props.values;
    const { change, errors, submit } = props

    const onChange = event => {
        const {name, value, type, checked} = event.target;
        change(name, type === "checkbox" ? checked : value)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <div>
            <p>{errors.name}</p>
            <p>{errors.size}</p>
            <form id="pizza-form" onSubmit={onSubmit}>
                <label>
                    Name:
                    <input
                    type="text"
                    id="name-input"
                    name="name"
                    value={name}
                    onChange={onChange}
                    />
                </label>
                <br/>
            <label>Choice of Size
                <select name="size" id="size-dropdown" onChange={onChange} value={size}>
                <option value="">Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                </select>
            </label>
            <br/>
            <br/>
            <div className="toppings-checklist">
                <label>Pepperoni
                    <input
                    type="checkbox"
                    name="topping1"
                    checked={topping1}
                    onChange={onChange}
                    />
                </label>
                <label>Beef
                    <input
                    type="checkbox"
                    name="topping2"
                    checked={topping2}
                    onChange={onChange}
                    />
                </label>
                <label>Mushroom
                    <input
                    type="checkbox"
                    name="topping3"
                    checked={topping3}
                    onChange={onChange}
                    />
                </label>
                <label>Extra Cheese
                    <input
                    type="checkbox"
                    name="topping4"
                    checked={topping4}
                    onChange={onChange}
                    />
                </label>
            </div>
            <br/>
            <label>Special Instructions 
                <br/>
                <input
                type="text"
                id="special-text"
                name="special"
                value={special}
                onChange={onChange}
                />
            </label>
            <input 
            type="submit"
            id="order-button"
            value="Finish Order"
            />


            </form>
        </div>
    )
}

export default Order;