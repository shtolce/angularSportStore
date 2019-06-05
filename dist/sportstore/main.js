(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _store_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/checkout.component */ "./src/app/store/checkout.component.ts");
/* harmony import */ var _store_cartDetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/cartDetail.component */ "./src/app/store/cartDetail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storeFirst_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storeFirst.guard */ "./src/app/storeFirst.guard.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _store_store_module__WEBPACK_IMPORTED_MODULE_5__["StoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                    { path: 'store', component: _store_store_component__WEBPACK_IMPORTED_MODULE_6__["StoreComponent"], canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_10__["StoreFirstGuard"]] },
                    { path: 'cart', component: _store_cartDetail_component__WEBPACK_IMPORTED_MODULE_8__["CartDetailComponent"], canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_10__["StoreFirstGuard"]] },
                    { path: 'checkout', component: _store_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckOutComponent"], canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_10__["StoreFirstGuard"]] },
                    { path: "admin", loadChildren: "./admin/admin.module#AdminModule", canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_10__["StoreFirstGuard"]] },
                    { path: '**', redirectTo: "/store" }
                ])
            ],
            providers: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_10__["StoreFirstGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/model/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var AuthService = /** @class */ (function () {
    function AuthService(datasource) {
        this.datasource = datasource;
    }
    AuthService.prototype.authenticate = function (username, password) {
        return this.datasource.authenticate(username, password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.datasource.auth_token != null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.clear = function () {
        this.datasource.auth_token = null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/model/cart.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/cart.model.ts ***!
  \*************************************/
/*! exports provided: Cart, CartLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartLine", function() { return CartLine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Cart = /** @class */ (function () {
    function Cart() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
    Cart.prototype.addLine = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var line = this.lines.find(function (line) { return line.product.id == product.id; });
        if (line != undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    };
    Cart.prototype.updateQuantity = function (product, quantity) {
        var line = this.lines.find(function (line) { return line.product.id == product.id; });
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    };
    Cart.prototype.removeLine = function (id) {
        var index = this.lines.findIndex(function (line) { return line.product.id == id; });
        this.lines.splice(index);
        this.recalculate();
    };
    Cart.prototype.clear = function () {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    };
    Cart.prototype.recalculate = function () {
        var _this = this;
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(function (l) {
            _this.itemCount += l.quantity;
            _this.cartPrice += (l.quantity * l.product.price);
        });
    };
    Cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Cart);
    return Cart;
}());

var CartLine = /** @class */ (function () {
    function CartLine(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    Object.defineProperty(CartLine.prototype, "lineTotal", {
        get: function () {
            return this.quantity * this.product.price;
        },
        enumerable: true,
        configurable: true
    });
    return CartLine;
}());



/***/ }),

/***/ "./src/app/model/model.module.ts":
/*!***************************************!*\
  !*** ./src/app/model/model.module.ts ***!
  \***************************************/
/*! exports provided: ModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function() { return ModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _static_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static.datasource */ "./src/app/model/static.datasource.ts");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.model */ "./src/app/model/cart.model.ts");
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order.model */ "./src/app/model/order.model.ts");
/* harmony import */ var _order_repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.repository */ "./src/app/model/order.repository.ts");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/model/auth.service.ts");










var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"]],
            providers: [_product_repository__WEBPACK_IMPORTED_MODULE_2__["ProductRepository"], _cart_model__WEBPACK_IMPORTED_MODULE_4__["Cart"], _order_model__WEBPACK_IMPORTED_MODULE_5__["Order"], _order_repository__WEBPACK_IMPORTED_MODULE_6__["OrderRepository"],
                { provide: _static_datasource__WEBPACK_IMPORTED_MODULE_3__["StaticDataSource"], useClass: _rest_datasource__WEBPACK_IMPORTED_MODULE_7__["RestDataSource"] }, _rest_datasource__WEBPACK_IMPORTED_MODULE_7__["RestDataSource"], _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]]
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "./src/app/model/order.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/order.model.ts ***!
  \**************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.model */ "./src/app/model/cart.model.ts");



var Order = /** @class */ (function () {
    function Order(cart) {
        this.cart = cart;
        this.shipped = false;
    }
    Order.prototype.clear = function () {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    };
    Order = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"]])
    ], Order);
    return Order;
}());



