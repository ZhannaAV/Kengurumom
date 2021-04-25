import './SectionWithBtn.css'

function SectionWithBtn (props){
    const {placeText, placeImage, img, alt, title, text} = props
    return (
        <section
            className={`section-btn section-btn_for_${props.for}`}>
            <div className={`section-btn__block section-btn__block_place_${placeText}`}>
                <div className={`section-btn__inner section-btn__inner_place_${placeText}`}>
                    <h2 className="section-btn__title">{title}</h2>
                    <p className="section-btn__text">{text}</p>
                    {props.children}
                </div>
            </div>
            <img className={`section-btn__image section-btn__image_place_${placeImage}`} src={img}
                 alt={alt}/>
        </section>
    )
}
export default SectionWithBtn