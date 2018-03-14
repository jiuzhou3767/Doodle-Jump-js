(function(){
    var Map = window.Map = function(){
        this.ystep = _.random(20,30);
        this.xstep = _.random(0,game.canvas.width -55);
        // this.x = game.canvas.height;
        // this.init();
        this.lock = false;
        this.hardh = 35;
        this.allHeight = 0;
    }
    //新建砖块
    Map.prototype.init = function(){
        // console.log(1111);

        var h = game.canvas.height*2;
        for(;h > 0;){
        this.ystep = _.random(35,40);
        h -= this.ystep;
        this.xstep = _.random(0,game.canvas.width-55);
        new Block(this.xstep,this.ystep+h-game.canvas.height,'G');
        }
    }
    Map.prototype.render = function(arr){

        for(var i = 0;i < arr.length;i++){
                arr[i].render();
                arr[i].update();
        }
        // console.log(arr);

    }
    Map.prototype.move = function(arr,jh){
        // console.log(arr);
        if(this.lock){return}
        this.lock = true;
        this.allHeight += jh;
        for(var i = 0;i < arr.length;i++){
              arr[i].y+=jh;
        }
        this.lock =false;
         // console.log(game.jh)
         // console.log(this.allHeight)

    }
    Map.prototype.create = function(){
        // console.log(game.blockArr[game.blockArr.length-1].y)
        // console.log(game.blockArr);
        this.hardh  += parseInt(this.allHeight/1000);
        if(this.hardh>50){this.hardh = 50}
        if(game.blockArr[game.blockArr.length-1].y > -630){
            var h1 = -630;
            // console.log(game.canvas.height)
            for(;h1 >-900;){
                this.ystep1 = _.random(this.hardh,this.hardh+5);
                h1 -= this.ystep1;
                this.xstep1 = _.random(0,game.canvas.width-55);
                 new Block(this.xstep1,h1,'G');
            }

            // new block(this.ystep,h1,'G');
        }

    }
})()