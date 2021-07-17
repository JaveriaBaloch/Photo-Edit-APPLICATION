const canvas=document.querySelector("#canvas")
const ctx=canvas.getContext('2d')
can=[document.querySelector("#E1"),
document.querySelector("#E2"),
document.querySelector("#E3"),
document.querySelector("#E4"),
document.querySelector("#E5"),
document.querySelector("#E6"),
document.querySelector("#E7"),
document.querySelector("#E8"),
document.querySelector("#E9")
];
c=[];
for(i=0;i<9;i++){
c[i]=can[i].getContext('2d')
}
value1=[]
cwidth=[]
cheigth=[]
const img= new Image();
const reader= new FileReader()
// reader.readAsDataURL(e.target.files[0])
canvas.height=500 ;
canvas.width=800;

ctx.drawImage(img,0,0);
for(i=0;i<9;i++){
    can[i].height=img.height;
    can[i].width=img.width
    cwidth[i]=can[i].width
    cheigth[i]=can[i].height
    c[i].drawImage(img,0,0)
}

function uploadimage(e) {
    document.querySelector("section").classList.remove('y')
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
    img.src=reader.result;
    img.onload=()=>{
        (function (){
    canvas.height=img.height ;
    canvas.width=img.width;
    ctx.drawImage(img,0,0);
   for(i=0;i<9;i++){
       can[i].height=img.height;
       can[i].width=img.width
       cwidth[i]=can[i].width
       cheigth[i]=can[i].height
       c[i].drawImage(img,0,0)
   }
  ///grayescale
  const t1=c[0].getImageData(0,0,can[0].width,can[0].height)
  let data1=t1.data;

  for( i=0;i<data1.length;i+=4){
      const grey=data1[i]*0.21+data1[i+1]*0.71+data1[i+2]*.07
      data1[i]=grey
     data1[i+1]=grey
     data1[i+2]=grey
  }
 
  c[0].putImageData(t1,0,0)
  ///inverted
  const t2=c[1].getImageData(0,0,can[1].width,can[1].height)
  let data2=t2.data;
  for( i=0;i<data2.length;i+=4){
     data2[i]=255-data2[i]
     data2[i+1]=255- data2[i+1]
     data2[i+2]=255- data2[i+2]
  }
  c[1].putImageData(t2,0,0)
  //E1
  const t3=c[2].getImageData(0,0,can[2].width,can[2].height)
  let data3=t3.data;
    for( i=0;i<data3.length;i+=4){
        data3[i]=55-data3[i]
       data3[i+1]=data3[i+1]
       data3[i+2]=data3[i+2]
    }
    c[2].putImageData(t3,0,0)
    ///E2
    const t4=c[3].getImageData(0,0,can[3].width,can[3].height)
    let data4=t4.data;
      for( i=0;i<data4.length;i+=4){
           data4[i]=155+data4[i]
       data4[i+1]=data4[i+1]+135
       data4[i+2]=data4[i+2]-29
      }
      c[3].putImageData(t4,0,0)
      
          ///E3
 const t5=c[4].getImageData(0,0,can[4].width,can[4].height)
 let data5=t5.data;
   for( i=0;i<data5.length;i+=4){
    data5[i]=55-data5[i]
    data5[i+1]=20-data5[i+1]
    data5[i+2]=data5[i+2]
   }
   c[4].putImageData(t5,0,0)
      ///E4
 const t6=c[5].getImageData(0,0,can[5].width,can[5].height)
 let data6=t6.data;
   for( i=0;i<data6.length;i+=4){
    data6[i]=data6[i+1]*2
       data6[i+1]= data6[i+2]*0.78
       data6[i+2]=data6[i]
   }
   c[5].putImageData(t6,0,0)
        ///E5
 const t7=c[6].getImageData(0,0,can[6].width,can[6].height)
 let data7=t7.data;
   for( i=0;i<data7.length;i+=4){
    data7[i]=data7[i+1]*7
    data7[i+1]= data7[i+2]*0.9
    data7[i+2]=data7[i+1]
   }
   c[6].putImageData(t7,0,0)
    ///E6
    const t8=c[7].getImageData(0,0,can[7].width,can[7].height)
 let data8=t8.data;
   for( i=0;i<data8.length;i+=4){
    data8[i]=data8[i+2]-99
    data8[i+1]= data8[i]
    data8[i+2]=data8[i+1]
   }
   c[7].putImageData(t8,0,0)
    ///E7
    const t9=c[8].getImageData(0,0,can[8].width,can[8].height)
 let data9=t9.data;
   for( i=0;i<data9.length;i+=4){
    data9[i]=data9[i+2]
       data9[i+1]= data9[i]-125
       data9[i+2]=data9[i+2]+30
   }
   c[8].putImageData(t9,0,0)
})()
}
}
}

