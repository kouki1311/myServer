'use strict'

const item1=document.getElementById("Work1");//作品１
const item2=document.getElementById("Work2");//作品２
const item3=document.getElementById("Work3");//作品３
const item4=document.getElementById("Work4");//作品４
const item5=document.getElementById("Work5");//作品５

const delighted=document.getElementById("Delighted");//得意なこと

const close =document.getElementById('close');//×ボタン
const cover=document.getElementById('cover');//カバー5


 


//作品１

const Work1=()=>{
  item1.addEventListener('mouseover',()=>{

  


    item1.className='workbigsize1';
   
cover.className="menu-open";


})

item1.addEventListener('mouseleave',()=>{

  item1.className="worksmall1";
  cover.className="";

  });

}

//作品２
const Work2=()=>
{
item2.addEventListener('mouseover',()=>{

    item2.className='workbigsize2';
  cover.className='menu-open';
  
});
item2.addEventListener('mouseleave',()=>{

item2.className='worksmall2';
cover.className="";


});
}
const Work3=()=>
{
//作品３
item3.addEventListener('mouseover',()=>{
   
    item3.className='workbigsize3';
  cover.className='menu-open';
 

});
item3.addEventListener('mouseleave',()=>{

item3.className='worksmall3';
cover.className="";

});
}

//作品４
const Work4=()=>
{

item4.addEventListener('mouseover',()=>{

    item4.className='workbigsize4';
   cover.className='menu-open';

});
item4.addEventListener('mouseleave',()=>{

item4.className='worksmall4';
cover.className="";

});
}

//作品5
const Work5=()=>{

item5.addEventListener('mouseover',()=>{

    item5.className='workbigsize5';
  cover.className='menu-open';

});
item5.addEventListener('mouseleave',()=>{
  cover.className="";
item5.className='worksmall5';

});

}
//得意なこと
const Delighted=()=>{
//得意なこと
delighted.addEventListener('mouseover',()=>{

  delighted.className='delightedbigsize6';
cover.className='menu-open';

});
delighted.addEventListener('mouseleave',()=>{

delighted.className='delightedsmall6';
cover.className="";

});
}






Work1();
Work2();
Work3();
Work4();
Work5();
Delighted();
