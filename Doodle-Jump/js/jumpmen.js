(function(){
    var Jumpmen = window.Jumpmen = function(){
        //初始化砖块
        this.type = 'L';
        this.w = 55;
        this.h = 40;
        this.x = 175;  //实际像素的两倍
        this.y = game.canvas.height - 200;
        this.dx = 10; //左右移动速率
        this.dy = 14;
        this.lockdy = -14;
        this.ddy = 0.6;
        this.savey = game.canvas.height - 200;
        this.ismove = false;
        this.lock = false;
        //小人形态
        this.maxjump = 100;
        this.arrtype = ['L','R','LS','RS'];

        this.bindEvent();
    }
    Jumpmen.prototype.render = function(){
        switch(this.type){
            case 'L':
                game.ctx.drawImage(game.R['sprite'],0,200,110,80,this.x,this.y,this.w,this.h);
                break;
            case 'R':
                game.ctx.drawImage(game.R['sprite'],0,120,110,80,this.x,this.y,this.w,this.h);
                break;
            case 'LS':
                game.ctx.drawImage(game.R['sprite'],0,0,110,80,this.x,this.y,this.w,this.h);
                break;
            case "RS":
                game.ctx.drawImage(game.R['sprite'],0,280,110,80,this.x,this.y,this.w,this.h);
                break;
        }

    }
    Jumpmen.prototype.update = function(){
        if(this.x < 0){
            this.x = game.canvas.width;
        }else if(this.x > game.canvas.width){
            this.x = 0;
        }
        if(this.y < 400&&this.savey < 400){
            // this.y = 410;
            this.dy+=this.ddy;
            this.savey += this.dy;
            // console.log(this.savey)
            // console.log(game.jh)
            // if(this.lock){return}
            //     console.log(this.lock)
                game.map.move(game.blockArr,(400 - this.savey)/10-this.dy);
                game.jumpmen.ismove = true;

             // console.log(game.jh)
             // console.log(game.blockArr)
            // this.lock = true;
            // console.log(this.lock)
        }else if(this.savey > 300){
            this.y = this.savey;
            this.dy+=this.ddy;
            this.y+=this.dy;
            this.savey = this.y;
            this.lock = false;
            this.ismove = false;
        }
        if(this.y > game.canvas.height){
            game.jumpmen.goDie();
        }
        // //AABB盒子检测：这是粗滤的检测
         this.x1 = this.x;
         this.x2 = this.x+55;
         this.y1 = this.y;
         this.y2 = this.y+40;
     }

     Jumpmen.prototype.goDie = function(){
        game.manager.enter(2);
     }
    Jumpmen.prototype.bindEvent = function(){
        var self = this;
        document.onkeydown = function(event){
            switch(event.keyCode){

                case 37:
                self.type = 'L';
                self.x-=self.dx;
                break;

                case 39:
                self.type = 'R';
                self.x+=self.dx;
                break;
            }
        }
    }
})()