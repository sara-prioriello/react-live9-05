export default function AppBanner({ banner_data, children }) {

    return (

        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{banner_data.title}</h1>
                <p className="col-md-8 fs-4">
                    {banner_data.text}
                </p>
                {children}
            </div>
        </div>
    )
}