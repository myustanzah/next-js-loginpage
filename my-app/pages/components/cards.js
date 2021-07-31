function Card() {
    return (
        <div className="row d-flex justify-content-center" style={{ padding: 30 + 'px' }}>
            <div class="col-sm-4">
                <div className="card" style={{ width: 18 + 'rem' }}>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jAt79dU5Z5tHIVaxU_vjngHaE8%26pid%3DApi&f=1" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Lamborghini</h5>
                        <p className="card-text">it made in Italy. it was a greatful car. everybody want the car</p>
                        <a href="#" className="btn btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div className="card" style={{ width: 18 + 'rem' }}>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jAt79dU5Z5tHIVaxU_vjngHaE8%26pid%3DApi&f=1" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Lamborghini</h5>
                        <p className="card-text">it made in Italy. it was a greatful car. everybody want the car</p>
                        <a href="#" className="btn btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card