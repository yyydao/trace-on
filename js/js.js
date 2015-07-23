/**
 * Created by yyy on 2015/7/14.
 */

$(function () {
    var stopGroup1 = {color:"#feffff",stop:0},
        stopGroup2 = {color:"#ddf1f9",stop:35},
        stopGroup3 = {color:"#a0d8ef",stop:100};

    var $sourceInput = $('#source-img');
    var $target = $("#result");
    var $origin=$('#source');

    var doGS;
    var slider = $("#tolerance-control").slider({
        max: 255 + 255 + 255,
        min: 0,
        value: $('#tolerance').val(),
        slide: function (event, ui) {
            $('#tolerance').val(ui.value);
            clearTimeout(doGS);
            doGS = setTimeout(function () {
                greenScreen($origin.attr('src'), $target);
            }, 100);
        }
    });

    var r, g,b;

    $('#colorstop').val('radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
    var stopOneSizeSlider = $('#colorstop-one').slider({
        max: 100,
        min: 0,
        value: stopGroup1.stop,
        slide: function (event, ui) {
            stopGroup1.stop = ui.value;
            $('#colorstop').val('radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
            $('#target-bg-demo').attr('style','background:radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
            clearTimeout(doGS);
            doGS = setTimeout(function () {
                greenScreen($origin.attr('src'), $target);
            }, 60);
        }
    });
    var stopTwoSizeSlider = $('#colorstop-two').slider({
        max: 100,
        min: 0,
        value: stopGroup2.stop,
        slide: function (event, ui) {
            stopGroup2.stop = ui.value;
            $('#colorstop').val('radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
            $('#target-bg-demo').attr('style','background:radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
            clearTimeout(doGS);
            doGS = setTimeout(function () {
                greenScreen($origin.attr('src'), $target);
            }, 60);
        }
    });
    var stopThreeSizeSlider = $('#colorstop-three').slider({
        max: 100,
        min: 0,
        value: stopGroup3.stop,
        slide: function (event, ui) {
            stopGroup3.stop = ui.value;
            $('#colorstop').val('radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
            $('#target-bg-demo').attr('style','background:radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
            clearTimeout(doGS);
            doGS = setTimeout(function () {
                greenScreen($origin.attr('src'), $target);
            }, 60);
        }
    });

    $('#one-color').ColorPicker({
        color: stopGroup1.color,
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('#one-color div').css('backgroundColor', '#' + hex);
            stopGroup1.color= '#'+hex+'';
            $('#colorstop').val('radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
            $('#target-bg-demo').attr('style','background:radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
        }
    });
    $('#two-color').ColorPicker({
        color: stopGroup2.color,
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('#two-color div').css('backgroundColor', '#' + hex);
            stopGroup2.color= '#'+hex+'';
            $('#colorstop').val('radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
            $('#target-bg-demo').attr('style','background:radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
        }
    });
    $('#three-color').ColorPicker({
        color: stopGroup3.color,
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('#three-color div').css('backgroundColor', '#' + hex);
            stopGroup3.color= '#'+hex+'';
            $('#colorstop').val('radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
            $('#target-bg-demo').attr('style','background:radial-gradient(at 50% 50% , ' + stopGroup1.color + ' '+ stopGroup1.stop + '% , ' + stopGroup2.color + ' '+ stopGroup2.stop + '% , ' + stopGroup3.color + ' '+ stopGroup3.stop + '%' + ')');
        }
    });



    $('#tolerance').keyup(function () {
        slider.slider("value", $(this).val());
        clearTimeout(doGS);
        doGS = setTimeout(function () {
            greenScreen($origin.attr('src'), $target);
        }, 100);
    });


    $('#getImage').on('click',function(){
        if($sourceInput.val().length===0){
            alert('请输入图片地址');
        }else{
            $origin.attr('src',$sourceInput.val());

        }
    });

    $origin.onload = function() {
        greenScreen($origin.attr('src'),  $target);
    }
});



function greenScreen(src, $target) {
    var img = new Image();
    img.crossOrigin = '';
    img.src = src;
    var result;


    var CanvasImage = function (image) {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        this.width = this.canvas.width = image.width;
        this.height = this.canvas.height = image.height;

        this.context.drawImage(image, 0, 0, this.width, this.height);
    };

    CanvasImage.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height);
    };

    CanvasImage.prototype.update = function (imageData) {
        this.context.putImageData(imageData, 0, 0);
    };

    CanvasImage.prototype.getPixelCount = function () {
        return this.width * this.height;
    };

    CanvasImage.prototype.getImageData = function () {
        return this.context.getImageData(0, 0, this.width, this.height);
    };

    CanvasImage.prototype.removeCanvas = function () {
        this.canvas.parentNode.removeChild(this.canvas);
    };

    CanvasImage.prototype.setDateUrl = function () {
        return this.canvas.toDataURL();
    }

    img.onload = function () {
        var image = new CanvasImage(img);

        var imageData = image.getImageData();

        var data = imageData.data;

        // iterate over all pixels
        for (var i = 0, n = data.length; i < n; i += 4) {
            var diff = Math.abs(data[i] - data[0]) + Math.abs(data[i + 1] - data[1]) + Math.abs(data[i + 2] - data[2]);
            data[i + 3] = (diff * diff) /$('#tolerance').val();
        }
        image.update(imageData);
        var src = image.setDateUrl();

        image.clear();
        image.removeCanvas();

        result = src;

        $target.attr('src', result);
    };
}
