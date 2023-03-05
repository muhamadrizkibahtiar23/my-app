import React from 'react'
import Produk from './Produk'

const Stock = () => {

    return (
        <div>
            <nav className="navbar navstok navbar-light p-3 mb-2 bg-secondary">
                <div className="container">
                    <a className="navbar-brand text-white  ">Stock</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="container">
                <div className="stock">
                    <div className="row">
                        <div className="box col sm-4">
                            <img src="/assets/imgjam/AIR-KING.webp" alt="1" />
                            <Produk nama="AIR-KING" stock="10" harga="38.999.000" />
                        </div>
                        <div className=" box col sm-4">
                            <img src="/assets/imgjam/SUBMARINER.webp" alt="2" />
                            <Produk nama="SUBMARINER" stock="20" harga="34.999.000" />
                        </div>
                        <div className="box col sm-4">
                            <img src="/assets/imgjam/CELLINI MOONPHASE.webp" alt="3" />
                            <Produk nama="CELLINI MOONPHASE" stock="16" harga="14.044.000" />
                        </div>
                        <div className="box col sm-4">
                            <img src="/assets/imgjam/GMT-MASTER II.webp" alt="4" />
                            <Produk nama="GMT MASTER II" stock="19" harga="29.499.000" />
                        </div>
                        <div className="box col sm-4">
                            <img src="/assets/imgjam/MILGAUSS.webp" alt="5" />
                            <Produk nama="MILGAUSS" stock="9" harga="20.519.000" />
                        </div>
                        <div className="box col sm-4">
                            <img src="/assets/imgjam/YACHT-MASTER 42.webp" alt="6" />
                            <Produk nama="YACHT-MASTER" stock="5" harga="12.450.000" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Stock;


