/**
 * Created by shuyi.wu on 2015/2/4.
 */
(function(){
    function stepFn(names, callback){
        var fn, events, datas, eventLen;
        eventLen = names.length;
        datas = [];
        events = {};
        for(var i = 0, len = names.length; i < len; i++){
            events[names[i]] = i;
            datas.push(names[i]);
        }
        fn = function(name, data){
            var num, event;
            num = events[name];
            if(names[num] !== undefined){
                events[name] = data;
                eventLen = eventLen - 1;
                delete  names[num];
            }else{
                return false;
            }
            if(eventLen === 0){
                for(var i = 0, len = datas.length; i < len; i++){
                    event = datas[i];
                    datas[i] = events[event];
                }
                callback.apply(this, datas);
                fn = datas = events = eventLen = event = null;
            }
        };
        return fn;
    }
    window.stepFn = stepFn;
})(window);
