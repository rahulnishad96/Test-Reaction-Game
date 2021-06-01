var start=new Date().getTime();
            
            function getRandomColor()
            {
                var letters='0123456789ABCDEF'.split('');
                var color="#";
                for(var i=0;i<6;i++)
                {
                    color+=letters[Math.floor(Math.random()*16)];
                }
                return color;
            }
            function makeShapeAppear()
            {
                document.getElementById("shape").style.top=Math.random()*50+"%";

                document.getElementById("shape").style.left=Math.random()*70+"%";

                document.getElementById("shape").style.width=Math.random()*5+7+"%";

                document.getElementById("shape").style.height=Math.random()*5+7+"%";

                document.getElementById("shape").style.backgroundColor=getRandomColor();
                var x=Math.random()*100+"%";
                document.getElementById("shape").style.borderTopLeftRadius=x;
                document.getElementById("shape").style.borderTopRightRadius=x;
                document.getElementById("shape").style.borderBottomLeftRadius=x;
                document.getElementById("shape").style.borderBottomRightRadius=x;

                document.getElementById("shape").style.display="block";
                start=new Date().getTime();
            }
            function appearAfter()
            {
                
                setTimeout(makeShapeAppear,20);
            }
            appearAfter();
            var count=0;
            var avg=0;
            var min=1000;
            var shape=document.getElementById("shape").onclick=function()
            {
                
                document.getElementById("shape").style.display="none";
                var end=new Date().getTime();
                var takenTime=(end-start)/1000;
                
                if(min>takenTime)
                    min=takenTime;
                avg=(avg*(count)+takenTime);
                count++;
                avg=avg/count;
                document.getElementById("timeTaken").innerHTML=takenTime+ " sec";
                document.getElementById("minTime").innerHTML=min+ " sec";
                document.getElementById("avgTime").innerHTML=avg.toPrecision(4) + " sec";
                document.getElementById("number").innerHTML=count;
                
                appearAfter();
                
            }
            