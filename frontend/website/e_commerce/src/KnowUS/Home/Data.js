import Review from "./Review";
const data=[require("./images/beauty-4993469_1280-removebg-preview 1.png"),require("./images/ps4-product-thumbnail-01-en-14sep21.webp")]
const data2=[<Review brand="Lux"/>,<Review brand="Dove"/>]
const next=(v,set_v,dat)=>{
    if(v+1>=dat.length)set_v(0);
    else set_v(v+1);
}
const prev=(v,set_v,dat)=>{
    if(v-1<0)set_v(dat.length-1);
    else set_v(v-1);
}
export {data,data2,next,prev}