import React, { Component } from 'react';
import './Search.css'
const Search = () => {
    return ( 
        <>
        <div className='cen'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10.783 18.8277C12.3738 18.8292 13.9294 18.3594 15.2534 17.4775C16.5774 16.5956 17.6104 15.3412 18.222 13.8727C18.8333 12.4039 18.9945 10.7867 18.6852 9.22624C18.376 7.66574 17.6102 6.23226 16.485 5.10766C15.3605 3.98261 13.9277 3.21618 12.3677 2.90522C10.8077 2.59426 9.19052 2.75274 7.72057 3.36063C6.25062 3.96852 4.99387 4.99852 4.10915 6.32047C3.22443 7.64242 2.75145 9.19697 2.75 10.7877C2.75 12.9187 3.596 14.9617 5.102 16.4687C6.60848 17.9758 8.65107 18.8241 10.782 18.8277M16.488 16.4907L21.25 21.2497" stroke="#C1C1C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input className='search' type="text" placeholder="Search.." name="search"></input>
        </div>
        </>
     );
}
 
export default Search;