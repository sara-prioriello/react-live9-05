export default function CharacterData({ character }) {


    return (
        <div className="col">
            <div className="card">
                <img src={character.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h3>NAME</h3>

                        {/*status*/}
                        <div type="button" className=" position-relative">
                            <span style={{ fontSize: '12px' }}>{character.status}</span>
                            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger 
                                        border border-light rounded-circle">
                                <span className="visually-hidden">Character status</span>
                            </span>
                        </div>
                    </div>

                    {/*species*/}
                    <div><i className='bi bi-person-bounding-box'></i><strong>{character.species}</strong></div>

                    {/*gender*/}
                    <div><i className='bi bi-gender-ambiguous'></i><strong>{character.gender}</strong></div>

                    {/*Origin planet character.origin.name*/}
                    <div><i className='bi bi-globe-europe-africa-fill'></i><strong>{character?.origin?.name}</strong></div>

                </div>
            </div>
        </div>
    )
}