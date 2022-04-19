import PageLayout from "examples/LayoutContainers/PageLayout";

const LandingPage = () => (
    <div className="landing-page">
        <PageLayout >
        <AboveTheFold />
        <Explore />
        <BecomePro />
        <Footer />
        </PageLayout>
    </div>
);

const AboveTheFold = () => (
    <div>
        <div className='lp-header'>
            <div className="lp-header-logo">
                <svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4558 0.890191L3.32338 7.31806C1.26554 8.50807 0 10.6969 0 13.0692V25.9281C0 28.3065 1.26554 30.4954 3.32338 31.6823L14.4558 38.1133C16.5121 39.2956 19.0478 39.2956 21.0995 38.1133L32.2365 31.6823C34.2882 30.4954 35.5599 28.3065 35.5599 25.9281V13.0692C35.5599 10.6969 34.2882 8.50807 32.2365 7.31806L21.0995 0.890191C19.0478 -0.29673 16.5121 -0.29673 14.4558 0.890191ZM19.4624 10.0696L25.1072 13.3267C26.1446 13.9294 26.7905 15.0438 26.7905 16.2431V22.7604C26.7905 23.9612 26.1446 25.0726 25.1072 25.6722L19.4624 28.9339C18.4235 29.5351 17.1379 29.5351 16.0959 28.9339L10.4542 25.6722C9.41059 25.0726 8.77089 23.9612 8.77089 22.7604V16.2431C8.77089 15.0423 9.41213 13.9294 10.4542 13.3267L16.0959 10.0696C17.1379 9.46994 18.4235 9.46994 19.4624 10.0696Z" fill="#041E77"/>
                </svg>
                <span className="logo-text">FeeBee</span>
            </div>
        </div>
        <div className="hero">
            <h1>Home Improvements</h1>
            <h2>Better</h2>
            <h2>Faster</h2>
            <h2>Clearer</h2>
            <div>We help contractors organize their projects to <br /> simplify the home remodeling process.</div>
            <div className="hero-btn-container">
                <a className="btn-pill primary">Get Started</a>
            </div>
            <div className="hero-btn-container">
                <a className="btn-pill secondary">Join As Pro</a>
            </div>
        </div>
    </div>
);

const Explore = () => (
    <div className="explore">
        <h1>Explore</h1>
        <div>
            <span>Contractors</span>
            <span>How To</span>
            <span>Inspiration</span>
        </div>
        <h2>Find The Right Contractor For You</h2>
    </div>
)

const BecomePro = () => (
    <div className="become-pro">
        <div>
            <h1>Grow your business with us.  Become a FeeBee Pro today.</h1>
            <div>
                Increase your connections to millions of homeowners who are searching for local contractors just like you. 
                Signing  up is free and easy.  Learn more today!
            </div>
            <a className="btn-pill" href="/login">Join As Pro</a>
        </div>
        <div><img src="https://via.placeholder.com/500x500/FFFFFF" /></div>
    </div>
)

const Footer = () => (
    <div className="footer">
        <div className="footer-col">
            <div>Already have an account? <a href="/login">Sign in</a></div>
            <div>Get Started</div>
            <div>More Information</div>
        </div>
        <div className="footer-col">
            <h1>FeeBee</h1>
            <div>&copy; FeeBee 2022</div>
        </div>
        <div className="footer-col">
            <div>Contact Us</div>
            <div>Privacy</div>
            <div>Terms Of Use</div>
        </div>
    </div>
)

export default LandingPage;
