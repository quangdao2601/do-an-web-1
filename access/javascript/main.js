// show login form onclick
function showLoginFormFnc() {
    document.getElementById("modal-id").classList.add("show-component");
    document.getElementById("login-form-id").classList.add("show-component");
}

// hide login form onclick
function hideLoginFormFnc() {
    document.getElementById("modal-id").classList.remove("show-component");
    document.getElementById("login-form-id").classList.remove("show-component");
}

// show register form onclick
function showRegisterFormFnc() {
    document.getElementById("modal-id").classList.add("show-component");
    document.getElementById("register-form-id").classList.add("show-component");
}

// hide register form onclick
function hideRegisterFormFnc() {
    document.getElementById("modal-id").classList.remove("show-component");
    document.getElementById("register-form-id").classList.remove("show-component");
}

function setProductType(typeID, type) {
    this.typeID = typeID;
    this.type = type;
}

function setProductItem(typeID, productID, name, price, sale, img, detail) {
    this.typeID = typeID;
    this.productID = productID;
    this.name = name;
    this.price = price;
    this.sale = sale;
    this.image = img;
    this.detail = detail;
}

// cấu trúc giỏ hàng

function setCart(productID, image, price, name, numOrder) {
    this.productID = productID;
    this.image = image;
    this.price = price;
    this.name = name;
    this.numOrder = numOrder;
}
// tạo giỏ hàng

// type list
// var arrType = [new setProductType("nike-id", "Nike"), new setProductType("adidas", "Adidas"), new setProductType("fila", "Fila"), new setProductType("champion", "Champion")];

function createtype() {
    var arrType = [new setProductType("nike-id", "Nike"), new setProductType("adidas", "Adidas"), new setProductType("fila", "Fila"), new setProductType("champion", "Champion")];
    if (localStorage.getItem('listype') == null) {
        localStorage.setItem('listype', JSON.stringify(arrType))
    }
}


// var arrProduct = [

// ];
function createproduct() {
    var arrProduct = [
        new setProductItem("nike-id", "nike-01", "Adicolor Classics Trefoil Hoodie", "150000", "1000000", "nike-1.jpg", "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm."),
        new setProductItem("nike-id", "nike-02", "Adicolor Classics Trefoil Tee Green", "240000", "900", "nike-2.jpg", "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm."),
        new setProductItem("nike-id", "nike-03", "Originals Trefoil Tee	", "3000", "125000", "nike-3.jpg", "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm."),
        new setProductItem("nike-id", "nike-04", "Graphics Trefoil Series Tee	", "1244500", "1100", "add-1.jpg", "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm. "),
        new setProductItem("nike-id", "nike-05", "Big Trefoil Tee	", "5000", "1230540", "add-2.jpg", "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm."),
        new setProductItem("nike-id", "nike-06", "Trefoil Graphic Pack Short Sleeve Tee", "2450600", "1300", "nike-1.jpg", "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm. "),
        new setProductItem("nike-id", "nike-07", "Jeremy Scott Full-Zip Hoodie", "7000", "600000", "nike-2.jpg", "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm."),
        new setProductItem("nike-id", "nike-08", "Adicolor Shattered Trefoil Crewneck Sweatshirt", "70000", "1500", "nike-3.jpg", "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm. "),
        new setProductItem("nike-id", "nike-09", "Adicolor Classics Back and Front Trefoil Boxy Tee", "345670", "1000", 'add-1.jpg', "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm. "),
        new setProductItem("nike-id", "nike-10", "Adicolor Classics Trefoil Crewneck Sweatshirt", "1245000", "1000", "add-2.jpg", "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm."),
        new setProductItem("nike-id", "nike-11", "R.Y.V. Loose Fit Hoodie	", "600000", "100", "nike-1.jpg", "Sản phẩm cao cấp được sản xuất tại Việt Nam, Việt Nam với kỹ thuật may hàng đầu thế giới của những nghệ nhân may người Việt. Áo mưa bộ Givi RRS04 được làm từ chất liệu cao cấp đạt chuẩn châu Âu và tự hào chất lượng xuất khẩu sang nhiều quốc gia châu Âu và châu Á như Italia, Brasil, Malaysia,…có độ bền cao, bền bỉ theo quá trình sử dụng và khả năng chống nước mưa tốt trong thời gian lên đến 2, 3 giờ. Áo mưa bộ Givi RRS04 thích hợp khi đi xe máy, moto trong mưa phùn, mưa nhỏ hay cả mưa dầm."),
    ];
    if (localStorage.getItem('listproduct') == null) {

        localStorage.setItem('listproduct', JSON.stringify(arrProduct))
    }
}


