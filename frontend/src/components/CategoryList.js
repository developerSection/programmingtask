import React, {useState, useEffect } from 'react'
import Axios from 'axios';



function CategoryList(props) {

    const SERVER_URL = 'http://localhost:3001/api';

    // category list
    const [categoryList, setCategoryList] = useState([]);

    // get category list from mongodb by calling get function
    useEffect(() => {
        Axios.get(`${SERVER_URL}/category/get-all`).then((res) => {
            setCategoryList(res.data);
        })
        // added empty [] coz we want to call it one time
    }, [])


    // filter category by search input
    const filteredData = categoryList.filter((data) => {
        // IF -> input is empty show full list, ELSE -> show category which includes search input
        if (props.input === '') {
            return data
        }
        else {
            return data.name.toLowerCase().includes(props.input)
        }
    })


    return (
        // display filtered data
        <ul>
            {/* map through category list */}
            {filteredData.map((menu, key) => {
                return <li>
                    {/* main category name */}
                    <div>{menu.name}</div>
                    {/* sub category list  */}
                    <ul>
                        {/* map through category list */}
                        {menu.children.map((submenu, nkey) => {
                            return <li key={nkey}>{submenu.name}</li>
                        })}
                    </ul>
                </li>
            })}
        </ul>
    )
}

// export categorylist class so other components can use it
export default CategoryList