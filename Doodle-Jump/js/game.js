(function(){
    var Game = window.Game = function(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');


        this.h = document.documentElement.clientHeight;
        this.w = document.documentElement.clientWidth;
        this.canvas.height = this.h>750?750:this.h;
        this.canvas.width = this.w>420?420:this.w;
        this.loadFile();
        this.scene = 0;
        this.jh = 0;
        // this.blockArr = [];
    }
    Game.prototype.start = function(){
        // this.block = new Block();

        this.manager = new SceneManager();
        this.blockArr = [];
        this.manager.enter(this.scene);
        // this.block = new Block(215,game.canvas.height - 30,'G');
        // this.jumpmen = new Jumpmen();
        this.map = new Map();
        var frame = 0;
        this.blockArr = [];
        this.block = new Block(170,game.canvas.height - 30,'G');
        var self = this;
        this.timer = setInterval(function(){
            // console.log(game.blockArr)
            frame++;
            self.clear();
            self.manager.renderAndUpdate();


        },20);
    }
    Game.prototype.clear = function(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
    Game.prototype.loadFile = function(){
        this.R = {
            'bg':'images/bg.png',
            'line':'images/line.png',
            'sprite':'images/sprite.png'
        }
        var count = 0;
        var picAmount = Object.keys(this.R).length;
        for(k in this.R){
            var src = this.R[k];
            this.R[k] = new Image();
            this.R[k].src = src;
            var self = this;
            this.R[k].onload = function(){
                count++;
                if(count==picAmount){
                    self.start();
                }
            }
        }
    }
})();