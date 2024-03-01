<template>
  <NuxtLayout name="ygency">
    <PageBanner :pageName="'Shop'" />
    <section class="product-area py-130 rpy-100 rel z-1">
      <div class="container container-1290">
        <div class="shop-shorter rel z-3 mb-40 wow fadeInUp delay-0-2s">
          <div class="sort-text mb-20">Showing 1 - 12 of 30 Results</div>
          <div class="products-dropdown mb-20">
            <select>
              <option value="default" selected="">Sort by</option>
              <option value="new">Sort by Newness</option>
              <option value="old">Sort by Oldest</option>
              <option value="hight-to-low">High To Low</option>
              <option value="low-to-high">Low To High</option>
            </select>
          </div>
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
                    >Mobile Application Design</NuxtLink
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
          <div class="col-lg-4 col-md-6">
            <div class="product-item wow fadeInUp delay-0-2s">
              <div class="image">
                <img src="/assets/images/products/product4.jpg" alt="Product" />
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
                <img src="/assets/images/products/product5.jpg" alt="Product" />
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
                <img src="/assets/images/products/product6.jpg" alt="Product" />
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
          <div class="col-lg-4 col-md-6">
            <div class="product-item wow fadeInUp delay-0-2s">
              <div class="image">
                <img src="/assets/images/products/product7.jpg" alt="Product" />
              </div>
              <div class="content">
                <a class="category" href="#">Product Design</a>
                <h5>
                  <NuxtLink href="product-details"
                    >T-shirt Mockup Design</NuxtLink
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
                <img src="/assets/images/products/product8.jpg" alt="Product" />
              </div>
              <div class="content">
                <a class="category" href="#">Product Design</a>
                <h5>
                  <NuxtLink href="product-details"
                    >Business Card Mockup</NuxtLink
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
                <img src="/assets/images/products/product9.jpg" alt="Product" />
              </div>
              <div class="content">
                <a class="category" href="#">Product Design</a>
                <h5>
                  <NuxtLink href="product-details"
                    >Logo Design & Branding</NuxtLink
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
          <div class="col-lg-12">
            <ul
              class="pagination mt-40 flex-wrap justify-content-center wow fadeInUp delay-0-2s"
            >
              <li class="page-item disabled">
                <span class="page-link"><i class="fas fa-angle-left"></i></span>
              </li>
              <li class="page-item active">
                <span class="page-link">
                  01
                  <span class="sr-only">(current)</span>
                </span>
              </li>
              <li class="page-item"><a class="page-link" href="#">02</a></li>
              <li class="page-item"><a class="page-link" href="#">03</a></li>
              <li class="page-item"><a class="page-link" href="#">04</a></li>
              <li class="page-item dot"></li>
              <li class="page-item dot"></li>
              <li class="page-item dot"></li>
              <li class="page-item">
                <a class="page-link" href="#"
                  ><i class="fas fa-angle-right"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
export default {
  name: "shop",
};
</script>
