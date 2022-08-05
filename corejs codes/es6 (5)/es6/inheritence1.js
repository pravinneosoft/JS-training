class A //(parent)
{
    abc(){
      return "sumit joshi";
    }
}
class B extends A //(child)
{
   bca(){
     let pdata=super.abc();
     let cdata="amit joshi";
     console.log(`${pdata} and ${cdata} are best friend`)
   }
}
let obj=new B;
obj.bca();