var body = $response.body.replace(/vip_end_date": ".*?"/g,'vip_end_date": "2999-1-1"')
.replace(/vip_type": \d/g,'vip_type": 1')
.replace(/vip": \w+/g,'vip": true')
$done({ body });