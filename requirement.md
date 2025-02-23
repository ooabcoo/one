## 这是一个鸿蒙NEXT api V13版本+云数据库+云函数+云托管的端云一体化开发的元服务，主要功能是：生日节日提醒应用
 

1. 个性化生日/纪念日记录与提醒
2. 中国传统节日自动提醒
3. 支持按农历生日提醒
4. 支持按阳历生日提醒
5. 支持按节日提醒


## 基础功能模块
### 1. 提醒管理
- 事件添加（生日/纪念日/自定义）
- 循环规则设置（农历/公历/年度循环）
- 提醒时间设置（提前1天/3天/1周）
- 事件分类标签（家人/朋友/同事）

### 2. 日历同步
- 系统日历接入
- 节日事件自动标注
- 农历/公历双显示

### 3. 节日库
- 内置中国传统节日
- 二十四节气提醒
- 用户自定义节日
- 节日习俗小贴士

### 4. 提醒设置
- 提醒方式（声音/震动/弹窗）
- 提醒时间设置（提前1天/3天/1周）
- 提醒频率设置（每天/每周/每月/每年）
- 提醒音量设置

### 使用华为推送，实现消息推送
 - 开发文档地址：https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/msg-sending-harmony-0000001233498031

### 云函数开发文档地址
 - 云函数的云侧工程开发文档：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V13/agc-harmonyos-clouddev-cloudfunctions-V13
 - 云函数的端侧开发文档：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V13/agc-harmonyos-clouddev-invokecloudfunc-V13
 ### 云数据库开发文档地址
 - 云数据库的云侧工程开发文档：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V13/agc-harmonyos-clouddev-clouddb-V13
 - 云数据库的端侧开发文档：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V13/agc-harmonyos-clouddev-invokeclouddatabase-V13
 ### 云对象开发文档地址
 - 云对象的云侧工程开发文档：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V13/agc-harmonyos-clouddev-cloudobj-V13
 - 云对象的端侧开发文档：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V13/agc-harmonyos-clouddev-invokecloudobj-V13

### 云认证开发文档
 - 华为认证的开发文档地址：https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-harmonyos-arkts12-0000001922376960

   用户认证所需要用到短信和邮件验证码通知，使用华为认证的短信和邮件验证码通知
   
## 提醒功能用到的手机短信和邮件提醒，使用以下信息
   
 ### 短信配置接口信息

开发文档地址：https://market.aliyun.com/apimarket/detail/cmapi00037415

> 重要：所有敏感配置信息（包括 AccessKey、Secret、templateId、smsSignId、appCode 等）已移至 config.local.md 文件中，该文件不会提交到版本控制系统。

请求参数（Query）
字段名称           必填    字段详情
templateId string   Y   模板ID（联系客服开通）
receive string      Y   接收人手机号码
tag string          N   短信中的变量，如：验证码

### 短信调用示例：
```shell
curl -i -k -X POST 'https://gyytz.market.alicloudapi.com/sms/smsSend?mobile=<PHONE_NUMBER>&param=**code**%3A<CODE>%2C**minute**%3A<MINUTES>&smsSignId=<SIGN_ID>&templateId=<TEMPLATE_ID>'  -H 'Authorization:APPCODE <APP_CODE>'
```

### SMS 配置示例
```json
{
    "sms": {
        "name": "生日提醒",
        "codeExpiresIn": 180,
        "smsKey": "<YOUR_SMS_KEY>",
        "smsSecret": "<YOUR_SMS_SECRET>",
        "templateId": "<YOUR_TEMPLATE_ID>"
    }
}
```

### API 响应示例
成功响应：
```json
{
    "msg": "成功", 
    "smsid": "example_sms_id",  //批次号
    "code": "0",
    "balance": "1234"  //账户剩余次数
}
```

失败响应：
```json
{
    "code":"XXXX",
    "msg":"错误提示内容",
    "ILLEGAL_WORDS":["XX","XX"]    // 如有则显示
     // 1、http响应状态码对照表请参考：https://help.aliyun.com/document_detail/43906.html；
     // 2、如果次数用完会返回 403，Quota Exhausted，此时继续购买就可以；
     // 3、如果appCode输入不正确会返回 403，Unauthorized；
}
```
## 要求将开发进度和代码提交到github上，并进行版本管理。
仓库地址：https://github.com/ooabcoo/one.git

