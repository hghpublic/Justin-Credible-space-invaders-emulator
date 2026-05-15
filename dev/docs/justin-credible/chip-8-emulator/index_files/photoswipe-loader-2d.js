
(function ($, PhotoSwipe, PhotoSwipeUI_Default) {

    var rootElement = null;
    var gallery = null;
    var items = null;
    var hasVideos = false;

    var defaultOptions = {
    };

    var attachPhotoGalleryBehavior = function($target) {
        $target.each(function (index) {

            var anchorElement = $(this);
            var imageElement = anchorElement.find("img");
    
            var eventData = {
                index: index
            };
    
            var targetUrl = anchorElement.attr("href");
    
            anchorElement.click(eventData, thumbnail_click);
    
            if (targetUrl.indexOf(".mp4") > -1) {
    
                items.push({
                    html: '<video controls style="width: 100%; height: 100%;"><source src="' + targetUrl + '" type="video/mp4"></video>',
                    el: imageElement[0]
                });
    
                hasVideos = true;
            }
            else {
    
                items.push({
                    src: anchorElement.attr("href"),
                    msrc: imageElement.attr("src"),
                    w: anchorElement.data("width") || 1024,
                    h: anchorElement.data("height") || 768,
                    title: imageElement.attr("alt"),
                    el: imageElement[0]
                });
            }
        });
    };

    var initialize = function () {

        window.__attachPhotoGalleryBehavior = attachPhotoGalleryBehavior;

        rootElement = document.getElementById("pswp");

        items = [];

        attachPhotoGalleryBehavior($(".photo-gallery a"));
    };

    var pauseVideo = function() {

        var videoElements = $("video");

        if (videoElements.length > 0) {
            videoElements[0].pause();
        }
    };

    var thumbnail_click = function (e) {

        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var target = e.target || e.srcElement;

        var options = $.extend({}, defaultOptions);
        options.index = e.data.index;
        options.getThumbBoundsFn = getThumbBoundsFn;

        gallery = new PhotoSwipe(rootElement, PhotoSwipeUI_Default, items, options);

        if (hasVideos) {
            gallery.listen('afterChange', pauseVideo);
        }

        gallery.init();
    };

    var getThumbBoundsFn = function (index) {

        var item = items[index];
        var thumbnail = item.el;

        // Remainder of function taken from documentation: http://photoswipe.com/documentation/options.html

        // get window scroll Y
        var pageYScroll = window.pageYOffset || document.documentElement.scrollTop; 
        // optionally get horizontal scroll

        // get position of element relative to viewport
        var rect = thumbnail.getBoundingClientRect(); 

        // w = width
        return { x:rect.left, y:rect.top + pageYScroll, w:rect.width };
    };

    $(initialize);

})(jQuery, PhotoSwipe, PhotoSwipeUI_Default);
