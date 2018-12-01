 var move = (function(){
     var $moveBox = document.querySelector('.moveBox');
     var $move = $moveBox.querySelector('.move');
     var maxL = $moveBox.clientWidth - $move.offsetWidth;
     return {
         init(){
            this.event();
         },
         event(){
            var _this = this;
            var _this = this;
            $move.onmousedown = function(ev) {
                ev = ev || window.event;
                var _x = ev.offsetX;
                $move.onmousemove = function(ev) {
                    ev = ev || window.event;
                    var x = ev.pageX - _x;
                    _this.moveSlider(x);
                }
            }
         },
         moveSlider(x){
            if(x < 0) {
                x = 0;
            } else if(x > maxL) {
                x = maxL;
                setTimeout(function(){
                    $move.remove();
                    // 方便后面做判断
                    $move = null; 
                    $moveBox.style.background = 'green';
                }, 100)
            }
            $move.style.left = x + 'px';
         }
     }
 }())

 move.init()