// var cartArr = [new setCartItem("cart-01", arrProduct[0]), new setCartItem("cart-01", arrProduct[1]), new setCartItem("cart-01", arrProduct[2])];

// show product type list onload


// function showProductTypeListFnc() {
//     listType = "";

//     for (let i = 0; i < arrType.length; i++) {
//         var type = '<li class="product-type__item id="' + arrType[i].typeID + '" "><a href="" class="product-type__item-link">' + arrType[i].type + "</a></li>";
//         listType += type;
//     }

//     document.getElementById("product-type-list-id").innerHTML = listType;
// }

// // var tempProductArr = [];
// // show home product list
// function showHomeProductList(pageNumber, maxIndex, arrProduct) {
//     var productRow = "";
//     var k = maxIndex * (pageNumber - 1);
//     var t = 0;

//     for (let i = 0; i < 3; i++) {
//         if (arrProduct[k] == null) {
//             break;
//         } else {
//             var productCols = "";
//             for (let j = 0; j < 3; j++) {
//                 if (arrProduct[k] == null) {
//                     break;
//                 } else {
//                     tempProductArr[t] = arrProduct[k];
//                     var productCol =
//                         '<div class="grid__col-4"><div class="home-product__item"><a href="" class="home-product__item-link"><img src="./access/image/product/nike-boston.jpg" alt="" class="home-product__item-img" /></a><!-- product detail --><div class="home-product__item-container"><div class="home-product__item-title">' +
//                         tempProductArr[t].name +
//                         '</div><div class="home-product__item-price">Giá gốc: <span>' +
//                         tempProductArr[t].price +
//                         ' $</span></div><div class="home-product__item-sale">Giảm giá: ' +
//                         tempProductArr[t].sale +
//                         ' $</div><div class="home-product__item-btn-field"><button id="' +
//                         tempProductArr[t].productID +
//                         '" class="home-product__item-cart-insert btn" onclick="cartAddItem(this.id);">Thêm vào giỏ hàng</button><a href="#" class="home-product__item-link-btn"><button class="home-product__item-buy-btn btn">Mua Ngay</button></a></div></div></div></div>';
//                     productCols += productCol;
//                     k++;
//                     t++;
//                 }
//             }
//             productRow += ' <div class="grid__row">' + productCols + "</div>";
//         }
//     }

//     document.getElementById("home-product-id").innerHTML = '<div class="grid">' + productRow + "</div>";
// }

// function cartAddItem(id) {
//     console.log(id);
//     for (let i = 0; i < tempProductArr.length; i++) {
//         if (tempProductArr[i].productID == id) {
//             console.log(tempProductArr[i]);
//         }
//     }
// }

// function showCartItemList() {
//     // empty cart HTML
//     var emptyCart = '<div class="page-header-top__right-cart-show empty-cart"><div class="page-header-top__right-cart-empty-noti">Giỏ hàng trống</div></div>';

//     // var cartItemBody = '<div class="page-header-top__right-cart-info"><div class="page-header-top__right-cart-name">Tên SP</div><div class="page-header-top__right-cart-quantity">SL: <span>2</span></div><div class="page-header-top__right-cart-total-price">Thành tiền: <span>1000$</span></div></div>';

//     var cartItemHead = '<div class="page-header-top__right-cart-item"><img src="./access/image/product/nike-boston.jpg" alt="" class="page-header-top__right-cart-img" />';

//     var cartItemTail = '<div class="page-header-top__right-cart-remove"><button class="page-header-top__right-cart-remove-btn">Xoá</button></div></div>';

