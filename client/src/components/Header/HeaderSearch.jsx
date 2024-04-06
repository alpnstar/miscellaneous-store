import React, {useEffect, useState} from 'react';
import styles from "../../styles/Header.module.scss";
import {Link} from "react-router-dom";
import {useGetProductsByTitleQuery} from "../../store/query/productsApi";

const HeaderSearch = () => {
    const [search, setSearch] = useState('');
    const [searchDisplay, setSearchDisplay] = useState(false);
    const {
        data: foundProducts,
        isFetching: foundProductsLoading
    } = useGetProductsByTitleQuery({title: search}, {
        skip: !search,
    });

    function handleChangeSearch(e) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        if (!search) return setSearchDisplay(false);
        setSearchDisplay(true);
    }, [search]);
    return (
        <form className={styles.form}>
            <div className={styles.icon}>
                <svg className='icon'>
                    <path
                        d="M12.8416 12.0758L9.60783 8.84204C10.4886 7.76481 10.9216 6.39027 10.8173 5.00273C10.7131 3.61519 10.0795 2.3208 9.04763 1.3873C8.01577 0.453803 6.66459 -0.0473866 5.27357 -0.0126007C3.88255 0.0221852 2.55811 0.590285 1.57421 1.57419C0.5903 2.5581 0.0222005 3.88254 -0.0125854 5.27356C-0.0473713 6.66458 0.453818 8.01576 1.38732 9.04761C2.32081 10.0795 3.6152 10.7131 5.00274 10.8173C6.39029 10.9216 7.76483 10.4886 8.84205 9.60782L12.0758 12.8416C12.1791 12.9339 12.3139 12.9832 12.4524 12.9793C12.5909 12.9754 12.7227 12.9186 12.8207 12.8207C12.9187 12.7227 12.9754 12.5909 12.9793 12.4524C12.9832 12.3139 12.9339 12.1791 12.8416 12.0758ZM5.41737 9.75001C4.55987 9.75041 3.72153 9.49647 3.00838 9.02033C2.29523 8.54418 1.73933 7.86721 1.411 7.07507C1.08266 6.28293 0.996649 5.4112 1.16384 4.57016C1.33103 3.72913 1.74391 2.95657 2.35025 2.35023C2.95659 1.74389 3.72914 1.33101 4.57018 1.16382C5.41121 0.996633 6.28294 1.08265 7.07509 1.41098C7.86723 1.73931 8.5442 2.29522 9.02034 3.00836C9.49649 3.72151 9.75042 4.55986 9.75002 5.41735C9.74841 6.56595 9.29142 7.66704 8.47924 8.47922C7.66705 9.2914 6.56596 9.74839 5.41737 9.75001Z"></path>

                </svg>
            </div>
            <div className={styles.input} onClick={() => setSearchDisplay(!searchDisplay)}>
                <input type="search"
                       name='search'
                       placeholder="Type anything..."
                       autoComplete="off"
                       value={search}
                       onChange={handleChangeSearch}/>
                {searchDisplay && foundProducts && search &&
                    <ul className={styles.searchResult}>

                        {foundProductsLoading ? <li>Загрузка...</li> : !foundProducts.length ?
                            <li>Ничего не найдено</li> : foundProducts.map((item, index) => {
                                if (index <= 4) return (
                                    <Link key={item.id} to={'/products/' + item.id}>
                                        <li key={item.title}>
                                            <img src={item.images[0]} alt=""/>
                                            {item.title}
                                        </li>

                                    </Link>
                                )
                            })}
                    </ul>}
            </div>
        </form>
    );
};

export default HeaderSearch;