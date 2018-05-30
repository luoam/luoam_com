"use strict";

/**
 * user
 * @param text
 */
var user = function (text) {
    if (text) {
        var obj = JSON.parse(text);
        this.account = obj.account;
        this.name = obj.name;
        this.tel = obj.tel;
        this.email = obj.email;
        this.wechat = obj.wechat;
        this.qq = obj.qq;
        this.comment = obj.comment;
        this.timestamp = obj.timestamp;
    } else {
        this.account = "";
        this.name = "";
        this.tel = "";
        this.email = "";
        this.wechat = "";
        this.qq = "";
        this.comment = "";
        this.timestamp = "";
    }

};
user.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};
/**
 * domains
 * @param text
 */
var domains = function (text) {
    if (text) {
        var obj = JSON.parse(text);
        this.domain_id = obj.domain_id;
        this.saler = obj.saler;
        this.domain_name = obj.domain_name;
        this.price = obj.price;
        this.description = obj.description;
        this.status = obj.status;
    } else {
        this.domain_id = "";
        this.saler = "";
        this.domain_name = "";
        this.price = "";
        this.description = "";
        this.status = "";
    }
};

domains.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};
/**
 * domains_log
 * @param text
 */
var domains_status = function (text) {
    if (text) {
        var obj = JSON.parse(text);
        this.domain_id = obj.domain_id;
        this.status = obj.status;
        this.timestamp = obj.timestamp;
        this.operator = obj.operator;
    } else {
        this.domain_id = "";
        this.status = "";
        this.timestamp = "";
        this.operator = "";
    }
};
domains_status.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};

/**
 * orders
 * @param text
 */
var orders = function (text) {
    if (text) {
        var obj = JSON.parse(text);
        this.order_id = obj.order_id;
        this.domain_id = obj.domain_id;
        this.buyer = obj.buyer;
        this.payment = obj.payment;
        this.description = obj.description;
        this.status = obj.status;
    } else {
        this.order_id = "";
        this.domain_id = "";
        this.buyer = "";
        this.payment = "";
        this.description = "";
        this.status = "";
    }
};
orders.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};
/**
 * order_status
 * @param text
 */
var orders_status = function (text) {
    if (text) {
        var obj = JSON.parse(text);
        this.order_id = obj.order_id;
        this.status = obj.status;
        this.timestamp = obj.timestamp;
        this.operator = obj.operator;
    } else {
        this.order_id = "";
        this.status = "";
        this.timestamp = "";
        this.operator = "";
    }
};
orders_status.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};
/**
 * balance
 * @param text
 */
var balance = function (text) {
    if (text) {
        var obj = JSON.parse(text);
        this.account = obj.account;
        this.value = obj.value;
    } else {
        this.account = "";
        this.value = "";
    }
};

balance.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};
/**
 * balance_log
 * @param text
 */
var balance_log = function (text) {
    if (text) {
        var obj = JSON.parse(text)
        {
            this.account = obj.account;
            this.order_id = obj.order_id;
            this.type = obj.type;
            this.value = obj.value;
            this.timestamp = obj.timestamp;
        }
    } else {
        this.account = "";
        this.order_id = "";
        this.type = "";
        this.value = "";
        this.timestamp = "";
    }
};

balance_log.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};

