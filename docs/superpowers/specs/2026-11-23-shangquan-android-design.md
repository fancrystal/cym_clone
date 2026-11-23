# 商圈安卓 App 设计

以现有安卓 WebView 工程为基础，新 App 名称为“商圈”，采用独立 applicationId，允许与原项目 App 同时安装。首页、WebView 信任域名、邀请链接和 App Links 指向 bdsq.maishikeji.com.cn；保留扫码、分享、上传和返回等原有功能。沿用本机既有发布签名，不提交或上传签名材料。构建并验证签名与包名，发布到新站独立下载目录，验证下载与原站健康状态。自动 App Links 验证和真机使用需单独验证。