function greyscale() {
    const imgdata=ctx.getImageData(0,0,canvas.width,canvas.height)
    const a=c[0].getImageData(0,0,can[0].width,can[0].height)
    let data=imgdata.data
   
    for( i=0;i<data.length;i+=4){
        const grey=data[i]*0.21+data[i+1]*0.71+data[i+2]*.07
        data[i]=grey
       data[i+1]=grey
       data[i+2]=grey
    }
    ctx.putImageData(imgdata,0,0)
}
function inverted() {
    const imgdata=ctx.getImageData(0,0,canvas.width,canvas.height)
    const a=c[0].getImageData(0,0,can[0].width,can[0].height)
    let data=imgdata.data
   
    for( i=0;i<data.length;i+=4){
        data[i]=255-data[i]
       data[i+1]=255- data[i+1]
       data[i+2]=255- data[i+2]
    }
    ctx.putImageData(imgdata,0,0)
}
function E1() {
    const imgdata=ctx.getImageData(0,0,canvas.width,canvas.height)
    let data=imgdata.data
   
    for( i=0;i<data.length;i+=4){
        data[i]=55-data[i]
       data[i+1]=data[i+1]
       data[i+2]=data[i+2]
    }
    ctx.putImageData(imgdata,0,0)
}
function E2() {
    const imgdata=ctx.getImageData(0,0,canvas.width,canvas.height)
    const a=c[0].getImageData(0,0,can[0].width,can[0].height)
    let data=imgdata.data
   
    for( i=0;i<data.length;i+=4){
        data[i]=155+data[i]
        data[i+1]=data[i+1]+135
        data[i+2]=data[i+2]-29
    }
    ctx.putImageData(imgdata,0,0)
}
function E3() {
    const imgdata=ctx.getImageData(0,0,canvas.width,canvas.height)
    const a=c[0].getImageData(0,0,can[0].width,can[0].height)
    let data=imgdata.data
   
    for( i=0;i<data.length;i+=4){
        data[i]=55-data[i]
       data[i+1]=20-data[i+1]
       data[i+2]=data[i+2]
    }
    ctx.putImageData(imgdata,0,0)
}
function E4() {
    const imgdata=ctx.getImageData(0,0,canvas.width,canvas.height)
    const a=c[0].getImageData(0,0,can[0].width,can[0].height)
    let data=imgdata.data
   
    for( i=0;i<data.length;i+=4){
        data[i]=data[i+1]*2
       data[i+1]= data[i+2]*0.78
       data[i+2]=data[i]
    }
    ctx.putImageData(imgdata,0,0)
}
function E5() {
    const imgdata=ctx.getImageData(0,0,canvas.width,canvas.height)
    const a=c[0].getImageData(0,0,can[0].width,can[0].height)
    let data=imgdata.data
   
    for( i=0;i<data.length;i+=4){
         data[i]=155+data[i]
       data[i+1]=data[i+1]-135
       data[i+2]=data[i+2]-29
    }
    ctx.putImageData(imgdata,0,0)
}
function E6() {
    const imgdata=ctx.getImageData(0,0,canvas.width,canvas.height)
    let data=imgdata.data
   
    for( i=0;i<data.length;i+=4){
        data[i]=data[i+2]-99
       data[i+1]= data[i]-35
       data[i+2]=data[i+1]
    }
    ctx.putImageData(imgdata,0,0)
}
function E7() {
    const imgdata=ctx.getImageData(0,0,canvas.width,canvas.height)
    let data=imgdata.data
    for( i=0;i<data.length;i+=4){
        data[i]=data[i+2]
       data[i+1]= data[i]-125
       data[i+2]=data[i+2]+30
    }
    ctx.putImageData(imgdata,0,0)
}
function clearchange(){
    img.src=reader.result;
}
g=document.querySelector('body')
function downloads() {
const image=canvas.toDataURL()
const link= document.createElement('a')
link.href=image
link.download="image.jpg"
link.click()
}
document.querySelectorAll("aside>div")[0].addEventListener('click',greyscale)
document.querySelectorAll("aside>div")[1].addEventListener('click',inverted)
document.querySelectorAll("aside>div")[2].addEventListener('click',E1)
document.querySelectorAll("aside>div")[3].addEventListener('click',E2)
document.querySelectorAll("aside>div")[4].addEventListener('click',E3)
document.querySelectorAll("aside>div")[5].addEventListener('click',E4)
document.querySelectorAll("aside>div")[6].addEventListener('click',E5)
document.querySelectorAll("aside>div")[7].addEventListener('click',E6)
document.querySelectorAll("aside>div")[8].addEventListener('click',E7)
document.querySelectorAll('button')[0].addEventListener('click',clearchange)
document.querySelectorAll('button')[1].addEventListener('click',downloads)
const imageloader=document.querySelector("#Uploader")
imageloader.addEventListener('change', uploadimage)
document.querySelectorAll("aside>div")[0].addEventListener('click',greyscale)