//     if (cartArr.length == 0) {
//         document.getElementById("page-header-top__right-cart-box-id").innerHTML = emptyCart;
//     } else {
// pay button HTML
//   var pay = '<div class="page-header-top__right-cart-pay"><button class="page-header-top__right-cart-pay-btn btn">Thanh toán</button></div>';

// cart title HTML

//   var cartTitle = '<div class="page-header-top__right-cart-title">Giỏ hàng</div>';
//         var cartContainer = "";

//         for (let i = 0; i < cartArr.length; i++) {
//             var cartItem =
//                 cartItemHead +
//                 '<div class="page-header-top__right-cart-info"><div class="page-header-top__right-cart-name">' +
//                 cartArr[i].product.name +
//                 '</div><div class="page-header-top__right-cart-quantity">SL: <span>' +
//                 1 +
//                 '</span></div><div class="page-header-top__right-cart-total-price">Thành tiền: <span>' +
//                 cartArr[i].product.sale +
//                 " $</span></div></div>" +
//                 cartItemTail;

//             cartContainer += cartItem;
//         }

//         cartContainer = '<div class="page-header-top__right-cart-container">' + cartContainer + "</div>";
//         document.getElementById("page-header-top__right-cart-box-id").innerHTML = cartTitle + cartContainer + pay;
//     }
// }




// thêm sản phẩm vào giỏ hàng 
function addProductToCart(obj) {
    var id = obj.id;
    listproduct = JSON.parse(localStorage.getItem('listproduct'))

    cartt = JSON.parse(localStorage.getItem("listCart"))
    for (i = 0; i < listproduct.length; i++) {
        if (listproduct[i].productID == id) {
            if (localStorage.getItem('listCart') == null) {
                var product = [
                    new setCart(listproduct[i].productID, listproduct[i].image, listproduct[i].price, listproduct[i].name, 1)
                ]

                localStorage.setItem("listCart", JSON.stringify(product))
                alert("Đã thêm sản phẩm vào giỏ hàng")
                return location.reload()
            } else {
                for (k = 0; k < cartt.length; k++) {
                    if (cartt[k].productID == id) {
                        cartt[k].numOrder++;
                        localStorage.setItem("listCart", JSON.stringify(cartt))
                        alert("Đã thêm sản phẩm vào giỏ hàng")
                        return location.reload()
                    }

                }
                var product = {
                    productID: listproduct[i].productID,
                    image: listproduct[i].image,
                    price: listproduct[i].price,
                    name: listproduct[i].name,
                    numOrder: 1
                }
                cartt.push(product)
                localStorage.setItem("listCart", JSON.stringify(cartt))
                alert("Đã thêm sản phẩm vào giỏ ")
                return location.reload()

            }

        }
    }
}

// tỉnh tổng tiền đơn hàng


function showcart() {

    document.getElementById("showcart").classList.add("none")
    cartt = JSON.parse(localStorage.getItem("listCart"))
    var sum = 0
    cartt = JSON.parse(localStorage.getItem("listCart"))
    for (m = 0; m < cartt.length; m++) {
        sum = sum - (-(cartt[m].price * cartt[m].numOrder))
    }

    var s = ""
    s += "<div id='page-header-top__right-cart-box-id' class='page-header-top__right-cart-box'> <div class='page-header-top__right-cart-title'><p> Giỏ hàng </p><i onclick='hideCart()' class='fas fa-backspace'></i></div>    <div class='page-header-top__right-cart-container'>"
    for (i = 0; i < cartt.length; i++) {
        s += "<div class='page-header-top__right-cart-item'><img src='./access/image/product/" + cartt[i].image + "' alt='' class='page-header-top__right-cart-img' /><div class='page-header-top__right-cart-info'><div class='page-header-top__right-cart-name'>" + cartt[i].name + "</div><div class='page-header-top__right-cart-quantity'>SL: <span>" + cartt[i].numOrder + "</span></div></div><div class='page-header-top__right-cart-remove'><button onclick='deleteItemCart(this)' id='" + cartt[i].productID + "' class='page-header-top__right-cart-remove-btn'>Xoá</button></div></div>"
    }
    s += "</div><div class='page-header-top__right-cart-pay'>  <div class='page-header-top__right-cart-total-price'>Thành tiền: <span>" + sum.toLocaleString() + ".đ</span></div><button onclick='checkout()' class='page-header-top__right-cart-pay-btn btn'>Thanh toán</button></div>   </div>"
    document.getElementById("showcart").innerHTML = s
    document.getElementById("showcart").classList.remove("none")
}
// alert("Đã thêm sản phẩm vào giỏ hàng")

