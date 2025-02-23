# 配置模板

## 阿里云短信服务配置
```json
{
    "sms": {
        "name": "生日提醒",
        "codeExpiresIn": 180,
        "smsKey": "<YOUR_SMS_KEY>",
        "smsSecret": "<YOUR_SMS_SECRET>",
        "templateId": "<YOUR_TEMPLATE_ID>",
        "smsSignId": "<YOUR_SIGN_ID>",
        "appCode": "<YOUR_APP_CODE>"
    }
}
```

## API 配置示例
```shell
curl -i -k -X POST 'https://gyytz.market.alicloudapi.com/sms/smsSend?mobile=<MOBILE>&param=**code**%3A<CODE>%2C**minute**%3A<MINUTE>&smsSignId=<SIGN_ID>&templateId=<TEMPLATE_ID>'  -H 'Authorization:APPCODE <APP_CODE>'
``` 