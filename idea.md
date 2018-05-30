
发布域名
====
输入字段：域名、一口价格、简介
保存结构：
* domains
    * domain_id 编号
    * saler  域名卖家
    * domain_name   域名名称
    * price  一口价价格
    * description  简介
    * status (New:表示新域名，Pending:表示有人下单，Closed表示已售出）
    
域名状态日志
====
* domains_status
    * domain_id 域名编号
    * status 状态
    * timestamp 时间戳
    * operator 操作者
订单
====
字段结构
* orders
    * order_id      订单编号
    * domain_id     域名编号
    * buyer         买家
    * payment       付款金额
    * status        订单状态（New：表示新订单，Cancel：表示订单取消，Closed：表示订单关闭）

买家付款，订单价格存入合约，卖家确认收到款，联系买家处理域名手续，之后卖家确认已转出域名，然后买家确认已收到域名，合约将域名的费用转给卖家

订单状态表
====
字段结构
* order_status
    * order_id      订单编号
    * status        订单最新状态（buyer_payment买家付款；buyer_cancel买家取消;saler_confirm:表示卖家确认；buyer_confirm：表示买家确认,）
    * timestamp     时间戳
    * operator      操作者
    
账户余额
====
字段结构
*balance
    * account 买家账户\卖家账户
    * value 余额
    
账户日志
====
*balance_log
    * account   买家账户\卖家账户
    * order_id       变更事项
    * type      收入或者支出
    * timestamp 时间戳
    
管理员
====
    
    
    
业务逻辑
====
用户注册，姓名和邮箱地址必须填
发布域名，域名初始发布，status为New  ，域名状态日志中增加一行为New的操作记录
新订单，买家付款产生一个新订单，订单状态为New，域名状态变为Pending，订单状态日志中增加一行为买家付款的记录，域名状态日志
记录中增加一行Pending的记录，Balance中增加一个账户余额，在BalanceLog中增加一行订单id和操作金额的记录

卖家接受订单，并且进行了确认操作，订单的状态变为Pending,此时订单不在接受取消操作。


获取域名清单
获取已出售域名清单

提现功能。

管理员按下核按钮功能，按下核按钮，这个智能合约立即作废