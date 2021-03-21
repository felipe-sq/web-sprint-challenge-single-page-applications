import React from 'react'

export default function Form(props) {
    const { 
        values, 
        submit, 
        change, 
        errors, 
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target

        const val = type === 'checkbox' ? checked : value 
        change(name, val)
    }

    return (
        <div>
            <div className="form-card" onSubmit={onSubmit}>
                <h2>Welcome to the Pizza Form!</h2>
                <p>Choose your options below to build your ultimate pizza.</p>
                
                <div className="errors">
                    <div>{errors.name}</div>
                </div>

                <div className="form-card">
                    <section className="form-card-heading">Enter a Name For Your Order</section>
                    <label>
                        <input 
                            value={values.name} 
                            onChange={onChange}
                            type="text" 
                            name="name" 
                            size="40" 
                            placeholder="Enter Your Order Name (i.e. 'Bob's Order')"
                        />
                    </label>
                </div>

                <div className="form-card">
                    <section className="form-card-heading">Choose Your Size:</section>
                    <form className="form-container inputs">
                        <label>Size Options
                            <select
                                onChange={onChange}
                                value={values.size}
                                name='size'
                            >
                                <option value=''>- Select Your Size! -</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                            </select>
                        </label>
                    </form>
                </div>

                {/* <div className="form-card">
                    <section className="form-card-heading">Choose Your Sauce:</section>
                    <form className="form-container inputs">
                        <label>Marinara
                            <input type="radio"/>
                        </label>
                        <label>Margherita
                            <input type="radio"/>
                        </label>
                        <label>White Sauce (Alfredo)
                            <input type="radio"/>
                        </label>
                        <label>Plain (No Sauce)
                            <input type="radio"/>
                        </label>
                    </form>
                </div> */}
                
                <div className="form-card">
                    <section className="form-card-heading">Choose Your Toppings:</section>
                    <form className="form-container checkboxes">
                        <label>Pepperoni
                            <input type="checkbox" name="pepperoni" onChange={onChange} checked={values.pepperoni}/>
                        </label>
                        <label>Mushrooms
                            <input type="checkbox" name="mushrooms" onChange={onChange} checked={values.mushrooms}/>
                        </label>
                        <label>Olives
                            <input type="checkbox" name="olives" onChange={onChange} checked={values.olives}/>
                        </label>
                        <label>Sausage
                            <input type="checkbox" name="sausage" onChange={onChange} checked={values.sausage}/>
                        </label>
                        <label>Canadian Bacon
                            <input type="checkbox" name="canadian_bacon" onChange={onChange} checked={values.canadian_bacon}/>
                        </label>           
                        <label>Pineapple
                            <input type="checkbox" name="pineapple" onChange={onChange} checked={values.pineapple}/>
                        </label>
                    </form>
                </div>

                <div className="form-card">
                    <section className="form-card-heading">Choose Extra Options:</section>
                    <form className="form-container">
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"/>
                        </label>Gluten-Free
                    </form>
                    <form className="form-container">
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"/>
                        </label>Dairy-Free
                    </form>
                    <form className="form-container">
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"/>
                        </label>Keto Crust
                    </form>
                </div>

                <div className="form-card">
                    <section className="form-card-heading">Special Instructions:</section>
                    <label>
                        <input 
                        onChange={onChange}
                        value={values.instructions} 
                        type="text" 
                        size="100" 
                        name="instructions"
                        placeholder="Anything else you'd like to add? Perhaps special instructions like extra sauce or extra cheese?"/></label>
                </div>

                <div className="form-card">
                    {/* <section className="form-card-heading">Add To Cart!</section>
                    <form className="form-container inputs">
                        <label>Select The Amount You Want To Add: 
                            <select
                                onChange={onChange}
                                value={values.amount}
                                name='amount'
                            >
                                <option>Choose From This List! </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </label>
                    </form> */}
                    <button className="add-order-button" onSubmit={onSubmit}>Add to Cart</button>
                </div>

            </div>
        </div>
    );
}