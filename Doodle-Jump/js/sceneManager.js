(function (argument) {
    var SceneManager =window.SceneManager = function (argument) {
         //监听事件
         this.bindEvent();
    }
    //进入哪一个场景
    SceneManager.prototype.enter = function (number) {
           //设置场景为几
           game.scene = number;
           //分三种场景
           switch(game.scene){
                 case 0:

                    game.jumpmen = new Jumpmen();
                    game.block = new Block(160,game.canvas.height - 30,'G');
                    console.log(game.blockArr)
                  break;
                 case 1:
                    game.map.init();
                  break;
                 case 2:


                   break;
           }
    }
    //
    SceneManager.prototype.renderAndUpdate = function (argument) {

         switch(game.scene){
                 case 0:
                    game.ctx.fillStyle = 'black';
                    game.ctx.font = '40px Arial';
                    game.ctx.fillText('start',150,400);
                    game.ctx.fillText('Doodle Jump',70,100);
                    game.block.render();
                    game.block.update();
                    game.jumpmen.render();
                    game.jumpmen.update();
                  break;
                 case 1:


                game.jumpmen.render();
                game.jumpmen.update();
                game.map.render(game.blockArr);
                game.map.create();
                game.ctx.font ='40px Arial';
                game.ctx.fillText('score:'+parseInt(game.map.allHeight),0,40);

                  break;
                 case 2:
                 game.ctx.font ='40px Arial';
                 game.ctx.fillText('Game Over',90,100);
                game.ctx.fillText('score:'+parseInt(game.map.allHeight),100,400);

                   break;
           }

    }
    SceneManager.prototype.bindEvent = function (argument) {
       //点击事件
       var self = this ;
       game.canvas.onclick = function (event) {
            switch(game.scene){
                 case 0:
                 var x = event.clientX;
                 var y = event.clientY;
                 //点击按钮的范围
                 if(x>150&&x<240&&y>370&&y<410){
                    //进入场景1
                   self.enter(1);
                 }
                  break;
                 case 1:

                  break;
                 case 2:
                    game.map.allHeight = 0;
                    self.enter(0);
                  break;
           }
       }
    }

})()