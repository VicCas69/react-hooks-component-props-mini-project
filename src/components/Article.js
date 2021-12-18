import React from "react"

function Article({ title, date="January 1, 1970", preview, minutes }){
    const coffee = "☕️";
    const lunch = "🍱";
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{minutes<30 
                ? coffee.repeat(Math.ceil(minutes/5)) + `${minutes} minutes to read`
                :lunch.repeat(Math.ceil(minutes/10)) + `${minutes} minutes to read`
            }
            </p>
        </article>
    )
}

export default Article;