// ẩn giỏ hàng
function hideCart() {
    document.getElementById("showcart").classList.add("none")
}
// xóa sản phẩm trong giỏ hàng
function deleteItemCart(obj) {
    var id = obj.id
    cartt = JSON.parse(localStorage.getItem("listCart"))
    for (i = 0; i < cartt.length; i++) {
        if (id == cartt[i].productID) {
            cartt.splice(i, 1)
            localStorage.setItem("listCart", JSON.stringify(cartt))
            alert("Đã xóa sản phẩm khỏi giỏ hàng")
            return location.reload()

        }
    }
}
// show thông tin đơn hàng
function checkout() {
    if (localStorage.getItem("infouser") == null) {
        alert("Vui lòng đăng nhập trước khi thanh toán đơn hàng")
    } else {
        var sum = 0
        for (m = 0; m < cartt.length; m++) {
            sum = sum - (-(cartt[m].price * cartt[m].numOrder))
        }
        document.getElementById("form-checkout").classList.add("showform")
        cartt = JSON.parse(localStorage.getItem("listCart"))
        user = JSON.parse(localStorage.getItem("infouser"))
        users = JSON.parse(localStorage.getItem("user"))
        for (i = 0; i < users.length; i++) {
            if (users[i].username == user[0].username) {
                document.getElementById("fullnameuser").value = users[i].fullname
                var fullnameuser = document.getElementById("fullnameuser")
                fullnameuser.setAttribute("readonly", "readonly")
                document.getElementById("phoneuser").value = users[i].phone
                var phoneuser = document.getElementById("phoneuser")
                phoneuser.setAttribute("readonly", "readonly")
            }
        }
        var s = ""
        s += " <ul class='listproduct'>"

        for (k = 0; k < cartt.length; k++) {
            s += "<li><div class='thumb'><img src='access/image/product/" + cartt[k].image + "' alt=''></div><div class='moreinfo'><strong>" + cartt[k].name + "</strong><p>Số lượng:" + cartt[k].numOrder + "</p> </div></li>"
        }
        s += "</ul><p><strong>Tổng tiền :" + sum.toLocaleString() + ".đ</strong></p>"
        document.getElementById("detailCheckout").innerHTML = s

    }
}
// thanh toán đơn hàng

function check() {
    var address = document.getElementById("address").value
    var payment = document.getElementById("payment").value
    if (address == "" || payment == "") {
        alert("Vui lòng nhập đầy đủ địa chỉ giao hàng và hình thức thanh toán")
    } else {

    }
}
// check user login  
function login() {
    var user = []
    localStorage.setItem('infouser', JSON.stringify(user))
    user = JSON.parse(localStorage.getItem('infouser'))
    var username = document.getElementById('login-form__username').value;
    var password = document.getElementById('login-form__password').value;
    adminarray = JSON.parse(localStorage.getItem('user'));
    var s = ""
    if (username == "" || password == "") {
        alert('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu')
    } else {
        for (i = 0; i < adminarray.length; i++) {
            if (username == adminarray[i].username && password == adminarray[i].password) {
                // window.location = "http://localhost:8080/unitop.vn/Front-end/lambenngoai/web1/do-an-web-1/"
                alert('Dang nhap thanh cong')
                var info = {
                    username: username,
                    usertype: adminarray[i].usertype
                }
                user.push(info)
                localStorage.setItem('infouser', JSON.stringify(user))
                return location.reload()
            }
        }
        alert('Thong tin tai khoan hoạc mat khau khong chinh xac')
    }
}

