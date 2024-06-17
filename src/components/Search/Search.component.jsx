import { Link } from 'react-router-dom';
import SearchIcon from "../../assets/search.svg"

import "./Search.styles.css"
import { useState } from 'react';

const Search = ({ components }) => {
    const [filteredComponets, setFilteredComponents] = useState(components);
    const [clickId, setClickId] = useState(false);

    const handleFilter = (e) => {
        const search = e.target.value;
        const filtering = components.filter(component => component.title.includes(search));
        setFilteredComponents(filtering);
    }

    const handleClick = (elementId) => {
        setClickId(elementId)
    }

    return (
        <div className="search-container">
            <div className='search-section-container'>
                <img src={SearchIcon} alt="Search Icon" className='search-section-icon' />
                <input type="text" onChange={handleFilter}/>
            </div>
            <div className="search-section-container">
                <ul className='search-section-list'>
                    {filteredComponets.map(component => (
                    <Link to={component.link} key={component.id}>
                        <li onClick={() => handleClick(component.id)}  className={clickId === component.id ? "--active" : ""}>
                                {component.title}
                        </li>
                    </Link>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default Search