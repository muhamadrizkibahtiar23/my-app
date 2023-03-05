import React from 'react'
import Blog from './Blog'
import Produk from './Produk'

const Perent = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="box col sm-4">
                        <img src="/assets/Vivobook 13 Slate OLED.PNG" alt="1" />
                        <Produk nama="Vivobook 13 Slate OLED" stock="10" harga="8.999.000" />
                    </div>
                    <div className=" box col sm-4">
                        <img src="/assets/ROG Strix SCAR 17.PNG" alt="2" />
                        <Produk nama="ROG Strix SCAR 17 2022" stock="20" harga="34.999.000" />
                    </div>
                    <div className="box col sm-4">
                        <img src="/assets/BR1100F.PNG" alt="3" />
                        <Produk nama=" BR1100F" stock="16" harga="4.044.000" />
                    </div>
                    <div className="box col sm-4">
                        <img src="/assets/ROG Zephyrus G15 GA503.PNG" alt="4" />
                        <Produk nama="ROG Zephyrus G15 GA503" stock="19" harga="29.499.000" />
                    </div>
                    <div className="box col sm-4">
                        <img src="/assets/TUF Gaming F15 2022.PNG" alt="5" />
                        <Produk nama="TUF Gaming F15 2022" stock="9" harga="20.519.000" />
                    </div>
                    <div className="box col sm-4">
                        <img src="/assets/ExpertBook B1 B1400.PNG" alt="6" />
                        <Produk nama="ExpertBook B1 B1400" stock="5" harga="12.450.000" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col sm-4">
                        <Blog
                            tanggal="22 januari 2023"
                            judul="ASUS ROG"
                            sumarry="Laptop gaming paling kuat dan serbaguna didunia dalam industri"
                        />
                    </div>
                    <div className="col sm-4">
                        <Blog
                            tanggal="23 january 2023"
                            judul="ASUS ZENBOOK"
                            sumarry="Laptop yang elegan kompak,menampilkan teknologi laptop terbaik, sangat tipis dan ringan"
                        />
                    </div>
                    <div className="col sm-4">
                        <Blog
                            tanggal="24 january 2023"
                            judul="ASUS VivoBook"
                            sumarry="Laptop terbaik untuk tugas intensif grafis,visual yang akurat dan jelas"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Perent;


