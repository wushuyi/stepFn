stepFn
====
stepFn is a async function callback.

## Getting Started

### a example
```
(function($){
    var ajaxStep;

    function onAjaxStep(temp, json){
            console.log(temp);
            console.log(json);
        }

    ajaxStep = stepFn(['temp', 'data'], onAjaxStep);

    $.get('./assets/temp/test.dust', function(data){
            ajaxStep('temp', data);
        });

    $.get('./assets/temp/data.json', function(data){
            ajaxStep('data', data);
        });
})(window.jQuery);
```