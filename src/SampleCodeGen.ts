const cmd=require('node-cmd');
import{Zipper} from './Zipping';
import {Redochtml} from './RedochtmlGen';



export class DocsCreation{
zipper=new Zipper();
redochtmlGen=new Redochtml();

constructor(){

}

async HtmlDocCreate(filepathonserver:string){
    cmd.get(`openapi-snippet ${filepathonserver} -t java -t c -o file/schema.yaml`,(err:any,data:any,stderr:any)=>{
        if(err){
            console.log(err)
        }else{

        this.redochtmlGen.redocGen()

            

        }
    })

}

async ReactDocCreate(filepathonserver:string){
    await cmd.get(`openapi-snippet ${filepathonserver} -t java -t c -o my-app/src/openapiFinal.yaml`,
    async (err:any, data:any, stderr:any)=>{
        console.log(stderr+" this run"+data)
        if(!err){
        this.zipper.zipping()
        }else{
            return data;
        }
    })



}


}