/***/ }),

/***/ "./src/app/model/order.repository.ts":
/*!*******************************************!*\
  !*** ./src/app/model/order.repository.ts ***!
  \*******************************************/
/*! exports provided: OrderRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRepository", function() { return OrderRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");



var OrderRepository = /** @class */ (function () {
    function OrderRepository(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
        this.loaded = false;
    }
    OrderRepository.prototype.loadOrders = function () {
        var _this = this;
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(function (orders) { return _this.orders = orders; });
    };
    OrderRepository.prototype.getOrders = function () {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    };
    OrderRepository.prototype.saveOrder = function (order) {
        return this.dataSource.saveOrder(order);
    };
    OrderRepository.prototype.updateOrder = function (order) {
        var _this = this;
        this.dataSource.updateOrder(order).subscribe(function (order) {
            _this.orders.splice(_this.orders.
                findIndex(function (o) { return o.id == order.id; }), 1, order);
        });
    };
    OrderRepository.prototype.deleteOrder = function (id) {
        var _this = this;
        this.dataSource.deleteOrder(id).subscribe(function (order) {
            _this.orders.splice(_this.orders.findIndex(function (o) { return id == o.id; }));
        });
    };
    OrderRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"]])
    ], OrderRepository);
    return OrderRepository;
}());



/***/ }),

/***/ "./src/app/model/product.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/product.model.ts ***!
  \****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, category, description, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/model/product.repository.ts":
/*!*********************************************!*\
  !*** ./src/app/model/product.repository.ts ***!
  \*********************************************/
/*! exports provided: ProductRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRepository", function() { return ProductRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");



var ProductRepository = /** @class */ (function () {
    function ProductRepository(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        dataSource.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.categories =
                data.map(function (p) { return p.category; })
                    .filter(function (c, index, array) { return array.indexOf(c) == index; }).sort();
        });
    }
    ProductRepository.prototype.getProducts = function (category) {
        if (category === void 0) { category = null; }
        return this.products
            .filter(function (p) { return category == null || category == p.category; });
    };
    ProductRepository.prototype.getProduct = function (id) {
        return this.products.find(function (p) { return p.id == id; });
    };
    ProductRepository.prototype.getCategories = function () {
        return this.categories;
    };
    ProductRepository.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product)
                .subscribe(function (p) { return _this.products.push(p); });
        }
        else {
            this.dataSource.updateProduct(product)
                .subscribe(function (p) {
                _this.products.splice(_this.products.
                    findIndex(function (p) { return p.id == product.id; }), 1, product);
            });
        }
    };
    ProductRepository.prototype.deleteProduct = function (id) {
        var _this = this;
        this.dataSource.deleteProduct(id).subscribe(function (p) {
            _this.products.splice(_this.products.
                findIndex(function (p) { return p.id == id; }), 1);
        });
    };
    ProductRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"]])
    ], ProductRepository);
    return ProductRepository;
}());



/***/ }),

/***/ "./src/app/model/rest.datasource.ts":
/*!******************************************!*\
  !*** ./src/app/model/rest.datasource.ts ***!
  \******************************************/
/*! exports provided: RestDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDataSource", function() { return RestDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var PROTOCOL = "HTTP";
var PORT = "3500";
var RestDataSource = /** @class */ (function () {
    function RestDataSource(http) {
        this.http = http;
        this.baseUrl = PROTOCOL + "://" + location.hostname + ":" + PORT + "/";
    }
    RestDataSource.prototype.authenticate = function (user, pass) {
        var _this = this;
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Request"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Post,
            url: this.baseUrl + "login",
            body: { name: user, password: pass }
        })).map(function (response) {
            var r = response.json();
            _this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    };
    RestDataSource.prototype.getProducts = function () {
        return this.sendRequest(_angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Get, "products");
    };
    RestDataSource.prototype.saveProduct = function (product) {
        return this.sendRequest(_angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Post, "products", product, true);
    };
    RestDataSource.prototype.updateProduct = function (product) {
        return this.sendRequest(_angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Put, "products/" + product.id, product, true);
    };
    RestDataSource.prototype.deleteProduct = function (id) {
        return this.sendRequest(_angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Delete, "products/" + id, null, true);
    };
    RestDataSource.prototype.getOrders = function () {
        return this.sendRequest(_angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Get, "orders", null, true);
    };
    RestDataSource.prototype.deleteOrder = function (id) {
        return this.sendRequest(_angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Delete, "orders/" + id, null, true);
    };
    RestDataSource.prototype.updateOrder = function (order) {
        return this.sendRequest(_angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Put, "orders/" + order.id, order, true);
    };
    RestDataSource.prototype.saveOrder = function (order) {
        return this.sendRequest(_angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Post, "orders", order);
    };
    RestDataSource.prototype.sendRequest = function (verb, url, body, auth) {
        if (auth === void 0) { auth = false; }
        var request = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Request"]({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", "Bearer<" + this.auth_token + ">");
        }
        return this.http.request(request).map(function (response) { return response.json(); });
    };
    RestDataSource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], RestDataSource);
    return RestDataSource;
}());



