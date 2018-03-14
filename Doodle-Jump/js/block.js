(function(){
    var Block = window.Block = function(x,y,type){
        //初始化砖块
        this.type = type;
        this.w = 55;
        this.h = 15;
        this.x = x;
        this.y = y;
        //砖块种类
        this.arrtype = ['B','R','G','W'];
        game.blockArr.push(this);
    }
    // Block.prototype.moren = function(){
    //     for(var i = 0;i < 10;i++){
    //         var b = new Block();
    //         b.x = i*55;
    //         b.y = game.canvas.height - 30;
    //         b.render();
    //         console.log(11)
    //     }
    // }
    Block.prototype.render = function(){
        switch(this.type){
            case 'B':
                game.ctx.drawImage(game.R['sprite'],0,60,110,30,this.x,this.y,this.w,this.h);
                break;
            case 'R':
                game.ctx.drawImage(game.R['sprite'],0,30,110,30,this.x,this.y,this.w,this.h);
                break;
            case 'G':
                game.ctx.save();
                 // game.ctx.scale(0.5,0.5);
                game.ctx.drawImage(game.R['sprite'],0,0,110,30,this.x,this.y,this.w,this.h);
                game.ctx.restore();
                break;
            case "W":
                game.ctx.drawImage(game.R['sprite'],0,90,110,30,this.x,this.y,this.w,this.h);
                break;
        }

    }
    Block.prototype.update = function(){
        this.x1 = this.x-30;
        this.x2 = this.x+35;
        this.y1 = this.y-15;
        this.y2 = this.y+10;
        if(game.jumpmen.x1>=this.x1&&game.jumpmen.x1<=this.x2&&game.jumpmen.y1<=this.y1&&game.jumpmen.y2>=this.y2&&game.jumpmen.dy>=0&&game.jumpmen.ismove==false||game.jumpmen.x2>=this.x1&&game.jumpmen.x2<=this.x1&&game.jumpmen.y2<=this.y1&&game.jumpmen.y2>=this.y2&&game.jumpmen.dy>=0&&game.jumpmen.ismove==false){

            game.jumpmen.dy = game.jumpmen.lockdy;
            this.jumph = game.canvas.height - this.y;
            game.jh = game.canvas.height - this.y
            // console.log(this.y);
            // game.map.move(game.blockArr);
            // console.log(this.jumph)
        }
    }
})()