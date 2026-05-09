export default function AppHeader({ logo_text, menu }) {
    return (

        <div className="container d-flex justify-content-between flex-wrap">
            <h1> {logo_text}</h1>
            <nav className=''>
                <ul className='list-unstyled d-flex gap-1'>
                    {
                        menu.map(item => (
                            <li key={item.id}><a href={item.url}>{item.text}</a></li>
                        ))
                    }

                </ul>
            </nav>
        </div>
    )
}