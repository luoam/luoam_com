"user strict";

var footer = {
    about: function () {
        let str = "<p>这是通过星云链智能合约的方式开发的去中心化域名交易市场应用。</p>";
        return str;
    },

    articles: function () {
        let str = "<ul class=\"clean-list\">" +
            "                        <li><a href=\"index.html\">首页</a></li>" +
            "                        <li><a href=\"user_reg.html\">注册</a></li>" +
            "                        <li><a href=\"user_login.html\">登录</a></li>" +
            "                    </ul>";
        return str;
    },
    contactme: function () {
        let str = "<p>github：http://github.com/luoam/.</p>";

        return str;
    },
    copyright: function () {
        let str = "Copyright © 2018-2050 <a href=\"http://www.luoam.com/\" target=\"_blank\" title=\"去中心化域名交易市场\">去中心化域名交易市场</a> - " +
            "        <a href=\"http://www.miibeian.gov.cn/\" title=\"浙ICP备14037650号\" target=\"_blank\">浙ICP备14037650号</a>";
        return str;
    }
};
