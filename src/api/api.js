import request from '@/utils/request';
import {getCookie } from "@/util/util.js";
const url = 'https://dev-ao5dx3e.lonltech.com:646/api/';
const headers={
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: "Bearer " + getCookie("AccessToken")
};
export default {
    getList(){
        const req = request({
            url:url+'demand/searchcondition',
            method:'get',
            dataType: "json",
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
}