// logout
function logout() {
    localStorage.removeItem('infouser')
    return location.reload()
}
// dang ky thanh vien moi
function reg() {
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phonenumber").value;
    var fullname = document.getElementById('fullname').value;
    var password = document.getElementById('password').value;
    var password_confim = document.getElementById('password_confirm').value;
    var err_fullname = ""
    var err_username = ""
    var err_phone = ""
    var err_password = ""
    var err_passwordconfirm = ""
    if (username == "") {
        err_username = "<p>Không được bỏ trống username</p>"
    } else {
        if (username.length < 8 || username > 32) {
            err_username = "<p>Độ dài từ 8 tới 32 ký tự</p>"
        }
    }

    if (fullname == "") {
        err_fullname = "<p>Không được bỏ trống họ và tên</p>"
    } else {
        if (fullname.length < 8 || fullname.length > 32) {
            err_fullname = "<p>Độ dài từ 8 tới 32 ký tự</p>"
        }
    }

    if (phone == "") {
        err_phone = "<p>Không được bỏ trống số điện thoại</p>"
    }
    if (password == "") {
        err_password = "<p>Không được bỏ trống mật khẩu</p>"
    } else {
        if (password.length < 8 || password.length > 32) {
            err_password = "<p>Độ dài từ 8 tới 32 ký tự</p>"
        }
    }
    if (password != password_confim) {
        err_passwordconfirm = "<p>Mật khẩu xác nhận không chính xác</p>"
    }
    document.getElementById('err_username').innerHTML = err_username
    document.getElementById('err_fullname').innerHTML = err_fullname
    document.getElementById('err_phone').innerHTML = err_phone
    document.getElementById('err_password').innerHTML = err_password
    document.getElementById('err_password-confirm').innerHTML = err_passwordconfirm
    if (err_passwordconfirm == "" && err_username == "" && err_fullname == "" && err_password == "" && err_phone == "") {
        var user = {
            username: username,
            fullname: fullname,
            phone: phone,
            password: password,
            usertype: 'khachhang'
        }
        userarray = JSON.parse(localStorage.getItem('user'))
        userarray.push(user)
        localStorage.setItem('user', JSON.stringify(userarray))
        alert('Bạn đã đăng ký thành công')
        location.reload()
    }

}
// tao admin  

function createadmin() {
    var adminarray = []
    if (localStorage.getItem("user") == null) {

        var admin1 = {
            username: "admin",
            password: "admin",
            fullname: "Tran Quang Dao",
            datesignup: "23-11-1999",
            usertype: "admin",
            phone: "0961256443"
        };
        var admin2 = {
            username: 'quangdao',
            password: "quangdao",
            fullname: "Tran Van Dong ",
            datesignup: "23-11-1999",
            usertype: "khachhang",
            phone: "0976702781"
        };
        adminarray.push(admin1);
        adminarray.push(admin2);
        localStorage.setItem("user", JSON.stringify(adminarray));

    }
}
// xóa sản phẩm trong giỏ hàng

// onload auto tạo fomm login reg
function createformlogin() {
    var s = '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" onclick="showLoginFormFnc()">Đăng nhập</span></div><div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="showRegisterFormFnc()">Đăng ký</span></div>'
    document.getElementById('form_login_reg').innerHTML = s
}
// show danh sách sản phẩm trang index
function showproductindex(obj) {
    // alert("ok")
    var s = ""
    s += "  <ul class='listproduct'>"
    products = JSON.parse(localStorage.getItem('listproduct'))
    for (i = 0; i < obj; i++) {
        var price = products[i].price
        s += "<li onclick='detailproduct(this)' id='" + products[i].productID + "' ><div class='thumb'><img src='access/image/product/" + products[i].image + "' alt=''></div><div class='moreinfo'><p>" + products[i].name + "</p><div class='price'>" + price.toLocaleString() + ".đ</div><div class='rate'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half'></i></div></div></li>"
    }
    s += "</ul>"
    document.getElementById("listproduct").innerHTML = s
}

