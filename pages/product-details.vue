<template>
  <NuxtLayout name="ygency">
    <PageBanner :pageName="'Single Product'" />
    <!-- Product Details Start -->
    <section class="product-details pt-130 rpt-100">
      <div class="container container-1290">
        <div class="row align-items-center gap-70">
          <div class="col-lg-6">
            <div
              class="product-details-images rmb-55 wow fadeInLeft delay-0-2s"
            >
              <div class="tab-content preview-images">
                <div
                  class="tab-pane fade preview-item active show"
                  id="preview1"
                >
                  <img src="/assets/images/shop/preview1.jpg" alt="Perview" />
                </div>
                <div class="tab-pane fade preview-item" id="preview2">
                  <img src="/assets/images/shop/preview1.jpg" alt="Perview" />
                </div>
                <div class="tab-pane fade preview-item" id="preview3">
                  <img src="/assets/images/shop/preview1.jpg" alt="Perview" />
                </div>
              </div>
              <div class="nav thumb-images rmb-20">
                <a
                  href="#preview1"
                  data-bs-toggle="tab"
                  class="thumb-item active show"
                >
                  <img src="/assets/images/shop/thumb1.jpg" alt="Thumb" />
                </a>
                <a href="#preview2" data-bs-toggle="tab" class="thumb-item">
                  <img src="/assets/images/shop/thumb2.jpg" alt="Thumb" />
                </a>
                <a href="#preview3" data-bs-toggle="tab" class="thumb-item">
                  <img src="/assets/images/shop/thumb3.jpg" alt="Thumb" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="product-details-content wow fadeInRight delay-0-2s">
              <div class="section-title">
                <h2>3D Illustration Design</h2>
              </div>
              <div class="ratting-price mb-30">
                <div class="ratting">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <span class="price">593</span>
              </div>
              <p>
                Doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo
                inventore veritatis quasi architecto beatae vitae dicta sunt
                explicabo Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit autfugit, sed quia consequuntur magni
                dolores eos qui ratiluptatem sequi nesciunt porro quisquam est,
                qui dolorem
              </p>
              <form action="#" class="add-to-cart pt-35">
                <input
                  type="number"
                  value="01"
                  min="1"
                  max="20"
                  @submit.prevent=""
                />
                <button type="submit" class="theme-btn style-two">
                  Add to Cart <i class="far fa-arrow-right"></i>
                </button>
              </form>
              <ul class="category-tags pt-60">
                <li>
                  <b>Category :</b>
                  <NuxtLink href="shop">Software</NuxtLink>
                  <NuxtLink href="shop">Website</NuxtLink>
                  <NuxtLink href="shop">Development</NuxtLink>
                </li>
                <li>
                  <b>Tags :</b>
                  <NuxtLink href="shop">3D</NuxtLink>
                  <NuxtLink href="shop">Ilustration</NuxtLink>
                  <NuxtLink href="shop">Arts</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul
          class="nav product-information-tab mt-80 mb-25 wow fadeInUp delay-0-2s"
        >
          <li>
            <a href="#details" data-bs-toggle="tab" class="active show"
              >Description <i class="far fa-arrow-right"></i
            ></a>
          </li>
          <li>
            <a href="#information" data-bs-toggle="tab"
              >Reviews <i class="far fa-arrow-right"></i
            ></a>
          </li>
        </ul>
        <div class="tab-content pb-30 wow fadeInUp delay-0-2s">
          <div class="tab-pane fade active show" id="details">
            <p>
              Must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally
            </p>
            <br />
            <h4>Additional information</h4>
            <p>
              Circumstances occur in which toil and pain can procure him some
              great pleasure. To take a trivial example, which of us ever
              undertakes laborious physical exercise, except to obtain some
              advantage from it? But who has any right to find fault with a man
              who chooses
            </p>
            <ul class="list-style-three pt-10">
              <li>Graphic Design</li>
              <li>3D Illustrations Design</li>
              <li>Dashboard Design</li>
            </ul>
          </div>
          <div class="tab-pane fade" id="information">
            <p>
              Now wherever you are, wherever you are, you can easily monitor
              your CCTV videos through your mobile, tab, laptop or PC. With the
              wireless camera, you can view the camera from your mobile or
              computer to the right-left 0 to 360-degree video. Cover the flower
              room with a camera.
            </p>
            <ul class="list-style-two my-15">
              <li>Wide Angle and Long Length</li>
              <li>Smart zooming point</li>
              <li>HD quality video output.</li>
              <li>Smart Alarming System</li>
            </ul>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Details End -->

    <!-- Related Products Area start -->
    <section class="related-products pt-90 rpt-50 pb-100 rpb-70 rel z-1">
      <div class="container container-1290">
        <div class="product-title mb-55 text-center wow fadeInUp delay-0-2s">
          <h3>Related Products</h3>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="product-item wow fadeInUp delay-0-2s">
              <div class="image">
                <img src="/assets/images/products/product1.jpg" alt="Product" />
              </div>
              <div class="content">
                <a class="category" href="#">Product Design</a>
                <h5>
                  <NuxtLink href="product-details"
                    >Creative Web Page Design</NuxtLink
                  >
                </h5>
                <div class="ratting-price">
                  <div class="ratting">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="price">$593</span>
                  </div>
                </div>
                <a href="#" class="theme-btn style-two"
                  >Add to Cart <i class="far fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="product-item wow fadeInUp delay-0-4s">
              <div class="image">
                <img src="/assets/images/products/product2.jpg" alt="Product" />
              </div>
              <div class="content">
                <a class="category" href="#">Product Design</a>
                <h5>
                  <NuxtLink href="product-details"
                    >Task Management Dashboard</NuxtLink
                  >
                </h5>
                <div class="ratting-price">
                  <div class="ratting">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="price">$640</span>
                  </div>
                </div>
                <a href="#" class="theme-btn style-two"
                  >Add to Cart <i class="far fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="product-item wow fadeInUp delay-0-6s">
              <div class="image">
                <img src="/assets/images/products/product3.jpg" alt="Product" />
              </div>
              <div class="content">
                <a class="category" href="#">Product Design</a>
                <h5>
                  <NuxtLink href="product-details"
                    >3D Illustration Design</NuxtLink
                  >
                </h5>
                <div class="ratting-price">
                  <div class="ratting">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="price">$986</span>
                  </div>
                </div>
                <a href="#" class="theme-btn style-two"
                  >Add to Cart <i class="far fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Related Products Area end -->
  </NuxtLayout>
</template>

<script>
export default {
  name: "product-details",
};
</script>
