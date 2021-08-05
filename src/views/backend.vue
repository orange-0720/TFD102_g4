<template>
  <div id="backend_page">
    <div class="container fluid">
      <div class="row justify-content-end" id="BackEnd_header">
        <h2 class="col offset-md-5">後台管理</h2>
        <button type="button" class="btn btn-warning rounded-pill " id="logout">
          登出<span class="icon"
            ><img
              src="@/assets/images/backend/Icon open-account-logout.png"
              alt=""
          /></span>
        </button>
      </div>
      <div class="row" id="BackEnd_main">
        <!-- ==側邊攔== -->
        <aside class="col-2 " id="BackEnd_main">
          <div class="row justify-content-center">
            <div class="BackEnd_logo text-center">
              <img
                src="@/assets/images/logo.svg"
                alt=""
                width="150px"
                id="logo"
              />
            </div>
            <button type="button" class="btn btn-light rounded-pill">
              會員管理
            </button>
            <div class="w-100"></div>
            <button type="button" class="btn btn-light rounded-pill">
              商品管理
            </button>
            <div class="w-100"></div>
            <button type="button" class=" btn btn-light rounded-pill">
              訂單管理
            </button>
            <div class="w-100"></div>
            <button type="button" class=" btn btn-light rounded-pill">
              預約管理
            </button>
            <div class="w-100"></div>
            <button type="button" class=" btn btn-light rounded-pill">
              活動管理
            </button>
            <div class="w-100"></div>
            <button type="button" class=" btn btn-light rounded-pill">
              留言板管理
            </button>
          </div>
        </aside>
        <section class="col-10 " id="main">
          <div class="backend_search">
            <span class="icon"><i class="fa fa-search"></i></span>
            <input type="text" class="rounded-pill" placeholder="Search..." />
          </div>
          <div class="backend_table">
            <div class="row  table-bordered" id="first-table">
              <div class="col  text-white font-weight-bolder">商品編號</div>
              <div class="col  text-white font-weight-bolder">商品名稱</div>
              <div class="col  text-white font-weight-bolder">商品價格</div>
              <div class="col  text-white font-weight-bolder">商品描述</div>
              <div class="col  text-white font-weight-bolder">上架日期</div>
              <div class="col  text-white font-weight-bolder">下架日期</div>
              <div class="col  text-white font-weight-bolder">狀態</div>
              <div class="col  text-white font-weight-bolder">編輯</div>
            </div>
            <div class="row  table-bordered" id="second-table">
              <div class="col  ">1</div>
              <div class="col  ">2</div>
              <div class="col  ">3</div>
              <div class="col  ">4</div>
              <div class="col  ">5</div>
              <div class="col  ">6</div>
              <div class="col  ">
                <button type="button" class="btn btn-warning rounded-pill ">
                  已上架
                </button>
              </div>
              <div class="col  ">
                <button type="button" class="btn btn-warning rounded-pill ">
                  編輯
                </button>
              </div>
            </div>
            <div class="row  table-bordered" id="third-table">
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
            </div>
            <div class="row  table-bordered" id="forth-table">
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
            </div>
            <div class="row  table-bordered" id="fifth-table">
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
            </div>
            <div class="row  table-bordered" id="sixth-table">
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
              <div class="col  "></div>
            </div>
          </div>
          <div class="row justify-content-center">
            <nav aria-label="Page navigation example ">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/scss/page/_backend.scss";
@import "@/scss/page/_backend_v2.scss";
</style>