function pagination(numproduct, numpage, type) { // numproduct:số sản phẩm   numpage:số sản phẩm 1 trang  type 1 là sp 2 là user


    var sotrang = Math.ceil(numproduct / numpage) // số trang
    var s = ""
    s += "<ul class='paginate'>"
    for (i = 1; i <= sotrang; i++) {
        s += "<li onclick='loadproduct(this)  ' typeload='" + type + "' attr=" + numpage + " id='" + i + "'>" + i + "</li>"
    }
    s += "</ul>"
    document.getElementById('paginate').innerHTML = s
}

function loadproduct(obj) {
    var page = obj.getAttribute("attr"); // thuộc tính để biết số sản phẩm trong 1 trang
    var id = obj.id
    var start = (id - 1) * page // sản phẩm bắt đầu
    products = JSON.parse(localStorage.getItem('listproduct'))
    var s = ""
    s += "  <ul class='listproduct'>"
    if (start - (-page) >= products.length) {
        for (i = start; i < products.length; i++) {
            s += "<li onclick='detailproduct(this)' id='" + products[i].productID + "' ><div class='thumb'><img src='access/image/product/" + products[i].image + "' alt=''></div><div class='moreinfo'><p>" + products[i].name + "</p><div class='price'>" + products[i].price.toLocaleString() + ".đ</div><div class='rate'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half'></i></div></div></li>"
        }
    } else {

        for (i = start; i < ((page - (-start))); i++) {
            s += "<li onclick='detailproduct(this)' id='" + products[i].productID + "' ><div class='thumb'><img src='access/image/product/" + products[i].image + "' alt=''></div><div class='moreinfo'><p>" + products[i].name + "</p><div class='price'>" + products[i].price.toLocaleString() + ".đ</div><div class='rate'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half'></i></div></div></li>"
        }
    }
    s += "</ul>"
    document.getElementById("listproduct").innerHTML = s
}

function detailproduct(obj) {
    var id = obj.id
    products = JSON.parse(localStorage.getItem('listproduct'))
    var s = ""
    for (i = 0; i < products.length; i++) {
        if (id == products[i].productID) {
            s += "   <div class='detailproduct'><div class='thumbnail'><img src='access/image/product/" + products[i].image + "' alt=''></div><div class='information'><h1 class='name'>" + products[i].name + "</h1> <p class='code'><strong>Ma san pham:</strong>" + products[i].productID + "</p> <p class='price'> <strong>Gia san pham:</strong>" + products[i].price + "</p> <p class='detail'> <strong>Chi tiết: </strong>:" + products[i].detail + "</p><p><strong>Kích thước</strong>:</p><ul class='listsize'><li>39</li><li>40</li><li>41</li><li>42</li><li>43</li></ul><div id='" + products[i].productID + "' onclick='addProductToCart(this)' class='add_to_cart'>Them vao gio hang</div></div></div>"
            break;
        }
    }
    document.getElementById("listproduct").innerHTML = s
    document.getElementById("paginate").innerHTML = ""
}

function onloadFnc() {
    // localStorage.removeItem('listproduct')
    if (localStorage.getItem('infouser') == null) {
        createformlogin()
    } else {
        user = JSON.parse(localStorage.getItem('infouser'))
        if (user[0].usertype == 'khachhang') {
            s = '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" >Xin chào:' + user[0].username + '</span> </div> <div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="logout()" >(Đăng xuất)</span></div>'
            document.getElementById('form_login_reg').innerHTML = s
        } else {
            s = '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" >Xin chào:' + user[0].username + '</span> </div> <div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="logout()" >(Đăng xuất)</span></div><div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span"><a href="admin.html" ><i class="fas fa-forward"></i></a></span></div>'
            document.getElementById('form_login_reg').innerHTML = s
        }
    }
    createadmin();
    createproduct();
    createtype();
    showproductindex(8);
    numproduct = JSON.parse(localStorage.getItem('listproduct'))
    pagination(numproduct.length, 8, 1) // tổng sản phẩm , 3 sản phẩm 1 trang, load sp
}

window.onload = onloadFnc;