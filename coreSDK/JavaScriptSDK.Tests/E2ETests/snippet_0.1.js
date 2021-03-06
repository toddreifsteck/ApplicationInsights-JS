window.appInsights = window.appInsights || (function (aiConfig) {

    // Assigning these to local variables allows them to be minified to save space:
    var localDocument = document;
    var localWindow = window;
    var scriptText = "script";
    var scriptElement = localDocument.createElement(scriptText);
    scriptElement.src = aiConfig.url || "../../../bundle/ai.js";
    localDocument.getElementsByTagName(scriptText)[0].parentNode.appendChild(scriptElement);

    // capture initial cookie
    aiConfig.cookie = localDocument.cookie;

    aiConfig.queue = [];
    function createLazyMethod(name) {
        // Define a temporary method that queues-up a the real method call
        aiConfig[name] = function () {
            // Capture the original arguments passed to the method
            var originalArguments = arguments;
            // Queue-up a call to the real method
            aiConfig.queue.push(function () {
                // Invoke the real method with the captured original arguments
                aiConfig[name].apply(aiConfig, originalArguments);
            });
        }
    };

    var method = ["Event", "Exception", "Metric", "PageView", "Trace"];
    while (method.length) {
        createLazyMethod("track" + method.pop());
    }

    return aiConfig;
})({
    iKey: "b7170927-2d1c-44f1-acec-59f4e1751c11", endpointUrl: "https://dc.services.visualstudio.com/v2/track", maxBatchInterval: 1
});

appInsights.trackPageView();
var i = 100; while(i--){appInsights.queue && appInsights.queue.push(function() {window.queueTest('from the queue')})};
