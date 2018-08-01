import $ from 'jquery'/////这个是使用了jquery，但是一般建议不在使用jquery
// export const isArray = function isArray(object){
//     return object && typeof object==='object' &&
//         Array === object.constructor;
// }
//判断设备
export const isPC = function IsPC()
{
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod" ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}

// export const getQueryString = function getQueryString(search,name) {
//     var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//     var r = search.substr(1).match(reg);
//     if (r != null) {
//         return unescape(r[2]);
//     }
//     return null;
// }
export const jquery =()=>{
    var inputValue=$('input');
    console.log(inputValue)
}
export const map =() =>{
    var mapData = {
        "US": 298,
        "SA": 200,
        "DE": 220,
        "FR": 540,
        "CN": 120,
        "AU": 760,
        "BR": 550,
        "IN": 200,
        "GB": 120,
    };
    //没有插件(这是一个可以放大、缩小地图的插件---"jquery-jvectormap")
    $('#world-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: "transparent",
        regionStyle: {
            initial: {
                fill: '#e4e4e4',
                "fill-opacity": 0.9,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 0
            }
        },

        series: {
            regions: [{
                values: mapData,
                scale: ["#1ab394", "#22d6b1"],
                normalizeFunction: 'polynomial'
            }]
        },
    });
}