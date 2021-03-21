import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Form() {
    const history = useHistory()

    const routeToHome = () => {
        history.push('/')
    }

    return (
        <div>
            {/* <button className='home-button' onClick={routeToHome}>Home</button> */}
            <div className="form-card">
                <h2>Welcome to the Pizza Form!</h2>
                <p>Choose your options below to build your ultimate pizza.</p>
                
                <div className="form-card">
                    <section className="form-card-heading">Enter a Name For Your Order</section>
                    <label><input type="text" size="40" name="order-name" placeholder="Enter Your Order Name (i.e. 'Bob's Order')"/></label>
                </div>

                <div className="form-card">
                    <section className="form-card-heading">Choose Your Size:</section>
                    <form className="form-container inputs">
                        <label>Size Options
                            <select>
                                <option>Select Your Size! </option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                                <option>Extra Large</option>
                            </select>
                        </label>
                    </form>
                </div>

                <div className="form-card">
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
                </div>
                
                <div className="form-card">
                    <section className="form-card-heading">Choose Your Toppings:</section>
                    <form className="form-container checkboxes">
                        <label>Pepperoni
                            <input type="checkbox"/>
                        </label>
                        <label>Mushrooms
                            <input type="checkbox"/>
                        </label>
                        <label>Olives
                            <input type="checkbox"/>
                        </label>
                        <label>Sausage
                            <input type="checkbox"/>
                        </label>
                        <label>Anchovies
                            <input type="checkbox"/>
                        </label>
                        <label>Canadian Bacon
                            <input type="checkbox"/>
                        </label>
                        <label>Peppers
                            <input type="checkbox"/>
                        </label>            
                        <label>Pineapple
                            <input type="checkbox"/>
                        </label>
                        <label>Artichoke Hearts
                            <input type="checkbox"/>
                        </label>
                        <label>Jalapenos
                            <input type="checkbox"/>
                        </label>
                        <label>Tomato Slices
                            <input type="checkbox"/>
                        </label>
                        <label>Purple Onion
                            <input type="checkbox"/>
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
                    <label><input type="text" size="100" placeholder="Anything else you'd like to add? Perhaps special instructions like extra sauce or extra cheese?"/></label>
                </div>

                <div className="form-card">
                    <section className="form-card-heading">Add To Cart!</section>
                    <form className="form-container inputs">
                        <label>Select The Amount You Want To Add: 
                            <select>
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
                    </form>
                    <button className="add-order-button">Add to Cart</button>
                </div>

            </div>
        </div>
    );
}