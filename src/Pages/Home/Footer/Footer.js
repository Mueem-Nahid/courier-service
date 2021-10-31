import React from 'react';

const Footer = () => {
    return (
        <footer className="container text-center text-success mt-5 pt-5">
            <hr className="mt-5" />
        <div className="container p-4">
            <section className="mb-4">     
            <a className="btn btn-success btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-facebook"></i></a>
            <a className="btn btn-success btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-instagram"></i></a>
            <a className="btn btn-success btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-github"></i></a>
            </section> 
            <section className="">
            <form action="">  
                <div className="row d-flex justify-content-center">        
                <div className="col-auto">
                    <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                    </p>
                </div> 
                <div className="col-md-5 col-12">
                
                    <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example2" className="form-control" />
                    </div>
                </div>
                <div className="col-auto">           
                    <button type="submit" className="btn btn-success mb-4">
                    Subscribe
                    </button>
                </div>       
                </div>
            </form>
            <p className="fw-bold point"> mueem51@gmail.com </p>
            </section>
        </div>
        </footer>
    );
};

export default Footer;