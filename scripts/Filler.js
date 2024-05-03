
let Header = `
    <div class="mobile">

    <!-- mobile version  -->
    <div class="mobileHeader">
        <div class="hamburgerMenu">
            <img src="resource/Images/icons/icons8-menu-50 (2).png" alt="">
        </div>
        <div class="name">
            نظرسنجی هنرسان مصطفی خمینی
        </div>
    </div>

    <!-- header card -->
    <div class=" downSide downsideMobile">
        <img src="resource/Images/6770965.jpg" alt="">
        <div class="Header-text">
            <h2>
                به سایت نظرسنجی هنرستان مصطفی خمینی خوش آمدید.
            </h2>
            <p>
                ما با افتخار اعلام می‌کنیم که به عنوان یکی از موسسات آموزشی برجسته در سال تحصیلی جاری، به پیشبرد
                آموزش و پرورش با استانداردهای بالا متعهد هستیم. با تمرکز بر ارائه برنامه‌های آموزشی کارآمد و
                ایجاد محیطی پویا و فراگیر، ما به ارتقاء عملکرد تحصیلی و رشد هرچه بیشتر دانش‌آموزان می‌پردازیم.
                ارزیابی نظرات شما ارزشمند است و به ما کمک می‌کند تا بهبودهای لازم را ایجاد کرده و به بهترین شکل
                ممکن خدمات را ارائه دهیم. با تشکر از شما برای همراهی در این مسیر.
            </p>
            <a href="Querypage.html">
                <button>شرکت در نظرسجی</button>
            </a>
        </div>
    </div>
    <!-- ? header drop down -->
    <div class="HeaderDropDown">
        <div class="upperDown">
            <p>تنظیمات بیشتر</p>
            <img class="exit" src="resource/Images/icons/icons8-cross-48.png" alt="">
        </div>
        <div class="downHead">
            <ul>
                <li><a href="index.html" class="active">صفحه اصلی</a></li>
                <li><a href="AboutUs.html">درباره ما </a></li>
                <li><a href="Cotact.html">ارتباط با ما </a></li>
                <li><a href="SignUp.html">ثبت نام</a></li>
                <li><a href="Login.html">ورود</a></li>
                <li><a href="Querypage.html">شرکت در نظرسنجی</a></lّi>
            </ul>
        </div>
    </div>
    </div>


    <!--  ! pc version -->
    <div class="pc">
    <div class="upperSide">
        <nav>
            <ul>
            <li><a href="index.html" class="active">صفحه اصلی</a></li>
            <li><a href="AboutUs.html">درباره ما </a></li>
            <li><a href="Cotact.html">ارتباط با ما </a></li>
            <li><a href="SignUp.html">ثبت نام</a></li>
            <li><a href="Login.html">ورود</a></li>
            <li><a href="Querypage.html" class="participate">شرکت در نظرسنجی</a></lّi>
            </ul>
        </nav>
        <div class="account">
            <img src="resource/Images/icons/account-50 (1).png" alt="profile image">
            <p name="username">مهمان</p>
        </div>
    </div>
    <div class="downSide">
        <img src="resource/Images/6770965.jpg" alt="">
        <div class="Header-text">
            <h2>
                به سایت نظرسنجی هنرستان مصطفی خمینی خوش آمدید.
            </h2>
            <p>
                ما با افتخار اعلام می‌کنیم که به عنوان یکی از موسسات آموزشی برجسته در سال تحصیلی جاری، به پیشبرد
                آموزش و پرورش با استانداردهای بالا متعهد هستیم. با تمرکز بر ارائه برنامه‌های آموزشی کارآمد و
                ایجاد محیطی پویا و فراگیر، ما به ارتقاء عملکرد تحصیلی و رشد هرچه بیشتر دانش‌آموزان می‌پردازیم.
                ارزیابی نظرات شما ارزشمند است و به ما کمک می‌کند تا بهبودهای لازم را ایجاد کرده و به بهترین شکل
                ممکن خدمات را ارائه دهیم. با تشکر از شما برای همراهی در این مسیر.
            </p>
            <a href="#">
                <button>شرکت در نظرسجی</button>
            </a>
        </div>
    </div>
    </div>
`;

export function HeaderFiller() {
    let headerOnPage = document.querySelector('header');
    headerOnPage.innerHTML = Header;
    console.log('Header inserted successfully');
}

let Footer = `
    <div class="footerTop">
                    <div class="footerSec">
                        <h3>هدف ما از طراحی این سایت چیست؟</h3>
                        <p>
                            با شرکت در نظرسنجی، صدای خود را برای ما بشنوانید و تغییراتی که دوست دارید را مشخص کنید. همراه ما
                            باشید و بهترین راه‌حل‌ها را با هم پیدا کنیم!
                        </p>
                    </div>
                    <div class="footerSec">
                        <h3>دسترسی سریع</h3>
                        <ul>
                            <li><a href="">شرکت در نظرسنجی</a></li>
                            <li><a href="">درباره ی ما</a></li>
                            <li><a href="">تماس با</a></li>
                        </ul>
                    </div>
                    <div class="footerSec">
                        <h3>تماس با ما</h3>
                        <p>آدرس : تبریز / قطران به طرف ابوریحان هنرستان مصطفی خمینی</p>
                        <p>شماره تماس:4567 123 43+</p>
                    </div>
                </div>
`;

export function FooterFiller() {
    let footerOnPage = document.querySelector('footer');
    footerOnPage.innerHTML = Footer;
    console.log("Footer inserted Successfully");
}