/***/ }),

/***/ "./src/app/model/static.datasource.ts":
/*!********************************************!*\
  !*** ./src/app/model/static.datasource.ts ***!
  \********************************************/
/*! exports provided: StaticDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataSource", function() { return StaticDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.model */ "./src/app/model/product.model.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/from */ "./node_modules/rxjs-compat/_esm5/add/observable/from.js");





var StaticDataSource = /** @class */ (function () {
    function StaticDataSource() {
        this.products = [
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](3, 'Product 3', 'Category 1', 'Product 3 (Category 1)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](4, 'Product 4', 'Category 1', 'Product 4 (Category 1)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](5, 'Product 5', 'Category 1', 'Product 5 (Category 1)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](6, 'Product 6', 'Category 2', 'Product 6 (Category 2)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](7, 'Product 7', 'Category 2', 'Product 7 (Category 2)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](8, 'Product 8', 'Category 2', 'Product 8 (Category 2)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](9, 'Product 9', 'Category 2', 'Product 9 (Category 2)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](10, 'Product 10', 'Category 2', 'Product 10 (Category 2)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](11, 'Product 11', 'Category 3', 'Product 11 (Category 3)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](12, 'Product 12', 'Category 3', 'Product 12 (Category 3)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](13, 'Product 13', 'Category 3', 'Product 13 (Category 3)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](14, 'Product 14', 'Category 3', 'Product 14 (Category 3)', 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](15, 'Product 15', 'Category 3', 'Product 15 (Category 3)', 100),
        ];
    }
    StaticDataSource.prototype.getProducts = function () {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].from([this.products]);
    };
    StaticDataSource.prototype.saveOrder = function (order) {
        console.log(JSON.stringify(order));
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].from([order]);
    };
    StaticDataSource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StaticDataSource);
    return StaticDataSource;
}());



/***/ }),

/***/ "./src/app/store/cartDetail.component.html":
/*!*************************************************!*\
  !*** ./src/app/store/cartDetail.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-inverse\">\r\n  <a class=\"navbar-brand\">SPORTS STORE</a>\r\n</div>\r\n<div class=\"m-a-1\">\r\n  <h2 class=\"text-xs-center\">Your Cart</h2>\r\n  <table class=\"table table-bordered table-striped p-a-1\">\r\n    <thead>\r\n    <tr>\r\n      <th>Quantity</th>\r\n      <th>Product</th>\r\n      <th class=\"text-xs-right\">Price</th>\r\n      <th class=\"text-xs-right\">Subtotal</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngIf=\"cart.lines.length == 0\">\r\n      <td colspan=\"4\" class=\"text-xs-center\">\r\n        Your cart is empty\r\n      </td>\r\n    </tr>\r\n    <tr *ngFor=\"let line of cart.lines\">\r\n      <td>\r\n        <input type=\"number\" class=\"form-control-sm\"\r\n               style=\"width:5em\"\r\n               [value]=\"line.quantity\"\r\n               (change)=\"cart.updateQuantity(line.product, $event.target.value)\"/>\r\n      </td>\r\n      <td>{{line.product.name}}</td>\r\n      <td class=\"text-xs-right\">\r\n        {{line.product.price | currency:\"USD\":true:\"2.2-2\"}}\r\n      </td>\r\n      <td class=\"text-xs-right\">\r\n        {{(line.lineTotal) | currency:\"USD\":true:\"2.2-2\" }}\r\n      </td>\r\n      <td class=\"text-xs-center\">\r\n        <button class=\"btn btn-sm btn-danger\"\r\n                (click)=\"cart.removeLine(line.product.id)\">\r\n          Remove\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot>\r\n    <tr>\r\n      <td colspan=\"3\" class=\"text-xs-right\">Total:</td>\r\n      <td class=\"text-xs-right\">\r\n        {{cart.cartPrice | currency:\"USD\":true:\"2.2-2\"}}\r\n      </td>\r\n    </tr>\r\n    </tfoot>\r\n  </table>\r\n</div>\r\n<div class=\"text-xs-center\">\r\n  <button class=\"btn btn-primary\" routerLink=\"/store\">Continue Shopping</button>\r\n  <button class=\"btn btn-secondary\" routerLink=\"/checkout\"\r\n          [disabled]=\"cart.lines.length == 0\">\r\n    Checkout\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/store/cartDetail.component.ts":
/*!***********************************************!*\
  !*** ./src/app/store/cartDetail.component.ts ***!
  \***********************************************/
