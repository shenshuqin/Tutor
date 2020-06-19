import request from '@/utils/request';
const url = 'https://dev-ao5dx3e.lonltech.com:646/api/';
// headers={

// };
export default {
    getList(){
        const req = request({
            url:url+'demand/searchcondition',
            method:'get',
            dataType: "json",
            // contentType: 'application/json',
            // headers:headers,
        });
        return req;
    },
    getJob(data){
        const req = request({
            url:url+'demand/list-tutor',
            method:'post',
            dataType: "json",
            data:data,
            // headers:headers,
        });
        return req;
    },
    jobDetail(id){
        const req = request({
            url:url+'demand/detail?id='+id,
            method:'get',
            dataType: "json",
            // headers:headers,
        });
        return req;
    },
    uploadAvatar(param){
        const req = request({
            url:url+'files/avatar',
            method:'post',
            dataType: "json",
            data:param,
            // headers:headers,
        });
        return req;
    },
    getAvatar(userId){
        const req = request({
            url:url+'files/avatar?userUuid='+userId,
            method:'get',
            dataType: "json",
        });
        return req;
    },
    //用户发起立即购买请求以获取订单
    payOrder(data){
        const req = request({
            url:url+'payment/order',
            method:'post',
            data:data,
            dataType: "json",
            contentType: 'application/json',
        });
        return req;
    },
    pay(data){
        const req = request({
            url:url+'payment/pay',
            method:'post',
            data:data,
            dataType: "json",
            contentType: 'application/json',
        });
        return req;
    },
    verifyApply(data){
        const req = request({
            url:url+`payment/verify?charset=${data.charset}&&out_trade_no=${data.out_trade_no}&&method=${data.method}&&total_amount=${data.total_amount}&&sign=${data.sign}&&trade_no=${data.trade_no}&&auth_app_id=${data.auth_app_id}&&version=${data.version}&&app_id=${data.app_id}&&sign_type=${data.sign_type}&&seller_id=${data.seller_id}&&timestamp=${data.timestamp}`,
            method:'get',
            dataType: "json",
            contentType: 'application/json',
        });
        return req;
    },
    checkoutOrder(data){
        const req = request({
            url:url+'payment/check-order',
            method:'post',
            data:data,
            dataType: "json",
            contentType: 'application/json',
        });
        return req;
    },
    //business
    businessList(userRole,page,amount){
        const req = request({
            url:url+`business/list?userRole=${userRole}&&page=${page}&&amount=${amount}`,
            method:'get',
            dataType: "json",
        });
        return req;
    }
}