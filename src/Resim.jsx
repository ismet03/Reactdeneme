import React from 'react';
import './css/resim.css';

function Resim({ selectedCategory }) {

    const images = [
        { src: "/insaat.jpg", alt: "bir", category: "İNŞAAT", url: "https://perayapitasarim.com.tr/" },
        { src: "/insaat2.png", alt: "iki", category: "İNŞAAT", url: "https://gkyyapi.com.tr/" },
        { src: "/turizm2.jpg", alt: "üç", category: "TURİZM", url: "https://www.a-gmarin.com/" },
        { src: "/emlak.png", alt: "dört", category: "EMLAK", url: "https://devrimtonguc.com.tr/" },
        { src: "/qr.jpg", alt: "beş", category: "QR MENÜ", url: "https://qrmenuplato.com/muretkaracabey/" },
        { src: "/gıda.jpg", alt: "altı", category: "GIDA", url: "https://muret.com.tr/" },
        { src: "/diğer.jpg", alt: "yedi", category: "DİĞER", url: "https://fethiyealperenhasirdekorasyon.com/" },
        { src: "/sağlık.jpg", alt: "sekiz", category: "SAĞLIK", url: "https://www.burakicten.com/" },
        { src: "/villa.jpg", alt: "dokuz", category: "VİLLA KİRALAMA", url: "https://www.villabook.com.tr/" },
        { src: "/turizm.jpg", alt: "on", category: "TURİZM", url: "https://travelfethiye.com.tr/" }
    ];


    const filteredImages = selectedCategory === "ALL"
        ? images
        : images.filter(image => image.category === selectedCategory);

    return (
        <div className='resimler'>
            {filteredImages.map((image, index) => (
                <a key={index} href={image.url} target="_blank" rel="noopener noreferrer">
                    <img src={image.src} alt={image.alt} />
                </a>
            ))}
        </div>
    );
}

export default Resim;
