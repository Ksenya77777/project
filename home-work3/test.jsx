import React from "react";


const test = (props) =>{

    const {heading, info, description, img} = props;

    return (
        <>
        <div class="container our">
        <div class="info margin-top ">
            <div class="info__heading white-text">{heading}</div>
            <div class="info__line"></div>
            <div class="info__text white-text">{info}</div>
            <div class="info__sequel white-text"> {description}</div>
        </div>

        <div class="fire__block our__fire__block">
            <img src={img} alt="Rectangle" class="about-img">

            <div class="fire__frame shef__frame">


            </div>
        </div>
    </div>
    </>

    )
}