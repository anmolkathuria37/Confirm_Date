import React from 'react'
import '../components/Footer.css'

import { useSearchParams } from 'react-router-dom'

export const Footer = () => {

    const [searchParams] = useSearchParams();

    const author = searchParams.get("author");

    return (

        <>
            <div className="footer-basic text-amber-50 w-[100vw] fixed left-0 bottom-0">
                <footer className='flex-col content-center'>
                    {/* <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Home</a></li>
                        <li class="list-inline-item"><a href="#">Services</a></li>
                        <li class="list-inline-item"><a href="#">About</a></li>
                        <li class="list-inline-item"><a href="#">Terms</a></li>
                        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul> */}
                    {/* <p className="copyright m-auto">Anmol Kathuria © 2026</p> */}
                    <p className="copyright m-auto">Made by: {author? author.charAt(0)+author.slice(1):"Anmol Kathuria"} © 2026</p>
                </footer>
            </div>
        </>
    )
}
