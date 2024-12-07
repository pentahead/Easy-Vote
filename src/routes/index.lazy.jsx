/* eslint-disable no-unused-vars */
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  Button,
  Container,
  Carousel,
  Row,
  Col,
  ListGroup,
  Card,
  Accordion,
  DropdownButton,
  Navbar,
} from "react-bootstrap";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import pic from '../assets/person_1.png';
import pic2 from '../assets/person_2.png';
import pic3 from '../assets/person.png';
import '../styles/home.css'
export const Route = createLazyFileRoute("/")({
  component: Index,
});

const Homepage = () => {
  return <body>
  <div className="container py-5">

      <div className="row">
          <div className="col-12">
              <div className="hero-section text-center p-5 mb-5">
                  <h1 className="display-4 gradient-text mb-3">
                      EasyVote 
                      <span className="badge align-middle">2.0</span>
                  </h1>
                  <p className="lead mb-4">
                      Mengubah Umpan Balik Akademik Melalui Jajak Pendapat yang Cerdas dan Aman
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                      <a href="#" className="btn btn-primary-custom btn-lg shadow">
                          Mulai Sekarang
                      </a>
                      <a href="#features" className="btn btn-outline-primary btn-lg">
                          Pelajari Lebih Lanjut
                      </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="row">
          <div className="col-12">
              <div className="cta-academic-section text-center p-5 rounded-4 position-relative">
                  <div className="container">
                      <h2 className="display-5 mb-4 text-white">
                          Ubah Wawasan Akademik Anda
                      </h2>
                      <p className="lead text-white-50 mb-5">
                          Berdayakan penelitian akademik Anda dengan pengumpulan umpan balik yang cerdas, aman, dan intuitif.
                      </p>
                      <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                          <a href="#" className="btn btn-cta-primary btn-lg shadow-lg">
                              Coba Gratis
                          </a>
                          <a href="#" className="btn btn-cta-outline btn-lg">
                              Jadwalkan Demo
                          </a>
                      </div>
                      <div className="mt-4 cta-additional-info text-white-50">
                          <span className="mx-2">🔒 Tidak perlu kartar kredit</span>
                          <span className="mx-2">🕒 Dapat dibatalkan kapan saja</span>
                          <span className="mx-2">✨ Akses penuh ke semua fitur</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="row g-4 py-5">
      {/* Wawasan Real-Time Card */}
      <div className="col-md-4">
        <div className="card feature-card teal-card border-start border-5">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="feature-icon me-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="2.5rem" 
                  height="2.5rem" 
                  fill="currentColor" 
                  className="bi bi-check-circle" 
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 className="card-title fw-bold text-teal-800 fs-3">Wawasan Real-Time</h3>
            </div>
            <p className="card-text text-muted">Survei akademik instan dengan pengumpulan dan pemrosesan data secara langsung.</p>
          </div>
        </div>
      </div>

      {/* Anonimitas Aman Card */}
      <div className="col-md-4">
        <div className="card feature-card blue-card border-start border-5">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="feature-icon me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5rem"
                  height="2.5rem"
                  fill="currentColor"
                  className="bi bi-people"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="card-title fw-bold text-blue-800 fs-3">Anonimitas Aman</h3>
            </div>
            <p className="card-text text-muted">Lingkungan yang dijamin aman dan rahasia untuk umpan balik akademik yang jujur dan tidak bias.</p>
          </div>
        </div>
      </div>

      {/* Analitik Lanjutan Card */}
      <div className="col-md-4">
        <div className="card feature-card purple-card border-start border-5">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="feature-icon me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5rem"
                  height="2.5rem"
                  fill="currentColor"
                  className="bi bi-graph-up"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="card-title fw-bold text-purple-800 fs-3">Analitik Lanjutan</h3>
            </div>
            <p className="card-text text-muted">Visualisasi komprehensif dan analisis tren untuk wawasan akademik yang bermakna.</p>
          </div>
        </div>
      </div>
    </div>
  
      <section className="workflow-container">
          <div className="workflow-header">
              <h2>Perjalanan Polling Akademik Anda</h2>
              <p className="lead">Tiga langkah sederhana menuju wawasan akademik yang mendalam</p>
          </div>
          
          <div className="row g-4">
              <div className="col-md-4">
                  <div className="workflow-step workflow-step-teal text-center p-4 shadow-sm">
                      <div className="workflow-icon">
                          <svg
                            fill="#065f46"
                            width="60%"
                            height="60%"
                            viewBox="0 0 36 36"
                            version="1.1"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <title>design-line</title>
                            <polygon
                              className="clr-i-outline clr-i-outline-path-1"
                              points="9 17.41 9 27 18.59 27 16.59 25 11 25 11 19.41 9 17.41"
                            ></polygon>
                            <path
                              className="clr-i-outline clr-i-outline-path-2"
                              d="M34.87,32.29,32,29.38V32H4V27.85H6v-1.6H4V19.6H6V18H4V11.6H6V10H4V4.41L19.94,20.26V17.44L3.71,1.29A1,1,0,0,0,2,2V33a1,1,0,0,0,1,1H34.16a1,1,0,0,0,.71-1.71Z"
                            ></path>
                            <path
                              className="clr-i-outline clr-i-outline-path-3"
                              d="M24,30h4a2,2,0,0,0,2-2V8.7L27.7,4.47a2,2,0,0,0-1.76-1h0a2,2,0,0,0-1.76,1.08L22,8.72V28A2,2,0,0,0,24,30ZM24,9.2l1.94-3.77L28,9.21V24H24Zm0,16.43h4v2.44H24Z"
                            ></path>
                            <rect
                              x="0"
                              y="0"
                              width="36"
                              height="36"
                              fillOpacity="0"
                            />
                          </svg>
                      </div>
                      <h4 className="fw-bold mb-3">Desain</h4>
                      <p className="text-muted">Rancang survei yang ditargetkan dan bernuansa sesuai dengan penelitian akademik Anda.</p>
                  </div>
              </div>
              
              <div className="col-md-4">
                  <div className="workflow-step workflow-step-blue text-center p-4 shadow-sm">
                      <div className="workflow-icon">
                          <svg width="80%" height="80%" fill="#1e40af" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                              viewBox="0 0 512.001 512.001" enableBackground="new 0 0 512.001 512.001" >
                          <g>
                              <g>
                                  <path d="M384.268,128.275H196.143c-4.427,0-8.017,3.588-8.017,8.017c0,4.428,3.589,8.017,8.017,8.017h26.188v60.393
                                      c0,6.274,7.231,10.159,12.463,6.67l21.207-14.138l21.207,14.138c5.238,3.493,12.463-0.403,12.463-6.67v-60.393h86.58v223.399
                                      H135.751V144.309h26.188c4.427,0,8.017-3.588,8.017-8.017s-3.589-8.017-8.017-8.017h-34.205c-4.427,0-8.017,3.588-8.017,8.017
                                      v239.432c0,4.428,3.589,8.017,8.017,8.017h256.534c4.427,0,8.017-3.588,8.017-8.017V136.292
                                      C392.285,131.863,388.696,128.275,384.268,128.275z M273.638,189.722l-13.19-8.794c-2.664-1.775-6.229-1.776-8.893,0l-13.19,8.794
                                      v-45.413h35.273V189.722z"/>
                              </g>
                          </g>

                          <g>
                              <g>
                                  <path d="M324.41,153.929c-4.427,0-8.017,3.588-8.017,8.017v17.102c0,4.428,3.589,8.017,8.017,8.017s8.017-3.588,8.017-8.017
                                      v-17.102C332.427,157.517,328.838,153.929,324.41,153.929z"/>
                              </g>
                          </g>
                          <g>
                              <g>
                                  <path d="M350.064,153.929c-4.427,0-8.017,3.588-8.017,8.017v17.102c0,4.428,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017
                                      v-17.102C358.08,157.517,354.491,153.929,350.064,153.929z"/>
                              </g>
                          </g>



                          <g>
                              <g>
                                  <path d="M510.654,251.561l-34.205-51.307c-1.959-2.94-5.611-4.251-8.994-3.226c-3.381,1.023-5.694,4.14-5.694,7.672v17.637h-43.29
                                      c-4.427,0-8.017,3.588-8.017,8.017v51.307c0,4.428,3.589,8.017,8.017,8.017h43.291v17.637c0,3.274,2.07,6.297,5.124,7.477
                                      c3.465,1.338,7.502,0.06,9.562-3.03l34.205-51.307C512.45,257.761,512.45,254.254,510.654,251.561z M477.76,280.892
                                      c-0.387-4.067-3.812-7.247-7.98-7.247h-43.29v-35.273h43.29c4.168,0,7.593-3.181,7.98-7.247l16.59,24.884L477.76,280.892z"/>
                              </g>
                          </g>
                          <g>
                              <g>
                                  <path d="M93.529,222.338h-43.29v-17.637c0-3.533-2.313-6.65-5.694-7.673c-3.38-1.023-7.033,0.288-8.994,3.226L1.347,251.561
                                      c-1.796,2.694-1.796,6.201,0,8.893l34.205,51.307c2.06,3.09,6.097,4.369,9.562,3.03c3.055-1.18,5.124-4.203,5.124-7.477v-17.637
                                      h43.29c4.427,0,8.017-3.588,8.017-8.017v-51.307C101.546,225.926,97.957,222.338,93.529,222.338z M85.513,273.645h-43.29
                                      c-4.168,0-7.593,3.181-7.98,7.247l-16.59-24.884l16.59-24.884c0.387,4.067,3.812,7.247,7.98,7.247h43.29V273.645z"/>
                              </g>
                          </g>
                          <g>
                              <g>
                                  <path d="M314.98,467.463c-1.024-3.381-4.14-5.693-7.673-5.693h-17.637v-43.29c0-4.428-3.589-8.017-8.017-8.017h-51.307
                                      c-4.427,0-8.017,3.588-8.017,8.017v43.29h-17.637c-3.533,0-6.648,2.312-7.672,5.693c-1.024,3.382,0.286,7.034,3.226,8.994
                                      l51.307,34.205c2.664,1.775,6.23,1.776,8.893,0l51.307-34.205C314.694,474.497,316.004,470.845,314.98,467.463z M256.001,494.356
                                      l-24.884-16.59c4.067-0.387,7.247-3.812,7.247-7.98v-43.29h35.273v43.29c0,4.168,3.181,7.593,7.247,7.98L256.001,494.356z"/>
                              </g>
                          </g>
                          <g>
                              <g>
                                  <path d="M311.755,35.559L260.448,1.355c-2.694-1.796-6.201-1.796-8.893,0l-51.307,34.205c-2.997,1.998-4.305,5.876-3.133,9.281
                                      c1.1,3.198,4.198,5.405,7.58,5.405h17.637v43.29c0,4.428,3.589,8.017,8.017,8.017h51.307c4.427,0,8.017-3.588,8.017-8.017v-43.29
                                      h17.637c3.533,0,6.649-2.312,7.673-5.693C316.004,41.171,314.694,37.519,311.755,35.559z M273.638,42.229v43.29h-35.273v-43.29
                                      c0-4.168-3.181-7.593-7.247-7.98l24.884-16.59l24.884,16.59C276.818,34.636,273.638,38.061,273.638,42.229z"/>
                              </g>
                          </g>
                          </svg>
                      </div>
                      <h4 className="fw-bold mb-3">Distribusi</h4>
                      <p className="text-muted">Bagikan polling dengan mudah di seluruh departemen, platform, dan jaringan.</p>
                  </div>
              </div>
              
              <div className="col-md-4">
                  <div className="workflow-step workflow-step-purple text-center p-4 shadow-sm">
                      <div className="workflow-icon">
                          <svg width="80%" height="80%" fill="#6d28d9" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                              viewBox="0 0 230.452 230.452" enableBackground="new 0 0 230.452 230.452">
                          <path d="M230.452,81.522v-53.25h-53.283v15h27.676L183.506,64.61c-13.38-26.507-40.85-44.738-72.513-44.738
                              c-44.768,0-81.189,36.423-81.189,81.193c0,9.061,1.515,17.769,4.266,25.914L0,161.049l10.606,10.606l30.074-30.075
                              c14.049,24.285,40.294,40.672,70.312,40.672c19.689,0,37.76-7.049,51.833-18.751l47.079,47.077l10.606-10.606l-47.079-47.077
                              c11.702-14.072,18.752-32.142,18.752-51.831c0-7.305-0.985-14.38-2.803-21.119l26.07-26.068v27.644H230.452z M44.803,101.065
                              c0-36.499,29.692-66.193,66.189-66.193c27.596,0,51.29,16.98,61.212,41.038l-36.31,36.308L92.359,68.685l-46.113,46.116
                              C45.306,110.368,44.803,105.775,44.803,101.065z M177.184,101.065c0,36.496-29.693,66.188-66.191,66.188
                              c-25.919,0-48.393-14.982-59.25-36.734l40.618-40.62l43.535,43.531l40.741-40.738C176.984,95.436,177.184,98.227,177.184,101.065z"
                              />
                          </svg>
                      </div>
                      <h4 className="fw-bold mb-3">Analisis</h4>
                      <p className="text-muted">Dapatkan wawasan yang instan dan dapat ditindaklanjuti melalui visualisasi data yang canggih.</p>
                  </div>
              </div>
          </div>
      </section>
  
       <section className="py-5 bg-light rounded-4">
          <div className="container">
              <div className="text-center mb-5">
                  <h2 className="display-6 fw-bold text-dark mb-3">Apa Kata Para Pendidik</h2>
                  <p className="lead text-muted">Pengalaman nyata dari para pemimpin akademik</p>
              </div>
      
              <div className="row g-4">
                  <div className="col-md-4">
                      <div className="card testimonial-card h-100 border-0 shadow-sm rounded-4">
                          <div className="card-body position-relative">
                              <i className="bi bi-quote quote-icon"></i>
                              <blockquote className="blockquote mb-4">
                              <p className="fst-italic text-muted">
                                FacultyPulse mengubah cara kami mengumpulkan umpan balik. Ini sangat mulus, cepat, dan memberikan wawasan yang mendalam.
                            </p>
                              </blockquote>
                              <div className="d-flex align-items-center">
                                <img 
                                  src={pic} 
                                  className="testimonial-avatar rounded-circle me-3" 
                                  width="70" 
                                  height="70" 
                                  alt="Dr. Jane Smith" 
                                />
                                  <div>
                                      <h5 className="mb-1 fw-bold">Dr. Jane Smith</h5>
                                      <p className="text-muted small mb-0">Dekan Ilmu Sosial, University of Excellence</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  <div className="col-md-4">
                      <div className="card testimonial-card h-100 border-0 shadow-sm rounded-4">
                          <div className="card-body position-relative">
                              <i className="bi bi-quote quote-icon"></i>
                              <blockquote className="blockquote mb-4">
                                  <p className="fst-italic text-muted">
                                      Analitiknya luar biasa. Kami mendapatkan wawasan mendalam tentang pengalaman mahasiswa dan staf yang sebelumnya tersembunyi.
                                  </p>
                              </blockquote>
                              <div className="d-flex align-items-center">
                                  <img src={pic}  
                                       className="testimonial-avatar rounded-circle me-3" 
                                       width="70" height="70" 
                                       alt="Prof. Michael Chen"/>
                                  <div>
                                      <h5 className="mb-1 fw-bold">Prof. Michael Chen</h5>
                                      <p className="text-muted small mb-0">Kepala Penelitian, Tech Institute</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  <div className="col-md-4">
                      <div className="card testimonial-card h-100 border-0 shadow-sm rounded-4">
                          <div className="card-body position-relative">
                              <i className="bi bi-quote quote-icon"></i>
                              <blockquote className="blockquote mb-4">
                                  <p className="fst-italic text-muted">
                                      Anonimitas dan kemudahan penggunaan menjadikan FacultyPulse pembeda untuk mengumpulkan umpan balik yang tulus.
                                  </p>
                              </blockquote>
                              <div className="d-flex align-items-center">
                                  <img src={pic} 
                                       className="testimonial-avatar rounded-circle me-3" 
                                       width="70" height="70" 
                                       alt="Dr. Elena Rodriguez"/>
                                  <div>
                                      <h5 className="mb-1 fw-bold">Dr. Elena Rodriguez</h5>
                                      <p className="text-muted small mb-0">Direktur Pengembangan Akademik</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
};

function Index() {
  return (
    <>
      <NavigationBar />
      <Homepage />
      <Footer />
    </>
  );
}
