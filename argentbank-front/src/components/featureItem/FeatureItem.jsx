import "./featureItem.css"

const FeatureItem = ({ img, title, text }) => {

    console.log(img)
    console.log(title)
    console.log(text)
    
    return (
        <div className="feature-item">
            <img
                src={img}
                alt=""
                className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

export default FeatureItem