/*! exports provided: CartDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailComponent", function() { return CartDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");



var CartDetailComponent = /** @class */ (function () {
    function CartDetailComponent(cart) {
        this.cart = cart;
    }
    ;
    CartDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./cartDetail.component.html */ "./src/app/store/cartDetail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"]])
    ], CartDetailComponent);
    return CartDetailComponent;
}());

;


/***/ }),

/***/ "./src/app/store/cartSummary.component.html":
/*!**************************************************!*\
  !*** ./src/app/store/cartSummary.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-xs-right\">\r\n  <small>\r\n    Your cart:\r\n    <span *ngIf=\"cart.itemCount > 0\">\r\n            {{ cart.itemCount }} item(s)\r\n            {{ cart.cartPrice | currency:\"USD\":true:\"2.2-2\" }}\r\n        </span>\r\n    <span *ngIf=\"cart.itemCount == 0\">\r\n            (empty)\r\n        </span>\r\n  </small>\r\n  <button class=\"btn btn-sm bg-inverse\" [disabled]=\"cart.itemCount == 0\" routerLink=\"/cart\">\r\n    <i class=\"fa fa-shopping-cart\"></i>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/store/cartsummary.component.ts":
/*!************************************************!*\
  !*** ./src/app/store/cartsummary.component.ts ***!
  \************************************************/
/*! exports provided: CartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartSummaryComponent", function() { return CartSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");



var CartSummaryComponent = /** @class */ (function () {
    function CartSummaryComponent(cart) {
        this.cart = cart;
    }
    ;
    CartSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'App-cartSummary',
            template: __webpack_require__(/*! ./cartSummary.component.html */ "./src/app/store/cartSummary.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"]])
    ], CartSummaryComponent);
    return CartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/store/checkout.component.css":
