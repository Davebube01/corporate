    import CarouselImgSrc from '../assets/img/img-hero1.jpg';
    import CarouselImg1Src from '../assets/img/img-hero2.jpg';
    import CarouselImg2Src from '../assets/img/img-hero3.jpg';
    import img1Src from '../assets/img/img1.jpg';


    const CarouselImg = () => <img src={CarouselImgSrc} alt="" className='d-block w-100' />;
    const CarouselImg1 = () => <img src={CarouselImg1Src} alt="" className='d-block w-100' />;
    const CarouselImg2 = () => <img src={CarouselImg2Src} alt="" className='d-block w-100' />;
    const ImgOne = () => <img src={img1Src} alt="" />;

    export {
        CarouselImg,
        CarouselImg1,
        CarouselImg2,
        ImgOne,
    };