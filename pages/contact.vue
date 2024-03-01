<template>
  <NuxtLayout name="ygency">
    <PageBanner :pageName="'Contact'" />
    <!-- Contact Form Area start -->
    <section class="contact-page-area py-130 rpy-100 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6">
            <div class="our-location-part rmb-55 wow fadeInUp delay-0-2s">
              <div class="row">
                <div class="col-xl-10">
                  <div class="section-title mb-60">
                    <span class="sub-title mb-15">Contact Us</span>
                    <h2>Ready to Work Your Next Projects</h2>
                  </div>
                </div>
              </div>
              <div class="row gap-80 pb-30">
                <div class="col-sm-6">
                  <div class="our-location-address mb-40">
                    <h5>New York</h5>
                    <p>55 One State Road, 2nd Block New York, United States</p>
                    <a class="mailto" href="mailto:support@gmail.com"
                      >support@gmail.com</a
                    ><br />
                    <a class="callto" href="callto:+00012345688"
                      ><i class="fas fa-phone"></i> +000 (123) 456 88</a
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="our-location-address mb-40">
                    <h5>Australia</h5>
                    <p>67 One State Road, 2nd Block Melbourne, Australia</p>
                    <a class="mailto" href="mailto:support@gmail.com"
                      >support@gmail.com</a
                    ><br />
                    <a class="callto" href="callto:+00012345688"
                      ><i class="fas fa-phone"></i> +000 (123) 456 88</a
                    >
                  </div>
                </div>
              </div>
              <h4>Follow Us</h4>
              <div class="social-style-two pt-15">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6">
            <div
              class="contact-page-form form-style-one wow fadeInUp delay-0-2s"
            >
              <div class="section-title mb-35">
                <span class="sub-title mb-15">Get Free Quote</span>
                <h3>Drop Us a Message</h3>
              </div>
              <form id="contactForm" class="contactForm" @submit.prevent="">
                <div class="row gap-60 pt-15">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="name"><i class="far fa-user"></i></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                        value=""
                        placeholder="Full Name"
                        required
                        data-error="Please enter your name"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="phone_number"
                        ><i class="far fa-phone"></i
                      ></label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        class="form-control"
                        value=""
                        placeholder="Phone"
                        required
                        data-error="Please enter your Number"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="email"><i class="far fa-envelope"></i></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control"
                        value=""
                        placeholder="Email Address"
                        required
                        data-error="Please enter your Email Address"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="message"><i class="far fa-pencil"></i></label>
                      <textarea
                        name="message"
                        id="message"
                        class="form-control"
                        rows="2"
                        placeholder="Message"
                        required
                        data-error="Please enter your Message"
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group pt-5 mb-0">
                      <button type="submit" class="theme-btn style-two w-100">
                        Send Message us <i class="far fa-arrow-right"></i>
                      </button>
                      <div id="msgSubmit" class="hidden"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Form Area end -->

    <!-- Location Map Area Start -->
    <div class="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
      <div class="container-fluid">
        <div class="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
            style="border: 0; width: 100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <!-- Location Map Area End -->
  </NuxtLayout>
</template>

<script>
export default {
  name: "contact",
};
</script>