/*!**********************************************!*\
  !*** ./src/app/store/checkout.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }\r\ninput.ng-dirty.ng-valid { border: 2px solid #6bc502 }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsMEJBQTBCO0FBQ3RELDBCQUEwQiwwQkFBMEIiLCJmaWxlIjoic3JjL2FwcC9zdG9yZS9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctZGlydHkubmctaW52YWxpZCB7IGJvcmRlcjogMnB4IHNvbGlkICNmZjAwMDAgfVxyXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7IGJvcmRlcjogMnB4IHNvbGlkICM2YmM1MDIgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/store/checkout.component.html":
/*!***********************************************!*\
  !*** ./src/app/store/checkout.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-inverse\">\r\n    <a class=\"navbar-brand\">SPORT STORE</a>\r\n</div>\r\n\r\n<div *ngIf=\"orderSent\" class=\"m-a-1\" text-xs-center>\r\n  <h2>Thanks!</h2>\r\n  <p>Thanks for placing your order.</p>\r\n  <p>We'll ship your goods as soon as possible.</p>\r\n  <button class=\"btn btn-primary\" routerLink=\"/store\">Return to Store</button>\r\n</div>\r\n<form *ngIf=\"!orderSent\" #form=\"ngForm\" novalidate\r\n      (ngSubmit)=\"submitOrder(form)\" class=\"m-a-1\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input class=\"form-control\" #name=\"ngModel\" name=\"name\"\r\n           [(ngModel)]=\"order.name\" required />\r\n    <span *ngIf=\"submitted && name.invalid\" class=\"text-danger\">\r\n      Please enter your name\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Address</label>\r\n    <input class=\"form-control\" #address=\"ngModel\" name=\"address\"\r\n           [(ngModel)]=\"order.address\" required />\r\n    <span *ngIf=\"submitted && address.invalid\" class=\"text-danger\">\r\n        Please enter your address\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>City</label>\r\n    <input class=\"form-control\" #city=\"ngModel\" name=\"city\"\r\n           [(ngModel)]=\"order.city\" required />\r\n    <span *ngIf=\"submitted && city.invalid\" class=\"text-danger\">\r\n        Please enter your city\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>State</label>\r\n    <input class=\"form-control\" #state=\"ngModel\" name=\"state\"\r\n           [(ngModel)]=\"order.state\" required />\r\n    <span *ngIf=\"submitted && state.invalid\" class=\"text-danger\">\r\nPlease enter your state\r\n</span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Zip/Postal Code</label>\r\n    <input class=\"form-control\" #zip=\"ngModel\" name=\"zip\"\r\n           [(ngModel)]=\"order.zip\" required />\r\n    <span *ngIf=\"submitted && zip.invalid\" class=\"text-danger\">\r\nPlease enter your zip/postal code\r\n</span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Country</label>\r\n    <input class=\"form-control\" #country=\"ngModel\" name=\"country\"\r\n           [(ngModel)]=\"order.country\" required />\r\n    <span *ngIf=\"submitted && country.invalid\" class=\"text-danger\">\r\nPlease enter your country\r\n</span>\r\n  </div>\r\n  <div class=\"text-xs-center\">\r\n    <button class=\"btn btn-secondary\" routerLink=\"/cart\">Back</button>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Complete Order</button>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/store/checkout.component.ts":
/*!*********************************************!*\
  !*** ./src/app/store/checkout.component.ts ***!
  \*********************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_order_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/order.repository */ "./src/app/model/order.repository.ts");
/* harmony import */ var _model_order_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/order.model */ "./src/app/model/order.model.ts");




var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(repository, order) {
        this.repository = repository;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    CheckOutComponent.prototype.submitOrder = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(function (order) {
                _this.order.clear();
                _this.orderSent = true;
                _this.submitted = false;
            });
        }
    };
    CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/store/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/store/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_order_repository__WEBPACK_IMPORTED_MODULE_2__["OrderRepository"],
            _model_order_model__WEBPACK_IMPORTED_MODULE_3__["Order"]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/store/counter.directive.ts":
/*!********************************************!*\
  !*** ./src/app/store/counter.directive.ts ***!
  \********************************************/
/*! exports provided: CounterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDirective", function() { return CounterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CounterDirective = /** @class */ (function () {
    function CounterDirective(container, template) {
        this.container = container;
        this.template = template;
    }
    CounterDirective.prototype.ngOnChanges = function (changes) {
        this.container.clear();
        for (var i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('counterOf'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CounterDirective.prototype, "counter", void 0);
    CounterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[counterOf]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], CounterDirective);
    return CounterDirective;
}());

var CounterDirectiveContext = /** @class */ (function () {
    function CounterDirectiveContext($implicit) {
        this.$implicit = $implicit;
    }
    return CounterDirectiveContext;
}());


/***/ }),