var luoamContract = function () {
    LocalContractStorage.defineMapProperty(this, "UserMap", {
        parse: function (text) {
            return new user(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
    LocalContractStorage.defineMapProperty(this, "DomainsMap", {
        parse: function (text) {
            return new domains(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
    LocalContractStorage.defineMapProperty(this, "DomainsStatusMap", {
        parse: function (text) {
            return JSON.parse(text);
        },
        stringify: function (o) {
            return JSON.stringify(o);
        }
    });
    LocalContractStorage.defineMapProperty(this, "OrdersMap", {
        parse: function (text) {
            return new orders(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
    LocalContractStorage.defineMapProperty(this, "OrdersStatusMap", {
        parse: function (text) {
            return JSON.parse(text);
        },
        stringify: function (o) {
            return JSON.stringify(o);
        }
    });
    LocalContractStorage.defineMapProperty(this, "BalanceMap", {
        parse: function (text) {
            return new balance(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
    LocalContractStorage.defineMapProperty(this, "BalanceLogMap", {
        parse: function (text) {
            return JSON.parse(text);
        },
        stringify: function (o) {
            return JSON.stringify(o);
        }
    });
    LocalContractStorage.defineProperty(this, "fee");
    LocalContractStorage.defineProperty(this, "cancelorderfee");
    LocalContractStorage.defineProperty(this, "onesurefee");
    LocalContractStorage.defineProperty(this, "twosurefee");
    LocalContractStorage.defineProperty(this, "SuperAdmin");
    LocalContractStorage.defineProperty(this, "domain_New");
    LocalContractStorage.defineProperty(this, "domain_Pending");
    LocalContractStorage.defineProperty(this, "domain_Closed");
    LocalContractStorage.defineProperty(this, "Order_New");
    LocalContractStorage.defineProperty(this, "Order_Pending");
    LocalContractStorage.defineProperty(this, "Order_Cancel");
    LocalContractStorage.defineProperty(this, "Order_Closed");
    LocalContractStorage.defineProperty(this, "Order_buyer_payment");
    LocalContractStorage.defineProperty(this, "Order_buyer_cancel");
    LocalContractStorage.defineProperty(this, "Order_saler_confirm");
    LocalContractStorage.defineProperty(this, "Order_buyer_confirm");
    LocalContractStorage.defineProperty(this, "nuclearbtn");
};

luoamContract.prototype = {
    init: function () {
        this.nuclearbtn = false;
        this.fee = 0;
        this.cancelorderfee = 1;
        this.onesurefee = 0;
        this.twosurefee = 0;
        this.domain_New = "New";
        this.domain_Pending = "Pending";
        this.domain_Closed = "Closed";
        this.Order_New = "New";
        this.Order_Pending = "Pending";
        this.Order_Cancel = "Cancel";
        this.Order_Closed = "Closed";
        this.Order_buyer_payment = "buyer_payment";
        this.Order_buyer_cancel = "buyer_cancel";
        this.Order_saler_confirm = "saler_confirm";
        this.Order_buyer_confirm = "buyer_confirm";
        this.SuperAdmin = 'n1Lvduf7mV6NBXwi43ahP3RqRKrnp6jHa8D';
        LocalContractStorage.set("Domains", {});
        LocalContractStorage.set("ClosedDomains", {});
        LocalContractStorage.set("Orders", {});
        LocalContractStorage.set("Users", {});
    },

    /**
     * 是否是json对象
     * @param val
     * @returns {boolean}
     * @private
     */
    _isObject: function (val) {
        return val != null && typeof val === 'object' && Array.isArray(val) === false;
    },

    /**
     * json转数组
     * @param json
     * @returns {Array}
     * @private
     */
    _json2array: function (json) {
        var arr = [];
        if (this._isObject(json)) {
            for (var i in json) {
                arr[i] = json[i];
            }
        }
        return arr;
    },

    /**
     * 数组装json
     * @param arr
     * @private
     */
    _array2json: function (arr) {
        var json = {};
        if (Array.isArray(arr)) {
            for (var i in arr) {
                json[i] = arr[i];
            }
        }
        return json;
    },

    /**
     * 返回元素在数组中的索引
     * @param array
     * @param val
     * @returns {number}
     * @private
     */
    _indexOf: function (array, val) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == val) return i;
        }
        return -1;
    },
    /**
     * 删除数组中的元素
     * @param array
     * @param val
     * @private
     */
    _remove: function (array, val) {
        var index = this._indexOf(array, val);
        if (index > -1) {
            array.splice(index, 1);
        }
        return array;
    },

    /**
     * contract transfer
     * @param from
     * @param to
     * @param value
     * @private
     */
    _transfer: function (from, to, value) {
        let result = Blockchain.transfer(to, value);
        let status = true;
        if (result) {
            status = true;
        } else {
            status = false;
        }
        Event.Trigger("transfer", {
            Status: status,
            Transfer: {
                from: from,
                to: to,
                value: value
            }
        });

    },

    _checkengine: function () {
        if (this.nuclearbtn) {
            throw new Error("此合约已经停止运行");
        }
    },
    /**
     * edit fee value
     * @param value
     * @returns {string}
     */
    Editfee: function (value) {
        let from = Blockchain.transaction.from;
        if (from == this.SuperAdmin) {
            let tvalue = parseFloat(value);
            if (isNaN(tvalue)) {
                throw new Error("参数错误");
            }
            this.fee = tvalue;
            return '{"result":"1"}';//操作成功
        } else {
            throw new Error("限制访问");
        }
    },

    Getfee: function () {
        return this.fee;
    },


    /**
     * edit cancelorderfee
     * @param value
     * @returns {string}
     */
    Editcancelorderfee: function (value) {
        let from = Blockchain.transaction.from;
        if (from == this.SuperAdmin) {
            let tvalue = parseFloat(value);
            if (isNaN(tvalue)) {
                throw new Error("参数错误");
            }
            this.cancelorderfee = tvalue;
            return '{"result":"1"}';//操作成功
        } else {
            throw new Error("限制访问");
        }
    },

    Getcancelorderfee: function () {
        return this.cancelorderfee;
    },
    /**
     * edit onesurefee value
     * @param value
     * @returns {string}
     */
    Editonesurefee: function (value) {
        let from = Blockchain.transaction.from;
        if (from == this.SuperAdmin) {
            let tvalue = parseFloat(value);
            if (isNaN(tvalue)) {
                throw new Error("参数错误");
            }
            this.onesurefee = tvalue;
            return '{"result":"1"}';//操作成功
        } else {
            throw new Error("限制访问");
        }
    },

    Getonesurefee: function () {
        return this.onesurefee;
    },
    /**
     * edit twosurefee value
     * @param value
     * @returns {string}
     */
    Edittwosurefee: function (value) {
        let from = Blockchain.transaction.from;
        if (from == this.SuperAdmin) {
            let tvalue = parseFloat(value);
            if (isNaN(tvalue)) {
                throw new Error("参数错误");
            }
            this.twosurefee = tvalue;
            return '{"result":"1"}';//操作成功
        } else {
            throw new Error("限制访问");
        }
    },
    Gettwosurefee: function () {
        return this.twosurefee;
    },

    /**
     * destroy the contract
     */
    stopengine: function () {
        let from = Blockchain.transaction.from;
        if (from === this.SuperAdmin) {
            this.nuclearbtn = true;
        } else {
            throw new Error("访问受限");
        }
    },

    /**
     * deploy the contract
     */
    startengine: function () {
        let from = Blockchain.transaction.from;
        if (from === this.SuperAdmin) {
            this.nuclearbtn = false;
        } else {
            throw new Error("访问受限");
        }
    },
    /**
     * register a new user
     * @param name
     * @param tel
     * @param email
     * @param wechat
     * @param qq
     * @param comment
     * @returns {string}
     */
    RegUser: function (name, tel, email, wechat, qq, comment) {
        this._checkengine();
        if (name === "" || email === "") {
            throw new Error("称呼和邮箱是必填的");
        }
        if (name.length > 30 || tel.length > 20 || email.length > 50 || wechat.length > 30 || qq.length > 20 || comment > 500) {
            throw new Error("输入的文字超过了最大长度");
        }

        let account = Blockchain.transaction.from;
        if (this.UserMap.get(account)) {
            throw new Error("已经注册过，不用重复注册");
        }
        let new_user = new user();
        let timestamp = Date.now();
        new_user.account = account;
        new_user.name = name;
        new_user.tel = tel;
        new_user.email = email;
        new_user.wechat = wechat;
        new_user.qq = qq;
        new_user.comment = comment;
        new_user.timestamp = timestamp;
        this.UserMap.set(account, new_user);
        let users = LocalContractStorage.get("Users");
        let usersArr = this._json2array(users);
        usersArr.push(account);
        users = this._array2json(usersArr);
        LocalContractStorage.set("Users", users);
        return '{"result":"1"}';
    },

    /**
     * edit user's info
     * @param name
     * @param tel
     * @param email
     * @param wechat
     * @param qq
     * @param comment
     * @returns {string}
     */
    EditUser: function (name, tel, email, wechat, qq, comment) {
        this._checkengine();
        if (name === "" || email === "") {
            throw new Error("称呼和邮箱是必填的");
        }
        if (name.length > 30 || tel.length > 20 || email.length > 50 || wechat.length > 30 || qq.length > 20 || comment > 500) {
            throw new Error("输入的文字超过了最大长度");
        }

        let account = Blockchain.transaction.from;
        let userinfo = this.UserMap.get(account);
        if (userinfo) {
            let new_user = new user();
            new_user.account = account;
            new_user.name = name;
            new_user.tel = tel;
            new_user.email = email;
            new_user.wechat = wechat;
            new_user.qq = qq;
            new_user.comment = comment;
            new_user.timestamp = userinfo.timestamp;
            this.UserMap.set(account, new_user);
            return '{"result":"1"}';
        } else {
            throw new Error("您还没有注册过，请先注册");
        }

    },
    /**
     * 获取用户资料
     * @param account
     * @returns {*}
     * @constructor
     */
    GetUser: function (account) {
        this._checkengine();
        let userinfo = this.UserMap.get(account);
        if (userinfo) {
            return userinfo;
        } else {
            throw new Error("用户信息不存在");
        }
    },

    GetUsers:function(limit,offset){
        this._checkengine();
        limit = parseInt(limit);
        offset = parseInt(offset);
        let userslist = LocalContractStorage.get("Users");
        let userslistArr = this._json2array(userslist);
        if (offset > userslistArr.length) {
            throw new Error("offset 数值太大");
        }
        let number = offset + limit;
        if (number > userslistArr.length) {
            number = userslistArr.length;
        }

        let result = [];
        for (var i = offset; i < number; i++) {
            let fti = this.UserMap.get(userslistArr[i]);
            result.push(fti);
        }
        return result;
    },
    /**
     * public new domain
     * @param domain_name
     * @param price
     * @param description
     * @returns {string}
     */
    PublicDomain: function (domain_name, price, description) {
        this._checkengine();
        let saler = Blockchain.transaction.from;
        if (this.UserMap.get(saler)) {
            if (domain_name === "" || price === "" || description === "") {
                throw new Error("必填字段不能为空");
            }
            if (domain_name.length > 100 || isNaN(parseFloat(price)) || description.length > 500) {
                throw new Error("参数错误！")
            }
            let timestamp = Date.now();
            let domain_id = saler + "_" + timestamp;
            let status = this.domain_New;
            let domain = new domains();
            domain.domain_id = domain_id;
            domain.saler = saler;
            domain.domain_name = domain_name;
            domain.price = parseFloat(price).toFixed(8);
            domain.description = description;
            domain.status = status;
            this.DomainsMap.set(domain_id, domain);
            //step1
            let domainslist = LocalContractStorage.get("Domains");
            let domainsArr = this._json2array(domainslist);
            domainsArr.push(domain_id);
            domainslist = this._array2json(domainsArr);
            LocalContractStorage.set("Domains", domainslist);
            //step2
            let domain_status_tmp = [];
            let domain_status = new domains_status();
            domain_status.domain_id = domain_id;
            domain_status.status = this.domain_New;
            domain_status.timestamp = timestamp;
            domain_status.operator = saler;
            domain_status_tmp.push(domain_status);
            this.DomainsStatusMap.set(domain_id, domain_status_tmp);
            return '{"result":"1"}';

        } else {
            throw new Error("您还没有注册过，请先注册");
        }

    },

    /**
     * edit domain profile
     * @param domain_id
     * @param price
     * @param description
     * @returns {string}
     */
    EditDomain: function (domain_id, price, description) {
        this._checkengine();
        let saler = Blockchain.transaction.from;
        if (this.UserMap.get(saler)) {
            if (price === "" || description === "") {
                throw new Error("必填字段不能为空");
            }
            if (isNaN(parseFloat(price)) || description.length > 500) {
                throw new Error("参数错误！")
            }
            let timestamp = Date.now();
            let domain_info = this.DomainsMap.get(domain_id);
            if (domain_info) {
                let status = domain_info.status;
                if (status === this.domain_New && domain_info.saler === saler) {
                    domain_info.price = parseFloat(price).toFixed(8);
                    domain_info.description = description;
                    this.DomainsMap.set(domain_id, domain_info);
                    let domain_status_tmp = this.DomainsStatusMap.get(domain_id);
                    let domain_status = new domains_status();
                    domain_status.domain_id = domain_id;
                    domain_status.status = this.domain_New;
                    domain_status.timestamp = timestamp;
                    domain_status.operator = saler;
                    domain_status_tmp.push(domain_status);
                    this.DomainsStatusMap.set(domain_id, domain_status_tmp);
                    return '{"result":"1"}';
                } else {
                    throw new Error("域名所处的状态为不可编辑！")
                }
            } else {
                throw new Error("域名不存在！")
            }
        } else {
            throw new Error("您还没有注册过，请先注册");
        }
    },

    /**
     * create new order
     * @param domain_id
     * @param description
     * @returns {string}
     */
    NewOrder: function (domain_id, description) {
        this._checkengine();
        let buyer = Blockchain.transaction.from;
        if (this.UserMap.get(buyer)) {
            let domain_info = this.DomainsMap.get(domain_id);
            if (domain_info) {
                let status = domain_info.status;
                if (status === this.domain_New) {
                    //新建订单
                    //新建订单状态map
                    //新建余额map,余额日志map
                    //修改域名状态
                    //新建域名状态map
                    let payment = Blockchain.transaction.value;
                    let domain_price = domain_info.price;
                    let price = new BigNumber(domain_price * 1000000000000000000);
                    if (payment.lt(price)) {
                        throw new Error("不能低于域名设定的价格，你需要支付" + domain_price + "NAS");
                    }
                    let timestamp = Date.now();
                    let order_id = buyer + "_" + timestamp;
                    let order = new orders();
                    order.order_id = order_id;
                    order.domain_id = domain_id;
                    order.buyer = buyer;
                    order.payment = payment;
                    order.description = description;
                    order.status = this.Order_New;
                    this.OrdersMap.set(order_id, order);
                    //step1
                    let orderslist = LocalContractStorage.get("Orders");
                    let orderslistArr = this._json2array(orderslist);
                    orderslistArr.push(order_id);
                    orderslist = this._array2json(orderslistArr);
                    LocalContractStorage.set("Orders", orderslist);
                    //step2
                    //create new order
                    let order_status_tmp = [];
                    let order_status = new orders_status();
                    order_status.order_id = order_id;
                    order_status.status = this.Order_buyer_payment;
                    order_status.timestamp = timestamp;
                    order_status.operator = buyer;
                    order_status_tmp.push(order_status);
                    this.OrdersStatusMap.set(order_id, order_status_tmp);
                    //add new order status
                    let balance_buyer = this.BalanceMap.get(buyer);
                    let value;
                    value = payment;
                    if (balance_buyer) {
                        let balance_buyer_value_temp = new BigNumber(balance_buyer.value);
                        value = value.plus(balance_buyer_value_temp);
                    }
                    let balance_b = new balance();
                    balance_b.account = buyer;
                    balance_b.value = value;
                    this.BalanceMap.set(buyer, balance_b);
                    //create balance
                    let balance_log_tmp = this.BalanceLogMap.get(buyer);
                    if (!balance_log_tmp) {
                        balance_log_tmp = [];
                    }
                    let balance_log_b = new balance_log();
                    balance_log_b.account = buyer;
                    balance_log_b.order_id = order_id;
                    balance_log_b.type = "IN";
                    balance_log_b.value = payment;
                    balance_log_b.timestamp = timestamp;
                    balance_log_tmp.push(balance_log_b);
                    this.BalanceLogMap.set(buyer, balance_log_tmp);
                    //create balancelog
                    domain_info.status = this.domain_Pending;
                    this.DomainsMap.set(domain_id, domain_info);
                    //change domain status
                    let domain_status_tmp = this.DomainsStatusMap.get(domain_id);
                    let domain_status = new domains_status();
                    domain_status.domain_id = domain_id;
                    domain_status.status = this.domain_Pending;
                    domain_status.timestamp = timestamp;
                    domain_status.operator = buyer;
                    domain_status_tmp.push(domain_status);
                    this.DomainsStatusMap.set(domain_id, domain_status_tmp);
                    //add domain status
                    return '{"result":"1"}';
                } else {
                    throw new Error("域名所处的状态为不可购买！")
                }
            } else {
                throw new Error("域名不存在！")
            }

        } else {
            throw new Error("您还没有注册过，请先注册");
        }
    },

    /**
     * cancel order
     * @param order_id
     * @returns {string}
     */
    CancelOrder: function (order_id) {
        this._checkengine();
        let buyer = Blockchain.transaction.from;
        let cost = Blockchain.transaction.value;
        let precost = new BigNumber(this.cancelorderfee * 1000000000000000000);
        if (cost.lt(precost)) {
            throw new Error("取消订单，你需要支付" + this.cancelorderfee + "NAS");
        }
        this._transfer(Blockchain.transaction.to, this.SuperAdmin, cost);
        if (this.UserMap.get(buyer)) {
            let order_info = this.OrdersMap.get(order_id);
            if (order_info) {
                if (order_info.status === this.Order_New && order_info.buyer === buyer) {
                    let timestamp = Date.now();
                    //step1
                    order_info.status = this.Order_Cancel;
                    this.OrdersMap.set(order_id, order_info);
                    //step2
                    let order_status_tmp = this.OrdersStatusMap.get(order_id);
                    let order_status = new orders_status();
                    order_status.order_id = order_id;
                    order_status.status = this.Order_buyer_cancel;
                    order_status.timestamp = timestamp;
                    order_status.operator = buyer;
                    order_status_tmp.push(order_status);
                    this.OrdersStatusMap.set(order_id, order_status_tmp);
                    //step3
                    let domain_id = order_info.domain_id;
                    let domain_info = this.DomainsMap.get(domain_id);
                    domain_info.status = this.domain_New;
                    this.DomainsMap.set(domain_id, domain_info);
                    //step4
                    let domain_status_tmp = this.DomainsStatusMap.get(domain_id);
                    let domain_status = new domains_status();
                    domain_status.domain_id = domain_id;
                    domain_status.status = this.domain_New;
                    domain_status.timestamp = timestamp;
                    domain_status.operator = buyer;
                    domain_status_tmp.push(domain_status);
                    this.DomainsStatusMap.set(domain_id, domain_status_tmp);
                    //step5 pay back payment to buyer
                    let payment = order_info.payment;
                    this._transfer(Blockchain.transaction.to, buyer, payment);
                    let balance_buyer = this.BalanceMap.get(buyer);
                    let value = new BigNumber(balance_buyer.value);
                    value = value.sub(payment);
                    let balance_b = new balance();
                    balance_b.account = buyer;
                    balance_b.value = value;
                    this.BalanceMap.set(buyer, balance_b);
                    //create balance
                    let balance_log_tmp = this.BalanceLogMap.get(buyer);
                    if (!balance_log_tmp) {
                        balance_log_tmp = [];
                    }
                    let balance_log_b = new balance_log();
                    balance_log_b.account = buyer;
                    balance_log_b.order_id = order_id;
                    balance_log_b.type = "OUT";
                    balance_log_b.value = payment;
                    balance_log_b.timestamp = timestamp;
                    balance_log_tmp.push(balance_log_b);
                    this.BalanceLogMap.set(buyer, balance_log_tmp);
                    return '{"result":"1"}';
                } else {
                    throw new Error("当前订单不支持本次取消操作！")
                }
            } else {
                throw new Error("订单不存在！")
            }
        } else {
            throw new Error("您还没有注册过，请先注册");
        }
    },

    /**
     * saler confirm order ,the fact is saler has push domain to buyer
     * @param order_id
     * @returns {string}
     * @constructor
     */
    SalerConfirmOrder: function (order_id) {
        this._checkengine();
        let saler = Blockchain.transaction.from;
        let cost = Blockchain.transaction.value;
        let precost = new BigNumber(this.twosurefee * 1000000000000000000);
        if (cost.lt(precost)) {
            throw new Error("确认订单，你需要支付" + this.twosurefee + "NAS");
        }
        this._transfer(Blockchain.transaction.to, this.SuperAdmin, cost);
        if (this.UserMap.get(saler)) {
            let order_info = this.OrdersMap.get(order_id);
            if (order_info) {
                let domain_id = order_info.domain_id;
                let domain_info = this.DomainsMap.get(domain_id);
                if (domain_info.saler === saler && order_info.status === this.Order_New) {
                    let timestamp = Date.now();
                    //step1
                    order_info.status = this.Order_Pending;
                    this.OrdersMap.set(order_id, order_info);
                    //step2
                    let order_status_tmp = this.OrdersStatusMap.get(order_id);
                    let order_status = new orders_status();
                    order_status.order_id = order_id;
                    order_status.status = this.Order_saler_confirm;
                    order_status.timestamp = timestamp;
                    order_status.operator = saler;
                    order_status_tmp.push(order_status);
                    this.OrdersStatusMap.set(order_id, order_status_tmp);
                    return '{"result":"1"}';
                } else {
                    throw new Error("当前订单不支持本次确认操作！")
                }
            } else {
                throw new Error("订单不存在！")
            }
        } else {
            throw new Error("您还没有注册过，请先注册");
        }
    },

    /**
     * buyer confirm the order
     * @param order_id
     * @returns {string}
     * @constructor
     */
    BuyerConfirmOrder: function (order_id) {
        this._checkengine();
        let buyer = Blockchain.transaction.from;
        let cost = Blockchain.transaction.value;
        let precost = new BigNumber(this.onesurefee * 1000000000000000000);
        if (cost.lt(precost)) {
            throw new Error("确认订单，你需要支付" + this.onesurefee + "NAS");
        }
        this._transfer(Blockchain.transaction.to, this.SuperAdmin, cost);
        if (this.UserMap.get(buyer)) {
            let order_info = this.OrdersMap.get(order_id);
            if (order_info) {
                if (order_info.buyer === buyer && order_info.status === this.Order_Pending) {
                    let timestamp = Date.now();
                    //step1
                    order_info.status = this.Order_Closed;
                    this.OrdersMap.set(order_id, order_info);
                    //step2
                    let order_status_tmp = this.OrdersStatusMap.get(order_id);
                    let order_status = new orders_status();
                    order_status.order_id = order_id;
                    order_status.status = this.Order_buyer_confirm;
                    order_status.timestamp = timestamp;
                    order_status.operator = buyer;
                    order_status_tmp.push(order_status);
                    this.OrdersStatusMap.set(order_id, order_status_tmp);
                    //step3
                    let domain_id = order_info.domain_id;
                    let domain_info = this.DomainsMap.get(domain_id);
                    let saler = domain_info.saler;
                    domain_info.status = this.domain_Closed;
                    this.DomainsMap.set(domain_id, domain_info);

                    //step31
                    let ClosedDomainslist = LocalContractStorage.get("ClosedDomains");
                    let ClosedDomainslistArr = this._json2array(ClosedDomainslist);
                    ClosedDomainslistArr.push(domain_id);
                    ClosedDomainslist = this._array2json(ClosedDomainslistArr);
                    LocalContractStorage.set("ClosedDomains", ClosedDomainslist);
                    //step32
                    let domainslist = LocalContractStorage.get("Domains");
                    let domainsArr = this._json2array(domainslist);
                    this._remove(domainsArr, domain_id)
                    domainslist = this._array2json(domainsArr);
                    LocalContractStorage.set("Domains", domainslist);
                    //step4
                    let domain_status_tmp = this.DomainsStatusMap.get(domain_id);
                    let domain_status = new domains_status();
                    domain_status.domain_id = domain_id;
                    domain_status.status = this.domain_Closed;
                    domain_status.timestamp = timestamp;
                    domain_status.operator = buyer;
                    domain_status_tmp.push(domain_status);
                    this.DomainsStatusMap.set(domain_id, domain_status_tmp);
                    //step5
                    let balance_buyer = this.BalanceMap.get(buyer);
                    let balance_saler = this.BalanceMap.get(saler);
                    let payment = order_info.payment;
                    payment = new BigNumber(payment);
                    let balance_buyer_value = new BigNumber(balance_buyer.value);
                    let price = domain_info.price;
                    let value_buyer = balance_buyer_value.sub(payment);
                    let nbigprice = new BigNumber(price * 1000000000000000000);
                    let value_saler_value = new BigNumber(0);
                    if (balance_saler) {
                        value_saler_value = new BigNumber(balance_saler.value);
                    }
                    let value_saler = value_saler_value.plus(nbigprice);
                    if (payment.gt(nbigprice)) {
                        this._transfer(Blockchain.transaction.to, this.SuperAdmin, payment.sub(nbigprice));
                    }
                    let buyer_balance = new balance();
                    buyer_balance.account = buyer;
                    buyer_balance.value = value_buyer;
                    this.BalanceMap.set(buyer, buyer_balance);
                    let saler_balance = new balance();
                    saler_balance.account = saler;
                    saler_balance.value = value_saler;
                    this.BalanceMap.set(saler, saler_balance);
                    //step6
                    let balance_log_tmp_buyer = this.BalanceLogMap.get(buyer);
                    if (!balance_log_tmp_buyer) {
                        balance_log_tmp_buyer = [];
                    }
                    let balance_log_buyer = new balance_log();
                    balance_log_buyer.account = buyer;
                    balance_log_buyer.order_id = order_id;
                    balance_log_buyer.type = "OUT";
                    balance_log_buyer.value = payment;
                    balance_log_buyer.timestamp = timestamp;
                    balance_log_tmp_buyer.push(balance_log_buyer);
                    this.BalanceLogMap.set(buyer, balance_log_tmp_buyer);
                    //step6.1
                    let balance_log_tmp_saler = this.BalanceLogMap.get(saler);
                    if (!balance_log_tmp_saler) {
                        balance_log_tmp_saler = [];
                    }
                    let balance_log_saler = new balance_log();
                    balance_log_saler.account = saler;
                    balance_log_saler.order_id = order_id;
                    balance_log_saler.type = "IN";
                    balance_log_saler.value = nbigprice;
                    balance_log_saler.timestamp = timestamp;
                    balance_log_tmp_saler.push(balance_log_saler);
                    this.BalanceLogMap.set(saler, balance_log_tmp_saler);
                    ////step7  transfer the nas of domain to saler
                    //the same time ,should pay fee to the platform
                    let platform_fee = new BigNumber(this.fee * nbigprice);
                    let saler_due = new BigNumber((1 - this.fee) * nbigprice);
                    this._transfer(Blockchain.transaction.to, this.SuperAdmin, platform_fee);
                    this._transfer(Blockchain.transaction.to, saler, saler_due);
                    let nbalance_saler = this.BalanceMap.get(saler);
                    let nbalance_saler_value = new BigNumber(nbalance_saler.value);
                    let nvalue_saler = nbalance_saler_value.sub(nbigprice);
                    let nsaler_balance = new balance();
                    nsaler_balance.account = saler;
                    nsaler_balance.value = nvalue_saler;
                    this.BalanceMap.set(saler, nsaler_balance);
                    //step7.1
                    let nbalance_log_tmp_saler = this.BalanceLogMap.get(saler);
                    let nbalance_log_saler = new balance_log();
                    nbalance_log_saler.account = saler;
                    nbalance_log_saler.order_id = order_id;
                    nbalance_log_saler.type = "OUT";
                    nbalance_log_saler.value = nbigprice;
                    nbalance_log_saler.timestamp = timestamp;
                    nbalance_log_tmp_saler.push(nbalance_log_saler);
                    this.BalanceLogMap.set(saler, nbalance_log_tmp_saler);
                    return '{"result":"1"}';
                } else {
                    throw new Error("当前订单不支持本次确认操作！")
                }
            } else {
                throw new Error("订单不存在！")
            }
        } else {
            throw new Error("您还没有注册过，请先注册");
        }
    },

    /**
     * get new Domains
     * @param limit
     * @param offset
     * @returns {Array}
     * @constructor
     */
    GetDomains: function (limit, offset) {
        this._checkengine();
        limit = parseInt(limit);
        offset = parseInt(offset);
        let Domainslist = LocalContractStorage.get("Domains");
        let DomainslistArr = this._json2array(Domainslist);
        if (offset > DomainslistArr.length) {
            throw new Error("offset 数值太大");
        }
        let number = offset + limit;
        if (number > DomainslistArr.length) {
            number = DomainslistArr.length;
        }

        let result = [];
        for (var i = offset; i < number; i++) {
            let fti = this.DomainsMap.get(DomainslistArr[i]);
            result.push(fti);
        }
        return result;
    },


    /**
     * get new Domains and total number
     * @param limit
     * @param offset
     * @returns {Array}
     * @constructor
     */
    GetDomainsandTotals: function (limit, offset) {
        this._checkengine();
        limit = parseInt(limit);
        offset = parseInt(offset);
        let Domainslist = LocalContractStorage.get("Domains");
        let DomainslistArr = this._json2array(Domainslist);
        if (offset > DomainslistArr.length) {
            throw new Error("offset 数值太大");
        }
        let number = offset + limit;
        if (number > DomainslistArr.length) {
            number = DomainslistArr.length;
        }

        let result = [];
        for (var i = offset; i < number; i++) {
            let fti = this.DomainsMap.get(DomainslistArr[i]);
            result.push(fti);
        }
        let res = {};
        res.result = result;
        res.total = DomainslistArr.length;
        return res;
    },
    /**
     * return the latest domain
     * @param limit
     * @param offset
     * @returns {Array}
     * @constructor
     */
    GetDomainsDesc: function (limit, offset) {
        this._checkengine();
        limit = parseInt(limit);
        offset = parseInt(offset);
        let Domainslist = LocalContractStorage.get("Domains");
        let DomainslistArr = this._json2array(Domainslist);
        if (limit >= DomainslistArr.length) {
            offset = 0;
        } else {
            offset = DomainslistArr.length - limit;
        }
        let number = offset + limit;
        if (number > DomainslistArr.length) {
            number = DomainslistArr.length;
        }

        let result = [];
        for (var i = offset; i < number; i++) {
            let fti = this.DomainsMap.get(DomainslistArr[i]);
            result.push(fti);
        }
        return result;
    },
    /**
     * get closed domains
     * @param limit
     * @param offset
     * @returns {Array}
     * @constructor
     */
    GetClosedDomains: function (limit, offset) {
        this._checkengine();
        limit = parseInt(limit);
        offset = parseInt(offset);
        let Domainslist = LocalContractStorage.get("ClosedDomains");
        let DomainslistArr = this._json2array(Domainslist);
        if (offset > DomainslistArr.length) {
            throw new Error("offset 数值太大");
        }
        let number = offset + limit;
        if (number > DomainslistArr.length) {
            number = DomainslistArr.length;
        }

        let result = [];
        for (var i = offset; i < number; i++) {
            let fti = this.DomainsMap.get(DomainslistArr[i]);
            result.push(fti);
        }
        return result;
    },

    /**
     * get closed domains and total numbers
     * @param limit
     * @param offset
     * @returns {Array}
     * @constructor
     */
    GetClosedDomainsandTotals: function (limit, offset) {
        this._checkengine();
        limit = parseInt(limit);
        offset = parseInt(offset);
        let Domainslist = LocalContractStorage.get("ClosedDomains");
        let DomainslistArr = this._json2array(Domainslist);
        if (offset > DomainslistArr.length) {
            throw new Error("offset 数值太大");
        }
        let number = offset + limit;
        if (number > DomainslistArr.length) {
            number = DomainslistArr.length;
        }

        let result = [];
        for (var i = offset; i < number; i++) {
            let fti = this.DomainsMap.get(DomainslistArr[i]);
            result.push(fti);
        }
        let res = {};
        res.result = result;
        res.total = DomainslistArr.length;
        return res;
    },
    /**
     * return the latest closeddomain
     * @param limit
     * @param offset
     * @returns {Array}
     * @constructor
     */
    GetClosedDomainsDesc: function (limit, offset) {
        this._checkengine();
        limit = parseInt(limit);
        offset = parseInt(offset);
        let Domainslist = LocalContractStorage.get("ClosedDomains");
        let DomainslistArr = this._json2array(Domainslist);
        if (limit >= DomainslistArr.length) {
            offset = 0;
        } else {
            offset = DomainslistArr.length - limit;
        }
        let number = offset + limit;
        if (number > DomainslistArr.length) {
            number = DomainslistArr.length;
        }

        let result = [];
        for (var i = offset; i < number; i++) {
            let fti = this.DomainsMap.get(DomainslistArr[i]);
            result.push(fti);
        }
        return result;
    },

    /**
     * return order_info
     * @param domain_id
     * @returns {*}
     * @constructor
     */
    GetOrderByDomain: function (domain_id) {
        this._checkengine();
        let Orderslist = LocalContractStorage.get("Orders");
        let OrderslistArr = this._json2array(Orderslist);
        let order_info;
        if (OrderslistArr.length < 1) {
            OrderslistArr.length = 1;
        }
        for (var i = OrderslistArr.length - 1; i >= 0; i--) {
            let order_id = OrderslistArr[i];
            order_info = this.OrdersMap.get(order_id);
            if (order_info.domain_id === domain_id) {
                break;
            }
        }
        return order_info;

    },

    /**
     * return orders of the domain
     * @param domain_id
     * @returns {Array}
     * @constructor
     */
    GetOrdersByDomain: function (domain_id) {
        this._checkengine();
        let Orderslist = LocalContractStorage.get("Orders");
        let OrderslistArr = this._json2array(Orderslist);
        let order_info;
        if (OrderslistArr.length < 1) {
            OrderslistArr.length = 1;
        }
        let result=[];
        for (var i = OrderslistArr.length - 1; i >= 0; i--) {
            let order_id = OrderslistArr[i];
            order_info = this.OrdersMap.get(order_id);
            if (order_info.domain_id === domain_id) {
                result.push(order_info);
            }
        }
        return result;

    },
    /**
     * get my domains
     * @param limit
     * @param offset
     * @param account
     * @returns {Array}
     * @constructor
     */
    GetMyDomains: function (limit, offset, account) {
        this._checkengine();
        limit = parseInt(limit);
        offset = parseInt(offset);
        let Domainslist = LocalContractStorage.get("Domains");
        let DomainslistArr = this._json2array(Domainslist);
        if (offset > DomainslistArr.length) {
            throw new Error("offset 数值太大");
        }
        let j = 0;
        let result = [];
        for (var i = offset; i < DomainslistArr.length; i++) {
            let domain_id = DomainslistArr[i];
            let accounts = domain_id.split("_");
            if (accounts[0] === account) {
                result.push(this.DomainsMap.get(domain_id));
                j += 1;
                if (j === limit) {
                    break;
                }
            }
        }
        return result;
    },

    /**
     * get my closed domains
     * @param limit
     * @param offset
     * @param account
     * @returns {Array}
     * @constructor
     */
    GetMyClosedDomains: function (limit, offset, account) {
        this._checkengine();
        limit = parseInt(limit);
        offset = parseInt(offset);
        let Domainslist = LocalContractStorage.get("ClosedDomains");
        let DomainslistArr = this._json2array(Domainslist);
        if (offset > DomainslistArr.length) {
            throw new Error("offset 数值太大");
        }
        let j = 0;
        let result = [];
        for (var i = offset; i < DomainslistArr.length; i++) {
            let domain_id = DomainslistArr[i];
            let accounts = domain_id.split("_");
            if (accounts[0] === account) {
                result.push(this.DomainsMap.get(domain_id));
                j += 1;
                if (j === limit) {
                    break;
                }
            }
        }

        return result;
    },

    /**
     * get my orders
     * @param limit
     * @param offset
     * @param account
     * @returns {Array}
     * @constructor
     */
    GetMyOrders: function (limit, offset, account) {
        this._checkengine();
        limit = parseInt(limit);
        offset = parseInt(offset);
        let Orderslist = LocalContractStorage.get("Orders");
        let OrderslistArr = this._json2array(Orderslist);
        if (offset > OrderslistArr.length) {
            throw new Error("offset 数值太大");
        }
        let j = 0;
        let result = [];
        for (var i = offset; i < OrderslistArr.length; i++) {
            let order_id = OrderslistArr[i];
            let accounts = order_id.split("_");
            if (accounts[0] === account) {
                let order_info = this.OrdersMap.get(order_id)
                let domain_id = order_info.domain_id;
                let domain_info = this.DomainsMap.get(domain_id);
                order_info.domain_info = domain_info;
                result.push(order_info);
                j += 1;
                if (j === limit) {
                    break;
                }
            }
        }
        return result;
    },

    /**
     * get account's balance
     * @param account
     * @returns {*}
     * @constructor
     */
    GetMyBalance: function (account) {
        this._checkengine();
        let balance_account = this.BalanceMap.get(account);
        if (balance_account) {
            return balance_account;
        } else {
            throw new Error("没有此账号的余额信息");
        }
    },

    /**
     * get account's balance log
     * @param account
     * @returns {*}
     * @constructor
     */
    GetMyBalanceLog: function (account) {
        this._checkengine();
        let log_account = this.BalanceLogMap.get(account);
        if (log_account) {
            return log_account;
        } else {
            throw new Error("没有此账号的余额信息");
        }
    },

    /**
     * get domain's status change log
     * @param domain_id
     * @returns {*}
     * @constructor
     */
    GetDomainLog: function (domain_id) {
        this._checkengine();
        let domain_status_tmp = this.DomainsStatusMap.get(domain_id);
        if (domain_status_tmp) {
            return domain_status_tmp;
        } else {
            throw new Error("没有此域名的信息");
        }
    },

    /**
     * get order's status change log
     * @param order_id
     * @returns {*}
     * @constructor
     */
    GetOrderLog: function (order_id) {
        this._checkengine();
        let order_status_tmp = this.OrdersStatusMap.get(order_id);
        if (order_status_tmp) {
            return order_status_tmp;
        } else {
            throw new Error("没有此订单的信息");
        }
    },

    /**
     * get domain info by domain_id
     * @param domain_id
     * @returns {*}
     * @constructor
     */
    GetDomainByid: function (domain_id) {
        this._checkengine();
        let domain_info = this.DomainsMap.get(domain_id);
        if (domain_info) {
            return domain_info;
        } else {
            throw new Error("没有此域名的信息");
        }
    },

    /**
     *
     * @param order_id
     * @returns {*}
     * @constructor
     */
    GetOrderByid: function (order_id) {
        this._checkengine();
        let order_info = this.OrdersMap.get(order_id);
        if (order_info) {
            let domain_id = order_info.domain_id;
            let domain_info = this.DomainsMap.get(domain_id);
            order_info.domain_info = domain_info;
            return order_info;
        } else {
            throw new Error("没有此订单的信息");
        }
    },

    /**
     * a way let user can take out their balance,only when the nuclear button pressed
     */
    takeOutBalance: function () {
        if (this.nuclearbtn) {
            let account = Blockchain.transaction.from;
            let balance_account = this.BalanceMap.get(account);
            if (balance_account) {
                this._transfer(Blockchain.transaction.to, account, balance_account.value);
            }
        }else {
            throw new Error("取出账户余额的功能只在该智能合约被按下‘核按钮’之后才启用，是一种尽可能挽回用户财产的自救方式,尽管这种设计并不完美。");
        }

    }
};
module.exports = luoamContract;