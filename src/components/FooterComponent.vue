<template>
    <div class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-5 col-md-8 footer-contact">
                        <img src="@/assets/image/logo.png" alt="logo">
                        <p>
                            Culinária artesanal, afetiva e vegana.
                        </p>
                    </div>

                    <div class="col-lg-4 col-md-2 footer-contact"></div>

                    <div class="col-lg-3 col-md-4 footer-links">
                        <h4>Contato</h4>
                        <ul>
                            <li><strong>Local: </strong> Curitiba - Paraná</li>
                            <li><strong>WhatsApp: </strong> 41 99996-8607</li>
                        </ul>
                        <div class="social-links mt-3">
                            <a target="blank" href="https://www.facebook.com/belle.biscoitos/" class="facebook">
                                <b-icon icon="facebook"></b-icon>
                            </a>
                            <a target="blank" href="https://www.instagram.com/belle.biscoitos/" class="instagram">
                                <b-icon icon="instagram"></b-icon>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .footer {
        font-size: 14px;
        background: #3f4a1f;
        height: 12vw;
    }

    .footer .footer-top {
        padding: 30px 0 0px 0;
        background: #3f4a1f;
        margin: 50px 0 0;
    }

    .footer .footer-top img {
        width: 160px;
    }

    .footer .footer-top .footer-contact h3 {
        font-size: 28px;
        margin: 0 0 10px 0;
        padding: 2px 0 2px 0;
        line-height: 1;
        text-transform: uppercase;
        font-weight: 600;
        color: #37517e;
        font-family: "Montserrat", sans-serif;
    }

    .footer .footer-top .footer-contact p {
        font-size: 16px;
        line-height: 24px;
        margin: 10px 15px -6px;
        font-family: "Montserrat", sans-serif;
        color: #ffffff;
    }

    .footer .footer-top h4 {
        font-size: 20px;
        font-weight: bold;
        color: white;
        position: relative;
    }

    .footer-links {
        margin: 0px 0 0px;
    }

    .footer-links p {
        color: #fff;
    }

    .footer .footer-top .footer-links ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .footer .footer-top .footer-links ul i {
        padding-right: 2px;
        color: #ffffff;
        font-size: 18px;
        line-height: 1;
    }

    .footer .footer-top .footer-links ul li {
        padding: 10px 0 0;
        display: flex;
        align-items: center;
        color: white
    }

    .footer .footer-top .footer-links ul li:first-child {
        padding-top: 0;
    }

    .footer .footer-top .footer-links ul a {
        color: #fefefe;
        transition: 0.3s;
        display: inline-block;
        line-height: 1;
    }

    .footer .footer-top .footer-links ul a:hover {
        text-decoration: none;
        color: #47b2e4;
    }

    .footer .footer-top .social-links a {
        font-size: 18px;
        display: inline-block;
        background: #cab394;
        color: #fff;
        line-height: 1;
        padding: 8px 0;
        margin-right: 4px;
        border-radius: 50%;
        text-align: center;
        width: 36px;
        height: 36px;
        transition: 0.3s;
    }

    .footer .footer-top .social-links a:hover {
        background: #3f4a1f;
        color: #cab394;
        text-decoration: none;
        border: 2px solid #cab394;
    }

    .footer .footer-bottom {
        padding-top: 30px;
        padding-bottom: 30px;
        color: #fff;
        text-align: center;
    }

    .footer .footer-bottom a {
        color: #fff;
    }

    .footer .copyright {
        float: left;
    }

    .footer .credits {
        float: right;
        font-size: 13px;
    }

    .footer .credits a {
        transition: 0.3s;
    }

    @media (max-width: 768px) {
        #footer .footer-top {
            min-height: 120vw;
            margin: -60px 0 0px;
        }

        #footer .footer-bottom {
            font-size: 12px;
        }

        #footer .footer-top img {
            width: 100px;
        }

        .footer .footer-top {
            padding: 30px 0 60px 0;
        }

        .footer .footer-top .footer-contact p {
            margin: 10px 0px 20px;
        }
    }
</style>