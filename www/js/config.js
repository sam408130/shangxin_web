




var ERROR = {
	WRONG_ACCESSTOKEN: 'wrong accessToken',
	HEHE_YOU_CANNOT: '呵呵，不能帮自己点赞。',
	IS_NOT_EXISTS: 'is not exists',
	TIME_OUT: 15000
};


/* 
	Api
*/
var BaseUrl = "http://123.56.224.108:8082/";
//var BaseUrl = "http://api.51duangong.com/";
//var BaseUrl = "http://192.168.1.38:8082/";
/* 
    首页
*/

//获取首页场次titles
var API_ActivityTitles= BaseUrl + "activity/indexActivitynewTitle";
//首页场次活动详情
var API_ActivityList = BaseUrl + "activity/indexActivityList";
//更多预告
var API_ActivityMore = BaseUrl + "activity/activityListFeature";
 