/***/ "./src/app/store/store.component.html":
/*!********************************************!*\
  !*** ./src/app/store/store.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-inverse\">\r\n  <a class=\"navbar-brand\">SPORTS STORE</a>\r\n  <App-cartSummary></App-cartSummary>\r\n</div>\r\n<div class=\"col-xs-3 p-a-1\">\r\n  <button class=\"btn btn-block btn-outline-primary\" (click)=\"changeCategory()\">\r\n    Home\r\n  </button>\r\n  <button *ngFor=\"let cat of categories\" class=\"btn btn-outline-primary\r\n                    btn-block\"\r\n          [class.active]=\"cat == selectedCategory\" (click)=\"changeCategory(cat)\">\r\n    {{cat}}\r\n  </button>\r\n  <button class=\"btn btn=block btn-danger m-t-3\" routerLink=\"/admin\">\r\n    Admin\r\n  </button>\r\n</div>\r\n<div class=\"col-xs-9 p-a-1\">\r\n  <div *ngFor=\"let product of products\" class=\"card card-outline-primary\">\r\n    <h4 class=\"card-header\">\r\n      {{product.name}}\r\n      <span class=\"pull-xs-right tag tag-pill tag-primary\">\r\n                {{ product.price | currency:\"USD\":true:\"2.2-2\" }}\r\n            </span>\r\n    </h4>\r\n    <div class=\"card-text p-a-1\">\r\n      {{product.description}}\r\n      <button class=\"btn btn-success btn-sm pull-xs-right\"\r\n              (click)=\"addProductToCart(product)\">\r\n        Add To Cart\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-inline pull-xs-left m-r-1\">\r\n    <select class=\"form-control\" [value]=\"productsPerPage\"\r\n            (change)=\"changePageSize($event.target.value)\">\r\n      <option value=\"3\">3 per Page</option>\r\n      <option value=\"4\">4 per Page</option>\r\n      <option value=\"6\">6 per Page</option>\r\n      <option value=\"8\">8 per Page</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"btn-group pull-xs-right\">\r\n    <button *counter=\"let page of pageCount\" (click)=\"changePage(page)\"\r\n            class=\"btn btn-outline-primary\" [class.active]=\"page == selectedPage\">\r\n      {{page}}\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StoreComponent = /** @class */ (function () {
    function StoreComponent(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.selectedCategory = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
    }
    Object.defineProperty(StoreComponent.prototype, "products", {
        get: function () {
            var pageIndex = (this.selectedPage - 1) * this.productsPerPage;
            return this.repository.getProducts(this.selectedCategory)
                .slice(pageIndex, pageIndex + this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.changeCategory = function (newCategory) {
        this.selectedCategory = newCategory;
    };
    StoreComponent.prototype.changePage = function (newPage) {
        this.selectedPage = newPage;
    };
    StoreComponent.prototype.changePageSize = function (newSize) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    };
    Object.defineProperty(StoreComponent.prototype, "pageCount", {
        get: function () {
            return Math.ceil(this.repository
                .getProducts(this.selectedCategory).length / this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.addProductToCart = function (product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    };
    StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/store/store.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_product_repository__WEBPACK_IMPORTED_MODULE_2__["ProductRepository"], _model_cart_model__WEBPACK_IMPORTED_MODULE_3__["Cart"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/model.module */ "./src/app/model/model.module.ts");
/* harmony import */ var _store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counter.directive */ "./src/app/store/counter.directive.ts");
/* harmony import */ var _cartsummary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cartsummary.component */ "./src/app/store/cartsummary.component.ts");
/* harmony import */ var _cartDetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cartDetail.component */ "./src/app/store/cartDetail.component.ts");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout.component */ "./src/app/store/checkout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_model_model_module__WEBPACK_IMPORTED_MODULE_4__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]],
            declarations: [_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"], _counter_directive__WEBPACK_IMPORTED_MODULE_6__["CounterDirective"], _cartsummary_component__WEBPACK_IMPORTED_MODULE_7__["CartSummaryComponent"], _cartDetail_component__WEBPACK_IMPORTED_MODULE_8__["CartDetailComponent"], _checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckOutComponent"]],
            exports: [_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"], _cartDetail_component__WEBPACK_IMPORTED_MODULE_8__["CartDetailComponent"], _checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckOutComponent"]]
        })
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/app/storeFirst.guard.ts":
/*!*************************************!*\
  !*** ./src/app/storeFirst.guard.ts ***!
  \*************************************/
/*! exports provided: StoreFirstGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFirstGuard", function() { return StoreFirstGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");




var StoreFirstGuard = /** @class */ (function () {
    function StoreFirstGuard(router) {
        this.router = router;
        this.firstNavigation = true;
    }
    StoreFirstGuard.prototype.canActivate = function (route, state) {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != _store_store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"]) {
                //this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    };
    StoreFirstGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StoreFirstGuard);
    return StoreFirstGuard;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\sportstore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map