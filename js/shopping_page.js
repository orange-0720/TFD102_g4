let shopping_page = {
    template:
    `
    <div class="shopping_page_list">
        <!-- 資料庫撈出資料迴圈秀出 -->
        <div class="shopping_product_block" v-for='(item,index) in page_products'>
            <a @click="push_into(index)">
                <div class="shopping_product_pic">
                <img
                    :src=item.PRODUCT_OUT_IMG
                    :alt="item.ID"
                />
                <span @click.stop="incart(index)" class="shopping_product_incart"></span>
                </div>
                <h4 class="shopping_product_name">{{item.PRODUCT_NAME}}</h4>
                <h5 class="shopping_product_intro">
                    {{item.PRODUCT_SHORTINFO}}
                </h5>
                <h4 class="shopping_product_price">{{item.PRODUCT_PRICE}}元</h4>
            </a>
        </div>

        <!-- 換頁 -->
        <div class="shooping_change_page">
            <div class="change_page_block">
                <div class="page_prev" @click="prevPage">
                    <img
                        src="../images/shopping_page/shopping_prev_arrow.svg"
                        alt="上一頁"
                    />
                </div>
                <div class="shopping_page" v-for="(page,index) in pages" @click="move_page(index)">
                    {{page}}
                </div>
                <div class="page_next" @click="nextPage">
                    <img
                        src="../images/shopping_page/shopping_prev_arrow.svg"
                        alt="下一頁"
                    />
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            page: 1,
            limit: 9,
            products:[],
            pages:[
                
            ]
        }
    },
    methods: {
        move_page(index){
            this.page = index + 1;
            console.log(this.page);
        },
        prevPage(){
            if(this.page != 1){
                this.page -= 1;
            }
        },
        nextPage(){
            if(this.page != 3){
                this.page += 1;
            }
        },
        incart(index){
            console.log(this.products[index]);
            console.log(this.products[index].PRODUCT_NAME);
            product_name = this.products[index].PRODUCT_NAME;
            product_price = parseInt(this.products[index].PRODUCT_PRICE);
            product_img = this.products[index].PRODUCT_OUT_IMG;
            product_id = this.products[index].PRODUCT_ID;
            product_value = 1;
            let item_id = Date.now();
            $('.item_buy').fadeIn();
            $('.cart_nothing').fadeOut();
            $('.cart_buy_list').append(
              `
                <div class="cart_inside_item" data-id="${item_id}">
                  <div class="cart_item_img">
                    <img src="${product_img}"/>  
                  </div>
                  <div class="cart_item_name">${product_name}</div>
                  <div class="cart_item_number">
                    <button class="number_minus">-</button>
                    <input type="text" value="${product_value}"/ disabled>
                    <button class="number_plus">+</button>
                  </div>
                  <div class="cart_item_price">${product_price}</div>
                  <div class="cart_item_delete">
                    <img src="../images/checkout/delete_icon.svg"/>  
                  </div>
                </div>
              `
            );
            

            let cart_item = {
                item_id: item_id,
                item_img: product_img,
                item_name: product_name,
                item_number: parseInt(product_value),
                unit_price : parseInt(product_price),
                total_price: parseInt(product_price),
                product_id: product_id,
            };
            let cart_items = JSON.parse(sessionStorage.getItem("cart_items"));

            $('.incart_checkout_btn').attr('href', './checkout.html');
            $('.incart_checkout_btn').html('結帳去');
            $('.incart_checkout_btn_mobile').attr('href', './checkout.html');
            $('.incart_checkout_btn_mobile').html('結帳去');

            if (cart_items) {
                // 若存在
                console.log('已存在')
                cart_items.unshift(cart_item);

                let count_price = 0;
                cart_items.forEach(function(cart, i){
                    count_price += parseInt(cart.total_price)
                });

                $('.cart_total_price').text(count_price);

                $('.buy_num').fadeIn();
                let nums = $('.cart_inside_item').length;
                console.log(nums);
                $('.buy_num').text(nums);
                $('.shop_car').addClass('cart_move');

            } else {
                // 若不存在
                console.log('不存在')
                cart_items = [cart_item];
                let price_now = parseInt($('.cart_total_price').text());
                console.log(price_now);
                let new_price = price_now + product_price;
                $('.cart_total_price').html(new_price);

                $('.buy_num').fadeIn();
                let nums = $('.cart_inside_item').length;
                console.log(nums);
                $('.buy_num').text(nums);
                $('.shop_car').addClass('cart_move');
            }
            sessionStorage.setItem("cart_items", JSON.stringify(cart_items));
        },
        push_into(index){
            let product_id = this.page_products[index].PRODUCT_ID;
            product_id--;
            console.log(product_id);
            router.push({path:`/shopping_inside_page/${product_id}`});
        }
    },
    computed: {
        page_products(){
          const last_index = this.page * (this.limit) -1;
          const first_index = (this.page - 1) * (this.limit);
          const page_product = [];
          for(let i = first_index; i < this.products.length; i++){
            if(last_index < i) break;
            page_product.push(this.products[i]);
          }
          return page_product;
        },
    },
    mounted() {
        axios.post('../php/getProduct.php').then(res =>{
            console.log(res.data);
            this.products = res.data;
            let length = res.data.length;
            let pages = Math.ceil(length / this.limit)
            console.log(pages);
            console.log(length);
            for(i = 1; i <= pages; i++){
                this.pages.push(i);
            }
        })
    },
}

let shopping_inside_page = {
    template:
    `
    <div class="shopping_page_list">
        <div class="card_wapper">
            <div class="go_back_btn" @click="go_back_page">
                <img src="../images/checkout/X_mark.svg">
                返回一覽表
            </div>
            <div class="card"  v-for ="(item,index)  in inside_page">
                <div class="products_imgs">
                    <img :src=big_photo max-width="100%" id="ProductImg">
                    <div class="small-img-row">
                        <div class="small-img-col" v-for="(pic,index) in inside_img" @click="change_pic(index)">
                            <img :src=pic width="100%" class="small-img">
                        </div>
                    </div>
                </div>
                <div class="products_content">
                    <h2 class = "product_title">{{item.PRODUCT_NAME}}</h2>
                    <div class = "product_price">
                        <p class = "last_price">價錢: <span>{{item.PRODUCT_PRICE}}元</span></p>
                        <p class = "new_price">數量: <input class="inside_value" type = "number" min = "1" value = "1"></p>
                    </div>
        
                    <div class = "product_detail">
                    <h2>商品內容</h2>
                    <h4> 良耕野菜有機農場自產野菜</h4>
                    <ul>
                        <li>{{item.PRODUC_LONGINFO}}</li><br>
                        <li>※ 因皆為每日新鮮採購，若品項有缺貨會選其他當季蔬菜替補</li>
                    </ul>
                    </div>
                    <div class = "purchase_info">
                    <a @click="inside_cart(index)">加入購物車 </a>
                    <a @click="check_out(index)">結帳去</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    props:{
        id:{
            type:String
        }
    },
    data(){
        return{
            inside_page:[],
            inside_img:[],
            big_photo:'',
        }
    },

    methods: {
        change_pic(index){
            this.big_photo = this.inside_img[index];
            console.log(this.inside_img[index]);
        },
        go_back_page(){
            router.push({name:'shopping_page'});
        },
        inside_cart(index){
            console.log(this.inside_page[index]);
            console.log(this.inside_page[index].PRODUCT_NAME);
            product_name = this.inside_page[index].PRODUCT_NAME;
            product_price = parseInt(this.inside_page[index].PRODUCT_PRICE);
            product_img = this.inside_page[index].PRODUCT_OUT_IMG;
            product_id = this.inside_page[index].PRODUCT_ID;
            product_value = $('.inside_value').val();
            total_price = parseInt(product_price) * parseInt(product_value);
            let item_id = Date.now();
            $('.item_buy').fadeIn();
            $('.cart_nothing').fadeOut();
            $('.cart_buy_list').append(
              `
                <div class="cart_inside_item" data-id="${item_id}">
                  <div class="cart_item_img">
                    <img src="${product_img}"/>  
                  </div>
                  <div class="cart_item_name">${product_name}</div>
                  <div class="cart_item_number">
                    <button class="number_minus">-</button>
                    <input type="text" value="${product_value}"/ disabled>
                    <button class="number_plus">+</button>
                  </div>
                  <div class="cart_item_price">${total_price}</div>
                  <div class="cart_item_delete">
                    <img src="../images/checkout/delete_icon.svg"/>  
                  </div>
                </div>
              `
            );
            

            let cart_item = {
                item_id: item_id,
                item_img: product_img,
                item_name: product_name,
                item_number: parseInt(product_value),
                unit_price : parseInt(product_price),
                total_price: total_price,
                product_id: product_id,
            };
            let cart_items = JSON.parse(sessionStorage.getItem("cart_items"));

            $('.incart_checkout_btn').attr('href', './checkout.html');
            $('.incart_checkout_btn').html('結帳去');
            $('.incart_checkout_btn_mobile').attr('href', './checkout.html');
            $('.incart_checkout_btn_mobile').html('結帳去');

            if (cart_items) {
                // 若存在
                console.log('已存在')
                cart_items.unshift(cart_item);

                let count_price = 0;
                cart_items.forEach(function(cart, i){
                    count_price += parseInt(cart.total_price)
                });

                let price_now = parseInt($('.cart_total_price').text());
                let new_price = price_now + total_price;
                $('.cart_total_price').html(new_price);

                $('.buy_num').fadeIn();
                let nums = $('.cart_inside_item').length;
                console.log(nums);
                $('.buy_num').text(nums);
                $('.shop_car').addClass('cart_move');

            } else {
                // 若不存在
                console.log('不存在')
                cart_items = [cart_item];
                let price_now = parseInt($('.cart_total_price').text());
                console.log(price_now);
                let new_price = price_now + total_price;
                $('.cart_total_price').html(new_price);

                $('.buy_num').fadeIn();
                let nums = $('.cart_inside_item').length;
                console.log(nums);
                $('.buy_num').text(nums);
                $('.shop_car').addClass('cart_move');
            }
            sessionStorage.setItem("cart_items", JSON.stringify(cart_items));
        },
        check_out(index){
            console.log(this.inside_page[index]);
            console.log(this.inside_page[index].PRODUCT_NAME);
            product_name = this.inside_page[index].PRODUCT_NAME;
            product_price = parseInt(this.inside_page[index].PRODUCT_PRICE);
            product_img = this.inside_page[index].PRODUCT_OUT_IMG;
            product_id = this.inside_page[index].PRODUCT_ID;
            product_value = $('.inside_value').val();
            total_price = parseInt(product_price) * parseInt(product_value);
            let item_id = Date.now();
            alert('已加入購物車')
            $('.cart_nothing').fadeOut();
            $('.cart_buy_list').append(
                `
                <div class="cart_inside_item" data-id="${item_id}">
                    <div class="cart_item_img">
                    <img src="${product_img}"/>  
                    </div>
                    <div class="cart_item_name">${product_name}</div>
                    <div class="cart_item_number">
                    <button class="number_minus">-</button>
                    <input type="text" value="${product_value}"/ disabled>
                    <button class="number_plus">+</button>
                    </div>
                    <div class="cart_item_price">${total_price}</div>
                    <div class="cart_item_delete">
                    <img src="../images/checkout/delete_icon.svg"/>  
                    </div>
                </div>
                `
            );
            

            let cart_item = {
                item_id: item_id,
                item_img: product_img,
                item_name: product_name,
                item_number: parseInt(product_value),
                unit_price : parseInt(product_price),
                total_price: total_price,
                product_id: product_id,
            };
            let cart_items = JSON.parse(sessionStorage.getItem("cart_items"));

            $('.incart_checkout_btn').attr('href', './checkout.html');
            $('.incart_checkout_btn').html('結帳去');
            $('.incart_checkout_btn_mobile').attr('href', './checkout.html');
            $('.incart_checkout_btn_mobile').html('結帳去');

            if (cart_items) {
                // 若存在
                console.log('已存在')
                cart_items.unshift(cart_item);

                let count_price = 0;
                cart_items.forEach(function(cart, i){
                    count_price += parseInt(cart.total_price)
                });

                let price_now = parseInt($('.cart_total_price').text());
                let new_price = price_now + total_price;
                $('.cart_total_price').html(new_price);

            } else {
                // 若不存在
                console.log('不存在')
                cart_items = [cart_item];
                let price_now = parseInt($('.cart_total_price').text());
                console.log(price_now);
                let new_price = price_now + total_price;
                $('.cart_total_price').html(new_price);
            }
            sessionStorage.setItem("cart_items", JSON.stringify(cart_items));
            location.href = './checkout.html';
        
        },
        get_product(id){
            let index = id;
            this.inside_img = [];
            axios.post('../php/getProduct.php').then(res =>{
                console.log(res.data)
                res.data.forEach(function(prod, i){
                    if(index == prod.PRODUCT_ID){
                        console.log(prod.PRODUCT_ID);
                        return res.data[index];
                    }
                })
                this.inside_page = [res.data[index]];
                this.inside_img.push(res.data[index].PRODUCT_IN_IMG_1);
                this.inside_img.push(res.data[index].PRODUCT_IN_IMG_2);
                this.inside_img.push(res.data[index].PRODUCT_IN_IMG_3);
                this.inside_img.push(res.data[index].PRODUCT_IN_IMG_4);
                this.big_photo = this.inside_img[0];
            });
        }
    },
    watch:{
        id:{
            immediate:true,
            handler(new_id){
                console.log(new_id);
                this.get_product(new_id);
            }
        }
    },
    // mounted(){
    //     let index = this.$router.params.id;
    //     console.log(index);
    //     this.inside_img = [];
    //     axios.post('../php/getProduct.php').then(res =>{
    //         res.data.forEach(function(prod, i){
    //             if(index == prod.PRODUCT_ID){
    //                 this.inside_page = [res.data[index]];
    //             }
    //         })
    //         this.inside_img.push(res.data[index].PRODUCT_IN_IMG_1);
    //         this.inside_img.push(res.data[index].PRODUCT_IN_IMG_2);
    //         this.inside_img.push(res.data[index].PRODUCT_IN_IMG_3);
    //         this.inside_img.push(res.data[index].PRODUCT_IN_IMG_4);
    //     });
    //     console.log(this.inside_page);
    // },
};

const routes = [
    {path:'/', redirect:'shopping_page'},
    {   path:'/shopping_page',name:'shopping_page',
        component: shopping_page
    },
    {
        path:'/shopping_inside_page/:id',
        component: shopping_inside_page,
        props: true,
    },
];

const router = new VueRouter({
    routes: routes,
});

