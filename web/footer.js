"user strict";

var footer = {
    about: function () {
        let str = "<p>这是通过星云链智能合约的方式开发的去中心化域名交易市场应用。智能合约实现了五个模块：用户模块" +
            "、域名模块、订单模块、余额模块、日志审计模块。<br>整个交易过程概况为：卖家发布域名，买家发起购买订单，卖家确认订单，买家确认订单" +
            "，这些过程均在智能合约上完成。</p>";
        return str;
    },

    articles: function () {
        let str = "<ul class=\"clean-list\">" +
            "                        <li><a href=\"index.html\">首页</a></li>" +
            "                        <li><a href=\"user_reg.html\">注册</a></li>" +
            "                        <li><a href=\"user_login.html\">登录</a></li>" +
            "                        <li><a href=\"user_edit.html\">信息维护</a></li>" +
            "                        <li><a href=\"user_domains.html\">域名管理</a></li>" +
            "                        <li><a href=\"user_orders.html\">订单管理</a></li>" +
            "                        <li><a href=\"user_balance.html\">余额管理</a></li>" +
            "                    </ul>";
        return str;
    },
    contactme: function () {
        let str = "<p>有任何的疑问，可以通过以下方式联系我：<br>" +
            "github：<a href=\"https://github.com/luoam/luoam_com\"> https://github.com/luoam/luoam_com</a>" +
            "<br>微信：" +
            "<img src=\"http://static.anman.org/myweixin.jpg\" style=\"width: 200px;\"> </p>";

        return str;
    },
    copyright: function () {
        let str = "Copyright © 2018-2050 <a href=\"http://www.luoam.com/\" target=\"_blank\" title=\"去中心化域名交易市场\">去中心化域名交易市场</a> - " +
            "        <a href=\"http://www.miibeian.gov.cn/\" title=\"浙ICP备14037650号\" target=\"_blank\">浙ICP备14037650号</a>";
        return str;
    }
};
