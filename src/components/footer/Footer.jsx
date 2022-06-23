import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="max-width">
                <h2>©Weniv Corp.</h2>
                <button className="top-button" onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}>
                    TOP
                </button>
            </div>
        </footer>
    )
}
