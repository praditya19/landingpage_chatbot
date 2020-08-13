import React, { Component } from 'react'
import './Main.css'
import './Form.css'
import Form from "./Form";

class Main extends Component {
    render() {
        return (
            <main>
                <section id="about" className="about">
                    <h2>Tentang Perusahaan</h2>
                    <div>
                        <p>Mitra Mediatech adalah perusahaan IT Solution, Hardware dan Software Development yang telah dirintis sejak 2018 oleh sekumpulan Pemuda dan Pemudi Indonesia yang melakukan riset mengenai revolusi industri dan memiliki kepedulian pada pengaruh modernisasi teknologi serta ekosistem digital terhadap peningkatan perekonomian secara global.</p>
                    </div>
                </section>

                <div>
                    <div className="services">
                        <div className="service__one">
                            <p className="service__icon"><i className="fas fa-pencil-alt"></i></p>
                            <p className="service__title">Web</p>
                            <p style={{
                                fontSize: '3rem',
                                margin: '20px',
                                padding: '0',
                                marginTop: -20
                            }}>Design</p>
                            <p>Kami menciptakan perancangan grafis dengan konten atau tampilan visual, serta menciptakan alur penggunaan diantara fitur-fitur pada halaman web.</p>
                        </div>
                        <div className="service_two">
                            <p className="service__icon"><i class="fab fa-dev"></i></p>
                            <p className="service__title">Web Development</p>
                            <p>Kami mengembangkan konten web, Penghubung klien, Server-side scripting, web server, dan keamanan jaringan konfigurasi.</p>
                        </div>
                        <div className="service__three">
                            <p className="service__icon"><i className="fas fa-database"></i></p>
                            <p className="service__title">Database Sistem</p>
                            <p>Kami merancang sistem untuk mengelola suatu basis data dan menjalankan operasi terhadap data.</p>
                        </div>
                        <div className="service__three">
                            <p className="service__icon"><i className="	fa fa-desktop"></i></p>
                            <p className="service__title">Product</p>
                            <p>Kami menciptakan product berupa sensor seperti sensor sistem absensi yang mempermudah pekerjaan anda.</p>
                        </div>
                    </div>
                </div>

                <div id="portofolio" className="gallery">
                    <div className="gallery__item__one"></div>
                    <div className="gallery__item__two"></div>
                    <div className="gallery__item__three"></div>
                    <div className="gallery__item__four"></div>
                    <div className="gallery__item__five"></div>
                    <div className="gallery__item__six"></div>
                </div>

                <section id="vision">
                    <h2>VISI KAMI</h2>
                    <div>
                        <p>
                            Membantu melakukan transformasi digital pada pengelolaan perusahaan anda dari cara lama yang tidak efisien, menuju sistem berbasis digital yang produktif dan powerful. Kami mengerti bagaimana cara memberikan perusahaan anda manfaat serta keuntungan yang signifikan. Kontrol penuh kini berada di genggaman anda.
                        </p>
                        <p>
                            Kita ingin membuat sebuah karya persembahan untuk mitra perusahaan2 yang membutuhkan teknologi digital untuk berkembang lebih baik di era sekarang ini.
                            (new digital ways) dan kita juga ingin menjadi pelopor  pemuda-pemudi indonesia yang berkarya digital
                        </p>
                    </div>
                </section>

                <section id="contact">
                    <h2 className="form__h2">E-mail kami</h2>
                    <Form />
                </section>
            </main>
        )
    }
}

export default Main;